"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LiveAnalysisDashboard() {
  const router = useRouter();
  const [currentTime, setCurrentTime] = useState("14:23:05");
  const [isLiveStreaming, setIsLiveStreaming] = useState(true);

  // Crosshair state
  const [crosshairPos, setCrosshairPos] = useState(null); // { x: px, time: string, fhr: number, uc: number }

  // Modal states
  const [activeModal, setActiveModal] = useState(null); // 'note' | 'report' | 'escalate' | 'alertDetail'
  const [newNoteText, setNewNoteText] = useState("");

  // Dynamic Timeline events
  const [timelineEvents, setTimelineEvents] = useState([
    { time: '13:21', color: '#99E1D9', bg: 'bg-[#99E1D9]', desc: 'Monitoring started — Baseline normal', risk: '15', rColor: 'text-[#99E1D9]', rBg: 'bg-[rgba(153,225,217,0.15)]' },
    { time: '13:45', color: '#FFB909', bg: 'bg-[#FFB909]', desc: 'Variable deceleration detected', risk: '30', rColor: 'text-[#FFB909]', rBg: 'bg-[rgba(255,185,9,0.15)]' },
    { time: '14:02', color: '#FF5B06', bg: 'bg-[#FF5B06]', desc: 'Variability decreased < 5 bpm (35 min)', risk: '45', rColor: 'text-[#FF5B06]', rBg: 'bg-[rgba(255,91,6,0.15)]' },
    { time: '14:05', color: '#E53E3E', bg: 'bg-[#E53E3E]', desc: 'First late deceleration — dip to 95 bpm', risk: '55', rColor: 'text-[#FF5B06]', rBg: 'bg-[rgba(255,91,6,0.15)]' },
    { time: '14:15', color: '#E53E3E', bg: 'bg-[#E53E3E]', desc: 'Recurrent late decelerations confirmed (4 events)', risk: '68', rColor: 'text-[#E53E3E]', rBg: 'bg-[rgba(229,62,62,0.15)]' },
  ]);

  useEffect(() => {
    if (!isLiveStreaming) return;
    const updateTime = () => {
      const now = new Date();
      const timeStr = now.getHours().toString().padStart(2, '0') + ':' + 
                      now.getMinutes().toString().padStart(2, '0') + ':' + 
                      now.getSeconds().toString().padStart(2, '0');
      setCurrentTime(timeStr);
    };
    
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, [isLiveStreaming]);

  // Handle Chart Hover Crosshair Calculation
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const widthRatio = Math.max(0, Math.min(1, x / rect.width));
    
    // Interpolate realistic FHR & UC values across width
    let fhrVal = Math.round(142 - Math.sin(widthRatio * Math.PI * 4) * 12);
    if (widthRatio > 0.65 && widthRatio < 0.8) {
      fhrVal = Math.round(95 + (widthRatio - 0.65) * 100);
    }
    const ucVal = Math.round(Math.max(10, Math.sin(widthRatio * Math.PI * 6) * 65));
    
    const minutesOffset = Math.round(widthRatio * 60);
    const calculatedTime = `13:${(20 + minutesOffset).toString().padStart(2, '0')}`;

    setCrosshairPos({
      x,
      time: calculatedTime,
      fhr: fhrVal,
      uc: ucVal
    });
  };

  const handleMouseLeave = () => {
    setCrosshairPos(null);
  };

  // Add Clinical Note Handler
  const handleAddNote = (e) => {
    e.preventDefault();
    if (!newNoteText.trim()) return;
    const newEvt = {
      time: currentTime.substring(0, 5),
      color: '#B0EDF9',
      bg: 'bg-[#B0EDF9]',
      desc: `Note: ${newNoteText}`,
      risk: '72',
      rColor: 'text-[#B0EDF9]',
      rBg: 'bg-[#B0EDF9]/10'
    };
    setTimelineEvents([newEvt, ...timelineEvents]);
    setNewNoteText("");
    setActiveModal(null);
  };

  return (
    <div className="bg-[#04344C] min-h-screen flex flex-col font-body-md overflow-x-hidden text-[#F0F4F8] relative">
      
      {/* TOP HEADER BAR */}
      <header className="fixed top-0 left-0 w-full h-[56px] bg-[#021F59] border-b border-[#B0EDF9]/10 z-50 flex items-center justify-between px-4">
        {/* Left Group */}
        <div className="flex items-center gap-3">
          <button onClick={() => router.push('/')} className="hover:bg-white/10 p-1.5 rounded-lg transition-colors text-[#B0EDF9] flex items-center gap-1 text-[13px] font-medium">
            <svg className="lucide lucide-arrow-left" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
            <span className="hidden sm:inline">Exit to Main</span>
          </button>
          <div className="flex items-center gap-2 text-[#B0EDF9]">
            <svg className="lucide lucide-activity" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"/></svg>
            <span className="font-panel-title font-semibold tracking-wide text-[15px]">CTG Live Assistant</span>
          </div>
          <div className="w-px h-6 bg-[#B0EDF9]/20 mx-1"></div>
          <span className="font-medium text-[14px]">Jane Doe</span>
          <span className="text-[#8BA4B8] text-[13px] border-l border-[#8BA4B8]/30 pl-2 ml-1 hidden sm:inline">GA: 38w 2d</span>
          <span className="text-[#8BA4B8] text-[13px] border-l border-[#8BA4B8]/30 pl-2 ml-1 hidden md:inline">Gravida 2 Para 1</span>
        </div>

        {/* Center Group */}
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setIsLiveStreaming(!isLiveStreaming)}
            className={`flex items-center gap-2 px-3 py-1 rounded-full border text-[12px] font-semibold transition-all cursor-pointer ${
              isLiveStreaming ? 'bg-red-500/10 border-red-500/50 text-red-400' : 'bg-amber-500/10 border-amber-500/50 text-amber-300'
            }`}
          >
            <div className={isLiveStreaming ? "live-dot" : "w-2 h-2 rounded-full bg-amber-400"} style={{width: '8px', height: '8px'}}></div>
            <span>{isLiveStreaming ? "STREAMING LIVE" : "STREAM PAUSED"}</span>
          </button>
          <div className="w-px h-6 bg-[#B0EDF9]/20 hidden sm:block"></div>
          <span className="text-[#B0EDF9] font-numeric-sm text-[14px] hidden sm:inline">{currentTime}</span>
        </div>

        {/* Right Group */}
        <div className="flex items-center gap-3">
          <div className="hidden lg:flex items-center gap-2">
            <span className="text-[#99E1D9] text-[12px]">Signal Quality:</span>
            <div className="w-[80px] h-[4px] bg-[#99E1D9]/20 rounded-full overflow-hidden">
              <div className="h-full bg-[#99E1D9]" style={{width: '91%'}}></div>
            </div>
            <span className="text-[#99E1D9] text-[12px] font-bold">91%</span>
          </div>
          
          <div className="relative">
            <button 
              onClick={() => setActiveModal('alertDetail')}
              className="relative p-1.5 text-[#8BA4B8] hover:text-[#F0F4F8] transition-colors"
            >
              <svg className="lucide lucide-bell" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>
              <span className="absolute top-0 right-0 bg-[#E53E3E] text-white text-[9px] w-4 h-4 flex items-center justify-center rounded-full font-bold">1</span>
            </button>
          </div>

          <div className="w-7 h-7 rounded-full bg-[#B0EDF9]/20 flex items-center justify-center border border-[#B0EDF9]/40 cursor-pointer">
            <svg className="lucide lucide-user text-[#B0EDF9]" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          </div>
        </div>
      </header>

      {/* ALERT BANNER */}
      <div className="mt-[56px] w-full bg-[rgba(229,62,62,0.14)] border-b-[2px] animate-alert-border px-6 py-2.5 flex flex-wrap items-center justify-between gap-2 z-40">
        <div className="flex items-center gap-2.5">
          <svg className="lucide lucide-alert-triangle text-[#E53E3E] shrink-0" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>
          <span className="font-bold text-[#E53E3E] text-[13px] tracking-wider">CRITICAL ALERT:</span>
          <span className="text-[13px] text-[#F0F4F8] font-medium">NICHD Category III CTG Pattern — Recurrent late decelerations detected.</span>
        </div>
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setActiveModal('alertDetail')}
            className="text-[12.5px] bg-[#E53E3E] text-white px-3.5 py-1 rounded-lg hover:bg-[#c53030] transition-colors font-semibold shadow-[0_0_12px_rgba(229,62,62,0.4)] cursor-pointer"
          >
            Inspect Clinical Breakdown
          </button>
        </div>
      </div>

      {/* MAIN CONTENT GRID */}
      <main className="flex-1 p-[20px] pb-[40px] grid grid-cols-1 lg:grid-cols-[74%_1fr] gap-[16px] max-w-[1800px] mx-auto w-full">
        
        {/* LEFT COLUMN */}
        <div className="flex flex-col">
          
          {/* FHR GRAPH PANEL */}
          <div className="bg-[rgba(2,31,89,0.5)] border border-[#B0EDF9]/15 rounded-[12px] p-[16px] backdrop-blur-md shadow-xl">
            <div className="flex justify-between items-center mb-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#B0EDF9] animate-ping"></span>
                <h2 className="font-data-label text-[12px] font-bold tracking-[0.08em] text-[#B0EDF9] uppercase">Fetal Heart Rate (FHR) Stream</h2>
              </div>
              <div className="text-[11px] text-[#8BA4B8]">
                Hover canvas for crosshair inspector
              </div>
            </div>

            {/* GRAPH AREA WITH CROSSHAIR HOVER */}
            <div 
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="h-[260px] bg-[rgba(2,31,89,0.7)] rounded-[8px] relative flex border border-[#B0EDF9]/10 overflow-hidden cursor-crosshair"
            >
              {/* Y-axis */}
              <div className="w-[34px] flex flex-col justify-between items-end py-[10px] pr-2 font-numeric-sm text-[11px] text-[#8BA4B8] z-20 bg-[rgba(2,31,89,0.9)] border-r border-white/5 pointer-events-none">
                <span>200</span><span>180</span><span>160</span><span>140</span><span>120</span><span>110</span><span>100</span><span>80</span><span>60</span>
              </div>
              
              {/* Graph Content Canvas */}
              <div className="flex-1 relative overflow-hidden">
                {/* Horizontal Gridlines */}
                {[200, 180, 160, 140, 120, 100, 80, 60].map((val, i) => (
                  <div key={val} className="absolute w-full border-t border-[rgba(255,255,255,0.04)]" style={{top: `${(i/7)*100}%`}}></div>
                ))}

                {/* Zones */}
                <div className="absolute top-0 w-full h-[28%] bg-[rgba(255,91,6,0.06)] pointer-events-none border-b border-[rgba(255,91,6,0.1)]">
                  <span className="absolute right-2 bottom-1 text-[10px] text-[rgba(255,91,6,0.7)]">Tachycardia &gt;160</span>
                </div>
                <div className="absolute bottom-0 w-full h-[35%] bg-[rgba(229,62,62,0.06)] pointer-events-none border-t border-[rgba(229,62,62,0.1)]">
                  <span className="absolute right-2 top-1 text-[10px] text-[rgba(229,62,62,0.7)]">Bradycardia &lt;110</span>
                </div>

                {/* Baseline */}
                <div className="absolute top-[41%] w-full border-t border-dashed border-[#99E1D9]/50">
                  <span className="absolute right-2 -top-4 text-[10px] text-[#99E1D9] font-mono">Baseline 142 bpm</span>
                </div>

                {/* Annotation marker */}
                <div className="absolute left-[70%] top-[38%] flex flex-col items-center pointer-events-none">
                  <div className="text-[#E53E3E] text-[10px]">▼</div>
                  <span className="absolute -top-6 text-[10px] font-bold text-[#E53E3E] whitespace-nowrap bg-[#021F59]/80 px-1 rounded">Late Decel (95 bpm)</span>
                  <div className="h-[156px] border-l border-dashed border-[#E53E3E]"></div>
                </div>

                {/* Current Time Cursor */}
                <div className="absolute right-[5%] top-0 h-full border-l border-dashed border-[#FFB909] flex flex-col items-center z-20 pointer-events-none">
                  <span className="text-[#FFB909] text-[9px] bg-[#021F59] px-1 rounded-sm -mt-2 font-mono font-bold">NOW</span>
                </div>

                {/* FHR Waveform SVG */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none" viewBox="0 0 1000 260">
                  <path d="M0,105 C20,110 40,100 60,108 C80,112 100,102 120,106 C150,70 170,60 200,105 C230,110 250,100 280,107 C300,75 320,65 350,106 C380,110 400,103 450,105 C500,108 550,104 600,106 C630,105 650,110 680,170 C700,210 720,200 750,170 C780,140 800,110 830,107 C860,104 900,108 950,105" fill="none" stroke="#B0EDF9" strokeWidth="2.5" vectorEffect="non-scaling-stroke"></path>
                </svg>

                {/* INTERACTIVE HOVER CROSSHAIR */}
                {crosshairPos && (
                  <>
                    <div className="crosshair-line" style={{ left: `${crosshairPos.x}px` }}></div>
                    <div 
                      className="chart-tooltip" 
                      style={{ 
                        left: `${crosshairPos.x}px`, 
                        top: '40%' 
                      }}
                    >
                      <div className="text-[10px] text-[#8BA4B8] font-mono border-b border-white/10 pb-1 mb-1 flex justify-between gap-3">
                        <span>TIME: {crosshairPos.time}</span>
                        <span className="text-[#99E1D9]">LIVE INSPECTION</span>
                      </div>
                      <div className="text-[12px] font-bold text-[#B0EDF9] flex items-center justify-between gap-4">
                        <span>FHR:</span>
                        <span className="font-mono text-[14px] text-white">{crosshairPos.fhr} bpm</span>
                      </div>
                      <div className="text-[11px] text-[#FFB909] flex items-center justify-between gap-4">
                        <span>UC:</span>
                        <span className="font-mono text-white">{crosshairPos.uc} mmHg</span>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Annotation Lane */}
            <div className="h-[18px] w-full mt-2 ml-[34px] flex gap-1 pr-[5%]">
              <div className="h-full bg-[#1a4d40] rounded-sm w-[40%] text-[9px] text-[#99E1D9] flex items-center px-2 font-medium">Normal Baseline</div>
              <div className="h-full bg-[rgba(255,185,9,0.25)] rounded-sm w-[20%] text-[9px] text-[#FFB909] flex items-center px-2 font-medium">Minimal Variability</div>
              <div className="h-full bg-[rgba(229,62,62,0.3)] rounded-sm flex-1 text-[9px] text-[#E53E3E] flex items-center px-2 font-bold">Recurrent Late Decels</div>
            </div>

            {/* X-axis */}
            <div className="ml-[34px] pr-[5%] flex justify-between mt-1 font-numeric-sm text-[10px] text-[#8BA4B8]">
              <span>13:20</span><span>13:30</span><span>13:40</span><span>13:50</span><span>14:00</span><span>14:10</span><span>14:20</span>
            </div>
          </div>

          {/* UC GRAPH PANEL */}
          <div className="bg-[rgba(2,31,89,0.5)] border border-[#B0EDF9]/15 rounded-[12px] p-[16px] mt-[16px] backdrop-blur-md shadow-xl">
            <h2 className="font-data-label text-[12px] font-bold tracking-[0.08em] text-[#8BA4B8] uppercase mb-2">Uterine Contractions (UC / Toco)</h2>
            <div className="h-[130px] bg-[rgba(2,31,89,0.7)] rounded-[8px] relative flex border border-[#B0EDF9]/10 overflow-hidden">
              <div className="w-[34px] flex flex-col justify-between items-end py-[10px] pr-2 font-numeric-sm text-[11px] text-[#8BA4B8] z-20 bg-[rgba(2,31,89,0.9)] border-r border-white/5">
                <span>100</span><span>50</span><span>0</span>
              </div>
              <div className="flex-1 relative overflow-hidden">
                {[100, 75, 50, 25, 0].map((val, i) => (
                  <div key={val} className="absolute w-full border-t border-[rgba(255,255,255,0.04)]" style={{top: `${(i/4)*100}%`}}></div>
                ))}

                <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1000 130">
                  <path d="M0,125 L100,125 C150,125 180,25 200,25 C220,25 250,125 300,125 L400,125 C450,125 480,35 500,35 C520,35 550,125 600,125 L700,125 C730,125 750,30 780,30 C810,30 830,125 880,125 L1000,125" fill="rgba(255,185,9,0.12)" stroke="#FFB909" strokeWidth="2" vectorEffect="non-scaling-stroke"></path>
                </svg>
                <span className="absolute left-[19%] top-[10px] font-numeric-sm text-[10px] text-[#FFB909] font-bold">Peak C5: 68 mmHg</span>
                <span className="absolute left-[49%] top-[18px] font-numeric-sm text-[10px] text-[#FFB909] font-bold">Peak C6: 62 mmHg</span>
                <span className="absolute left-[77%] top-[15px] font-numeric-sm text-[10px] text-[#FFB909] font-bold">Peak C7: 70 mmHg</span>
              </div>
            </div>
          </div>

          {/* PATTERN METRIC CARDS */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-[16px] mt-[16px]">
            <div className="bg-[rgba(10,36,113,0.6)] border border-[#B0EDF9]/15 rounded-[12px] p-[16px] flex flex-col backdrop-blur-md">
              <span className="font-data-label text-[11px] text-[#8BA4B8] mb-1">BASELINE</span>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="font-numeric-xl text-[28px] font-bold text-[#F0F4F8]">142</span>
                <span className="text-[#F0F4F8] text-[13px]">bpm</span>
              </div>
              <div className="bg-[#1a4d40] text-[#99E1D9] border border-[#99E1D9] rounded-md px-2 py-0.5 text-[11px] w-fit font-bold tracking-wide">NORMAL</div>
            </div>
            
            <div className="bg-[rgba(10,36,113,0.6)] border border-[#B0EDF9]/15 rounded-[12px] p-[16px] flex flex-col backdrop-blur-md">
              <span className="font-data-label text-[11px] text-[#8BA4B8] mb-1">VARIABILITY</span>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="font-numeric-xl text-[28px] font-bold text-[#FFB909]">3.2</span>
                <span className="text-[#FFB909] text-[13px]">bpm</span>
              </div>
              <div className="bg-[#FFB909]/20 text-[#FFB909] border border-[#FFB909] rounded-md px-2 py-0.5 text-[11px] w-fit font-bold tracking-wide">MINIMAL (&lt;5 bpm)</div>
            </div>

            <div className="bg-[rgba(10,36,113,0.6)] border border-[#B0EDF9]/15 rounded-[12px] p-[16px] flex flex-col backdrop-blur-md">
              <span className="font-data-label text-[11px] text-[#8BA4B8] mb-1">ACCELERATIONS</span>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="font-numeric-xl text-[28px] font-bold text-[#FF5B06]">0</span>
                <span className="text-[#FF5B06] text-[13px]">/ 20min</span>
              </div>
              <div className="bg-[#FF5B06]/15 text-[#FF5B06] border border-[#FF5B06] rounded-md px-2 py-0.5 text-[11px] w-fit font-bold tracking-wide">ABSENT</div>
            </div>

            <div className="bg-[rgba(10,36,113,0.6)] border border-error/40 rounded-[12px] p-[16px] flex flex-col backdrop-blur-md glow-red">
              <span className="font-data-label text-[11px] text-[#8BA4B8] mb-1">DECELERATIONS</span>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="font-numeric-xl text-[28px] font-bold text-[#E53E3E]">4</span>
                <span className="text-[#E53E3E] text-[13px]">late</span>
              </div>
              <div className="bg-[#E53E3E]/20 text-[#E53E3E] border border-[#E53E3E] rounded-md px-2 py-0.5 text-[11px] w-fit font-bold tracking-wide">RECURRENT (75%)</div>
            </div>
          </div>

          {/* AI CLINICAL SUMMARY */}
          <div className="bg-[rgba(10,36,113,0.6)] border border-[#B0EDF9]/15 rounded-[12px] p-[20px] mt-[16px] backdrop-blur-md shadow-xl">
            <div className="flex justify-between items-center mb-3">
              <div className="flex items-center gap-2">
                <svg className="lucide lucide-sparkles text-[#B0EDF9]" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/></svg>
                <span className="font-data-label font-bold text-[#B0EDF9] text-[13px] tracking-wider">AI CLINICAL DIAGNOSTIC SUMMARY</span>
              </div>
              <span className="text-[12px] text-[#FFB909] font-mono font-bold">Confidence: 85%</span>
            </div>

            <p className="text-[14px] text-[#F0F4F8] leading-[1.7] mb-3">
              Recurrent late decelerations detected (4 in 20 min, 75% recurrence). Combined with minimal variability (3.2 bpm for &gt;30 min), this pattern meets NICHD Category III criteria.
            </p>

            <div className="flex flex-wrap gap-2 items-center">
              <span className="bg-[#E53E3E]/20 border border-[#E53E3E] text-[#E53E3E] px-3 py-1 rounded-full text-[11.5px] font-bold">NICHD Category III</span>
              <span className="bg-[#1a4d40] border border-[#99E1D9] text-[#99E1D9] px-3 py-1 rounded-full text-[11.5px] font-medium">Standard: FIGO 2015</span>
              <button 
                onClick={() => setActiveModal('alertDetail')}
                className="ml-auto text-[12px] text-secondary hover:text-primary underline cursor-pointer"
              >
                Read full diagnostic protocol &rarr;
              </button>
            </div>
          </div>

          {/* EVENT TIMELINE PANEL */}
          <div className="bg-[rgba(10,36,113,0.6)] border border-[#B0EDF9]/15 rounded-[12px] p-[20px] mt-[16px] backdrop-blur-md">
            <div className="flex justify-between items-center mb-3">
              <div className="flex items-center gap-2">
                <svg className="lucide lucide-clock text-[#B0EDF9]" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                <span className="font-data-label font-bold text-[#B0EDF9] text-[12px] tracking-wider">TIMELINE ANNOTATIONS</span>
              </div>
              <button 
                onClick={() => setActiveModal('note')}
                className="text-[12px] bg-secondary-container/80 text-secondary-fixed-dim hover:bg-secondary-container px-3 py-1 rounded-lg border border-secondary/30 transition-all cursor-pointer font-semibold"
              >
                + Add Custom Note
              </button>
            </div>
            
            <div className="flex flex-col gap-1">
              {timelineEvents.map((evt, i) => (
                <div key={i} className="flex items-center gap-3 py-2 border-b border-white/5 hover:bg-white/5 px-2 rounded-lg transition-colors">
                  <span className="font-numeric-sm text-[12px] text-[#8BA4B8] w-12">{evt.time}</span>
                  <div className={`w-2 h-2 rounded-full ${evt.bg}`}></div>
                  <span className="text-[13px] text-[#F0F4F8] flex-1">{evt.desc}</span>
                  <span className={`font-numeric-sm text-[11px] ${evt.rColor} ${evt.rBg} px-2 py-0.5 rounded font-mono`}>Risk: {evt.risk}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN (Sticky Actions Panel) */}
        <div className="flex flex-col gap-[16px] lg:sticky lg:top-[72px] h-fit">
          
          {/* RISK SCORE GAUGE PANEL */}
          <div className="bg-[rgba(10,36,113,0.6)] border border-error/30 rounded-[12px] p-[20px] flex flex-col items-center text-center backdrop-blur-md glow-red">
            <span className="font-data-label text-[11px] text-[#8BA4B8] tracking-widest mb-2 font-bold">ACTIVE RISK SCORE</span>
            
            <div className="relative w-[190px] h-[190px] flex items-center justify-center my-2">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" fill="none" r="40" stroke="rgba(255,255,255,0.08)" strokeWidth="12"></circle>
                <circle cx="50" cy="50" fill="none" r="40" stroke="#E53E3E" strokeDasharray="181 251.3" strokeDashoffset="0" strokeWidth="12" strokeLinecap="round"></circle>
              </svg>
              
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <span className="font-numeric-xl text-[44px] font-bold text-[#E53E3E] leading-none">72</span>
                <span className="text-[12px] text-[#8BA4B8] font-semibold mt-1">HIGH RISK</span>
              </div>
            </div>
            
            <span className="text-[12px] text-[#E53E3E] font-bold">↑ Trend (+57 in last hour)</span>
          </div>

          {/* QUICK ACTIONS BUTTONS */}
          <div className="bg-[rgba(10,36,113,0.6)] border border-[#B0EDF9]/15 rounded-[12px] p-[18px] backdrop-blur-md">
            <span className="font-data-label text-[11px] text-[#8BA4B8] uppercase block mb-3 font-bold">CLINICAL ACTIONS</span>
            <div className="flex flex-col gap-2.5">
              <button 
                onClick={() => setActiveModal('note')}
                className="w-full py-2.5 px-3 rounded-xl border border-white/20 text-[#F0F4F8] hover:bg-white/10 transition-colors flex items-center justify-center gap-2 text-[13px] font-medium cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">edit_note</span>
                Add Clinical Note
              </button>
              
              <button 
                onClick={() => setActiveModal('report')}
                className="w-full py-2.5 px-3 rounded-xl border border-white/20 text-[#F0F4F8] hover:bg-white/10 transition-colors flex items-center justify-center gap-2 text-[13px] font-medium cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">picture_as_pdf</span>
                Generate Clinical Report
              </button>

              <button 
                onClick={() => setActiveModal('escalate')}
                className="w-full py-2.5 px-3 rounded-xl bg-error/20 border border-error text-error hover:bg-error/30 transition-colors flex items-center justify-center gap-2 text-[13px] font-bold cursor-pointer glow-red"
              >
                <span className="material-symbols-outlined text-[18px]">warning</span>
                Escalate Alert to Lead
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* MODAL DIALOGS */}
      {activeModal === 'note' && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center p-4 modal-backdrop">
          <div className="bg-[#021F59] border border-[#B0EDF9]/40 rounded-2xl p-6 max-w-md w-full shadow-2xl modal-content">
            <h3 className="text-xl font-bold text-on-surface mb-2 flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary">edit_note</span> Add Clinical Annotation
            </h3>
            <p className="text-[13px] text-on-surface-variant mb-4">
              Enter bedside clinical notes to pin directly onto the labor monitoring timeline.
            </p>
            <form onSubmit={handleAddNote}>
              <textarea 
                value={newNoteText} 
                onChange={(e) => setNewNoteText(e.target.value)}
                placeholder="e.g. Administered maternal oxygen, position changed to left lateral."
                className="w-full h-28 bg-surface-container/80 border border-outline-variant/40 rounded-xl p-3 text-body-md text-on-surface mb-4 focus:border-secondary outline-none text-[13.5px]"
                autoFocus
              ></textarea>
              <div className="flex justify-end gap-3">
                <button type="button" onClick={() => setActiveModal(null)} className="px-4 py-2 text-[13px] text-on-surface-variant hover:text-on-surface">
                  Cancel
                </button>
                <button type="submit" className="px-5 py-2 bg-primary text-on-primary font-semibold rounded-xl text-[13px] shadow-lg">
                  Save Annotation
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {activeModal === 'report' && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center p-4 modal-backdrop">
          <div className="bg-[#021F59] border border-[#B0EDF9]/40 rounded-2xl p-6 max-w-lg w-full shadow-2xl modal-content">
            <h3 className="text-xl font-bold text-on-surface mb-2 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">description</span> PDF Clinical Summary Report
            </h3>
            <p className="text-[13px] text-on-surface-variant mb-4">
              Live monitoring record ready for PDF generation. Includes 60 min trace and AI diagnostic log.
            </p>
            <div className="bg-surface-container/60 p-4 rounded-xl border border-outline-variant/20 mb-5 text-[12.5px] space-y-2">
              <div className="flex justify-between">
                <span className="text-outline">Patient:</span>
                <span className="text-on-surface font-semibold">Jane Doe (GA: 38w 2d)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-outline">NICHD Classification:</span>
                <span className="text-error font-bold">Category III</span>
              </div>
              <div className="flex justify-between">
                <span className="text-outline">Risk Score Peak:</span>
                <span className="text-error font-mono font-bold">72 / 100</span>
              </div>
            </div>
            <div className="flex justify-end gap-3">
              <button onClick={() => setActiveModal(null)} className="px-4 py-2 text-[13px] text-on-surface-variant hover:text-on-surface">
                Close
              </button>
              <button onClick={() => { alert("PDF Report Generated & Downloaded!"); setActiveModal(null); }} className="px-5 py-2 bg-secondary-container text-secondary-fixed-dim border border-secondary/50 font-semibold rounded-xl text-[13px]">
                Download PDF
              </button>
            </div>
          </div>
        </div>
      )}

      {activeModal === 'escalate' && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center p-4 modal-backdrop">
          <div className="bg-[#021F59] border border-error/50 rounded-2xl p-6 max-w-md w-full shadow-2xl modal-content glow-red">
            <h3 className="text-xl font-bold text-error mb-2 flex items-center gap-2">
              <span className="material-symbols-outlined text-error">warning</span> Confirm Alert Escalation
            </h3>
            <p className="text-[13.5px] text-on-surface mb-4">
              Send immediate urgent notification to the On-Call Senior Obstetrician for Labor Room 3?
            </p>
            <div className="flex justify-end gap-3">
              <button onClick={() => setActiveModal(null)} className="px-4 py-2 text-[13px] text-on-surface-variant hover:text-on-surface">
                Cancel
              </button>
              <button onClick={() => { alert("Alert Escalated to On-Call Senior Obstetrician!"); setActiveModal(null); }} className="px-5 py-2 bg-error text-white font-bold rounded-xl text-[13px] shadow-lg">
                Escalate Now
              </button>
            </div>
          </div>
        </div>
      )}

      {activeModal === 'alertDetail' && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center p-4 modal-backdrop">
          <div className="bg-[#021F59] border border-[#B0EDF9]/40 rounded-2xl p-6 max-w-xl w-full shadow-2xl modal-content">
            <h3 className="text-xl font-bold text-on-surface mb-2 flex items-center gap-2">
              <span className="material-symbols-outlined text-error">clinical_notes</span> NICHD Category III Diagnostic Criteria
            </h3>
            <div className="text-[13px] text-on-surface-variant space-y-3 mb-6">
              <p>
                <strong className="text-error">Category III CTG patterns are abnormal</strong> and require immediate evaluation and prompt clinical management.
              </p>
              <ul className="list-disc pl-5 space-y-1 text-[#F0F4F8]">
                <li>Absent baseline FHR variability with recurrent late decelerations</li>
                <li>Absent baseline FHR variability with recurrent variable decelerations</li>
                <li>Bradycardia (&lt; 110 bpm) with absent variability</li>
                <li>Sinusoidal pattern</li>
              </ul>
            </div>
            <div className="flex justify-end">
              <button onClick={() => setActiveModal(null)} className="px-5 py-2 bg-primary text-on-primary font-semibold rounded-xl text-[13px]">
                Acknowledge &amp; Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
