export default function TopNavBar({ title, onToggleSidebar, centerContent }) {
  return (
    <header className="bg-surface-container-lowest/80 dark:bg-surface-container-lowest/80 fixed top-0 left-0 w-full z-50 flex justify-between items-center px-lg h-16 border-b border-primary/10 backdrop-blur-2xl transition-all duration-300 shadow-[0_1px_0_rgba(166,200,255,0.1),0_4px_24px_rgba(0,0,0,0.4)]">
      {/* Gradient line at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent"></div>

      <div className="flex items-center gap-3 relative z-10">
        {onToggleSidebar && (
          <button
            onClick={onToggleSidebar}
            className="p-1.5 -ml-2 rounded-lg hover:bg-surface-variant/60 transition-colors text-on-surface-variant flex items-center justify-center cursor-pointer hover:text-primary"
          >
            <span className="material-symbols-outlined text-[22px]" style={{ fontVariationSettings: "'FILL' 0" }}>menu</span>
          </button>
        )}

        {/* Premium Logo Mark */}
        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#1a5fa8] via-primary-container to-[#0d8a7f] flex items-center justify-center shadow-[0_0_16px_rgba(166,200,255,0.35)] border border-primary/30 shrink-0">
          <span className="material-symbols-outlined text-[20px] text-white" style={{ fontVariationSettings: "'FILL' 1" }}>ecg_heart</span>
        </div>

        {/* Brand Title */}
        <div className="flex flex-col leading-none">
          <span
            className="font-bold tracking-tight"
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: '17px',
              lineHeight: '1.1',
              background: 'linear-gradient(90deg, #a6c8ff 0%, #94d0dc 50%, #8cd3cc 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            AI Fetal Monitoring
          </span>
          <span className="text-[9px] tracking-[0.2em] text-outline-variant uppercase" style={{ fontFamily: "'DM Sans', sans-serif" }}>Clinical Decision Support</span>
        </div>

        {title && (
          <>
            <div className="w-px h-6 bg-outline-variant/40 mx-1"></div>
            <span className="text-body-md text-on-surface-variant/70">{title}</span>
          </>
        )}
      </div>

      {centerContent && (
        <div className="flex-1 flex justify-center items-center gap-4 relative z-10">
          {centerContent}
        </div>
      )}

      <div className="flex items-center gap-4 relative z-10">
        <div className="flex gap-3">
          <button className="w-8 h-8 rounded-lg flex items-center justify-center text-outline-variant hover:text-primary hover:bg-surface-variant/50 transition-all duration-200 cursor-pointer">
            <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 0" }}>notifications</span>
          </button>
          <button className="w-8 h-8 rounded-lg flex items-center justify-center text-outline-variant hover:text-primary hover:bg-surface-variant/50 transition-all duration-200 cursor-pointer">
            <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 0" }}>settings</span>
          </button>
        </div>

        <div className="w-px h-7 bg-outline-variant/30"></div>

        <div className="flex items-center gap-2 cursor-pointer group">
          <div className="text-right hidden md:block">
            <div className="text-panel-title text-on-surface/90 group-hover:text-primary transition-colors duration-200">Dr. Clinical Lead</div>
            <div className="text-[10px] text-outline tracking-normal normal-case" style={{ fontFamily: "'DM Sans', sans-serif" }}>General Hospital</div>
          </div>
          <div className="relative">
            <img
              alt="Dr. Clinical Lead Avatar"
              className="w-8 h-8 rounded-full object-cover border-2 border-primary/30 shadow-[0_0_8px_rgba(166,200,255,0.2)] group-hover:border-primary/60 transition-colors"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAY3e1Fh1ly2mITBLR4jjnMDUKxB5hHUuDSGNQcxjnmlan7vGyKfJtKvExKnAEZfe9F9w0TvesFLJaoqx_fL9DIcjTep0rDoCdGTjDWAWyh_5ZQIA7ExiwwjMP0XAOwK1Lg3rGtxDeU9SE5B5wFa8AOPXr_hLawYPDBHlVKfF8kNAuNUgHtI26oYAmS-5boiLDJ8iNjfUzaivwnWGLuLuNPQa8dDVUGcXvkw5iIxCAIVFXeD7xC3Z--iA"
            />
            <span className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-[#10B981] border border-surface-container-lowest shadow-sm"></span>
          </div>
        </div>
      </div>
    </header>
  );
}
