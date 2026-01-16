
import React, { useState, useEffect } from 'react';

const ROICalculator: React.FC = () => {
    const [hourlyRate, setHourlyRate] = useState(45);
    const [hoursSaved, setHoursSaved] = useState(15);
    const [employees, setEmployees] = useState(1);

    const weeklySavings = hourlyRate * hoursSaved * employees;
    const annualSavings = weeklySavings * 52;

    // Animation state for numbers
    const [displaySavings, setDisplaySavings] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setDisplaySavings(prev => {
                const diff = annualSavings - prev;
                if (Math.abs(diff) < 1) return annualSavings;
                return prev + diff * 0.1;
            });
        }, 16);
        return () => clearInterval(timer);
    }, [annualSavings]);

    return (
        <div className="w-full max-w-4xl mx-auto p-8 md:p-12 bg-slate-900 rounded-[3rem] border border-slate-800 shadow-2xl relative overflow-hidden group">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-600/20 transition-all duration-700"></div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Controls */}
                <div className="space-y-8">
                    <div>
                        <h3 className="text-white text-2xl font-black uppercase tracking-tight mb-2">Calculate Your <span className="text-blue-500">Savings.</span></h3>
                        <p className="text-slate-400 text-sm font-medium">See how much manual work is costing you.</p>
                    </div>

                    <div className="space-y-6">
                        {/* Input 1 */}
                        <div className="space-y-3">
                            <div className="flex justify-between text-sm font-bold">
                                <label className="text-slate-300">Avg. Hourly Rate ($)</label>
                                <span className="text-blue-400">${hourlyRate}/hr</span>
                            </div>
                            <input
                                type="range" min="15" max="200" value={hourlyRate}
                                onChange={(e) => setHourlyRate(Number(e.target.value))}
                                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-600 hover:accent-blue-500 transition-all"
                            />
                        </div>

                        {/* Input 2 */}
                        <div className="space-y-3">
                            <div className="flex justify-between text-sm font-bold">
                                <label className="text-slate-300">Hours Wasted / Week</label>
                                <span className="text-blue-400">{hoursSaved} hrs</span>
                            </div>
                            <input
                                type="range" min="1" max="100" value={hoursSaved}
                                onChange={(e) => setHoursSaved(Number(e.target.value))}
                                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-600 hover:accent-blue-500 transition-all"
                            />
                        </div>

                        {/* Input 3 */}
                        <div className="space-y-3">
                            <div className="flex justify-between text-sm font-bold">
                                <label className="text-slate-300">Team Size</label>
                                <span className="text-blue-400">{employees} people</span>
                            </div>
                            <input
                                type="range" min="1" max="50" value={employees}
                                onChange={(e) => setEmployees(Number(e.target.value))}
                                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-600 hover:accent-blue-500 transition-all"
                            />
                        </div>
                    </div>
                </div>

                {/* Display */}
                <div className="bg-blue-600 rounded-[2.5rem] p-8 text-center text-white relative overflow-hidden shadow-lg shadow-blue-900/50">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700"></div>
                    <div className="relative z-10">
                        <p className="text-blue-100 text-[10px] font-black uppercase tracking-[0.3em] mb-4">Potential Annual Savings</p>
                        <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-2">
                            ${Math.round(displaySavings).toLocaleString()}
                        </h2>
                        <p className="text-blue-200 text-sm font-medium mb-8">reclaimed per year</p>

                        <div className="inline-block px-4 py-2 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20">
                            <span className="text-xs font-bold">That's {Math.round(displaySavings / 5000)} marketing campaigns</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ROICalculator;
