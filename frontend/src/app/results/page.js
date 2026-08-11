"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function OfflineAnalysisDashboard() {
  const router = useRouter();

  return (
    <div className="bg-[#04344C] min-h-screen flex flex-col font-body-md overflow-x-hidden text-[#F0F4F8]">
      
      {/* TOP HEADER BAR */}
      <header className="fixed top-0 left-0 w-full h-[56px] bg-[#021F59] border-b border-[#B0EDF9]/10 z-50 flex items-center justify-between px-4">
        {/* Left Group */}
        <div className="flex items-center gap-3">
          <button onClick={() => router.push('/')} className="hover:bg-white/5 p-1 rounded-md transition-colors text-[#B0EDF9]">
            <svg className="lucide lucide-arrow-left" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
          </button>
          <div className="flex items-center gap-2 text-[#B0EDF9]">
            <svg className="lucide lucide-activity" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"/></svg>
            <span className="font-panel-title font-semibold tracking-wide">CTG Assistant</span>
          </div>
          <div className="w-px h-6 bg-[#B0EDF9]/20 mx-1"></div>
          <span className="font-medium text-[14px]">Jane Doe</span>
          <span className="text-[#8BA4B8] text-[13px] border-l border-[#8BA4B8]/30 pl-2 ml-1">GA: 38w 2d</span>
          <span className="text-[#8BA4B8] text-[13px] border-l border-[#8BA4B8]/30 pl-2 ml-1">Gravida 2 Para 1</span>
        </div>

        {/* Center Group */}
        <div className="flex items-center gap-4">
          <div className="bg-[rgba(255,185,9,0.1)] border border-[#FFB909] text-[#FFB909] px-2 py-0.5 rounded text-[11px] font-data-label tracking-wide">
            OFFLINE ANALYSIS
          </div>
          <span className="text-[#B0EDF9] font-numeric-sm text-[13px]">
            Recording: Jan 15 2024 — 10:30 to 12:15 (1h 45min)
          </span>
          <div className="flex items-center gap-1.5 ml-2">
            <svg className="lucide lucide-check-circle text-[#99E1D9]" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>
            <span className="text-[#99E1D9] text-[12px]">Processed ✓</span>
          </div>
        </div>

        {/* Right Group */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-[#99E1D9] text-[12px]">SQ:</span>
            <div className="w-[80px] h-[4px] bg-[#99E1D9]/20 rounded-full overflow-hidden">
              <div className="h-full bg-[#99E1D9]" style={{width: '91%'}}></div>
            </div>
            <span className="text-[#99E1D9] text-[12px]">91%</span>
          </div>
          <div className="relative">
            <svg className="lucide lucide-bell text-[#8BA4B8] hover:text-[#F0F4F8] cursor-pointer" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>
          </div>
          <svg className="lucide lucide-settings text-[#8BA4B8] hover:text-[#F0F4F8] cursor-pointer" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>
          <div className="w-7 h-7 rounded-full bg-[#B0EDF9]/20 flex items-center justify-center border border-[#B0EDF9]/40 cursor-pointer">
            <svg className="lucide lucide-user text-[#B0EDF9]" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          </div>
        </div>
      </header>

      {/* NO ALERT BANNER */}

      {/* MAIN CONTENT GRID */}
      <main className="flex-1 p-[20px] pb-[40px] mt-[56px] grid grid-cols-1 lg:grid-cols-[74%_1fr] gap-[16px] max-w-[1800px] mx-auto w-full">
        
        {/* LEFT COLUMN */}
        <div className="flex flex-col">
          
          {/* FHR GRAPH PANEL (Scrollable) */}
          <div className="bg-[rgba(2,31,89,0.5)] border border-[#B0EDF9]/10 rounded-[8px] p-[16px]">
            <div className="flex justify-between items-center mb-3">
              <h2 className="font-data-label text-[12px] font-semibold tracking-[0.06em] text-[#8BA4B8] uppercase">Fetal Heart Rate (FHR)</h2>
              <div className="flex gap-2 text-[#8BA4B8]">
                <button className="hover:text-white transition-colors p-1"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/></svg></button>
                <button className="hover:text-white transition-colors p-1"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg></button>
                <button className="hover:text-white transition-colors p-1 ml-2"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v3"/><path d="M21 8V5a2 2 0 0 0-2-2h-3"/><path d="M3 16v3a2 2 0 0 0 2 2h3"/><path d="M16 21h3a2 2 0 0 0 2-2v-3"/></svg></button>
                <button className="hover:text-white transition-colors p-1"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg></button>
              </div>
            </div>

            {/* GRAPH AREA */}
            <div className="h-[260px] bg-[rgba(2,31,89,0.7)] rounded-[6px] relative flex">
              {/* Y-axis (Sticky) */}
              <div className="w-[30px] flex flex-col justify-between items-end py-[10px] pr-2 font-numeric-sm text-[11px] text-[#8BA4B8] z-20 bg-[rgba(2,31,89,0.9)] border-r border-[#B0EDF9]/10">
                <span>200</span><span>180</span><span>160</span><span>140</span><span>120</span><span>110</span><span>100</span><span>80</span><span>60</span>
              </div>
              
              {/* Scrollable Container */}
              <div className="flex-1 relative overflow-x-auto overflow-y-hidden custom-scrollbar">
                <div className="min-w-[200%] h-full relative">
                  
                  {/* Horizontal Gridlines */}
                  {[200, 180, 160, 140, 120, 100, 80, 60].map((val, i) => (
                    <div key={val} className="absolute w-full border-t border-[rgba(255,255,255,0.04)]" style={{top: `${(i/7)*100}%`}}></div>
                  ))}

                  {/* Zones */}
                  <div className="absolute top-0 w-full h-[28%] bg-[rgba(255,91,6,0.06)] pointer-events-none border-b border-[rgba(255,91,6,0.1)]">
                    <span className="sticky left-2 bottom-1 text-[10px] text-[rgba(255,91,6,0.7)] inline-block">Tachycardia &gt;160</span>
                  </div>
                  <div className="absolute bottom-0 w-full h-[35%] bg-[rgba(229,62,62,0.06)] pointer-events-none border-t border-[rgba(229,62,62,0.1)]">
                    <span className="sticky left-2 top-1 text-[10px] text-[rgba(229,62,62,0.7)] inline-block">Bradycardia &lt;110</span>
                  </div>

                  {/* Baseline */}
                  <div className="absolute top-[43%] w-full border-t border-dashed border-[#99E1D9]/50">
                    <span className="sticky left-2 -top-4 text-[10px] text-[#99E1D9] inline-block">Baseline 139</span>
                  </div>

                  {/* 10:55 Acceleration */}
                  <div className="absolute left-[23%] top-[35%] flex flex-col items-center">
                    <div className="text-[#10B981] text-[8px] mb-4">▲</div>
                    <span className="absolute top-5 text-[10px] text-[#10B981] whitespace-nowrap">Accel</span>
                  </div>

                  {/* 11:20 Var Decel */}
                  <div className="absolute left-[47%] top-[30%] flex flex-col items-center">
                    <div className="text-[#FFB909] text-[8px] -mt-4">▼</div>
                    <span className="absolute -top-7 text-[10px] text-[#FFB909] whitespace-nowrap">Var Decel</span>
                    <div className="h-[130px] border-l border-dashed border-[#FFB909]/70"></div>
                  </div>

                  {/* 11:50 Late Decel */}
                  <div className="absolute left-[76%] top-[30%] flex flex-col items-center">
                    <div className="text-[#E53E3E] text-[8px] -mt-4">▼</div>
                    <span className="absolute -top-7 text-[10px] text-[#E53E3E] whitespace-nowrap">Late Decel</span>
                    <div className="h-[145px] border-l border-dashed border-[#E53E3E]/70"></div>
                  </div>

                  {/* 12:02 Late Decel */}
                  <div className="absolute left-[87%] top-[30%] flex flex-col items-center">
                    <div className="text-[#E53E3E] text-[8px] -mt-4">▼</div>
                    <span className="absolute -top-7 text-[10px] text-[#E53E3E] whitespace-nowrap">Late Decel</span>
                    <div className="h-[130px] border-l border-dashed border-[#E53E3E]/70"></div>
                  </div>

                  {/* 12:10 Late Decel */}
                  <div className="absolute left-[95%] top-[30%] flex flex-col items-center">
                    <div className="text-[#E53E3E] text-[8px] -mt-4">▼</div>
                    <span className="absolute -top-7 text-[10px] text-[#E53E3E] whitespace-nowrap">Late Decel</span>
                    <div className="h-[155px] border-l border-dashed border-[#E53E3E]/70"></div>
                  </div>

                  {/* FHR Trace (Long 105min) */}
                  <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 2000 260">
                    <path d="M0,115 Q50,110 100,120 T200,110 T300,120 T400,115 T450,50 T480,115 T500,118 T600,110 T700,120 T800,115 
                             T900,118 T930,190 T950,115 T1000,118 T1100,115 T1200,118 T1300,115 
                             T1400,118 T1500,200 T1550,115 T1600,118 T1700,190 T1750,115 T1800,118 T1900,210 T1950,130 T2000,120" 
                          fill="none" stroke="#B0EDF9" strokeWidth="2.5" vectorEffect="non-scaling-stroke"></path>
                  </svg>
                  
                  {/* Annotation Lane inside scroll area */}
                  <div className="absolute bottom-[20px] w-full h-[16px] flex px-2 text-[9px] font-medium opacity-80">
                    <div className="h-full bg-[#10B981]/80 text-white flex items-center px-2" style={{width: '28.5%'}}>Normal</div>
                    <div className="h-full bg-[#99E1D9]/80 text-[#021F59] flex items-center px-2" style={{width: '9.5%'}}>Accel</div>
                    <div className="h-full bg-[#10B981]/80 text-white flex items-center px-2" style={{width: '9.5%'}}></div>
                    <div className="h-full bg-[#FFB909]/80 text-[#021F59] flex items-center px-2" style={{width: '9.5%'}}>Var Decel</div>
                    <div className="h-full bg-[#FF5B06]/80 text-white flex items-center px-2 border-r border-white/20" style={{width: '19%'}}>Minimal Var.</div>
                    <div className="h-full bg-[#E53E3E]/80 text-white flex items-center px-2" style={{width: '24%'}}>Late Decels x3</div>
                  </div>

                  {/* X-axis inside scroll area */}
                  <div className="absolute bottom-0 w-full flex justify-between font-numeric-sm text-[10px] text-[#8BA4B8] px-2">
                    <span>10:30</span><span>10:40</span><span>10:50</span><span>11:00</span><span>11:10</span><span>11:20</span><span>11:30</span><span>11:40</span><span>11:50</span><span>12:00</span><span>12:10</span><span className="pr-4">12:15</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* UC GRAPH PANEL */}
          <div className="bg-[rgba(2,31,89,0.5)] border border-[#B0EDF9]/10 rounded-[8px] p-[16px] mt-[16px]">
            <h2 className="font-data-label text-[12px] font-semibold tracking-[0.06em] text-[#8BA4B8] uppercase mb-3">Uterine Contractions (UC)</h2>
            <div className="h-[150px] bg-[rgba(2,31,89,0.6)] rounded-[6px] relative flex">
              <div className="w-[30px] flex flex-col justify-between items-end py-[10px] pr-2 font-numeric-sm text-[11px] text-[#8BA4B8] z-20 bg-[rgba(2,31,89,0.9)] border-r border-[#B0EDF9]/10">
                <span>100</span><span>50</span><span>0</span>
              </div>
              <div className="flex-1 relative overflow-x-auto overflow-y-hidden custom-scrollbar">
                <div className="min-w-[200%] h-full relative">
                  {[100, 75, 50, 25, 0].map((val, i) => (
                    <div key={val} className="absolute w-full border-t border-[rgba(255,255,255,0.04)]" style={{top: `${(i/4)*100}%`}}></div>
                  ))}

                  <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 2000 150">
                    <path d="M0,145 L200,145 Q250,145 280,30 Q310,145 360,145 L500,145 Q550,145 580,40 Q610,145 660,145 L850,145 Q900,145 930,50 Q960,145 1010,145 L1200,145 Q1250,145 1280,35 Q1310,145 1360,145 L1450,145 Q1500,145 1530,45 Q1560,145 1610,145 L1700,145 Q1750,145 1780,50 Q1810,145 1860,145 L2000,145" 
                          fill="rgba(255,185,9,0.08)" stroke="#FFB909" strokeWidth="2" vectorEffect="non-scaling-stroke"></path>
                  </svg>
                  <span className="absolute left-[13.5%] top-[10px] font-numeric-sm text-[9px] text-[#FFB909]">C1</span>
                  <span className="absolute left-[28.5%] top-[20px] font-numeric-sm text-[9px] text-[#FFB909]">C2</span>
                  <span className="absolute left-[46%] top-[30px] font-numeric-sm text-[9px] text-[#FFB909]">C3</span>
                  <span className="absolute left-[63.5%] top-[15px] font-numeric-sm text-[9px] text-[#FFB909]">C4</span>
                  <span className="absolute left-[76%] top-[25px] font-numeric-sm text-[9px] text-[#FFB909]">C5</span>
                  <span className="absolute left-[88.5%] top-[30px] font-numeric-sm text-[9px] text-[#FFB909]">C6</span>
                </div>
              </div>
            </div>
          </div>

          {/* RECORDING SCRUBBER */}
          <div className="w-full h-[60px] mt-[16px] flex flex-col justify-center px-2">
            <div className="flex justify-between items-center mb-1">
              <span className="font-numeric-sm text-[10px] text-[#8BA4B8]">10:30</span>
              <span className="text-[11px] text-[#B0EDF9] font-medium">Viewing: 10:30 – 11:10</span>
              <span className="font-numeric-sm text-[10px] text-[#8BA4B8]">12:15</span>
            </div>
            
            <div className="flex items-center gap-3 w-full">
              <button className="text-[#8BA4B8] hover:text-white transition-colors p-1"><svg className="lucide lucide-skip-back" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="19 20 9 12 19 4 19 20"/><line x1="5" x2="5" y1="19" y2="5"/></svg></button>
              <button className="text-[#8BA4B8] hover:text-white transition-colors p-1"><svg className="lucide lucide-play" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="6 3 20 12 6 21 6 3"/></svg></button>
              
              {/* Track Bar */}
              <div className="flex-1 h-[8px] bg-[rgba(255,255,255,0.08)] rounded-full relative overflow-hidden">
                <div className="absolute left-0 h-full bg-[rgba(153,225,217,0.4)]" style={{width: '38%'}}></div>
                <div className="absolute left-[38%] h-full bg-[rgba(255,185,9,0.4)]" style={{width: '19%'}}></div>
                <div className="absolute left-[57%] h-full bg-[rgba(255,91,6,0.5)]" style={{width: '19%'}}></div>
                <div className="absolute left-[76%] h-full bg-[rgba(229,62,62,0.5)]" style={{width: '24%'}}></div>
                
                {/* View Window Indicator */}
                <div className="absolute left-0 h-full bg-white/20 border-x border-white/40 cursor-grab active:cursor-grabbing" style={{width: '38%'}}></div>
                
                {/* Scrubber Handle */}
                <div className="absolute left-[38%] top-1/2 -translate-y-1/2 w-[16px] h-[16px] bg-[#B0EDF9] rounded-full shadow-[0_0_10px_rgba(176,237,249,0.5)] cursor-grab border border-white"></div>
              </div>

              <button className="text-[#8BA4B8] hover:text-white transition-colors p-1 ml-2"><svg className="lucide lucide-zoom-out" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" x2="16.65" y1="21" y2="16.65"/><line x1="8" x2="14" y1="11" y2="11"/></svg></button>
              <button className="text-[#8BA4B8] hover:text-white transition-colors p-1"><svg className="lucide lucide-zoom-in" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" x2="16.65" y1="21" y2="16.65"/><line x1="11" x2="11" y1="8" y2="14"/><line x1="8" x2="14" y1="11" y2="11"/></svg></button>
            </div>
          </div>

          {/* PATTERN METRIC CARDS */}
          <div className="grid grid-cols-4 gap-[16px] mt-[16px]">
            {/* Card 1 */}
            <div className="bg-[rgba(10,36,113,0.6)] border border-[#B0EDF9]/10 rounded-[8px] py-[16px] px-[20px] flex flex-col">
              <span className="font-data-label text-[11px] text-[#8BA4B8] mb-1">BASELINE</span>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="font-numeric-xl text-[28px] font-bold text-[#F0F4F8]">139</span>
                <span className="text-[#F0F4F8] text-[14px]">bpm avg</span>
              </div>
              <div className="bg-[#1a4d40] text-[#99E1D9] border border-[#99E1D9] rounded px-2 py-0.5 text-[11px] w-fit font-semibold tracking-wide">NORMAL</div>
            </div>
            {/* Card 2 */}
            <div className="bg-[rgba(10,36,113,0.6)] border border-[#B0EDF9]/10 rounded-[8px] py-[16px] px-[20px] flex flex-col">
              <span className="font-data-label text-[11px] text-[#8BA4B8] mb-1">VARIABILITY</span>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="font-numeric-xl text-[28px] font-bold text-[#FFB909]">&lt; 5</span>
                <span className="text-[#FFB909] text-[14px]">bpm</span>
              </div>
              <div className="bg-[#FFB909]/20 text-[#FFB909] border border-[#FFB909] rounded px-2 py-0.5 text-[11px] w-fit font-semibold tracking-wide">MINIMAL</div>
              <span className="text-[11px] text-[#FFB909] mt-2">for 35 min</span>
            </div>
            {/* Card 3 */}
            <div className="bg-[rgba(10,36,113,0.6)] border border-[#B0EDF9]/10 rounded-[8px] py-[16px] px-[20px] flex flex-col">
              <span className="font-data-label text-[11px] text-[#8BA4B8] mb-1">ACCELERATIONS</span>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="font-numeric-xl text-[28px] font-bold text-[#99E1D9]">2</span>
                <span className="text-[#99E1D9] text-[14px]">detected</span>
              </div>
              <div className="bg-[#1a4d40] text-[#99E1D9] border border-[#99E1D9] rounded px-2 py-0.5 text-[11px] w-fit font-semibold tracking-wide">PRESENT</div>
            </div>
            {/* Card 4 */}
            <div className="bg-[rgba(10,36,113,0.6)] border border-[#B0EDF9]/10 rounded-[8px] py-[16px] px-[20px] flex flex-col">
              <span className="font-data-label text-[11px] text-[#8BA4B8] mb-1">DECELERATIONS</span>
              <div className="flex flex-col mb-1.5">
                <span className="font-numeric-xl text-[24px] font-bold text-[#FF5B06] leading-none">3 late</span>
                <span className="font-numeric-xl text-[16px] font-bold text-[#FFB909]">1 variable</span>
              </div>
              <div className="bg-[#FF5B06]/20 text-[#FF5B06] border border-[#FF5B06] rounded px-2 py-0.5 text-[11px] w-fit font-semibold tracking-wide">CONCERN</div>
            </div>
          </div>

          {/* AI CLINICAL ANALYSIS */}
          <div className="bg-[rgba(10,36,113,0.6)] border border-[#B0EDF9]/10 rounded-[8px] p-[16px] mt-[16px]">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-2">
                <svg className="lucide lucide-sparkles text-[#B0EDF9]" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/><path d="M20 3v4"/><path d="M22 5h-4"/><path d="M4 17v2"/><path d="M5 18H3"/></svg>
                <span className="font-data-label font-semibold text-[#8BA4B8] text-[12px] tracking-[0.05em]">AI CLINICAL ANALYSIS</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[#FFB909] text-[13px]">Confidence: 89%</span>
                <div className="w-[60px] h-[4px] bg-[#FFB909]/20 rounded-full overflow-hidden">
                  <div className="h-full bg-[#FFB909]" style={{width: '89%'}}></div>
                </div>
                <svg className="lucide lucide-chevron-down text-[#8BA4B8]" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 9 6 6 6-6"/></svg>
              </div>
            </div>

            <div className="flex gap-3 mb-3">
              <svg className="lucide lucide-file-bar-chart text-[#B0EDF9] shrink-0 mt-1" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 18v-6"/><path d="M14 18v-2"/><path d="M6 18v-4"/></svg>
              <p className="text-[14px] text-[#F0F4F8] leading-[1.7]">
                Full recording analysis complete (1h 45min, 105min). Initially reactive CTG with accelerations. Progressive variability decline after 11:30. Three late decelerations in final 25 minutes — pattern evolution from Category I to Category III over the recording period.
              </p>
            </div>

            <div className="flex justify-between items-center border-t border-white/5 pt-3 mt-4">
              <div className="flex items-center gap-3">
                <span className="bg-[rgba(255,91,6,0.12)] border border-[#FF5B06] text-[#FF5B06] px-2 py-0.5 rounded text-[11px] font-medium">Category II / III Pattern Evolution</span>
              </div>
              <span className="text-[11px] text-[#8BA4B8]">47 features detected across full recording</span>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN (Sticky) */}
        <div className="flex flex-col gap-[16px] sticky top-[72px] h-fit">
          
          {/* RISK SCORE PANEL */}
          <div className="bg-[rgba(10,36,113,0.6)] border border-[#B0EDF9]/10 rounded-[8px] p-[16px] flex flex-col items-center text-center">
            <span className="font-data-label text-[11px] text-[#8BA4B8] tracking-widest mb-4">FINAL RISK SCORE</span>
            
            <div className="relative w-[210px] h-[210px] flex items-center justify-center mb-2 mt-2">
              <div className="absolute w-[150px] h-[150px]">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" fill="none" r="40" stroke="rgba(255,255,255,0.08)" strokeWidth="12"></circle>
                  <circle cx="50" cy="50" fill="none" r="40" stroke="rgba(153,225,217,0.3)" strokeDasharray="75.4 175.9" strokeDashoffset="0" strokeWidth="12"></circle>
                  <circle cx="50" cy="50" fill="none" r="40" stroke="rgba(255,185,9,0.3)" strokeDasharray="75.4 175.9" strokeDashoffset="-75.4" strokeWidth="12"></circle>
                  <circle cx="50" cy="50" fill="none" r="40" stroke="rgba(255,91,6,0.3)" strokeDasharray="50.3 201" strokeDashoffset="-150.8" strokeWidth="12"></circle>
                  <circle cx="50" cy="50" fill="none" r="40" stroke="rgba(229,62,62,0.3)" strokeDasharray="50.3 201" strokeDashoffset="-201.1" strokeWidth="12"></circle>
                  
                  {/* 68% Sweep */}
                  <circle cx="50" cy="50" fill="none" r="40" stroke="#FF5B06" strokeDasharray="171 251.3" strokeDashoffset="0" strokeWidth="12" strokeLinecap="round"></circle>
                </svg>
              </div>
              
              <span className="absolute top-1 left-1/2 -translate-x-1/2 font-data-label text-[11px] font-bold text-[#8BA4B8] tracking-widest bg-[rgba(10,36,113,0.8)] px-1.5 py-0.5 rounded backdrop-blur">WATCH</span>
              <span className="absolute right-0 top-1/2 -translate-y-1/2 font-data-label text-[11px] font-bold text-[#8BA4B8] tracking-widest bg-[rgba(10,36,113,0.8)] px-1.5 py-0.5 rounded backdrop-blur">URGENT</span>
              <span className="absolute bottom-1 left-1/2 -translate-x-1/2 font-data-label text-[11px] font-bold text-[#8BA4B8] tracking-widest bg-[rgba(10,36,113,0.8)] px-1.5 py-0.5 rounded backdrop-blur">CRIT</span>
              <span className="absolute left-0 top-1/2 -translate-y-1/2 font-data-label text-[11px] font-bold text-[#8BA4B8] tracking-widest bg-[rgba(10,36,113,0.8)] px-1.5 py-0.5 rounded backdrop-blur">SAFE</span>
              
              <div className="absolute inset-0 flex flex-col items-center justify-center pt-1 pointer-events-none">
                <span className="font-numeric-xl text-[44px] font-bold text-[#FF5B06] leading-[1]">68</span>
                <span className="text-[13px] text-[#8BA4B8]">/ 100</span>
              </div>
            </div>
            
            <span className="font-data-label text-[13px] text-[#FF5B06] tracking-widest mt-2">ELEVATED RISK</span>
            
            <div className="w-[160px] h-[60px] mt-4 relative">
              <svg width="100%" height="100%" viewBox="0 0 160 60" preserveAspectRatio="none">
                <path d="M0,50 L40,48 L80,30 L120,20 L160,15" fill="none" stroke="#FF5B06" strokeWidth="2"></path>
              </svg>
              <span className="absolute bottom-0 left-0 text-[10px] text-[#8BA4B8]">10:30: 15</span>
              <span className="absolute top-0 right-0 text-[10px] text-[#8BA4B8]">End: 68</span>
            </div>
            <span className="text-[12px] text-[#FF5B06] mt-1 font-medium">↑ Trend (+53)</span>
          </div>

          {/* ANALYSIS REPORT SECTION */}
          <div className="bg-[rgba(10,36,113,0.6)] border border-[#B0EDF9]/10 rounded-[8px] p-[16px]">
            <span className="font-data-label text-[11px] text-[#8BA4B8] uppercase block mb-3">ANALYSIS REPORT</span>
            
            <div className="flex flex-col gap-1 mb-4 border-b border-white/10 pb-4">
              <div className="flex items-center gap-2 mb-1">
                <svg className="lucide lucide-check-circle text-[#99E1D9]" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>
                <span className="text-[13px] font-medium text-[#F0F4F8]">Status: Ready</span>
              </div>
              <span className="text-[11px] text-[#8BA4B8]">Generated: 14:22:31</span>
              <span className="text-[11px] text-[#8BA4B8]">47 patterns detected</span>
            </div>

            <div className="flex flex-col gap-2">
              <button className="w-full py-[10px] px-[14px] rounded-[6px] bg-gradient-to-r from-[#1a5fa8] to-[#0d8a7f] text-white hover:shadow-[0_0_15px_rgba(166,200,255,0.3)] transition-all flex items-center justify-center gap-2 text-[13px] font-medium border border-white/20">
                <svg className="lucide lucide-file-down" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><path d="M12 18v-6"/><path d="m9 15 3 3 3-3"/></svg>
                Download PDF Report
              </button>
              <button className="w-full py-[10px] px-[14px] rounded-[6px] border border-white/20 text-[#F0F4F8] hover:bg-white/10 transition-colors flex items-center justify-center gap-2 text-[13px]">
                <svg className="lucide lucide-share-2" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/></svg>
                Share with Team
              </button>
              <button className="w-full py-[8px] px-[14px] rounded-[6px] border border-transparent text-[#8BA4B8] hover:text-white hover:bg-white/5 transition-colors flex items-center justify-center gap-2 text-[12px] mt-1">
                <svg className="lucide lucide-download" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
                Export CSV Data
              </button>
            </div>
          </div>

        </div>
      </main>

      {/* BOTTOM STATUS BAR */}
      <footer className="fixed bottom-0 left-0 w-full h-[32px] bg-[rgba(2,31,89,0.92)] border-t border-[#B0EDF9]/10 z-50 flex items-center justify-between px-4">
        <div className="flex items-center gap-2 text-[11px] text-[#F0F4F8]">
          Analysis Complete — 47 patterns detected in 1h 45min recording
        </div>
        <div className="text-[11px] text-[#8BA4B8]">
          Processing time: 41 seconds
        </div>
        <div className="flex items-center gap-1.5 bg-[#99E1D9]/10 border border-[#99E1D9]/30 px-2 py-0.5 rounded text-[11px] text-[#99E1D9] font-medium">
          <svg className="lucide lucide-file-check" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><path d="m9 15 2 2 4-4"/></svg>
          Report Ready
        </div>
      </footer>
    </div>
  );
}
