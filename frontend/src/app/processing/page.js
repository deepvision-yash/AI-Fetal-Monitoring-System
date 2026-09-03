"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import TopNavBar from "@/components/TopNavBar";
import SideNavBar from "@/components/SideNavBar";

export default function AnalysisProcessing() {
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [progress, setProgress] = useState(15);
  const [activeStep, setActiveStep] = useState(1);

  const [logs, setLogs] = useState([
    "[0.00s] Initializing PhysioNet WFDB signal decoder...",
    "[0.32s] Header verified: recording_1001.hea (2 channels, 4Hz, 105 mins)",
    "[0.85s] Extracting FHR channel signal: 25,200 data points",
    "[1.20s] Extracting UC channel signal: 25,200 data points",
  ]);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setProgress(45);
      setActiveStep(2);
      setLogs((prev) => [...prev, "[1.95s] Running FIGO 2015 Baseline Estimation Algorithm...", "[2.40s] Baseline estimated at 139.4 bpm"]);
    }, 1200);

    const timer2 = setTimeout(() => {
      setProgress(80);
      setActiveStep(3);
      setLogs((prev) => [...prev, "[2.85s] Detecting Accelerations & Decelerations...", "[3.10s] 3 Recurrent late decelerations detected", "[3.30s] Calculating NICHD Category III Risk Score: 72/100"]);
    }, 2400);

    const timer3 = setTimeout(() => {
      setProgress(100);
      router.push("/results");
    }, 3800);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [router]);

  return (
    <div className="text-on-background bg-dots min-h-screen flex flex-col font-body-md overflow-x-hidden">
      <TopNavBar 
        title="Offline Analysis Pipeline" 
        onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} 
      />
      
      <div className="flex pt-16 flex-1 h-screen overflow-hidden">
        <SideNavBar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
        
        <main className={`flex-grow flex flex-col items-center justify-center py-10 px-gutter overflow-y-auto relative transition-all duration-300 ${isSidebarOpen ? 'ml-0 md:ml-64' : 'ml-0'}`}>
          {/* Progress Stepper */}
          <div className="flex items-center justify-between w-full max-w-2xl mb-8 mx-auto">
            <div className="flex flex-col items-center gap-1.5 relative z-10 w-1/3">
              <div className="w-9 h-9 rounded-full bg-primary/20 border-2 border-primary text-primary flex items-center justify-center font-bold text-sm shadow-[0_0_12px_rgba(166,200,255,0.3)]">
                <span className="material-symbols-outlined text-[18px]">check</span>
              </div>
              <span className="text-data-label text-primary font-bold text-[11px]">UPLOAD</span>
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-primary/60 to-primary/30 -mx-4 z-0 relative top-[-12px]"></div>
            
            <div className="flex flex-col items-center gap-1.5 relative z-10 w-1/3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-primary-container text-on-primary shadow-[0_0_20px_rgba(166,200,255,0.5)] flex items-center justify-center font-bold text-sm animate-pulse">2</div>
              <span className="text-data-label text-primary font-bold text-[11px]">ANALYZING</span>
            </div>
            <div className="flex-1 h-px bg-outline-variant/30 -mx-4 z-0 relative top-[-12px]"></div>
            
            <div className="flex flex-col items-center gap-1.5 relative z-10 w-1/3">
              <div className="w-9 h-9 rounded-full bg-surface-container-highest border border-outline-variant/50 text-on-surface-variant flex items-center justify-center font-semibold text-sm">3</div>
              <span className="text-data-label text-on-surface-variant text-[11px]">RESULTS</span>
            </div>
          </div>

          <div className="w-full max-w-[720px] glass-panel border border-outline-variant/30 backdrop-blur-2xl rounded-2xl p-8 shadow-[0_12px_40px_rgba(0,0,0,0.5)] flex flex-col items-center relative overflow-hidden">
            <div className="absolute top-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent"></div>
            
            {/* Animated Waveform Header */}
            <div className="mb-4">
              <svg fill="none" height="60" viewBox="0 0 200 60" width="200" xmlns="http://www.w3.org/2000/svg">
                <path className="draw-waveform" d="M0 30 L20 30 L30 10 L40 50 L50 30 L70 30 L80 15 L90 45 L100 30 L120 30 L130 5 L140 55 L150 30 L170 30 L180 20 L190 40 L200 30" stroke="#B0EDF9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"></path>
              </svg>
            </div>
            
            <h1 className="text-2xl font-bold text-on-surface mb-1">
              Executing AI CTG Analysis...
            </h1>
            
            <p className="text-body-md text-[#8BA4B8] mb-6 text-[14px]">
              Dataset: <span className="text-primary font-mono font-medium">recording_1001.dat + .hea</span> (14.2 MB)
            </p>
            
            {/* Live Terminal Output Window */}
            <div className="w-full bg-surface-container-lowest/90 rounded-xl p-4 mb-6 border border-outline-variant/30 font-mono text-[12px] text-emerald-400 max-h-48 overflow-y-auto custom-scrollbar shadow-inner">
              <div className="text-outline text-[10px] uppercase font-sans mb-2 tracking-wider flex justify-between border-b border-outline-variant/20 pb-1">
                <span>AI Core Execution Log Feed</span>
                <span className="text-primary">Status: Active</span>
              </div>
              {logs.map((log, index) => (
                <div key={index} className="py-0.5 leading-relaxed">
                  {log}
                </div>
              ))}
              <div className="flex items-center gap-1 mt-1 text-primary animate-pulse">
                <span>&gt;</span> <span className="w-2 h-4 bg-primary inline-block"></span>
              </div>
            </div>
            
            {/* Progress Bar */}
            <div className="w-full mb-6">
              <div className="flex justify-between items-end mb-2">
                <span className="text-data-label text-on-surface-variant text-[11px]">PIPELINE PROGRESS</span>
                <span className="text-numeric-sm text-primary font-bold text-[14px]">{progress}%</span>
              </div>
              <div className="h-3 w-full bg-surface-container-highest rounded-full overflow-hidden p-[2px] border border-outline-variant/20">
                <div 
                  className="h-full bg-gradient-to-r from-primary via-secondary to-emerald-400 rounded-full transition-all duration-500 shadow-[0_0_12px_rgba(166,200,255,0.5)]"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>
            
            {/* Info Footer & Manual Skip */}
            <div className="w-full flex justify-between items-center text-[12px] text-outline pt-2 border-t border-outline-variant/20">
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px] text-secondary">lock</span> Local hospital network processing
              </span>
              
              <button onClick={() => router.push('/results')} className="text-secondary hover:text-primary hover:underline font-medium cursor-pointer">
                Skip to Results &rarr;
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
