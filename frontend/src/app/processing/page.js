"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import TopNavBar from "@/components/TopNavBar";
import SideNavBar from "@/components/SideNavBar";

export default function AnalysisProcessing() {
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    // Dummy redirect to results after 3.5 seconds
    const timer = setTimeout(() => {
      router.push("/results");
    }, 3500);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="text-on-background bg-dots min-h-screen flex flex-col font-body-md overflow-x-hidden">
      <TopNavBar 
        title="Offline Analysis" 
        onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} 
      />
      
      <div className="flex pt-16 flex-1 h-screen overflow-hidden">
        <SideNavBar isOpen={isSidebarOpen} />
        
        <main className={`flex-grow flex flex-col items-center justify-center pb-12 px-gutter overflow-y-auto relative transition-all duration-300 ${isSidebarOpen ? 'ml-0 md:ml-64' : 'ml-0'}`}>
        
        {/* Progress Stepper */}
        <div className="flex items-center justify-between w-full max-w-2xl mb-xl mx-auto">
          {/* Step 1: Upload (Done) */}
          <div className="flex flex-col items-center gap-2 relative z-10 w-1/3">
            <div className="w-9 h-9 rounded-full bg-primary/20 border-2 border-primary text-primary flex items-center justify-center text-panel-title shadow-[0_0_12px_rgba(166,200,255,0.3)]">
              <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 0" }}>check</span>
            </div>
            <span className="text-data-label text-primary">UPLOAD</span>
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-primary/60 to-primary/30 -mx-4 z-0 relative top-[-10px]"></div>
          
          {/* Step 2: Analyzing (Active) */}
          <div className="flex flex-col items-center gap-2 relative z-10 w-1/3">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-primary-container text-on-primary shadow-[0_0_20px_rgba(166,200,255,0.5)] flex items-center justify-center text-panel-title">2</div>
            <span className="text-data-label text-primary">ANALYZING</span>
          </div>
          <div className="flex-1 h-px bg-outline-variant/30 -mx-4 z-0 relative top-[-10px]"></div>
          
          {/* Step 3: Results (Inactive) */}
          <div className="flex flex-col items-center gap-2 relative z-10 w-1/3">
            <div className="w-9 h-9 rounded-full bg-surface-container-highest border border-outline-variant/50 text-on-surface-variant flex items-center justify-center text-panel-title">3</div>
            <span className="text-data-label text-on-surface-variant">RESULTS</span>
          </div>
        </div>

        <div className="w-full max-w-[680px] glass-panel border border-outline-variant/30 backdrop-blur-xl rounded-2xl p-margin shadow-[0_8px_32px_rgba(0,0,0,0.4)] flex flex-col items-center relative overflow-hidden">
          <div className="absolute top-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
          {/* 1. Animated Waveform Icon */}
          <div className="mb-6 fade-in-up" style={{ animationDelay: '0.1s' }}>
            <svg fill="none" height="60" viewBox="0 0 200 60" width="200" xmlns="http://www.w3.org/2000/svg">
              <path className="draw-waveform" d="M0 30 L20 30 L30 10 L40 50 L50 30 L70 30 L80 15 L90 45 L100 30 L120 30 L130 5 L140 55 L150 30 L170 30 L180 20 L190 40 L200 30" stroke="#B0EDF9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"></path>
            </svg>
          </div>
          
          {/* 2. Heading */}
          <h1 className="text-headline-lg text-on-surface mb-2 fade-in-up" style={{ animationDelay: '0.2s' }}>
            Analyzing CTG Recording...
          </h1>
          
          {/* 3. File Info */}
          <p className="text-body-md text-[#8BA4B8] mb-8 fade-in-up" style={{ animationDelay: '0.3s' }}>
            ctg_recording_2024_01_15.dat + .hea (12.4 MB)
          </p>
          
          {/* 4. Processing Steps List */}
          <div className="w-full bg-surface-container-lowest/60 rounded-xl p-md mb-8 border border-outline-variant/30 fade-in-up shadow-inner" style={{ animationDelay: '0.4s' }}>
            {/* Completed Steps */}
            <div className="flex items-start gap-sm mb-3">
              <span className="material-symbols-outlined text-secondary text-[20px] mt-[2px] drop-shadow-[0_0_5px_rgba(148,208,220,0.5)]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              <div className="flex-grow flex justify-between items-center">
                <span className="text-on-surface text-body-md">File Validation &amp; Format Check</span>
                <span className="text-on-surface-variant text-numeric-sm">[0.3s]</span>
              </div>
            </div>
            <div className="flex items-start gap-sm mb-3">
              <span className="material-symbols-outlined text-secondary text-[20px] mt-[2px] drop-shadow-[0_0_5px_rgba(148,208,220,0.5)]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              <div className="flex-grow flex justify-between items-center">
                <span className="text-on-surface text-body-md">Signal Decoding (FHR + UC channels)</span>
                <span className="text-on-surface-variant text-numeric-sm">[1.2s]</span>
              </div>
            </div>
            <div className="flex items-start gap-sm mb-3">
              <span className="material-symbols-outlined text-secondary text-[20px] mt-[2px] drop-shadow-[0_0_5px_rgba(148,208,220,0.5)]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              <div className="flex-grow flex justify-between items-center">
                <span className="text-on-surface text-body-md">Signal Quality Assessment</span>
                <span className="text-on-surface-variant text-numeric-sm">[0.8s]</span>
              </div>
            </div>
            
            {/* Active Step */}
            <div className="flex items-start gap-sm mb-2 bg-primary/5 -mx-1 px-1 py-1.5 rounded-lg border border-primary/20">
              <span className="material-symbols-outlined text-primary text-[20px] mt-[2px] spin-slow drop-shadow-[0_0_8px_rgba(166,200,255,0.5)]" style={{ fontVariationSettings: "'FILL' 0" }}>autorenew</span>
              <div className="flex-grow">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-primary font-medium text-body-md">Pattern Detection Engine</span>
                  <span className="text-primary/70 text-numeric-sm">[running...]</span>
                </div>
                {/* Sub-steps */}
                <div className="ml-6 pl-3 border-l border-primary/30 space-y-2 mt-2">
                  <div className="flex items-center gap-xs text-on-surface-variant/80 text-[13px]">
                    <span className="material-symbols-outlined text-[16px] text-secondary" style={{ fontVariationSettings: "'FILL' 0" }}>done</span> Baseline calculation
                  </div>
                  <div className="flex items-center gap-xs text-on-surface-variant/80 text-[13px]">
                    <span className="material-symbols-outlined text-[16px] text-secondary" style={{ fontVariationSettings: "'FILL' 0" }}>done</span> Variability analysis
                  </div>
                  <div className="flex items-center gap-xs text-primary text-[13px]">
                    <span className="material-symbols-outlined text-[16px] spin-slow" style={{ fontVariationSettings: "'FILL' 0" }}>sync</span> Acceleration detection
                  </div>
                  <div className="flex items-center gap-xs text-on-surface-variant/50 text-[13px]">
                    <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 0" }}>schedule</span> Deceleration classification
                  </div>
                </div>
              </div>
            </div>
            
            {/* Pending Steps */}
            <div className="flex items-start gap-sm mt-4 text-on-surface-variant/40">
              <span className="material-symbols-outlined text-[20px] mt-[2px]" style={{ fontVariationSettings: "'FILL' 0" }}>radio_button_unchecked</span>
              <span className="text-body-md">Risk Score Calculation</span>
            </div>
            <div className="flex items-start gap-sm mt-3 text-on-surface-variant/40">
              <span className="material-symbols-outlined text-[20px] mt-[2px]" style={{ fontVariationSettings: "'FILL' 0" }}>radio_button_unchecked</span>
              <span className="text-body-md">AI Explanation Generation</span>
            </div>
            <div className="flex items-start gap-sm mt-3 text-on-surface-variant/40">
              <span className="material-symbols-outlined text-[20px] mt-[2px]" style={{ fontVariationSettings: "'FILL' 0" }}>radio_button_unchecked</span>
              <span className="text-body-md">Report Preparation</span>
            </div>
          </div>
          
          {/* 5. Progress Bar */}
          <div className="w-full mb-6 fade-in-up" style={{ animationDelay: '0.5s' }}>
            <div className="flex justify-between items-end mb-2">
              <span className="text-data-label text-on-surface-variant">OVERALL PROGRESS</span>
              <span className="text-numeric-sm text-primary">60%</span>
            </div>
            <div className="h-2.5 w-full bg-surface-container-highest rounded-full overflow-hidden">
              <div className="h-full progress-bar-fill rounded-full shadow-[0_0_10px_rgba(166,200,255,0.4)]"></div>
            </div>
            <p className="text-center text-body-md text-secondary-fixed-dim mt-3 opacity-80">
              Estimated time remaining: ~18 seconds
            </p>
          </div>
          
          {/* 6. Info Box */}
          <div className="w-full bg-surface-container/40 rounded-lg p-sm flex items-start gap-sm mb-6 border border-outline-variant/10 fade-in-up" style={{ animationDelay: '0.6s' }}>
            <span className="material-symbols-outlined text-outline text-[18px] mt-[2px]" style={{ fontVariationSettings: "'FILL' 0" }}>info</span>
            <p className="text-[12px] text-outline leading-tight">
              All processing occurs locally on the hospital network. No patient data is transmitted externally during this step.
            </p>
          </div>
          
          {/* 7. Cancel Link */}
          <div className="fade-in-up" style={{ animationDelay: '0.7s' }}>
            <Link href="/upload" className="text-[13px] text-on-surface-variant hover:text-error transition-colors underline decoration-on-surface-variant/30 hover:decoration-error/50 underline-offset-4 cursor-pointer">
              Cancel Processing
            </Link>
          </div>
        </div>
        </main>
      </div>
    </div>
  );
}
