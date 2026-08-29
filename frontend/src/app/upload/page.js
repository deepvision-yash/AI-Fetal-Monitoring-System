"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import TopNavBar from "@/components/TopNavBar";
import SideNavBar from "@/components/SideNavBar";

export default function FileUploadConfig() {
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const [selectedFormat, setSelectedFormat] = useState('wfdb'); // 'wfdb' | 'dat'
  
  // File state
  const [datFile, setDatFile] = useState(null);
  const [heaFile, setHeaFile] = useState(null);
  
  // Settings state
  const [guideline, setGuideline] = useState('figo2015');
  const [reportLanguage, setReportLanguage] = useState('en');
  
  // Patient info state
  const [isAnonymous, setIsAnonymous] = useState(true);
  const [patientId, setPatientId] = useState('ANON_8392');
  const [patientName, setPatientName] = useState('Jane Doe');
  const [gestationalAge, setGestationalAge] = useState('38w 2d');
  
  const handleFormatChange = (format) => {
    setSelectedFormat(format);
  };

  // 1-Click Sample File Loader
  const handleLoadSample = () => {
    setDatFile({ name: 'recording_1001.dat', size: '14.2 MB', length: '1h 45min', channels: 'FHR + UC', fs: '4 Hz' });
    setHeaFile({ name: 'recording_1001.hea', size: '4.2 KB', type: 'WFDB Header' });
  };

  const handleDatSelect = () => setDatFile({ name: 'recording_custom.dat', size: '12.4 MB', length: '1h 20min', channels: 'FHR + UC', fs: '4 Hz' });
  const handleHeaSelect = () => setHeaFile({ name: 'recording_custom.hea', size: '4.1 KB', type: 'WFDB Header' });

  // Validation
  const isUploadValid = selectedFormat === 'wfdb' ? (datFile !== null && heaFile !== null) : (datFile !== null);

  const handleAnalyze = () => {
    if (!isUploadValid) return;
    router.push("/processing");
  };

  return (
    <div className="text-on-surface bg-dots min-h-screen flex flex-col font-body-md overflow-x-hidden">
      {/* Reusable Top Header */}
      <TopNavBar 
        title="Offline Analysis Configuration" 
        onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
      />
      
      <div className="flex pt-16 flex-1 h-screen overflow-hidden">
        {/* SideNavBar */}
        <SideNavBar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
        
        {/* Main Content Canvas */}
        <main className={`flex-1 overflow-y-auto pb-32 relative transition-all duration-300 ${isSidebarOpen ? 'ml-0 md:ml-64' : 'ml-0'}`}>
          <div className="max-w-5xl mx-auto px-margin py-8 flex flex-col gap-lg">
            {/* Page Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h1 className="text-headline-lg text-primary mb-1 font-bold text-2xl md:text-3xl">
                  Offline Analysis Setup
                </h1>
                <p className="text-body-md text-on-surface-variant text-[14px]">
                  Configure CTG signal datasets, select clinical guidelines, and prepare for retrospective AI analysis.
                </p>
              </div>

              <button
                onClick={handleLoadSample}
                className="bg-secondary-container/60 hover:bg-secondary-container text-secondary-fixed-dim border border-secondary/40 hover:border-secondary px-4 py-2.5 rounded-xl text-[12.5px] font-semibold transition-all flex items-center gap-2 shadow-sm hover:shadow-[0_0_15px_rgba(148,208,220,0.2)] shrink-0 self-start md:self-auto cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">folder_special</span>
                Load Sample Dataset (PhysioNet 1001)
              </button>
            </div>
            
            {/* Progress Stepper */}
            <div className="flex items-center justify-between w-full max-w-2xl mb-2 mx-auto">
              <div className="flex flex-col items-center gap-1.5 relative z-10 w-1/3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-primary-container text-on-primary shadow-[0_0_20px_rgba(166,200,255,0.5)] flex items-center justify-center font-bold text-sm">1</div>
                <span className="text-data-label text-primary font-bold text-[11px]">UPLOAD &amp; CONFIG</span>
              </div>
              <div className="flex-1 h-px bg-gradient-to-r from-primary/50 to-outline-variant/30 -mx-4 z-0 relative top-[-12px]"></div>
              
              <div className="flex flex-col items-center gap-1.5 relative z-10 w-1/3">
                <div className="w-9 h-9 rounded-full bg-surface-container-highest border border-outline-variant/50 text-on-surface-variant flex items-center justify-center font-semibold text-sm">2</div>
                <span className="text-data-label text-on-surface-variant text-[11px]">AI PROCESSING</span>
              </div>
              <div className="flex-1 h-px bg-outline-variant/30 -mx-4 z-0 relative top-[-12px]"></div>
              
              <div className="flex flex-col items-center gap-1.5 relative z-10 w-1/3">
                <div className="w-9 h-9 rounded-full bg-surface-container-highest border border-outline-variant/50 text-on-surface-variant flex items-center justify-center font-semibold text-sm">3</div>
                <span className="text-data-label text-on-surface-variant text-[11px]">RESULTS &amp; REPORT</span>
              </div>
            </div>
            
            {/* Main Bento Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
              {/* Left Column: File Mode & Upload Drops (Spans 2 cols) */}
              <div className="lg:col-span-2 flex flex-col gap-gutter">
                {/* Format Selection Card */}
                <div className="glass-panel border border-outline-variant/30 rounded-2xl p-6 shadow-lg">
                  <h3 className="text-panel-title text-[#8BA4B8] mb-3 text-[12px]">TELEMETRY FORMAT</h3>
                  <div className="flex flex-wrap gap-3">
                    <button 
                      onClick={() => handleFormatChange('wfdb')}
                      className={`px-4 py-2.5 rounded-xl text-data-label border shadow-sm transition-all duration-300 normal-case tracking-normal text-[13px] font-medium flex items-center gap-2 cursor-pointer ${
                        selectedFormat === 'wfdb' 
                          ? 'bg-primary-container text-on-primary-container border-primary/60 shadow-[0_0_15px_rgba(166,200,255,0.25)] font-semibold' 
                          : 'bg-surface-container-highest text-on-surface-variant border-outline-variant/30 hover:bg-surface-variant'
                      }`}
                    >
                      <span className="material-symbols-outlined text-[18px]">verified</span>
                      WFDB Pair (.DAT + .HEA)
                    </button>
                    <button 
                      onClick={() => handleFormatChange('dat')}
                      className={`px-4 py-2.5 rounded-xl text-data-label border shadow-sm transition-all duration-300 normal-case tracking-normal text-[13px] font-medium flex items-center gap-2 cursor-pointer ${
                        selectedFormat === 'dat' 
                          ? 'bg-primary-container text-on-primary-container border-primary/60 shadow-[0_0_15px_rgba(166,200,255,0.25)] font-semibold' 
                          : 'bg-surface-container-highest text-on-surface-variant border-outline-variant/30 hover:bg-surface-variant'
                      }`}
                    >
                      .DAT Signal Only
                    </button>
                    <button className="px-3.5 py-2.5 rounded-xl bg-surface-container-low text-outline border border-outline-variant/20 text-[13px] cursor-not-allowed flex items-center gap-1.5 opacity-60">
                      CSV <span className="text-[9px] bg-secondary-container/80 text-secondary-fixed-dim font-bold px-1.5 py-0.5 rounded tracking-wider uppercase">Soon</span>
                    </button>
                  </div>
                </div>
                
                {/* Drop Zones Card */}
                <div className="glass-panel border border-outline-variant/30 rounded-2xl p-6 shadow-lg flex flex-col">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-panel-title text-[#8BA4B8] text-[12px]">UPLOAD FILES</h3>
                    <span className="text-data-label text-secondary text-[12px] font-medium">
                      {selectedFormat === 'wfdb' ? 'Pair required (.DAT + .HEA)' : 'Single .DAT file required'}
                    </span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-md flex-1">
                    {/* .DAT Zone */}
                    {datFile ? (
                      <div className="border-2 border-secondary/60 border-solid bg-secondary-container/20 rounded-2xl p-5 flex flex-col items-center justify-center text-center relative overflow-hidden transition-all group shadow-[0_0_20px_rgba(148,208,220,0.15)]">
                        <div className="absolute top-3 right-3">
                          <span className="material-symbols-outlined text-secondary text-[22px]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                        </div>
                        <span className="material-symbols-outlined text-secondary text-4xl mb-2">dataset</span>
                        <p className="text-body-md text-on-surface font-semibold truncate w-full px-2">{datFile.name}</p>
                        <p className="text-numeric-sm text-secondary-fixed-dim text-[12px]">{datFile.size}</p>
                        <button onClick={() => setDatFile(null)} className="mt-3 text-xs text-error hover:underline focus:outline-none cursor-pointer">
                          Remove File
                        </button>
                      </div>
                    ) : (
                      <div onClick={handleDatSelect} className="border-2 border-dashed border-outline-variant/50 bg-surface-container-lowest/50 rounded-2xl p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:border-primary/60 hover:bg-surface-container-low hover:shadow-[0_0_25px_rgba(166,200,255,0.1)] transition-all duration-300 group" tabIndex="0">
                        <span className="material-symbols-outlined text-outline-variant text-4xl mb-2 group-hover:text-primary transition-colors">upload_file</span>
                        <p className="text-body-md text-on-surface font-medium mb-1">Select .DAT Signal File</p>
                        <p className="text-data-label text-outline text-[11px]">Click to browse or drag file here</p>
                      </div>
                    )}

                    {/* .HEA Zone */}
                    {selectedFormat === 'wfdb' && (
                      heaFile ? (
                        <div className="border-2 border-secondary/60 border-solid bg-secondary-container/20 rounded-2xl p-5 flex flex-col items-center justify-center text-center relative overflow-hidden transition-all group shadow-[0_0_20px_rgba(148,208,220,0.15)]">
                          <div className="absolute top-3 right-3">
                            <span className="material-symbols-outlined text-secondary text-[22px]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                          </div>
                          <span className="material-symbols-outlined text-secondary text-4xl mb-2">description</span>
                          <p className="text-body-md text-on-surface font-semibold truncate w-full px-2">{heaFile.name}</p>
                          <p className="text-numeric-sm text-secondary-fixed-dim text-[12px]">{heaFile.size}</p>
                          <button onClick={() => setHeaFile(null)} className="mt-3 text-xs text-error hover:underline focus:outline-none cursor-pointer">
                            Remove File
                          </button>
                        </div>
                      ) : (
                        <div onClick={handleHeaSelect} className="border-2 border-dashed border-outline-variant/50 bg-surface-container-lowest/50 rounded-2xl p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:border-primary/60 hover:bg-surface-container-low hover:shadow-[0_0_25px_rgba(166,200,255,0.1)] transition-all duration-300 group" tabIndex="0">
                          <span className="material-symbols-outlined text-outline-variant text-4xl mb-2 group-hover:text-primary transition-colors">upload_file</span>
                          <p className="text-body-md text-on-surface font-medium mb-1">Select .HEA Header File</p>
                          <p className="text-data-label text-outline text-[11px]">Click to browse or drag file here</p>
                        </div>
                      )
                    )}
                  </div>
                </div>

                {/* File Metadata Inspector Card (Appears when file uploaded) */}
                {datFile && (
                  <div className="glass-panel border border-secondary/40 rounded-2xl p-5 shadow-xl bg-secondary-container/10 modal-content">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="material-symbols-outlined text-secondary text-[20px]">analytics</span>
                      <h4 className="text-panel-title text-secondary text-[13px]">Parsed Signal Inspection</h4>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-[12px]">
                      <div className="bg-surface-container/60 p-2.5 rounded-xl border border-outline-variant/20">
                        <span className="text-outline block text-[10px]">RECORDING DURATION</span>
                        <span className="text-on-surface font-bold font-mono text-[13px]">{datFile.length || "1h 45min"}</span>
                      </div>
                      <div className="bg-surface-container/60 p-2.5 rounded-xl border border-outline-variant/20">
                        <span className="text-outline block text-[10px]">CHANNELS DETECTED</span>
                        <span className="text-on-surface font-bold text-[13px]">{datFile.channels || "FHR + UC"}</span>
                      </div>
                      <div className="bg-surface-container/60 p-2.5 rounded-xl border border-outline-variant/20">
                        <span className="text-outline block text-[10px]">SAMPLING RATE</span>
                        <span className="text-on-surface font-bold font-mono text-[13px]">{datFile.fs || "4 Hz"}</span>
                      </div>
                      <div className="bg-surface-container/60 p-2.5 rounded-xl border border-outline-variant/20">
                        <span className="text-outline block text-[10px]">SIGNAL INTEGRITY</span>
                        <span className="text-emerald-400 font-bold text-[13px]">99.4% (Clean)</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Right Column: Settings */}
              <div className="flex flex-col gap-gutter">
                <div className="glass-panel border border-outline-variant/30 rounded-2xl p-6 shadow-lg">
                  <h3 className="text-panel-title text-[#8BA4B8] mb-4 text-[12px]">ANALYSIS PARAMETERS</h3>
                  <div className="flex flex-col gap-4">
                    <div>
                      <label className="block text-data-label text-on-surface-variant mb-2 text-[11px]">GUIDELINE STANDARD</label>
                      <select 
                        value={guideline} 
                        onChange={(e) => setGuideline(e.target.value)} 
                        className="w-full bg-surface-container-highest/90 border border-outline-variant/40 rounded-xl py-2.5 px-3.5 text-body-md text-on-surface focus:border-secondary focus:ring-2 focus:ring-secondary/30 transition-all outline-none cursor-pointer text-[13.5px]"
                      >
                        <option value="figo2015">FIGO 2015 Guidelines (Default)</option>
                        <option value="nice2017">NICE 2017 Guidelines</option>
                        <option value="acog2009">ACOG 2009 Practice Bulletin</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-data-label text-on-surface-variant mb-2 text-[11px]">REPORT LANGUAGE</label>
                      <select 
                        value={reportLanguage} 
                        onChange={(e) => setReportLanguage(e.target.value)} 
                        className="w-full bg-surface-container-highest/90 border border-outline-variant/40 rounded-xl py-2.5 px-3.5 text-body-md text-on-surface focus:border-secondary focus:ring-2 focus:ring-secondary/30 transition-all outline-none cursor-pointer text-[13.5px]"
                      >
                        <option value="en">English (UK Clinical)</option>
                        <option value="en-us">English (US Standard)</option>
                        <option value="es">Spanish (Español)</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Patient Information Card */}
            <div className="glass-panel border border-outline-variant/30 rounded-2xl shadow-lg overflow-hidden">
              <div className="p-5 border-b border-outline-variant/20 flex justify-between items-center bg-surface-container-low/40">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary">person</span>
                  <h3 className="text-panel-title text-on-surface text-[13px]">PATIENT METADATA</h3>
                </div>
                <label className="flex items-center gap-3 cursor-pointer">
                  <span className="text-data-label text-on-surface text-[11px]">ANONYMIZE RECORD</span>
                  <input 
                    type="checkbox" 
                    checked={isAnonymous} 
                    onChange={(e) => setIsAnonymous(e.target.checked)}
                    className="w-4 h-4 rounded text-primary focus:ring-primary bg-surface-container border-outline-variant cursor-pointer"
                  />
                </label>
              </div>
              
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
                  <div>
                    <label className="block text-data-label text-on-surface-variant mb-2 text-[11px]">PATIENT ID / MRN</label>
                    <input 
                      className={`w-full bg-surface-container border border-outline-variant/40 rounded-xl py-2.5 px-3.5 text-numeric-sm text-on-surface transition-all outline-none ${isAnonymous ? 'opacity-50' : ''}`}
                      disabled={isAnonymous} 
                      type="text" 
                      value={patientId}
                      onChange={(e) => setPatientId(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-data-label text-on-surface-variant mb-2 text-[11px]">PATIENT NAME</label>
                    <input 
                      className={`w-full bg-surface-container border border-outline-variant/40 rounded-xl py-2.5 px-3.5 text-body-md text-on-surface transition-all outline-none ${isAnonymous ? 'opacity-50' : ''}`}
                      disabled={isAnonymous} 
                      placeholder="e.g. Jane Doe" 
                      type="text"
                      value={patientName}
                      onChange={(e) => setPatientName(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-data-label text-on-surface-variant mb-2 text-[11px]">GESTATIONAL AGE</label>
                    <input 
                      className="w-full bg-surface-container-highest/90 border border-outline-variant/40 rounded-xl py-2.5 px-3.5 text-body-md text-on-surface transition-all outline-none font-medium"
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
        <div className={`fixed bottom-0 right-0 bg-surface-container-high/95 backdrop-blur-xl border-t border-outline-variant/30 p-4 z-30 shadow-[0_-8px_32px_rgba(0,0,0,0.4)] transition-all duration-300 ${isSidebarOpen ? 'left-0 md:left-64' : 'left-0'}`}>
          <div className="max-w-5xl mx-auto flex justify-between items-center">
            <Link href="/" className="px-6 py-2.5 rounded-xl text-panel-title text-on-surface-variant hover:bg-surface-variant transition-colors text-[13px]">
              Cancel
            </Link>
            
            <button 
              onClick={handleAnalyze}
              disabled={!isUploadValid}
              className={`px-8 py-3 rounded-xl text-panel-title text-[13px] transition-all shadow-lg flex items-center gap-2 font-semibold ${
                isUploadValid 
                  ? 'bg-gradient-to-r from-primary via-primary-container to-secondary text-on-primary cursor-pointer hover:shadow-[0_0_25px_rgba(166,200,255,0.4)] transform hover:-translate-y-0.5' 
                  : 'bg-surface-variant text-outline opacity-50 cursor-not-allowed'
              }`}
            >
              <span className="material-symbols-outlined text-[18px]">analytics</span>
              Start AI Analysis Pipeline
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
