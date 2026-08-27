import React, { useState, useRef } from 'react';
import { Page } from './types';

interface VoiceResumeBuilderProps {
  setPage: (page: Page) => void;
}

interface ResumeData {
  name: string;
  contact: {
    email: string;
    phone: string;
    linkedin: string;
  };
  summary: string;
  experience: {
    title: string;
    company: string;
    dates: string;
    description: string[];
  }[];
  education: {
    degree: string;
    institution: string;
    dates: string;
  }[];
  skills: string[];
}

export const VoiceResumeBuilder: React.FC<VoiceResumeBuilderProps> = ({ setPage }) => {
  const [isRecording, setIsRecording] = useState(false);
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
  const [docFile, setDocFile] = useState<File | null>(null);
  const [jobTitle, setJobTitle] = useState('');
  
  const [isProcessing, setIsProcessing] = useState(false);
  const [resumeData, setResumeData] = useState<ResumeData | null>(null);
  const [error, setError] = useState<string | null>(null);

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      chunksRef.current = [];

      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) chunksRef.current.push(e.data);
      };

      mediaRecorder.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: 'audio/webm' });
        setAudioBlob(blob);
        stream.getTracks().forEach(track => track.stop());
      };

      mediaRecorder.start();
      setIsRecording(true);
      setError(null);
    } catch (err) {
      console.error('Microphone access denied or error:', err);
      setError('Could not access microphone. Please ensure permissions are granted.');
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  const clearAudio = () => {
    setAudioBlob(null);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setDocFile(e.target.files[0]);
    }
  };

  const handleGenerate = async () => {
    if (!audioBlob && !docFile) {
      setError('Please provide either an audio recording or a resume document.');
      return;
    }

    setIsProcessing(true);
    setError(null);

    const formData = new FormData();
    if (audioBlob) {
      formData.append('audio', audioBlob, 'recording.webm');
    }
    if (docFile) {
      formData.append('document', docFile);
    }
    if (jobTitle) {
      formData.append('jobTitle', jobTitle);
    }

    try {
      const baseUrl = import.meta.env.VITE_API_URL || 'http://localhost:8080';
      const response = await fetch(`${baseUrl}/api/resume-builder`, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData?.error?.message || 'Failed to generate resume');
      }

      const data: ResumeData = await response.json();
      setResumeData(data);
    } catch (err: any) {
      console.error(err);
      setError(err.message || 'An unexpected error occurred.');
    } finally {
      setIsProcessing(false);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <style>{`
        @media print {
          body * {
            visibility: hidden;
          }
          #printable-resume, #printable-resume * {
            visibility: visible;
          }
          #printable-resume {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            margin: 0;
            padding: 20mm;
          }
          /* Hide the button during print */
          .no-print {
            display: none !important;
          }
        }
      `}</style>

      <section className="py-24 md:py-32 bg-slate-50 min-h-screen no-print">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <p className="text-blue-600 text-[10px] font-black uppercase tracking-[0.3em] mb-4">Free AI Tool</p>
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter mb-4">
              AI Voice-to-Resume <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Builder</span>
            </h1>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium">
              Speak your skills or upload your old resume, and our AI will generate a highly professional, tailored PDF resume instantly.
            </p>
          </div>

          {!resumeData ? (
            <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-xl border border-slate-100 reveal delay-100">
              {error && (
                <div className="mb-8 p-4 bg-red-50 text-red-600 rounded-xl text-sm font-bold">
                  {error}
                </div>
              )}

              <div className="space-y-8">
                {/* Target Role */}
                <div>
                  <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-3 ml-2">Target Job Title (Optional)</label>
                  <input
                    type="text"
                    value={jobTitle}
                    onChange={(e) => setJobTitle(e.target.value)}
                    placeholder="e.g. Senior Frontend Developer"
                    className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium transition-all"
                  />
                </div>

                {/* Audio Recording */}
                <div>
                  <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-3 ml-2">1. Record Your Experience</label>
                  <div className="p-6 bg-slate-50 border-2 border-dashed border-slate-200 rounded-2xl text-center transition-all hover:border-blue-400">
                    {!audioBlob ? (
                      <div className="flex flex-col items-center gap-4">
                        <button
                          onClick={isRecording ? stopRecording : startRecording}
                          className={`w-16 h-16 flex items-center justify-center rounded-full text-white transition-all shadow-lg ${isRecording ? 'bg-red-500 animate-pulse' : 'bg-blue-600 hover:scale-105'}`}
                        >
                          {isRecording ? (
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><rect x="6" y="6" width="12" height="12" rx="2"></rect></svg>
                          ) : (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path></svg>
                          )}
                        </button>
                        <p className="text-sm font-medium text-slate-500">
                          {isRecording ? 'Recording... click to stop' : 'Click to start speaking your skills and experience'}
                        </p>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center gap-4">
                        <div className="flex items-center gap-3 text-green-600 font-bold bg-green-50 px-4 py-2 rounded-full">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                          Audio Recorded Successfully
                        </div>
                        <audio src={URL.createObjectURL(audioBlob)} controls className="h-10 w-full max-w-xs" />
                        <button onClick={clearAudio} className="text-xs font-bold text-slate-400 hover:text-red-500 uppercase tracking-wider">
                          Discard Recording
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                {/* File Upload */}
                <div>
                  <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-3 ml-2">2. Upload Old Resume (Optional)</label>
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx,.png,.jpg,.jpeg"
                    onChange={handleFileChange}
                    className="block w-full text-sm text-slate-500
                      file:mr-4 file:py-3 file:px-6
                      file:rounded-full file:border-0
                      file:text-xs file:font-black file:uppercase file:tracking-widest
                      file:bg-slate-100 file:text-slate-700
                      hover:file:bg-slate-200 transition-all cursor-pointer"
                  />
                  <p className="text-xs text-slate-400 mt-2 ml-2">PDF, Word, or Image format</p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <button
                    onClick={handleGenerate}
                    disabled={isProcessing || (!audioBlob && !docFile)}
                    className="w-full py-5 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-blue-600 transition-all shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-3"
                  >
                    {isProcessing ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                        Generating Resume...
                      </>
                    ) : (
                      'Generate Professional Resume'
                    )}
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-8 reveal">
              <div className="flex justify-between items-center bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <button
                  onClick={() => setResumeData(null)}
                  className="text-xs font-black uppercase tracking-widest text-slate-400 hover:text-blue-600 transition-colors"
                >
                  ← Start Over
                </button>
                <button
                  onClick={handlePrint}
                  className="px-8 py-3 bg-blue-600 text-white rounded-full font-black uppercase tracking-widest text-[10px] hover:bg-slate-900 transition-all shadow-lg shadow-blue-500/30"
                >
                  Download PDF
                </button>
              </div>

              {/* Printable Area */}
              <div id="printable-resume" className="bg-white p-10 md:p-16 rounded-2xl shadow-2xl border border-slate-100 font-sans text-slate-800">
                
                {/* Header */}
                <div className="border-b-2 border-slate-900 pb-6 mb-8 text-center">
                  <h1 className="text-4xl font-black uppercase tracking-tight text-slate-900 mb-2">{resumeData.name}</h1>
                  <div className="flex flex-wrap justify-center gap-4 text-sm font-medium text-slate-600">
                    {resumeData.contact.email && <span>{resumeData.contact.email}</span>}
                    {resumeData.contact.phone && <span>• {resumeData.contact.phone}</span>}
                    {resumeData.contact.linkedin && <span>• {resumeData.contact.linkedin}</span>}
                  </div>
                </div>

                {/* Summary */}
                {resumeData.summary && (
                  <div className="mb-8">
                    <h2 className="text-sm font-black uppercase tracking-widest text-slate-900 border-b border-slate-200 pb-2 mb-4">Professional Summary</h2>
                    <p className="text-sm leading-relaxed text-slate-700">{resumeData.summary}</p>
                  </div>
                )}

                {/* Experience */}
                {resumeData.experience && resumeData.experience.length > 0 && (
                  <div className="mb-8">
                    <h2 className="text-sm font-black uppercase tracking-widest text-slate-900 border-b border-slate-200 pb-2 mb-4">Professional Experience</h2>
                    <div className="space-y-6">
                      {resumeData.experience.map((exp, idx) => (
                        <div key={idx}>
                          <div className="flex justify-between items-baseline mb-1">
                            <h3 className="font-bold text-slate-900">{exp.title}</h3>
                            <span className="text-sm font-medium text-slate-500">{exp.dates}</span>
                          </div>
                          <div className="text-sm font-bold text-slate-600 mb-2">{exp.company}</div>
                          <ul className="list-disc list-outside ml-4 space-y-1 text-sm text-slate-700">
                            {exp.description.map((desc, dIdx) => (
                              <li key={dIdx} className="pl-1">{desc}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Education */}
                {resumeData.education && resumeData.education.length > 0 && (
                  <div className="mb-8">
                    <h2 className="text-sm font-black uppercase tracking-widest text-slate-900 border-b border-slate-200 pb-2 mb-4">Education</h2>
                    <div className="space-y-4">
                      {resumeData.education.map((edu, idx) => (
                        <div key={idx} className="flex justify-between items-baseline">
                          <div>
                            <h3 className="font-bold text-slate-900">{edu.degree}</h3>
                            <div className="text-sm text-slate-600">{edu.institution}</div>
                          </div>
                          <span className="text-sm font-medium text-slate-500">{edu.dates}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Skills */}
                {resumeData.skills && resumeData.skills.length > 0 && (
                  <div>
                    <h2 className="text-sm font-black uppercase tracking-widest text-slate-900 border-b border-slate-200 pb-2 mb-4">Skills</h2>
                    <div className="flex flex-wrap gap-2">
                      {resumeData.skills.map((skill, idx) => (
                        <span key={idx} className="text-sm bg-slate-100 text-slate-700 px-3 py-1 rounded-full font-medium">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};
