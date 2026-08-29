"use client";

import Link from "next/link";
import { useState } from "react";
import TopNavBar from "@/components/TopNavBar";
import SideNavBar from "@/components/SideNavBar";

export default function InputModeSelector() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const recentSessions = [
    { id: "REC-9042", patient: "Jane Doe (GA: 38w 2d)", type: "Offline Analysis", date: "Today 14:22", risk: "72 (High)", category: "Category III", status: "Completed", href: "/results" },
    { id: "LIVE-0182", patient: "Sarah Smith (GA: 39w 0d)", type: "Live Monitor", date: "Today 13:15", risk: "24 (Low)", category: "Category I", status: "Active", href: "/live" },
    { id: "REC-8901", patient: "Elena Rostova (GA: 37w 5d)", type: "Offline Analysis", date: "Yesterday 18:40", risk: "48 (Moderate)", category: "Category II", status: "Completed", href: "/results" }
  ];

  return (
    <div className="text-on-background bg-dots min-h-screen flex flex-col font-body-md overflow-x-hidden">
      {/* TopNavBar */}
      <TopNavBar 
        title="Input Mode Selector" 
        onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} 
      />
      
      <div className="flex pt-16 flex-1 h-screen overflow-hidden">
        <SideNavBar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
        
        {/* Main Content Area */}
        <main className={`flex-1 overflow-y-auto pb-24 relative transition-all duration-300 ${isSidebarOpen ? 'ml-0 md:ml-64' : 'ml-0'} flex flex-col items-center justify-start px-6 pt-10`}>
          <div className="max-w-[1020px] w-full flex flex-col gap-xl">
            {/* Page Header */}
            <div className="text-center space-y-sm fade-in-up">
              <span className="bg-primary-container/40 text-primary border border-primary/30 text-data-label px-3.5 py-1 rounded-full text-[11px] font-semibold tracking-widest inline-block mb-1">
                CLINICAL DECISION SUPPORT SYSTEM
              </span>
              <h1 className="text-headline-lg text-on-surface mb-2 font-bold tracking-tight text-3xl md:text-4xl">
                Select CTG Input Stream Mode
              </h1>
              <p className="text-body-md text-on-surface-variant max-w-2xl mx-auto text-[15px] leading-relaxed">
                Connect directly to real-time labor ward monitors or upload raw signal files for automated AI pattern detection and NICHD categorization.
              </p>
            </div>
            
            {/* Two Primary Mode Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-margin">
              {/* CARD A: Live Monitor */}
              <div className="glass-panel border border-outline-variant/40 rounded-2xl p-8 flex flex-col relative overflow-hidden transition-all duration-500 hover:shadow-[0_12px_40px_rgba(148,208,220,0.2)] hover:-translate-y-1 hover:border-secondary/70 group fade-in-up" style={{ animationDelay: '0.1s' }}>
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary via-primary to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute -inset-24 bg-gradient-to-br from-secondary/10 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                
                <div className="flex justify-between items-start mb-md relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-secondary-container/80 backdrop-blur-md border border-secondary/30 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500 relative">
                    <svg className="lucide lucide-activity text-secondary drop-shadow-[0_0_10px_rgba(148,208,220,0.6)] ecg-animate" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
                    </svg>
                  </div>
                  <span className="bg-tertiary-container/80 text-on-tertiary-container text-data-label px-3 py-1.5 rounded-full border border-tertiary/40 shadow-sm backdrop-blur-sm text-[11px] font-semibold">
                    REAL-TIME STREAM
                  </span>
                </div>
                
                <div className="flex items-center gap-3 mb-3 relative z-10">
                  <div className="live-dot ml-1"></div>
                  <span className="text-error font-bold tracking-widest text-[14px]" style={{fontFamily: "'Space Mono', monospace"}}>LIVE MONITORING</span>
                </div>
                
                <h2 className="text-2xl font-bold text-on-surface mb-sm relative z-10 group-hover:text-secondary transition-colors duration-300">
                  Live Monitor
                </h2>
                <p className="text-body-md text-on-surface-variant mb-margin flex-grow relative z-10 text-[14px] leading-relaxed">
                  Establish a live telemetry feed with labor ward bedside monitors. Offers real-time signal quality evaluation, instant bradycardia alerts, and continuous 30s interval AI risk updates.
                </p>
                
                <ul className="space-y-3 mb-xl relative z-10">
                  <li className="flex items-center gap-3 text-body-md text-on-surface text-[13.5px]">
                    <span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span> 
                    Continuous dual-channel (FHR + UC) rendering
                  </li>
                  <li className="flex items-center gap-3 text-body-md text-on-surface text-[13.5px]">
                    <span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span> 
                    Instant NICHD Category I / II / III classification
                  </li>
                  <li className="flex items-center gap-3 text-body-md text-on-surface text-[13.5px]">
                    <span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span> 
                    Visual &amp; audible clinical escalation alerts
                  </li>
                </ul>

                <Link 
                  href="/live"
                  className="w-full bg-gradient-to-r from-primary-container to-secondary-container hover:from-primary hover:to-secondary text-on-primary-container hover:text-on-primary font-semibold text-[14px] py-3.5 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-[0_0_25px_rgba(166,200,255,0.4)] relative z-10 transform hover:scale-[1.01]"
                >
                  Start Live Monitoring Stream
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </Link>
              </div>
              
              {/* CARD B: Analyze Recording */}
              <div className="glass-panel border border-outline-variant/40 rounded-2xl p-8 flex flex-col relative overflow-hidden transition-all duration-500 hover:shadow-[0_12px_40px_rgba(255,185,9,0.15)] hover:-translate-y-1 hover:border-[#FFB909]/60 group fade-in-up" style={{ animationDelay: '0.2s' }}>
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FFB909] via-amber-400 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute -inset-24 bg-gradient-to-br from-[#FFB909]/10 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                
                <div className="flex justify-between items-start mb-md relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-surface-bright/80 backdrop-blur-md border border-outline-variant/40 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                    <svg className="lucide lucide-upload-cloud text-[#FFB909] drop-shadow-[0_0_10px_rgba(255,185,9,0.5)]" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path>
                      <path d="M12 12v9"></path>
                      <path d="m16 16-4-4-4 4"></path>
                    </svg>
                  </div>
                  <span className="bg-surface-bright/80 text-[#FFB909] text-data-label px-3 py-1.5 rounded-full border border-[#FFB909]/40 shadow-sm backdrop-blur-sm text-[11px] font-semibold">
                    OFFLINE ANALYSIS
                  </span>
                </div>
                
                <div className="flex items-center gap-2 mb-3 relative z-10">
                  <span className="w-2 h-2 rounded-full bg-[#FFB909]"></span>
                  <span className="text-[#FFB909] font-bold tracking-widest text-[14px]" style={{fontFamily: "'Space Mono', monospace"}}>RETROSPECTIVE REVIEW</span>
                </div>
                
                <h2 className="text-2xl font-bold text-on-surface mb-sm relative z-10 group-hover:text-[#FFB909] transition-colors duration-300">
                  Analyze Recording
                </h2>
                <p className="text-body-md text-on-surface-variant mb-margin flex-grow relative z-10 text-[14px] leading-relaxed">
                  Upload complete CTG recording datasets (.DAT, .HEA, PhysioNet WFDB format) for offline batch signal processing, feature extraction, and automated report generation.
                </p>
                
                <div className="mb-xl relative z-10">
                  <div className="text-panel-title text-outline mb-2.5 text-[11px]">SUPPORTED TELEMETRY FORMATS</div>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-surface-bright/90 backdrop-blur-sm text-on-surface text-data-label px-3 py-1.5 rounded-lg border border-outline-variant/50 text-[11px] font-semibold text-secondary">
                      .DAT + .HEA (WFDB)
                    </span>
                    <span className="bg-surface-bright/90 backdrop-blur-sm text-on-surface text-data-label px-3 py-1.5 rounded-lg border border-outline-variant/50 text-[11px] font-medium">
                      .DAT Raw Signal
                    </span>
                    <span className="bg-surface/50 text-outline text-data-label px-2.5 py-1.5 rounded-lg border border-outline-variant/30 flex items-center gap-1.5 text-[11px]">
                      <span className="material-symbols-outlined text-[13px]">lock</span> CSV / XML
                    </span>
                  </div>
                </div>

                <Link 
                  href="/upload"
                  className="w-full bg-surface-bright/40 backdrop-blur-sm border-2 border-outline-variant/60 hover:bg-surface-bright hover:border-[#FFB909]/80 text-[#FFB909] font-semibold text-[14px] py-3.5 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 relative z-10 transform hover:scale-[1.01] shadow-sm hover:shadow-[0_0_20px_rgba(255,185,9,0.25)]"
                >
                  Configure &amp; Upload Recording
                  <span className="material-symbols-outlined text-[18px]">upload</span>
                </Link>
              </div>
            </div>
            
            {/* Recent Analysis Sessions Section */}
            <div className="glass-panel border border-outline-variant/30 rounded-2xl p-6 shadow-xl fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[20px]">history</span>
                  <h3 className="text-panel-title text-on-surface text-[14px]">Recent Patient Sessions</h3>
                </div>
                <span className="text-[12px] text-primary hover:underline cursor-pointer">View All Records</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-[13px]">
                  <thead>
                    <tr className="border-b border-outline-variant/20 text-outline text-[11px] font-bold uppercase tracking-wider">
                      <th className="pb-3 px-2">Record ID</th>
                      <th className="pb-3 px-2">Patient Details</th>
                      <th className="pb-3 px-2">Mode</th>
                      <th className="pb-3 px-2">Timestamp</th>
                      <th className="pb-3 px-2">Classification</th>
                      <th className="pb-3 px-2 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-outline-variant/10">
                    {recentSessions.map((session) => (
                      <tr key={session.id} className="hover:bg-surface-container-highest/40 transition-colors">
                        <td className="py-3 px-2 font-mono text-primary font-medium">{session.id}</td>
                        <td className="py-3 px-2 text-on-surface font-medium">{session.patient}</td>
                        <td className="py-3 px-2 text-on-surface-variant">{session.type}</td>
                        <td className="py-3 px-2 text-outline">{session.date}</td>
                        <td className="py-3 px-2">
                          <span className={`px-2.5 py-1 rounded-full text-[11px] font-semibold ${
                            session.category === 'Category III' ? 'bg-error/20 text-error border border-error/30' :
                            session.category === 'Category II' ? 'bg-[#FFB909]/20 text-[#FFB909] border border-[#FFB909]/30' :
                            'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                          }`}>
                            {session.category}
                          </span>
                        </td>
                        <td className="py-3 px-2 text-right">
                          <Link href={session.href} className="text-secondary hover:text-primary font-medium hover:underline text-[12px] inline-flex items-center gap-1">
                            Inspect <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            
            {/* Bottom Security Note */}
            <div className="flex justify-center items-center gap-2 text-outline text-data-label opacity-80 fade-in-up" style={{ animationDelay: '0.4s' }}>
              <span className="material-symbols-outlined text-[16px] text-secondary">health_and_safety</span>
              Secure On-Premise System — All patient telemetry data is processed locally without external network transmission.
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
