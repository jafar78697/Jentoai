import React, { useState, useRef } from 'react';
import { Phone, Square, Mic, Users, ClipboardList } from 'lucide-react';

const DEEPGRAM_API_KEY = "e642ffca71c76e916251bcb2eff3b68ba7068f66";

export default function AIReceptionistDemo() {
  const [leads, setLeads] = useState<any[]>([]);
  const [isCalling, setIsCalling] = useState(false);
  const [logs, setLogs] = useState<string[]>([]);
  
  const wsRef = useRef<WebSocket | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const microphoneRef = useRef<MediaStream | null>(null);
  const processorRef = useRef<ScriptProcessorNode | null>(null);
  
  const connectDeepgram = async () => {
    try {
      setLogs(["Requesting microphone access..."]);
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      microphoneRef.current = stream;
      
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 16000 });
      audioContextRef.current = audioContext;
      
      const source = audioContext.createMediaStreamSource(stream);
      const processor = audioContext.createScriptProcessor(4096, 1, 1);
      processorRef.current = processor;
      
      setLogs(l => [...l, "Connecting to Deepgram Voice Agent API..."]);
      wsRef.current = new WebSocket("wss://agent.deepgram.com/v1/agent/converse", ["token", DEEPGRAM_API_KEY]);
      
      wsRef.current.onopen = () => {
        setLogs(l => [...l, "Connected! Waiting for Server Welcome..."]);
      };
      
      wsRef.current.onmessage = (event) => {
        if (typeof event.data === "string") {
          try {
            const data = JSON.parse(event.data);
            if (data.type === "Welcome") {
              setLogs(l => [...l, "Welcome received. Sending configuration..."]);
              wsRef.current?.send(JSON.stringify({
                type: "Settings",
                audio: {
                  input: { encoding: "linear16", sample_rate: 16000 },
                  output: { encoding: "linear16", sample_rate: 16000, container: "none" }
                },
                agent: {
                  listen: { provider: { type: "deepgram", model: "nova-3" } },
                  think: {
                    provider: { type: "open_ai", model: "gpt-4o-mini" },
                    prompt: "You are an AI Receptionist for Jento AI Plumbing. Be highly professional, concise, and polite. Follow this exact step-by-step conversation flow. Do NOT ask multiple questions at once.\nStep 1: Your first message must be exactly: 'Hello! Welcome to Jento AI Plumbing. May I have your name, please?' Wait for the user to state their name.\nStep 2: Once they provide their name, address them by their name and say, 'Thank you, [Name]. How can I help you today?' Wait for them to state their plumbing issue.\nStep 3: Once they state their issue, acknowledge it and say, 'I can certainly help you with that. Could I also get a phone number to reach you at?'\nStep 4: Once you have their name, issue, and phone number, immediately call the `record_lead` function. Then say, 'Thank you! I have recorded your details and our team will contact you shortly.'\nDo not deviate from this flow.",
                    functions: [
                      {
                        name: "record_lead",
                        description: "Save the lead's name, phone number, and plumbing issue.",
                        parameters: {
                          type: "object",
                          properties: {
                            name: { type: "string" },
                            number: { type: "string" },
                            issue: { type: "string" }
                          },
                          required: ["name", "number", "issue"]
                        }
                      }
                    ]
                  },
                  speak: { provider: { type: "deepgram", model: "aura-asteria-en" } }
                }
              }));
            } else if (data.type === "SettingsApplied") {
              setLogs(l => [...l, "Settings applied. Agent is ready! Speak now."]);
            } else if (data.type === "ConversationText") {
              if (data.role === "assistant" && data.content) {
                setLogs(l => [...l, `Agent: ${data.content}`]);
              } else if (data.role === "user" && data.content) {
                setLogs(l => [...l, `You: ${data.content}`]);
              }
            } else if (data.type === "FunctionCallRequest") {
              const fnName = data.function_name || data.name;
              const fnId = data.function_call_id || data.id;
              
              if (fnName === "record_lead") {
                const argsRaw = data.function_arguments || data.parameters || data.args || "{}";
                let args: any = {};
                if (typeof argsRaw === "string") {
                  try { args = JSON.parse(argsRaw); } catch(e) {}
                } else {
                  args = argsRaw;
                }
                
                setLeads(prev => [...prev, {
                  name: args.name || "Unknown",
                  number: args.number || "Unknown",
                  issue: args.issue || "Unknown"
                }]);
                
                setLogs(l => [...l, `[System] Saved Lead: ${args.name}`]);
                
                wsRef.current?.send(JSON.stringify({
                  type: "FunctionCallResponse",
                  function_call_id: fnId,
                  id: fnId,
                  function_name: fnName,
                  name: fnName,
                  output: "Lead recorded successfully.",
                  content: "Lead recorded successfully."
                }));
              }
            } else if (data.type === "Error") {
              setLogs(l => [...l, `Error: ${data.message}`]);
            }
          } catch(e) {}
        } else {
          playAudioData(event.data);
        }
      };
      
      processor.onaudioprocess = (e) => {
        if (wsRef.current?.readyState === WebSocket.OPEN) {
          const inputData = e.inputBuffer.getChannelData(0);
          const pcm16 = new Int16Array(inputData.length);
          for (let i = 0; i < inputData.length; i++) {
            let s = Math.max(-1, Math.min(1, inputData[i]));
            pcm16[i] = s < 0 ? s * 0x8000 : s * 0x7FFF;
          }
          wsRef.current.send(pcm16.buffer);
        }
      };
      
      source.connect(processor);
      processor.connect(audioContext.destination);
      
      setIsCalling(true);
    } catch(err) {
      console.error(err);
      setLogs(l => [...l, "Error accessing microphone or connecting."]);
    }
  };
  
  const nextStartTimeRef = useRef(0);
  
  const playAudioData = async (blob: Blob) => {
    if (!audioContextRef.current) return;
    try {
      const arrayBuffer = await blob.arrayBuffer();
      const pcm16 = new Int16Array(arrayBuffer);
      const audioData = new Float32Array(pcm16.length);
      for(let i = 0; i < pcm16.length; i++){
        audioData[i] = pcm16[i] / 32768;
      }
      
      const buffer = audioContextRef.current.createBuffer(1, audioData.length, 16000);
      buffer.copyToChannel(audioData, 0);
      
      const source = audioContextRef.current.createBufferSource();
      source.buffer = buffer;
      source.connect(audioContextRef.current.destination);
      
      const currTime = audioContextRef.current.currentTime;
      if (nextStartTimeRef.current < currTime) {
        nextStartTimeRef.current = currTime;
      }
      source.start(nextStartTimeRef.current);
      nextStartTimeRef.current += buffer.duration;
    } catch (e) {
      console.error("Audio playback error:", e);
    }
  };

  const endCall = () => {
    if (wsRef.current) wsRef.current.close();
    if (processorRef.current) processorRef.current.disconnect();
    if (microphoneRef.current) microphoneRef.current.getTracks().forEach(t => t.stop());
    if (audioContextRef.current) audioContextRef.current.close();
    setIsCalling(false);
    setLogs(l => [...l, "Call ended."]);
  };

  return (
    <main className="min-h-screen bg-slate-50 pt-24 pb-12">
      <article className="max-w-5xl mx-auto px-6">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
            Jento AI <span className="text-blue-600">Plumbing</span>
          </h1>
          <p className="text-lg text-slate-600 font-medium">
            Experience our AI Receptionist Demo. It will answer the phone, collect your details, and book your plumbing request automatically.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-6">
            <section className="bg-white rounded-[2rem] p-8 shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col items-center justify-center space-y-6 text-center">
              <div className="w-24 h-24 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center">
                <Users className="w-12 h-12" />
              </div>
              <div>
                <h3 className="text-xl font-black text-slate-900 tracking-tight">AI Receptionist</h3>
                <p className="text-slate-500 text-[10px] font-bold mt-1 uppercase tracking-widest">Status: {isCalling ? "On Call" : "Available"}</p>
              </div>

              {!isCalling ? (
                <button
                  onClick={connectDeepgram}
                  className="w-full px-8 py-4 bg-blue-600 text-white rounded-2xl font-black uppercase tracking-widest text-[11px] hover:bg-slate-900 transition-all shadow-lg shadow-blue-600/20 flex items-center justify-center space-x-3 group"
                >
                  <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>Speak to our Agent</span>
                </button>
              ) : (
                <button
                  onClick={endCall}
                  className="w-full px-8 py-4 bg-red-600 text-white rounded-2xl font-black uppercase tracking-widest text-[11px] hover:bg-slate-900 transition-all shadow-lg shadow-red-600/20 flex items-center justify-center space-x-3"
                >
                  <Square className="w-5 h-5" />
                  <span>End Call</span>
                </button>
              )}
            </section>

            <section className="bg-slate-950 rounded-[2rem] shadow-xl p-8 border border-slate-800">
              <h3 className="text-white font-black uppercase tracking-widest text-xs flex items-center space-x-3 mb-6">
                <Mic className="w-4 h-4 text-blue-500" />
                <span>Live Transcript</span>
              </h3>
              <div className="h-64 overflow-y-auto space-y-4 pr-2 font-mono text-xs custom-scrollbar">
                {logs.length === 0 ? (
                  <p className="text-slate-500 italic">Call the agent to see the transcript...</p>
                ) : (
                  logs.map((log, i) => (
                    <div key={i} className={`${log.startsWith('Agent:') ? 'text-blue-400' : log.startsWith('You:') ? 'text-emerald-400' : log.startsWith('[System]') ? 'text-yellow-400 font-bold' : 'text-slate-400'}`}>
                      {log}
                    </div>
                  ))
                )}
              </div>
            </section>
          </div>

          <div className="lg:col-span-2">
            <section className="bg-white rounded-[2rem] shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden h-full flex flex-col">
              <div className="p-8 border-b border-slate-100 flex items-center justify-between">
                <h3 className="text-lg font-black text-slate-900 uppercase tracking-tight flex items-center space-x-3">
                  <ClipboardList className="w-6 h-6 text-blue-600" />
                  <span>Collected Leads</span>
                </h3>
                <span className="px-4 py-2 bg-slate-50 text-slate-600 text-[10px] font-black uppercase tracking-widest rounded-xl border border-slate-200">
                  {leads.length} Leads
                </span>
              </div>
              
              <div className="flex-1 overflow-x-auto p-4">
                <table className="w-full text-left border-separate border-spacing-y-2">
                  <thead>
                    <tr>
                      <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Name</th>
                      <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Phone Number</th>
                      <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Plumbing Issue</th>
                    </tr>
                  </thead>
                  <tbody>
                    {leads.length === 0 ? (
                      <tr>
                        <td colSpan={3} className="px-6 py-12 text-center text-slate-500 font-medium bg-slate-50 rounded-2xl">
                          No leads collected yet. The AI Receptionist will populate this table automatically as it talks to customers.
                        </td>
                      </tr>
                    ) : (
                      leads.map((lead, i) => (
                        <tr key={i} className="bg-slate-50 rounded-2xl hover:bg-slate-100 transition-colors">
                          <td className="px-6 py-4 whitespace-nowrap font-black text-slate-900 rounded-l-2xl">{lead.name}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-slate-600 font-medium">{lead.number}</td>
                          <td className="px-6 py-4 text-slate-600 font-medium rounded-r-2xl">{lead.issue}</td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        </div>
      </article>
    </main>
  );
}
