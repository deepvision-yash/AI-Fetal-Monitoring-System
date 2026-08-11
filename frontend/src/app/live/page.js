"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LiveAnalysisDashboard() {
  const router = useRouter();
  const [currentTime, setCurrentTime] = useState("14:23:05");

  useEffect(() => {
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
  }, []);

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
          <div className="flex items-center gap-2">
            <div className="live-dot" style={{width: '8px', height: '8px'}}></div>
            <span className="text-[#E53E3E] font-data-label text-[12px] tracking-[0.1em]">LIVE MONITORING</span>
          </div>
          <div className="w-px h-6 bg-[#B0EDF9]/20"></div>
          <span className="text-[#B0EDF9] font-numeric-sm text-[14px]">{currentTime}</span>
          <span className="text-[#8BA4B8] font-numeric-sm text-[12px]">Monitoring: 01:02:17</span>
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
            <span className="absolute -top-1 -right-1 bg-[#E53E3E] text-white text-[9px] w-3.5 h-3.5 flex items-center justify-center rounded-full font-bold">2</span>
          </div>
          <div className="bg-[#E53E3E]/10 text-[#E53E3E] border border-[#E53E3E] px-2 py-0.5 rounded text-[11px] font-data-label tracking-wide">LIVE</div>
          <svg className="lucide lucide-settings text-[#8BA4B8] hover:text-[#F0F4F8] cursor-pointer" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>
          <div className="w-7 h-7 rounded-full bg-[#B0EDF9]/20 flex items-center justify-center border border-[#B0EDF9]/40 cursor-pointer">
            <svg className="lucide lucide-user text-[#B0EDF9]" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          </div>
        </div>
      </header>

      {/* ALERT BANNER */}
      <div className="mt-[56px] w-full bg-[rgba(229,62,62,0.12)] border-b-[2px] animate-alert-border px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <svg className="lucide lucide-alert-triangle text-[#E53E3E]" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>
          <span className="font-bold text-[#E53E3E] text-[13px] mr-2">CRITICAL ALERT</span>
          <span className="text-[13px] text-[#F0F4F8]">Category III CTG Pattern — Recurrent late decelerations with reduced variability. Immediate clinical review required.</span>
        </div>
        <div className="flex items-center gap-3">
          <button className="text-[13px] text-[#F0F4F8] hover:bg-white/10 px-3 py-1.5 rounded transition-colors">Acknowledge</button>
          <button className="text-[13px] bg-[#E53E3E] text-white px-3 py-1.5 rounded hover:bg-[#c53030] transition-colors font-medium">View Details</button>
        </div>
      </div>

      {/* MAIN CONTENT GRID */}
      <main className="flex-1 p-[20px] pb-[40px] grid grid-cols-1 lg:grid-cols-[74%_1fr] gap-[16px] max-w-[1800px] mx-auto w-full">
        
        {/* LEFT COLUMN */}
        <div className="flex flex-col">
          
          {/* FHR GRAPH PANEL */}
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
              {/* Y-axis */}
              <div className="w-[30px] flex flex-col justify-between items-end py-[10px] pr-2 font-numeric-sm text-[11px] text-[#8BA4B8] z-20">
                <span>200</span><span>180</span><span>160</span><span>140</span><span>120</span><span>110</span><span>100</span><span>80</span><span>60</span>
              </div>
              
              {/* Graph Content */}
              <div className="flex-1 relative border-l border-white/10 overflow-hidden">
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
                  <span className="absolute right-2 -top-4 text-[10px] text-[#99E1D9]">Baseline 142</span>
                </div>

                {/* Annotation marker */}
                <div className="absolute left-[70%] top-[40%] flex flex-col items-center">
                  <div className="text-[#E53E3E] text-[8px] -mt-4">▼</div>
                  <span className="absolute -top-7 text-[10px] text-[#E53E3E] whitespace-nowrap">Late Decel</span>
                  <div className="h-[156px] border-l border-dashed border-[#E53E3E]/70"></div>
                </div>

                {/* Current Time Cursor */}
                <div className="absolute right-[5%] top-0 h-full border-l border-dashed border-[#FFB909] flex flex-col items-center z-30">
                  <span className="text-[#FFB909] text-[9px] bg-[#021F59] px-1 rounded-sm -mt-2">NOW</span>
                </div>

                {/* FHR Trace */}
                <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1000 260">
                  <path d="M0,105 C20,110 40,100 60,108 C80,112 100,102 120,106 C150,70 170,60 200,105 C230,110 250,100 280,107 C300,75 320,65 350,106 C380,110 400,103 450,105 C500,108 550,104 600,106 C630,105 650,110 680,170 C700,210 720,200 750,170 C780,140 800,110 830,107 C860,104 900,108 950,105" fill="none" stroke="#B0EDF9" strokeWidth="2.5" vectorEffect="non-scaling-stroke"></path>
                </svg>
              </div>
            </div>

            {/* Annotation Lane */}
            <div className="h-[16px] w-full mt-2 ml-[30px] flex gap-1 pr-[5%]">
              <div className="h-full bg-[#1a4d40] rounded-sm w-[40%] text-[9px] text-[#99E1D9] flex items-center px-2">Normal</div>
              <div className="h-full bg-[rgba(255,185,9,0.2)] rounded-sm w-[20%] text-[9px] text-[#FFB909] flex items-center px-2">Low Var</div>
              <div className="h-full bg-[rgba(229,62,62,0.2)] rounded-sm flex-1 text-[9px] text-[#E53E3E] flex items-center px-2">Late Decels</div>
            </div>

            {/* X-axis */}
            <div className="ml-[30px] pr-[5%] flex justify-between mt-1 font-numeric-sm text-[10px] text-[#8BA4B8]">
              <span>13:20</span><span>13:30</span><span>13:40</span><span>13:50</span><span>14:00</span><span>14:10</span><span>14:20</span>
            </div>
          </div>

          {/* UC GRAPH PANEL */}
          <div className="bg-[rgba(2,31,89,0.5)] border border-[#B0EDF9]/10 rounded-[8px] p-[16px] mt-[16px]">
            <h2 className="font-data-label text-[12px] font-semibold tracking-[0.06em] text-[#8BA4B8] uppercase mb-3">Uterine Contractions (UC)</h2>
            <div className="h-[150px] bg-[rgba(2,31,89,0.6)] rounded-[6px] relative flex">
              <div className="w-[30px] flex flex-col justify-between items-end py-[10px] pr-2 font-numeric-sm text-[11px] text-[#8BA4B8] z-20">
                <span>100</span><span>50</span><span>0</span>
              </div>
              <div className="flex-1 relative border-l border-white/10 overflow-hidden">
                {[100, 75, 50, 25, 0].map((val, i) => (
                  <div key={val} className="absolute w-full border-t border-[rgba(255,255,255,0.04)]" style={{top: `${(i/4)*100}%`}}></div>
                ))}
                
                {/* Current Time Cursor */}
                <div className="absolute right-[5%] top-0 h-full border-l border-dashed border-[#FFB909] z-30"></div>

                <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1000 150">
                  <path d="M0,145 L100,145 C150,145 180,30 200,30 C220,30 250,145 300,145 L400,145 C450,145 480,40 500,40 C520,40 550,145 600,145 L700,145 C730,145 750,35 780,35 C810,35 830,145 880,145 L1000,145" fill="rgba(255,185,9,0.08)" stroke="#FFB909" strokeWidth="2" vectorEffect="non-scaling-stroke"></path>
                </svg>
                <span className="absolute left-[19%] top-[10px] font-numeric-sm text-[9px] text-[#FFB909]">C5</span>
                <span className="absolute left-[49%] top-[18px] font-numeric-sm text-[9px] text-[#FFB909]">C6</span>
                <span className="absolute left-[77%] top-[15px] font-numeric-sm text-[9px] text-[#FFB909]">C7</span>
              </div>
            </div>
          </div>

          {/* PATTERN METRIC CARDS */}
          <div className="grid grid-cols-4 gap-[16px] mt-[16px]">
            {/* Card 1 */}
            <div className="bg-[rgba(10,36,113,0.6)] border border-[#B0EDF9]/10 rounded-[8px] py-[16px] px-[20px] flex flex-col">
              <span className="font-data-label text-[11px] text-[#8BA4B8] mb-1">BASELINE</span>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="font-numeric-xl text-[28px] font-bold text-[#F0F4F8]">142</span>
                <span className="text-[#F0F4F8] text-[14px]">bpm</span>
              </div>
              <div className="bg-[#1a4d40] text-[#99E1D9] border border-[#99E1D9] rounded px-2 py-0.5 text-[11px] w-fit font-semibold tracking-wide">NORMAL</div>
              <span className="text-[11px] text-[#8BA4B8] mt-2">Trend: Stable →</span>
            </div>
            {/* Card 2 */}
            <div className="bg-[rgba(10,36,113,0.6)] border border-[#B0EDF9]/10 rounded-[8px] py-[16px] px-[20px] flex flex-col">
              <span className="font-data-label text-[11px] text-[#8BA4B8] mb-1">VARIABILITY</span>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="font-numeric-xl text-[28px] font-bold text-[#FFB909]">3.2</span>
                <span className="text-[#FFB909] text-[14px]">bpm</span>
              </div>
              <div className="bg-[#FFB909]/20 text-[#FFB909] border border-[#FFB909] rounded px-2 py-0.5 text-[11px] w-fit font-semibold tracking-wide">MINIMAL</div>
              <span className="text-[11px] text-[#FFB909] mt-2">Duration: 35 min</span>
            </div>
            {/* Card 3 */}
            <div className="bg-[rgba(10,36,113,0.6)] border border-[#B0EDF9]/10 rounded-[8px] py-[16px] px-[20px] flex flex-col">
              <span className="font-data-label text-[11px] text-[#8BA4B8] mb-1">ACCELERATIONS</span>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="font-numeric-xl text-[28px] font-bold text-[#FF5B06]">0</span>
                <span className="text-[#FF5B06] text-[14px]">/ 20min</span>
              </div>
              <div className="bg-[#FF5B06]/10 text-[#FF5B06] border border-[#FF5B06] rounded px-2 py-0.5 text-[11px] w-fit font-semibold tracking-wide">ABSENT</div>
              <span className="text-[11px] text-[#8BA4B8] mt-2">Expected: ≥ 2</span>
            </div>
            {/* Card 4 */}
            <div className="bg-[rgba(10,36,113,0.6)] border border-[#B0EDF9]/10 rounded-[8px] py-[16px] px-[20px] flex flex-col">
              <span className="font-data-label text-[11px] text-[#8BA4B8] mb-1">DECELERATIONS</span>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="font-numeric-xl text-[28px] font-bold text-[#E53E3E]">4</span>
                <span className="text-[#E53E3E] text-[14px]">late</span>
              </div>
              <div className="bg-[#E53E3E]/20 text-[#E53E3E] border border-[#E53E3E] rounded px-2 py-0.5 text-[11px] w-fit font-semibold tracking-wide">RECURRENT</div>
              <span className="text-[11px] text-[#E53E3E] mt-2">75% recurrence</span>
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
                <span className="text-[#FFB909] text-[13px]">Confidence: 85%</span>
                <div className="w-[60px] h-[4px] bg-[#FFB909]/20 rounded-full overflow-hidden">
                  <div className="h-full bg-[#FFB909]" style={{width: '85%'}}></div>
                </div>
                <svg className="lucide lucide-chevron-down text-[#8BA4B8]" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 9 6 6 6-6"/></svg>
              </div>
            </div>

            <div className="flex gap-3 mb-3">
              <svg className="lucide lucide-alert-triangle text-[#E53E3E] shrink-0 mt-1" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>
              <p className="text-[14px] text-[#F0F4F8] leading-[1.7]">
                Recurrent late decelerations detected (4 in 20 min, 75% recurrence). Combined with reduced variability (3.2 bpm for 35 min), this pattern meets NICHD Category III criteria.
              </p>
            </div>

            <div className="bg-[rgba(255,91,6,0.07)] border-l-[3px] border-[#FF5B06] rounded-r-[6px] p-[12px] px-[16px] mb-4">
              <h4 className="font-semibold text-[#FF5B06] text-[13px] mb-2 font-data-label tracking-wide normal-case">Suggested Clinical Actions:</h4>
              <ul className="list-disc list-outside ml-4 text-[13px] text-[#F0F4F8] space-y-1">
                <li>Bedside review — immediately</li>
                <li>Intrauterine resuscitation measures</li>
                <li>Consider expedited delivery if pattern persists</li>
                <li>Reassess in 15 minutes</li>
              </ul>
            </div>

            <div className="flex justify-between items-center border-t border-white/5 pt-3">
              <div className="flex items-center gap-3">
                <span className="bg-[rgba(229,62,62,0.12)] border border-[#E53E3E] text-[#E53E3E] px-2 py-0.5 rounded text-[11px] font-medium">NICHD Category III</span>
                <span className="text-[11px] text-[#8BA4B8]">Guideline: FIGO 2015</span>
              </div>
              <span className="text-[11px] text-[#8BA4B8]">Last analyzed: 14:23:05</span>
            </div>
          </div>

          {/* EVENT TIMELINE PANEL */}
          <div className="bg-[rgba(10,36,113,0.6)] border border-[#B0EDF9]/10 rounded-[8px] p-[16px] mt-[16px]">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-2">
                <svg className="lucide lucide-clock text-[#B0EDF9]" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                <span className="font-data-label font-semibold text-[#8BA4B8] text-[12px] tracking-[0.05em]">EVENT TIMELINE</span>
              </div>
              <span className="text-[13px] text-[#B0EDF9] hover:underline cursor-pointer">Show All</span>
            </div>
            
            <div className="flex flex-col gap-1">
              {[
                { time: '13:21', color: '#99E1D9', bg: 'bg-[#99E1D9]', desc: 'Monitoring started — Baseline normal', risk: '15', rColor: 'text-[#99E1D9]', rBg: 'bg-[rgba(153,225,217,0.15)]' },
                { time: '13:45', color: '#FFB909', bg: 'bg-[#FFB909]', desc: 'Variable deceleration detected', risk: '30', rColor: 'text-[#FFB909]', rBg: 'bg-[rgba(255,185,9,0.15)]' },
                { time: '14:02', color: '#FF5B06', bg: 'bg-[#FF5B06]', desc: 'Variability decreased < 5 bpm (35 min)', risk: '45', rColor: 'text-[#FF5B06]', rBg: 'bg-[rgba(255,91,6,0.15)]' },
                { time: '14:05', color: '#E53E3E', bg: 'bg-[#E53E3E]', desc: 'First late deceleration — dip to 95 bpm', risk: '55', rColor: 'text-[#FF5B06]', rBg: 'bg-[rgba(255,91,6,0.15)]' },
                { time: '14:15', color: '#E53E3E', bg: 'bg-[#E53E3E]', desc: 'Recurrent late decelerations confirmed (4 events)', risk: '68', rColor: 'text-[#E53E3E]', rBg: 'bg-[rgba(229,62,62,0.15)]' },
              ].map((evt, i) => (
                <div key={i} className="flex items-center gap-3 py-2 border-b border-[rgba(255,255,255,0.04)] hover:bg-[rgba(255,255,255,0.02)] transition-colors">
                  <span className="font-numeric-sm text-[12px] text-[#8BA4B8] w-12">{evt.time}</span>
                  <div className={`w-2 h-2 rounded-full ${evt.bg}`}></div>
                  <span className="text-[13px] text-[#F0F4F8] flex-1">{evt.desc}</span>
                  <span className={`font-numeric-sm text-[11px] ${evt.rColor} ${evt.rBg} px-2 py-0.5 rounded`}>Risk: {evt.risk}</span>
                </div>
              ))}
              {/* Active Row */}
              <div className="flex items-center gap-3 py-2 pl-[14px] -ml-4 bg-[rgba(229,62,62,0.05)] border-l-[2px] border-[#E53E3E]">
                <span className="font-numeric-sm text-[12px] text-[#8BA4B8] w-[46px]">14:23</span>
                <div className="live-dot" style={{width:'8px', height:'8px'}}></div>
                <span className="text-[13px] text-[#F0F4F8] flex-1 font-medium">CURRENT — Category III pattern confirmed</span>
                <span className="font-numeric-sm text-[11px] text-[#E53E3E] bg-[rgba(229,62,62,0.15)] px-2 py-0.5 rounded">Risk: 72</span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN (Sticky) */}
        <div className="flex flex-col gap-[16px] sticky top-[72px] h-fit">
          
          {/* RISK SCORE PANEL */}
          <div className="bg-[rgba(10,36,113,0.6)] border border-[#B0EDF9]/10 rounded-[8px] p-[16px] flex flex-col items-center text-center">
            <span className="font-data-label text-[11px] text-[#8BA4B8] tracking-widest mb-4">RISK SCORE</span>
            
            <div className="relative w-[210px] h-[210px] flex items-center justify-center mb-2 mt-2">
              <div className="absolute w-[150px] h-[150px]">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" fill="none" r="40" stroke="rgba(255,255,255,0.08)" strokeWidth="12"></circle>
                  <circle cx="50" cy="50" fill="none" r="40" stroke="rgba(153,225,217,0.3)" strokeDasharray="75.4 175.9" strokeDashoffset="0" strokeWidth="12"></circle>
                  <circle cx="50" cy="50" fill="none" r="40" stroke="rgba(255,185,9,0.3)" strokeDasharray="75.4 175.9" strokeDashoffset="-75.4" strokeWidth="12"></circle>
                  <circle cx="50" cy="50" fill="none" r="40" stroke="rgba(255,91,6,0.3)" strokeDasharray="50.3 201" strokeDashoffset="-150.8" strokeWidth="12"></circle>
                  <circle cx="50" cy="50" fill="none" r="40" stroke="rgba(229,62,62,0.3)" strokeDasharray="50.3 201" strokeDashoffset="-201.1" strokeWidth="12"></circle>
                  
                  {/* 72% Sweep */}
                  <circle cx="50" cy="50" fill="none" r="40" stroke="#E53E3E" strokeDasharray="181 251.3" strokeDashoffset="0" strokeWidth="12" strokeLinecap="round"></circle>
                </svg>
              </div>
              
              <span className="absolute top-1 left-1/2 -translate-x-1/2 font-data-label text-[11px] font-bold text-[#8BA4B8] tracking-widest bg-[rgba(10,36,113,0.8)] px-1.5 py-0.5 rounded backdrop-blur">WATCH</span>
              <span className="absolute right-0 top-1/2 -translate-y-1/2 font-data-label text-[11px] font-bold text-[#8BA4B8] tracking-widest bg-[rgba(10,36,113,0.8)] px-1.5 py-0.5 rounded backdrop-blur">URGENT</span>
              <span className="absolute bottom-1 left-1/2 -translate-x-1/2 font-data-label text-[11px] font-bold text-[#8BA4B8] tracking-widest bg-[rgba(10,36,113,0.8)] px-1.5 py-0.5 rounded backdrop-blur">CRIT</span>
              <span className="absolute left-0 top-1/2 -translate-y-1/2 font-data-label text-[11px] font-bold text-[#8BA4B8] tracking-widest bg-[rgba(10,36,113,0.8)] px-1.5 py-0.5 rounded backdrop-blur">SAFE</span>
              
              <div className="absolute inset-0 flex flex-col items-center justify-center pt-1 pointer-events-none">
                <span className="font-numeric-xl text-[44px] font-bold text-[#E53E3E] leading-[1]">72</span>
                <span className="text-[13px] text-[#8BA4B8]">/ 100</span>
              </div>
            </div>
            
            <span className="font-data-label text-[13px] text-[#E53E3E] tracking-widest mt-2">HIGH RISK</span>
            
            <div className="w-[160px] h-[60px] mt-4 relative">
              <svg width="100%" height="100%" viewBox="0 0 160 60" preserveAspectRatio="none">
                <path d="M0,50 L40,48 L80,30 L120,20 L160,10" fill="none" stroke="#E53E3E" strokeWidth="2"></path>
              </svg>
              <span className="absolute bottom-0 left-0 text-[10px] text-[#8BA4B8]">1h ago: 15</span>
              <span className="absolute top-0 right-0 text-[10px] text-[#8BA4B8]">Now: 72</span>
            </div>
            <span className="text-[12px] text-[#E53E3E] mt-1 font-medium">↑ +57 from 1h ago</span>
          </div>

          {/* AI CONFIDENCE */}
          <div className="bg-[rgba(10,36,113,0.6)] border border-[#B0EDF9]/10 rounded-[8px] p-[16px] px-[20px]">
            <span className="font-data-label text-[11px] text-[#8BA4B8] uppercase block mb-1">AI CONFIDENCE</span>
            <div className="font-numeric-xl text-[30px] font-bold text-[#FFB909] leading-none mb-2">85%</div>
            <div className="w-full h-[6px] bg-[rgba(255,255,255,0.08)] rounded-[3px] overflow-hidden mb-1">
              <div className="h-full bg-[#FFB909] rounded-[3px]" style={{width: '85%'}}></div>
            </div>
            <span className="text-[11px] text-[#FFB909]">High confidence</span>
          </div>

          {/* SIGNAL QUALITY */}
          <div className="bg-[rgba(10,36,113,0.6)] border border-[#B0EDF9]/10 rounded-[8px] p-[16px] px-[20px]">
            <span className="font-data-label text-[11px] text-[#8BA4B8] uppercase block mb-1">SIGNAL QUALITY</span>
            <div className="font-numeric-xl text-[26px] font-bold text-[#99E1D9] leading-none mb-2">91%</div>
            <div className="w-full h-[6px] bg-[rgba(255,255,255,0.08)] rounded-[3px] overflow-hidden mb-2">
              <div className="h-full bg-[#99E1D9] rounded-[3px]" style={{width: '91%'}}></div>
            </div>
            <div className="flex items-center gap-2">
              <span className="bg-[#99E1D9]/20 text-[#99E1D9] border border-[#99E1D9] rounded px-1.5 py-0.5 text-[10px] font-semibold">GOOD</span>
              <span className="text-[11px] text-[#8BA4B8]">Electrode stable</span>
            </div>
          </div>

          {/* CONTRACTIONS */}
          <div className="bg-[rgba(10,36,113,0.6)] border border-[#B0EDF9]/10 rounded-[8px] p-[16px] px-[20px]">
            <span className="font-data-label text-[11px] text-[#8BA4B8] uppercase block mb-1">CONTRACTIONS</span>
            <div className="font-numeric-xl text-[22px] font-bold text-[#FFB909] leading-none mb-2">4.2 <span className="text-[14px] font-normal">/ 10min</span></div>
            <span className="bg-[#99E1D9]/20 text-[#99E1D9] border border-[#99E1D9] rounded px-1.5 py-0.5 text-[10px] font-semibold mb-2 inline-block">NORMAL</span>
            <div className="flex flex-col gap-1">
              <span className="text-[11px] text-[#8BA4B8]">Avg duration: 62 sec</span>
              <span className="text-[11px] text-[#8BA4B8]">Last: 14:21:05</span>
            </div>
          </div>

          {/* QUICK ACTIONS */}
          <div className="bg-[rgba(10,36,113,0.6)] border border-[#B0EDF9]/10 rounded-[8px] p-[16px]">
            <span className="font-data-label text-[11px] text-[#8BA4B8] uppercase block mb-3">QUICK ACTIONS</span>
            <div className="flex flex-col gap-2">
              <button className="w-full py-[10px] px-[14px] rounded-[6px] border border-white/20 text-[#F0F4F8] hover:bg-white/10 transition-colors flex items-center justify-center gap-2 text-[13px]">
                <svg className="lucide lucide-clipboard-plus" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M15 2H9a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1Z"/><path d="M9 14h6"/><path d="M12 11v6"/></svg>
                Add Clinical Note
              </button>
              <button className="w-full py-[10px] px-[14px] rounded-[6px] border border-white/20 text-[#F0F4F8] hover:bg-white/10 transition-colors flex items-center justify-center gap-2 text-[13px]">
                <svg className="lucide lucide-file-text" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>
                Generate Report
              </button>
              <button className="w-full py-[10px] px-[14px] rounded-[6px] border border-[#E53E3E] text-[#E53E3E] hover:bg-[rgba(229,62,62,0.08)] transition-colors flex items-center justify-center gap-2 text-[13px] font-medium mt-1">
                <svg className="lucide lucide-alert-octagon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/></svg>
                Escalate Alert
              </button>
            </div>
          </div>

        </div>
      </main>

      {/* BOTTOM STATUS BAR */}
      <footer className="fixed bottom-0 left-0 w-full h-[32px] bg-[rgba(2,31,89,0.92)] border-t border-[#B0EDF9]/10 z-50 flex items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 bg-[#4ade80] rounded-full"></div>
          <span className="text-[11px] text-[#8BA4B8]">AI Engine: Active <span className="ml-1 opacity-70">· Analyzing every 30s</span></span>
        </div>
        <div className="text-[11px] text-[#8BA4B8]">
          Patient: Jane Doe | MRN: 2024-07821 | Labour Room 3
        </div>
        <div className="flex items-center gap-2">
          <span className="font-numeric-sm text-[11px] text-[#B0EDF9]">Next analysis in: 18s</span>
          <div className="w-[80px] h-[4px] bg-white/10 rounded-full overflow-hidden">
             <div className="h-full bg-[#99E1D9]" style={{width: '60%'}}></div>
          </div>
        </div>
      </footer>
    </div>
  );
}
