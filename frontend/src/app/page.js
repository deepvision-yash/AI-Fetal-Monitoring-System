"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import TopNavBar from "@/components/TopNavBar";
import SideNavBar from "@/components/SideNavBar";

export default function InputModeSelector() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="text-on-background bg-dots min-h-screen flex flex-col font-body-md overflow-x-hidden">
      {/* TopNavBar */}
      <TopNavBar 
        title="Select Input Mode" 
        onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} 
      />
      
      <div className="flex pt-16 flex-1 h-screen overflow-hidden">
        <SideNavBar isOpen={isSidebarOpen} />
        
        {/* Main Content Area */}
        <main className={`flex-1 overflow-y-auto pb-24 relative transition-all duration-300 ${isSidebarOpen ? 'ml-0 md:ml-64' : 'ml-0'} flex items-center justify-center px-6`}>
          <div className="max-w-[960px] w-full flex flex-col gap-xl">
          {/* Headers */}
          <div className="text-center space-y-sm fade-in-up">
            <h1 className="text-headline-lg text-on-surface mb-2">How would you like to input CTG data?</h1>
            <p className="text-body-md text-on-surface-variant max-w-2xl mx-auto">Select your input mode to begin fetal monitoring and AI analysis.</p>
          </div>
          
          {/* Two Primary Mode Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-margin">
            {/* CARD A: Live Monitor */}
            <div className="glass-panel border border-outline-variant/40 rounded-2xl p-xl flex flex-col relative overflow-hidden transition-all duration-500 hover:shadow-[0_8px_32px_rgba(148,208,220,0.15)] hover:-translate-y-1 hover:border-secondary/60 group fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute -inset-24 bg-gradient-to-br from-secondary/5 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="flex justify-between items-start mb-md relative z-10">
                <div className="w-16 h-16 rounded-xl bg-secondary-container/80 backdrop-blur-md border border-secondary/20 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500 relative">
                  <svg className="lucide lucide-activity text-secondary drop-shadow-[0_0_8px_rgba(148,208,220,0.5)] ecg-animate" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
                  </svg>
                </div>
                <span className="bg-tertiary-container/80 text-on-tertiary-container text-data-label px-3 py-1.5 rounded-full border border-tertiary/30 shadow-sm backdrop-blur-sm">REAL-TIME</span>
              </div>
              <div className="flex items-center gap-3 mb-3 relative z-10">
                <div className="live-dot ml-1"></div>
                <span className="text-error font-bold tracking-widest text-[14px]" style={{fontFamily: "'Space Mono', monospace"}}>LIVE</span>
              </div>
              <h2 className="text-headline-lg text-on-surface mb-sm relative z-10 group-hover:text-secondary transition-colors duration-300">Live Monitor</h2>
              <p className="text-body-md text-on-surface-variant mb-margin flex-grow relative z-10">Connect to a live CTG machine via real-time data stream for continuous monitoring and immediate AI pattern detection during labor.</p>
              <ul className="space-y-3 mb-xl relative z-10">
                <li className="flex items-center gap-3 text-body-md text-on-surface">
                  <span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span> Real-time visualization
                </li>
                <li className="flex items-center gap-3 text-body-md text-on-surface">
                  <span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span> 30s pattern detection
                </li>
                <li className="flex items-center gap-3 text-body-md text-on-surface">
                  <span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span> Instant alerts
                </li>
              </ul>
              <Link 
                href="/live"
                className="w-full bg-gradient-to-r from-primary-container to-secondary-container hover:from-primary hover:to-secondary text-on-primary-container hover:text-on-primary text-panel-title py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-[0_0_20px_rgba(166,200,255,0.4)] relative z-10 transform hover:scale-[1.02]"
              >
                Start Live Monitoring
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </Link>
            </div>
            
            {/* CARD B: Analyze Recording */}
            <div className="glass-panel border border-outline-variant/40 rounded-2xl p-xl flex flex-col relative overflow-hidden transition-all duration-500 hover:shadow-[0_8px_32px_rgba(255,185,9,0.1)] hover:-translate-y-1 hover:border-[#FFB909]/50 group fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FFB909] to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute -inset-24 bg-gradient-to-br from-[#FFB909]/5 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="flex justify-between items-start mb-md relative z-10">
                <div className="w-16 h-16 rounded-xl bg-surface-bright/80 backdrop-blur-md border border-outline-variant/30 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                  <svg className="lucide lucide-upload-cloud text-[#FFB909] drop-shadow-[0_0_8px_rgba(255,185,9,0.4)]" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path>
                    <path d="M12 12v9"></path>
                    <path d="m16 16-4-4-4 4"></path>
                  </svg>
                </div>
                <span className="bg-surface-bright/80 text-[#FFB909] text-data-label px-3 py-1.5 rounded-full border border-[#FFB909]/30 shadow-sm backdrop-blur-sm">OFFLINE ANALYSIS</span>
              </div>
              <div className="flex items-center gap-2 mb-3 opacity-0 relative z-10">
                <span className="w-2 h-2"></span>
                <span className="text-live-indicator">SPACER</span>
              </div>
              <h2 className="text-headline-lg text-on-surface mb-sm relative z-10 group-hover:text-[#FFB909] transition-colors duration-300">Analyze Recording</h2>
              <p className="text-body-md text-on-surface-variant mb-margin flex-grow relative z-10">Upload a completed CTG recording file for full AI analysis, retrospective review, and automated clinical annotation generation.</p>
              <div className="mb-xl relative z-10">
                <div className="text-panel-title text-outline mb-3">SUPPORTED FORMATS</div>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-surface-bright/80 backdrop-blur-sm text-on-surface text-data-label px-2.5 py-1.5 rounded-md border border-outline-variant/50">.DAT + .HEA</span>
                  <span className="bg-surface-bright/80 backdrop-blur-sm text-on-surface text-data-label px-2.5 py-1.5 rounded-md border border-outline-variant/50">.DAT only</span>
                  <span className="bg-surface/50 text-outline text-data-label px-2.5 py-1.5 rounded-md border border-outline-variant/30 flex items-center gap-1.5"><span className="material-symbols-outlined text-[14px]">lock</span> CSV</span>
                  <span className="bg-surface/50 text-outline text-data-label px-2.5 py-1.5 rounded-md border border-outline-variant/30 flex items-center gap-1.5"><span className="material-symbols-outlined text-[14px]">lock</span> XML</span>
                </div>
              </div>
              <Link 
                href="/upload"
                className="w-full bg-surface-bright/30 backdrop-blur-sm border-2 border-outline-variant/50 hover:bg-surface-bright hover:border-[#FFB909]/70 text-[#FFB909] text-panel-title py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 relative z-10 transform hover:scale-[1.02] shadow-sm hover:shadow-[0_0_15px_rgba(255,185,9,0.2)]"
              >
                Upload &amp; Analyze
                <span className="material-symbols-outlined text-[18px]">upload</span>
              </Link>
            </div>
          </div>
          
          {/* Coming Soon Section */}
          <div className="mt-xl fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center gap-md mb-lg">
              <div className="h-px bg-gradient-to-r from-transparent to-outline-variant flex-grow opacity-50"></div>
              <span className="text-panel-title text-outline tracking-[0.2em]">COMING SOON</span>
              <div className="h-px bg-gradient-to-l from-transparent to-outline-variant flex-grow opacity-50"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
              <div className="glass-panel opacity-60 border border-outline-variant/20 rounded-xl p-lg flex items-center gap-md transition-opacity hover:opacity-80">
                <div className="w-12 h-12 rounded-lg bg-surface-bright/50 border border-outline-variant/30 flex items-center justify-center">
                  <span className="material-symbols-outlined text-outline">description</span>
                </div>
                <div>
                  <div className="text-body-md text-on-surface font-medium mb-1">Patient Clinical Data</div>
                  <div className="text-data-label text-on-surface-variant">Import EHR records</div>
                </div>
              </div>
              <div className="glass-panel opacity-60 border border-outline-variant/20 rounded-xl p-lg flex items-center gap-md transition-opacity hover:opacity-80">
                <div className="w-12 h-12 rounded-lg bg-surface-bright/50 border border-outline-variant/30 flex items-center justify-center">
                  <span className="material-symbols-outlined text-outline">account_tree</span>
                </div>
                <div>
                  <div className="text-body-md text-on-surface font-medium mb-1">Hospital Metadata + CTG</div>
                  <div className="text-data-label text-on-surface-variant">Batch demographic sync</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom Security Note */}
          <div className="flex justify-center items-center gap-2 mt-24 text-outline text-data-label opacity-70 fade-in-up" style={{ animationDelay: '0.4s' }}>
            <span className="material-symbols-outlined text-[16px]">health_and_safety</span>
            All patient data is processed locally — no data leaves your secure hospital network.
          </div>
          </div>
        </main>
      </div>
    </div>
  );
}
