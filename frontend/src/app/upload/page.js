"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import TopNavBar from "@/components/TopNavBar";
import SideNavBar from "@/components/SideNavBar";

export default function FileUploadConfig() {
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const [selectedFormat, setSelectedFormat] = useState('wfdb'); // 'wfdb' | 'dat'
  
  // Dummy file state
  const [datFile, setDatFile] = useState(null);
  const [heaFile, setHeaFile] = useState(null);
  
  // Settings state
  const [guideline, setGuideline] = useState('figo2015');
  const [reportLanguage, setReportLanguage] = useState('en');
  
  // Patient info state
  const [isAnonymous, setIsAnonymous] = useState(true);
  const [patientId, setPatientId] = useState('ANON_8392');
  const [patientName, setPatientName] = useState('');
  const [gestationalAge, setGestationalAge] = useState('38w 2d');
  
  // Format change handler (clear files when switching modes if needed, but here we just leave them to show state)
  const handleFormatChange = (format) => {
    setSelectedFormat(format);
  };

  // Validation
  const isUploadValid = selectedFormat === 'wfdb' ? (datFile !== null && heaFile !== null) : (datFile !== null);
  const canAnalyze = isUploadValid;

  const handleDatSelect = () => setDatFile({ name: 'recording_001.dat', size: '12.4 MB' });
  const handleHeaSelect = () => setHeaFile({ name: 'recording_001.hea', size: '4.1 KB' });
  
  const handleAnalyze = () => {
    if (!canAnalyze) return;
    console.log("Analyze clicked with state:", {
      selectedFormat,
      datFile,
      heaFile,
      guideline,
      reportLanguage,
      isAnonymous,
      patientId,
      patientName,
      gestationalAge
    });
    router.push("/processing");
  };

  return (
    <div className="text-on-surface bg-dots min-h-screen flex flex-col font-body-md overflow-x-hidden">
      {/* Reusable Top Header */}
      <TopNavBar 
        title="Offline Analysis" 
        onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
      />
      
      <div className="flex pt-16 flex-1 h-screen overflow-hidden">
        {/* SideNavBar */}
        <SideNavBar isOpen={isSidebarOpen} />
        
        {/* Main Content Canvas */}
        <main className={`flex-1 overflow-y-auto pb-24 relative transition-all duration-300 ${isSidebarOpen ? 'ml-0 md:ml-64' : 'ml-0'}`}>
          <div className="max-w-5xl mx-auto px-margin py-xl flex flex-col gap-lg">
            {/* Page Header & Progress */}
            <div className="mb-md">
              <h1 className="text-headline-lg text-primary mb-sm">Offline Analysis Configuration</h1>
              <p className="text-body-md text-on-surface-variant">Upload historical telemetry data for retrospective guideline analysis.</p>
            </div>
            
            <div className="flex items-center justify-between w-full max-w-2xl mb-lg mx-auto">
              {/* Step 1: Upload (Active) */}
              <div className="flex flex-col items-center gap-2 relative z-10 w-1/3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-primary-container text-on-primary shadow-[0_0_20px_rgba(166,200,255,0.5)] flex items-center justify-center text-panel-title">1</div>
                <span className="text-data-label text-primary">UPLOAD</span>
              </div>
              <div className="flex-1 h-px bg-gradient-to-r from-primary/50 to-outline-variant/30 -mx-4 z-0 relative top-[-10px]"></div>
              
              {/* Step 2: Processing (Inactive) */}
              <div className="flex flex-col items-center gap-2 relative z-10 w-1/3">
                <div className="w-9 h-9 rounded-full bg-surface-container-highest border border-outline-variant/50 text-on-surface-variant flex items-center justify-center text-panel-title">2</div>
                <span className="text-data-label text-on-surface-variant">ANALYZING</span>
              </div>
              <div className="flex-1 h-px bg-outline-variant/30 -mx-4 z-0 relative top-[-10px]"></div>
              
              {/* Step 3: Results (Inactive) */}
              <div className="flex flex-col items-center gap-2 relative z-10 w-1/3">
                <div className="w-9 h-9 rounded-full bg-surface-container-highest border border-outline-variant/50 text-on-surface-variant flex items-center justify-center text-panel-title">3</div>
                <span className="text-data-label text-on-surface-variant">RESULTS</span>
              </div>
            </div>
            
            {/* Bento Grid Layout for Config */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
              {/* Left Column: Upload (Spans 2 cols) */}
              <div className="lg:col-span-2 flex flex-col gap-gutter">
                {/* Format Selection Card */}
                <div className="glass-panel border border-outline-variant/30 rounded-xl p-lg shadow-lg">
                  <h3 className="text-panel-title text-[#8BA4B8] mb-md">FILE FORMAT</h3>
                  <div className="flex flex-wrap gap-3">
                    <button 
                      onClick={() => handleFormatChange('wfdb')}
                      className={`px-4 py-2 rounded-full text-data-label border shadow-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-secondary normal-case tracking-normal text-[13px] font-medium ${selectedFormat === 'wfdb' ? 'bg-primary-container text-on-primary-container border-primary/50 shadow-[0_0_12px_rgba(166,200,255,0.2)]' : 'bg-surface-container-highest text-on-surface-variant border-outline-variant/30 hover:bg-surface-variant hover:border-primary/30'}`}
                    >
                      WFDB (.DAT + .HEA)
                    </button>
                    <button 
                      onClick={() => handleFormatChange('dat')}
                      className={`px-4 py-2 rounded-full text-data-label border shadow-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-secondary normal-case tracking-normal text-[13px] font-medium ${selectedFormat === 'dat' ? 'bg-primary-container text-on-primary-container border-primary/50 shadow-[0_0_12px_rgba(166,200,255,0.2)]' : 'bg-surface-container-highest text-on-surface-variant border-outline-variant/30 hover:bg-surface-variant hover:border-primary/30'}`}
                    >
                      .DAT Only
                    </button>
                    <button className="px-4 py-2 rounded-full bg-surface-container-low text-outline border border-outline-variant/20 text-[13px] cursor-not-allowed flex items-center gap-1.5">
                      CSV <span className="text-[9px] bg-secondary-container/80 text-secondary-fixed-dim font-bold px-1.5 py-0.5 rounded tracking-wider uppercase">Soon</span>
                    </button>
                    <button className="px-4 py-2 rounded-full bg-surface-container-low text-outline border border-outline-variant/20 text-[13px] cursor-not-allowed flex items-center gap-1.5">
                      XML <span className="text-[9px] bg-secondary-container/80 text-secondary-fixed-dim font-bold px-1.5 py-0.5 rounded tracking-wider uppercase">Soon</span>
                    </button>
                  </div>
                </div>
                
                {/* Drop Zones Card */}
                <div className="glass-panel border border-outline-variant/30 rounded-xl p-lg shadow-lg flex flex-col">
                  <div className="flex justify-between items-center mb-md">
                    <h3 className="text-panel-title text-[#8BA4B8]">UPLOAD FILES</h3>
                    <span className="text-data-label text-on-surface-variant normal-case tracking-normal text-[12px] font-medium">
                      {selectedFormat === 'wfdb' ? 'Required pair for WFDB' : 'Required .DAT file'}
                    </span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-md flex-1">
                    {/* .DAT Zone */}
                    {datFile ? (
                      <div className="border-2 border-secondary/60 border-solid bg-secondary-container/20 rounded-xl p-md flex flex-col items-center justify-center text-center relative overflow-hidden transition-all group shadow-[0_0_15px_rgba(148,208,220,0.1)]">
                        <div className="absolute top-2 right-2">
                          <span className="material-symbols-outlined text-secondary drop-shadow-[0_0_6px_rgba(148,208,220,0.5)]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                        </div>
                        <span className="material-symbols-outlined text-secondary text-4xl mb-sm" style={{ fontVariationSettings: "'FILL' 0" }}>dataset</span>
                        <p className="text-body-md text-on-surface mb-xs truncate w-full px-4">{datFile.name}</p>
                        <p className="text-numeric-sm text-secondary-fixed-dim">{datFile.size}</p>
                        <div className="mt-sm flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button onClick={() => setDatFile(null)} className="text-xs text-error hover:underline focus:outline-none focus:ring-2 focus:ring-secondary rounded px-1">Remove</button>
                        </div>
                      </div>
                    ) : (
                      <div onClick={handleDatSelect} className="border-2 border-dashed border-outline-variant/40 bg-surface-container-lowest/50 rounded-xl p-md flex flex-col items-center justify-center text-center cursor-pointer hover:border-primary/50 hover:bg-surface-container-low hover:shadow-[0_0_20px_rgba(166,200,255,0.08)] transition-all duration-300 group" tabIndex="0">
                        <span className="material-symbols-outlined text-outline-variant text-4xl mb-sm group-hover:text-primary transition-colors" style={{ fontVariationSettings: "'FILL' 0" }}>upload_file</span>
                        <p className="text-body-md text-on-surface-variant mb-xs">Drag &amp; drop .DAT file</p>
                        <p className="text-data-label text-outline">or click to browse</p>
                      </div>
                    )}

                    {/* .HEA Zone */}
                    {selectedFormat === 'wfdb' && (
                      heaFile ? (
                        <div className="border-2 border-secondary/60 border-solid bg-secondary-container/20 rounded-xl p-md flex flex-col items-center justify-center text-center relative overflow-hidden transition-all group shadow-[0_0_15px_rgba(148,208,220,0.1)]">
                          <div className="absolute top-2 right-2">
                            <span className="material-symbols-outlined text-secondary drop-shadow-[0_0_6px_rgba(148,208,220,0.5)]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                          </div>
                          <span className="material-symbols-outlined text-secondary text-4xl mb-sm" style={{ fontVariationSettings: "'FILL' 0" }}>description</span>
                          <p className="text-body-md text-on-surface mb-xs truncate w-full px-4">{heaFile.name}</p>
                          <p className="text-numeric-sm text-secondary-fixed-dim">{heaFile.size}</p>
                          <div className="mt-sm flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button onClick={() => setHeaFile(null)} className="text-xs text-error hover:underline focus:outline-none focus:ring-2 focus:ring-secondary rounded px-1">Remove</button>
                          </div>
                        </div>
                      ) : (
                        <div onClick={handleHeaSelect} className="border-2 border-dashed border-outline-variant/40 bg-surface-container-lowest/50 rounded-xl p-md flex flex-col items-center justify-center text-center cursor-pointer hover:border-primary/50 hover:bg-surface-container-low hover:shadow-[0_0_20px_rgba(166,200,255,0.08)] transition-all duration-300 group" tabIndex="0">
                          <span className="material-symbols-outlined text-outline-variant text-4xl mb-sm group-hover:text-primary transition-colors" style={{ fontVariationSettings: "'FILL' 0" }}>upload_file</span>
                          <p className="text-body-md text-on-surface-variant mb-xs">Drag &amp; drop .HEA file</p>
                          <p className="text-data-label text-outline">or click to browse</p>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
              
              {/* Right Column: Settings (Spans 1 col) */}
              <div className="flex flex-col gap-gutter">
                {/* Analysis Settings Card */}
                <div className="glass-panel border border-outline-variant/30 rounded-xl p-lg shadow-lg">
                  <h3 className="text-panel-title text-[#8BA4B8] mb-md">ANALYSIS SETTINGS</h3>
                  <div className="flex flex-col gap-md">
                    <div>
                      <label className="block text-data-label text-on-surface-variant mb-2">Guideline Standard</label>
                      <div className="relative">
                        <select value={guideline} onChange={(e) => setGuideline(e.target.value)} className="w-full bg-surface-container-highest/80 border border-dashed border-[#99e1d966] rounded-lg py-2.5 px-3 text-body-md text-on-surface appearance-none focus:border-solid focus:border-secondary focus:ring-0 focus:shadow-[0_0_0_3px_rgba(148,208,220,0.2)] transition-all outline-none cursor-pointer">
                          <option value="figo2015">FIGO 2015</option>
                          <option value="nice2017">NICE 2017</option>
                          <option value="acog2009">ACOG 2009</option>
                        </select>
                        <span className="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 text-outline-variant pointer-events-none" style={{ fontVariationSettings: "'FILL' 0" }}>arrow_drop_down</span>
                      </div>
                    </div>
                    <div>
                      <label className="block text-data-label text-on-surface-variant mb-2">Report Language</label>
                      <div className="relative">
                        <select value={reportLanguage} onChange={(e) => setReportLanguage(e.target.value)} className="w-full bg-surface-container-highest/80 border border-dashed border-[#99e1d966] rounded-lg py-2.5 px-3 text-body-md text-on-surface appearance-none focus:border-solid focus:border-secondary focus:ring-0 focus:shadow-[0_0_0_3px_rgba(148,208,220,0.2)] transition-all outline-none cursor-pointer">
                          <option value="en">English (UK)</option>
                          <option value="en-us">English (US)</option>
                          <option value="es">Spanish</option>
                        </select>
                        <span className="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 text-outline-variant pointer-events-none" style={{ fontVariationSettings: "'FILL' 0" }}>arrow_drop_down</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Patient Information Card (Full Width) */}
            <div className="glass-panel border border-outline-variant/30 rounded-xl shadow-lg overflow-hidden">
              {/* Accordion Header */}
              <div className="p-4 border-b border-outline-variant/20 flex justify-between items-center cursor-pointer hover:bg-surface-container-low transition-colors" tabIndex="0">
                <div className="flex items-center gap-sm">
                  <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 0" }}>person</span>
                  <h3 className="text-panel-title text-on-surface">PATIENT INFORMATION</h3>
                </div>
                <span className="material-symbols-outlined text-outline-variant transition-transform duration-200 rotate-180" style={{ fontVariationSettings: "'FILL' 0" }}>expand_more</span>
              </div>
              
              {/* Accordion Body (Expanded) */}
              <div className="p-lg bg-surface-container-lowest/30">
                <div className="flex justify-between items-center mb-md pb-md border-b border-outline-variant/10">
                  <span className="text-body-md text-on-surface-variant">Metadata for final report generation.</span>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <span className="text-data-label text-on-surface">KEEP ANONYMOUS</span>
                    <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                      <input 
                        type="checkbox" 
                        id="toggle1" 
                        checked={isAnonymous} 
                        onChange={(e) => setIsAnonymous(e.target.checked)}
                        className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-surface border-2 border-outline-variant appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:ring-offset-1 focus:ring-offset-surface z-10 transition-transform duration-200" 
                        style={{ transform: isAnonymous ? 'translateX(100%)' : 'translateX(0)', borderColor: isAnonymous ? 'transparent' : '' }} 
                      />
                      <label className={`toggle-label block overflow-hidden h-5 rounded-full cursor-pointer ${isAnonymous ? 'bg-primary-container' : 'bg-surface-container-highest'}`} htmlFor="toggle1"></label>
                    </div>
                  </label>
                </div>
                <div className={`grid grid-cols-1 md:grid-cols-3 gap-md ${isAnonymous ? 'opacity-40 pointer-events-none' : ''}`}>
                  <div>
                    <label className="block text-data-label text-on-surface-variant mb-2">PATIENT ID</label>
                    <input 
                      className="w-full bg-surface-container border border-dashed border-outline-variant/40 rounded-lg py-2.5 px-3 text-numeric-sm text-outline-variant focus:border-solid focus:border-secondary focus:ring-0 focus:shadow-[0_0_0_3px_rgba(148,208,220,0.2)] transition-all outline-none" 
                      disabled={isAnonymous} 
                      type="text" 
                      value={patientId}
                      onChange={(e) => setPatientId(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-data-label text-on-surface-variant mb-2">PATIENT NAME</label>
                    <input 
                      className="w-full bg-surface-container border border-dashed border-outline-variant/40 rounded-lg py-2.5 px-3 text-body-md text-on-surface focus:border-solid focus:border-secondary focus:ring-0 focus:shadow-[0_0_0_3px_rgba(148,208,220,0.2)] transition-all outline-none placeholder:text-outline-variant/60 placeholder:italic" 
                      disabled={isAnonymous} 
                      placeholder="e.g. Jane Doe" 
                      type="text"
                      value={patientName}
                      onChange={(e) => setPatientName(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-data-label text-on-surface-variant mb-2">GESTATIONAL AGE</label>
                    <input 
                      className="w-full bg-surface-container-highest/80 border border-dashed border-outline-variant/40 rounded-lg py-2.5 px-3 text-body-md text-on-surface focus:border-solid focus:border-secondary focus:ring-0 focus:shadow-[0_0_0_3px_rgba(148,208,220,0.2)] transition-all outline-none pointer-events-auto opacity-100 placeholder:text-outline-variant/60 placeholder:italic" 
                      type="text" 
                      placeholder="e.g. 38w 2d"
                      value={gestationalAge}
                      onChange={(e) => setGestationalAge(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        
        {/* Action Bar (Fixed Bottom) */}
        <div className={`fixed bottom-0 right-0 bg-surface-container-high/95 backdrop-blur-xl border-t border-outline-variant/30 p-md z-30 shadow-[0_-8px_32px_rgba(0,0,0,0.3)] transition-all duration-300 ${isSidebarOpen ? 'left-0 md:left-64' : 'left-0'}`}>
          <div className="max-w-5xl mx-auto flex justify-between items-center">
            <Link href="/" className="px-6 py-2.5 rounded-xl text-panel-title text-on-surface-variant hover:bg-surface-variant transition-colors focus:outline-none focus:ring-2 focus:ring-secondary">
                Cancel
            </Link>
            <button 
              onClick={handleAnalyze}
              disabled={!canAnalyze}
              className={`px-8 py-2.5 rounded-xl text-panel-title transition-all shadow-lg flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-surface ${
                canAnalyze 
                  ? 'bg-gradient-to-r from-primary to-primary-container hover:from-primary-fixed hover:to-primary text-on-primary cursor-pointer hover:shadow-[0_0_20px_rgba(166,200,255,0.4)] transform hover:-translate-y-0.5' 
                  : 'bg-surface-variant text-outline opacity-50 cursor-not-allowed'
              }`}
            >
              <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>analytics</span>
              Analyze Recording
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
