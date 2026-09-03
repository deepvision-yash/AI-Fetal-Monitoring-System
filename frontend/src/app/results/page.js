"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function OfflineAnalysisDashboard() {
  const router = useRouter();

  // Crosshair state
  const [crosshairPos, setCrosshairPos] = useState(null); // { x: px, time: string, fhr: number, uc: number }
  const [activeModal, setActiveModal] = useState(null); // 'pdf' | 'csv' | 'share'

  // Scrubbing state
  const [scrubberPos, setScrubberPos] = useState(0); // 0% to 100%

  // Handle Chart Hover Crosshair Calculation on long trace
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const widthRatio = Math.max(0, Math.min(1, x / rect.width));
    
    // Calculate timestamp over 105 mins (10:30 to 12:15)
    const totalMinutes = 105;
    const currentMin = Math.round(widthRatio * totalMinutes);
    const startHour = 10;
    const startMin = 30;
    const totalMinFromStart = startMin + currentMin;
    const hour = startHour + Math.floor(totalMinFromStart / 60);
    const minute = totalMinFromStart % 60;
    const calculatedTime = `${hour}:${minute.toString().padStart(2, '0')}`;

    let fhrVal = Math.round(139 + Math.sin(widthRatio * Math.PI * 8) * 10);
    if (widthRatio > 0.7) {
      fhrVal = Math.round(98 + (widthRatio - 0.7) * 80);
    }
    const ucVal = Math.round(Math.max(10, Math.sin(widthRatio * Math.PI * 10) * 70));

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

  return (
    <div className="bg-[#04344C] min-h-screen flex flex-col font-body-md overflow-x-hidden text-[#F0F4F8] relative">
      
      {/* TOP HEADER BAR */}
      <header className="fixed top-0 left-0 w-full h-[56px] bg-[#021F59] border-b border-[#B0EDF9]/10 z-50 flex items-center justify-between px-4">
        {/* Left Group */}
        <div className="flex items-center gap-3">
          <button onClick={() => router.push('/upload')} className="hover:bg-white/10 p-1.5 rounded-lg transition-colors text-[#B0EDF9] flex items-center gap-1 text-[13px] font-medium">
            <svg className="lucide lucide-arrow-left" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
            <span className="hidden sm:inline">Back to Upload</span>
          </button>
          <div className="flex items-center gap-2 text-[#B0EDF9]">
            <svg className="lucide lucide-activity" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"/></svg>
            <span className="font-panel-title font-semibold tracking-wide text-[15px]">Offline Analysis Results</span>
          </div>
          <div className="w-px h-6 bg-[#B0EDF9]/20 mx-1"></div>
          <span className="font-medium text-[14px]">Jane Doe</span>
          <span className="text-[#8BA4B8] text-[13px] border-l border-[#8BA4B8]/30 pl-2 ml-1 hidden sm:inline">GA: 38w 2d</span>
        </div>

        {/* Center Group */}
        <div className="flex items-center gap-3">
          <div className="bg-[rgba(255,185,9,0.15)] border border-[#FFB909] text-[#FFB909] px-2.5 py-0.5 rounded-full text-[11px] font-bold tracking-wide">
            OFFLINE ANALYSIS
          </div>
          <span className="text-[#B0EDF9] font-numeric-sm text-[13px] hidden md:inline">
            Recording: Jan 15 2024 (1h 45min)
          </span>
          <div className="flex items-center gap-1 ml-1 text-[#99E1D9] text-[12px] font-bold">
            <span>✓ Processed</span>
          </div>
        </div>

        {/* Right Group */}
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setActiveModal('pdf')}
            className="bg-primary text-on-primary hover:bg-primary-fixed px-3 py-1 rounded-lg text-[12.5px] font-bold transition-all shadow-md flex items-center gap-1.5 cursor-pointer"
          >
            <span className="material-symbols-outlined text-[16px]">picture_as_pdf</span>
            Export PDF
          </button>
        </div>
      </header>

      {/* MAIN CONTENT GRID */}
      <main className="flex-1 p-[20px] pb-[40px] mt-[56px] grid grid-cols-1 lg:grid-cols-[74%_1fr] gap-[16px] max-w-[1800px] mx-auto w-full">
        
        {/* LEFT COLUMN */}
        <div className="flex flex-col">
          
          {/* FHR GRAPH PANEL (Scrollable Trace with Crosshair) */}
          <div className="bg-[rgba(2,31,89,0.5)] border border-[#B0EDF9]/15 rounded-[12px] p-[16px] backdrop-blur-md shadow-xl">
            <div className="flex justify-between items-center mb-3">
              <h2 className="font-data-label text-[12px] font-bold tracking-[0.08em] text-[#B0EDF9] uppercase">Fetal Heart Rate (FHR) Retrospective Trace</h2>
              <div className="text-[11px] text-[#8BA4B8]">
                Scroll horizontally or hover canvas to inspect signal
              </div>
            </div>

            {/* GRAPH AREA */}
            <div className="h-[260px] bg-[rgba(2,31,89,0.7)] rounded-[8px] relative flex border border-[#B0EDF9]/10">
              {/* Y-axis (Sticky) */}
              <div className="w-[34px] flex flex-col justify-between items-end py-[10px] pr-2 font-numeric-sm text-[11px] text-[#8BA4B8] z-20 bg-[rgba(2,31,89,0.95)] border-r border-white/5 pointer-events-none">
                <span>200</span><span>180</span><span>160</span><span>140</span><span>120</span><span>110</span><span>100</span><span>80</span><span>60</span>
              </div>
              
              {/* Scrollable Container */}
              <div 
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="flex-1 relative overflow-x-auto overflow-y-hidden custom-scrollbar cursor-crosshair"
              >
                <div className="min-w-[200%] h-full relative">
                  
                  {/* Horizontal Gridlines */}
                  {[200, 180, 160, 140, 120, 100, 80, 60].map((val, i) => (
                    <div key={val} className="absolute w-full border-t border-[rgba(255,255,255,0.04)]" style={{top: `${(i/7)*100}%`}}></div>
                  ))}

                  {/* Zones */}
                  <div className="absolute top-0 w-full h-[28%] bg-[rgba(255,91,6,0.06)] pointer-events-none border-b border-[rgba(255,91,6,0.1)]">
                    <span className="sticky left-2 bottom-1 text-[10px] text-[rgba(255,91,6,0.7)] inline-block font-mono">Tachycardia &gt;160</span>
                  </div>
                  <div className="absolute bottom-0 w-full h-[35%] bg-[rgba(229,62,62,0.06)] pointer-events-none border-t border-[rgba(229,62,62,0.1)]">
                    <span className="sticky left-2 top-1 text-[10px] text-[rgba(229,62,62,0.7)] inline-block font-mono">Bradycardia &lt;110</span>
                  </div>

                  {/* Baseline */}
                  <div className="absolute top-[43%] w-full border-t border-dashed border-[#99E1D9]/50">
                    <span className="sticky left-2 -top-4 text-[10px] text-[#99E1D9] inline-block font-mono font-semibold">Baseline 139 bpm</span>
                  </div>

                  {/* Deceleration markers */}
                  <div className="absolute left-[76%] top-[30%] flex flex-col items-center pointer-events-none">
                    <div className="text-[#E53E3E] text-[10px]">▼</div>
                    <span className="absolute -top-6 text-[10px] font-bold text-[#E53E3E] whitespace-nowrap bg-[#021F59]/80 px-1 rounded">Late Decel #1</span>
                    <div className="h-[145px] border-l border-dashed border-[#E53E3E]"></div>
                  </div>

                  <div className="absolute left-[87%] top-[30%] flex flex-col items-center pointer-events-none">
                    <div className="text-[#E53E3E] text-[10px]">▼</div>
                    <span className="absolute -top-6 text-[10px] font-bold text-[#E53E3E] whitespace-nowrap bg-[#021F59]/80 px-1 rounded">Late Decel #2</span>
                    <div className="h-[130px] border-l border-dashed border-[#E53E3E]"></div>
                  </div>

                  {/* Long Trace SVG */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none" viewBox="0 0 2000 260">
                    <path d="M0,115 Q50,110 100,120 T200,110 T300,120 T400,115 T450,50 T480,115 T500,118 T600,110 T700,120 T800,115 
                             T900,118 T930,190 T950,115 T1000,118 T1100,115 T1200,118 T1300,115 
                             T1400,118 T1500,200 T1550,115 T1600,118 T1700,190 T1750,115 T1800,118 T1900,210 T1950,130 T2000,120" 
                          fill="none" stroke="#B0EDF9" strokeWidth="2.5" vectorEffect="non-scaling-stroke"></path>
                  </svg>
                  
                  {/* Annotation Lane inside scroll area */}
                  <div className="absolute bottom-[20px] w-full h-[16px] flex px-2 text-[9px] font-medium opacity-80 pointer-events-none">
                    <div className="h-full bg-[#10B981]/80 text-white flex items-center px-2" style={{width: '28.5%'}}>Normal Baseline</div>
                    <div className="h-full bg-[#99E1D9]/80 text-[#021F59] flex items-center px-2" style={{width: '9.5%'}}>Acceleration</div>
                    <div className="h-full bg-[#10B981]/80 text-white flex items-center px-2" style={{width: '9.5%'}}></div>
                    <div className="h-full bg-[#FFB909]/80 text-[#021F59] flex items-center px-2" style={{width: '9.5%'}}>Var Decel</div>
                    <div className="h-full bg-[#FF5B06]/80 text-white flex items-center px-2 border-r border-white/20" style={{width: '19%'}}>Minimal Var.</div>
                    <div className="h-full bg-[#E53E3E]/80 text-white flex items-center px-2 font-bold" style={{width: '24%'}}>Late Decels x3</div>
                  </div>

                  {/* X-axis */}
                  <div className="absolute bottom-0 w-full flex justify-between font-numeric-sm text-[10px] text-[#8BA4B8] px-2 pointer-events-none">
                    <span>10:30</span><span>10:40</span><span>10:50</span><span>11:00</span><span>11:10</span><span>11:20</span><span>11:30</span><span>11:40</span><span>11:50</span><span>12:00</span><span>12:10</span><span className="pr-4">12:15</span>
                  </div>

                  {/* Crosshair on long trace */}
                  {crosshairPos && (
                    <>
                      <div className="crosshair-line" style={{ left: `${crosshairPos.x}px` }}></div>
                      <div 
                        className="chart-tooltip" 
                        style={{ left: `${crosshairPos.x}px`, top: '40%' }}
                      >
                        <div className="text-[10px] text-[#8BA4B8] font-mono border-b border-white/10 pb-1 mb-1 flex justify-between gap-3">
                          <span>TIME: {crosshairPos.time}</span>
                          <span className="text-[#99E1D9]">OFFLINE INSPECTION</span>
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
            </div>
          </div>

          {/* UC GRAPH PANEL */}
          <div className="bg-[rgba(2,31,89,0.5)] border border-[#B0EDF9]/15 rounded-[12px] p-[16px] mt-[16px] backdrop-blur-md shadow-xl">
            <h2 className="font-data-label text-[12px] font-bold tracking-[0.08em] text-[#8BA4B8] uppercase mb-2">Uterine Contractions (UC)</h2>
            <div className="h-[130px] bg-[rgba(2,31,89,0.7)] rounded-[8px] relative flex border border-[#B0EDF9]/10">
              <div className="w-[34px] flex flex-col justify-between items-end py-[10px] pr-2 font-numeric-sm text-[11px] text-[#8BA4B8] z-20 bg-[rgba(2,31,89,0.95)] border-r border-white/5">
                <span>100</span><span>50</span><span>0</span>
              </div>
              <div className="flex-1 relative overflow-x-auto overflow-y-hidden custom-scrollbar">
                <div className="min-w-[200%] h-full relative">
                  {[100, 75, 50, 25, 0].map((val, i) => (
                    <div key={val} className="absolute w-full border-t border-[rgba(255,255,255,0.04)]" style={{top: `${(i/4)*100}%`}}></div>
                  ))}

                  <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 2000 130">
                    <path d="M0,125 L200,125 Q250,125 280,25 Q310,125 360,125 L500,125 Q550,125 580,35 Q610,125 660,125 L850,125 Q900,125 930,40 Q960,125 1010,125 L1200,125 Q1250,125 1280,30 Q1310,125 1360,125 L1450,125 Q1500,125 1530,35 Q1560,125 1610,125 L1700,125 Q1750,125 1780,40 Q1810,125 1860,125 L2000,125" 
                          fill="rgba(255,185,9,0.12)" stroke="#FFB909" strokeWidth="2" vectorEffect="non-scaling-stroke"></path>
                  </svg>
                  <span className="absolute left-[13.5%] top-[10px] font-numeric-sm text-[10px] text-[#FFB909] font-bold">C1: 58 mmHg</span>
                  <span className="absolute left-[28.5%] top-[20px] font-numeric-sm text-[10px] text-[#FFB909] font-bold">C2: 64 mmHg</span>
                  <span className="absolute left-[46%] top-[25px] font-numeric-sm text-[10px] text-[#FFB909] font-bold">C3: 60 mmHg</span>
                  <span className="absolute left-[63.5%] top-[15px] font-numeric-sm text-[10px] text-[#FFB909] font-bold">C4: 70 mmHg</span>
                </div>
              </div>
            </div>
          </div>

          {/* TIMELINE SCRUBBER */}
          <div className="w-full h-[60px] mt-[16px] flex flex-col justify-center px-2">
            <div className="flex justify-between items-center mb-1">
              <span className="font-numeric-sm text-[11px] text-[#8BA4B8]">Start: 10:30</span>
              <span className="text-[12px] text-[#B0EDF9] font-semibold">Active Window: 10:30 – 12:15 (Full Trace)</span>
              <span className="font-numeric-sm text-[11px] text-[#8BA4B8]">End: 12:15</span>
            </div>
            
            <div className="flex items-center gap-3 w-full">
              <div 
                onClick={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const pct = ((e.clientX - rect.left) / rect.width) * 100;
                  setScrubberPos(pct);
                }}
                className="flex-1 h-[10px] bg-white/10 rounded-full relative overflow-hidden cursor-pointer"
              >
                <div className="absolute left-0 h-full bg-[#99E1D9]/40" style={{width: '38%'}}></div>
                <div className="absolute left-[38%] h-full bg-[#FFB909]/40" style={{width: '19%'}}></div>
                <div className="absolute left-[57%] h-full bg-[#FF5B06]/50" style={{width: '19%'}}></div>
                <div className="absolute left-[76%] h-full bg-[#E53E3E]/60" style={{width: '24%'}}></div>
                
                {/* Scrubber Handle */}
                <div 
                  className="absolute top-1/2 -translate-y-1/2 w-[16px] h-[16px] bg-[#B0EDF9] rounded-full shadow-[0_0_10px_rgba(176,237,249,0.8)] border border-white"
                  style={{ left: `${scrubberPos}%` }}
                ></div>
              </div>
            </div>
          </div>

          {/* PATTERN METRIC CARDS */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-[16px] mt-[16px]">
            <div className="bg-[rgba(10,36,113,0.6)] border border-[#B0EDF9]/15 rounded-[12px] p-[16px] flex flex-col backdrop-blur-md">
              <span className="font-data-label text-[11px] text-[#8BA4B8] mb-1">BASELINE</span>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="font-numeric-xl text-[28px] font-bold text-[#F0F4F8]">139</span>
                <span className="text-[#F0F4F8] text-[13px]">bpm avg</span>
              </div>
              <div className="bg-[#1a4d40] text-[#99E1D9] border border-[#99E1D9] rounded-md px-2 py-0.5 text-[11px] w-fit font-bold tracking-wide">NORMAL</div>
            </div>

            <div className="bg-[rgba(10,36,113,0.6)] border border-[#B0EDF9]/15 rounded-[12px] p-[16px] flex flex-col backdrop-blur-md">
              <span className="font-data-label text-[11px] text-[#8BA4B8] mb-1">VARIABILITY</span>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="font-numeric-xl text-[28px] font-bold text-[#FFB909]">&lt; 5</span>
                <span className="text-[#FFB909] text-[13px]">bpm</span>
              </div>
              <div className="bg-[#FFB909]/20 text-[#FFB909] border border-[#FFB909] rounded-md px-2 py-0.5 text-[11px] w-fit font-bold tracking-wide">MINIMAL (35 min)</div>
            </div>

            <div className="bg-[rgba(10,36,113,0.6)] border border-[#B0EDF9]/15 rounded-[12px] p-[16px] flex flex-col backdrop-blur-md">
              <span className="font-data-label text-[11px] text-[#8BA4B8] mb-1">ACCELERATIONS</span>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="font-numeric-xl text-[28px] font-bold text-[#99E1D9]">2</span>
                <span className="text-[#99E1D9] text-[13px]">detected</span>
              </div>
              <div className="bg-[#1a4d40] text-[#99E1D9] border border-[#99E1D9] rounded-md px-2 py-0.5 text-[11px] w-fit font-bold tracking-wide">PRESENT</div>
            </div>

            <div className="bg-[rgba(10,36,113,0.6)] border border-[#FF5B06]/40 rounded-[12px] p-[16px] flex flex-col backdrop-blur-md glow-amber">
              <span className="font-data-label text-[11px] text-[#8BA4B8] mb-1">DECELERATIONS</span>
              <div className="flex flex-col mb-1">
                <span className="font-numeric-xl text-[22px] font-bold text-[#FF5B06]">3 late</span>
                <span className="font-numeric-xl text-[14px] font-bold text-[#FFB909]">1 variable</span>
              </div>
              <div className="bg-[#FF5B06]/20 text-[#FF5B06] border border-[#FF5B06] rounded-md px-2 py-0.5 text-[11px] w-fit font-bold tracking-wide">EVOLUTION CONCERN</div>
            </div>
          </div>

          {/* AI CLINICAL ANALYSIS */}
          <div className="bg-[rgba(10,36,113,0.6)] border border-[#B0EDF9]/15 rounded-[12px] p-[20px] mt-[16px] backdrop-blur-md shadow-xl">
            <div className="flex justify-between items-center mb-3">
              <div className="flex items-center gap-2">
                <svg className="lucide lucide-sparkles text-[#B0EDF9]" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/></svg>
                <span className="font-data-label font-bold text-[#B0EDF9] text-[13px] tracking-wider">RETROSPECTIVE AI EVALUATION SUMMARY</span>
              </div>
              <span className="text-[12px] text-[#FFB909] font-mono font-bold">Confidence: 89%</span>
            </div>

            <p className="text-[14px] text-[#F0F4F8] leading-[1.7] mb-3">
              Full recording analysis complete (1h 45min, 105min). Initially reactive CTG with accelerations. Progressive variability decline after 11:30. Three late decelerations in final 25 minutes — pattern evolution from Category I to Category III over the recording period.
            </p>

            <div className="flex justify-between items-center border-t border-white/10 pt-3">
              <span className="bg-[rgba(255,91,6,0.2)] border border-[#FF5B06] text-[#FF5B06] px-3 py-1 rounded-full text-[11.5px] font-bold">
                Category II / III Pattern Evolution Detected
              </span>
              <span className="text-[12px] text-[#8BA4B8]">47 signal features extracted</span>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN (Sticky Actions Panel) */}
        <div className="flex flex-col gap-[16px] lg:sticky lg:top-[72px] h-fit">
          
          {/* FINAL RISK SCORE GAUGE */}
          <div className="bg-[rgba(10,36,113,0.6)] border border-[#FF5B06]/40 rounded-[12px] p-[20px] flex flex-col items-center text-center backdrop-blur-md glow-amber">
            <span className="font-data-label text-[11px] text-[#8BA4B8] tracking-widest mb-2 font-bold">COMPOSITE RISK SCORE</span>
            
            <div className="relative w-[190px] h-[190px] flex items-center justify-center my-2">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" fill="none" r="40" stroke="rgba(255,255,255,0.08)" strokeWidth="12"></circle>
                <circle cx="50" cy="50" fill="none" r="40" stroke="#FF5B06" strokeDasharray="171 251.3" strokeDashoffset="0" strokeWidth="12" strokeLinecap="round"></circle>
              </svg>
              
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <span className="font-numeric-xl text-[44px] font-bold text-[#FF5B06] leading-none">68</span>
                <span className="text-[12px] text-[#8BA4B8] font-semibold mt-1">ELEVATED RISK</span>
              </div>
            </div>
          </div>

          {/* REPORT EXPORT PANEL */}
          <div className="bg-[rgba(10,36,113,0.6)] border border-[#B0EDF9]/15 rounded-[12px] p-[18px] backdrop-blur-md">
            <span className="font-data-label text-[11px] text-[#8BA4B8] uppercase block mb-3 font-bold">EXPORT &amp; SHARE</span>
            
            <div className="flex flex-col gap-2.5">
              <button 
                onClick={() => setActiveModal('pdf')}
                className="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-primary via-primary-container to-secondary text-on-primary font-semibold hover:shadow-[0_0_20px_rgba(166,200,255,0.3)] transition-all flex items-center justify-center gap-2 text-[13px] cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">download</span>
                Download PDF Report
              </button>
              
              <button 
                onClick={() => setActiveModal('csv')}
                className="w-full py-2.5 px-3 rounded-xl border border-white/20 text-[#F0F4F8] hover:bg-white/10 transition-colors flex items-center justify-center gap-2 text-[13px] font-medium cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">table_chart</span>
                Export Raw CSV Telemetry
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* EXPORT MODALS */}
      {activeModal === 'pdf' && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center p-4 modal-backdrop">
          <div className="bg-[#021F59] border border-[#B0EDF9]/40 rounded-2xl p-6 max-w-lg w-full shadow-2xl modal-content">
            <h3 className="text-xl font-bold text-on-surface mb-2 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">picture_as_pdf</span> Clinical PDF Report Generation
            </h3>
            <p className="text-[13px] text-on-surface-variant mb-4">
              Comprehensive report with full 105min FHR/UC waveforms, FIGO 2015 feature breakdown, and diagnostic summary.
            </p>
            <div className="flex justify-end gap-3">
              <button onClick={() => setActiveModal(null)} className="px-4 py-2 text-[13px] text-on-surface-variant hover:text-on-surface">
                Cancel
              </button>
              <button onClick={() => { alert("PDF Report Downloaded Successfully!"); setActiveModal(null); }} className="px-5 py-2 bg-primary text-on-primary font-semibold rounded-xl text-[13px]">
                Download PDF Now
              </button>
            </div>
          </div>
        </div>
      )}

      {activeModal === 'csv' && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center p-4 modal-backdrop">
          <div className="bg-[#021F59] border border-[#B0EDF9]/40 rounded-2xl p-6 max-w-lg w-full shadow-2xl modal-content">
            <h3 className="text-xl font-bold text-on-surface mb-2 flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary">table_chart</span> Export Telemetry CSV
            </h3>
            <p className="text-[13px] text-on-surface-variant mb-4">
              Export 25,200 data points (4Hz sampling rate) for external research or EHR integration.
            </p>
            <div className="flex justify-end gap-3">
              <button onClick={() => setActiveModal(null)} className="px-4 py-2 text-[13px] text-on-surface-variant hover:text-on-surface">
                Cancel
              </button>
              <button onClick={() => { alert("CSV Telemetry File Exported!"); setActiveModal(null); }} className="px-5 py-2 bg-secondary-container text-secondary-fixed-dim border border-secondary/40 font-semibold rounded-xl text-[13px]">
                Download CSV Dataset
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
