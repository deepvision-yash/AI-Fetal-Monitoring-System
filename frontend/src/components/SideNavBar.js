"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SideNavBar({ isOpen, onClose }) {
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Input Selector", icon: "dashboard", category: "MAIN" },
    { href: "/live", label: "Live Monitoring", icon: "activity", badge: "LIVE", badgeColor: "bg-error text-white font-bold animate-pulse", category: "MAIN" },
    { href: "/upload", label: "Offline Analysis", icon: "upload_file", category: "MAIN" },
    { href: "/results", label: "Analysis Results", icon: "analytics", category: "MAIN" },
  ];

  const clinicalTools = [
    { href: "#patients", label: "Patient Directory", icon: "groups" },
    { href: "#guidelines", label: "Guidelines (FIGO / NICE)", icon: "verified" },
    { href: "#reports", label: "Clinical Audit Logs", icon: "description" },
  ];

  return (
    <>
      {/* Mobile Overlay backdrop */}
      {isOpen && (
        <div 
          onClick={onClose} 
          className="md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-30 transition-opacity"
        />
      )}

      <aside 
        className={`bg-surface-container-low/95 backdrop-blur-xl border-r border-outline-variant/30 shadow-2xl fixed left-0 top-16 h-[calc(100vh-64px)] flex flex-col justify-between py-md w-64 z-40 transition-all duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
        <div className="absolute right-0 top-0 h-full w-[1px] bg-gradient-to-b from-primary/30 via-transparent to-transparent pointer-events-none"></div>

        <div className="relative z-10 flex-1 overflow-y-auto px-sm custom-scrollbar">
          <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-outline-variant px-md mb-2 mt-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Workspace
          </div>

          <nav className="flex flex-col gap-1 mb-6">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center justify-between p-3 rounded-xl transition-all duration-200 group border ${
                    isActive
                      ? 'bg-primary-container/40 border-primary/50 text-primary shadow-[0_0_15px_rgba(166,200,255,0.15)] font-semibold'
                      : 'border-transparent text-on-surface-variant hover:bg-surface-container-highest/60 hover:text-on-surface hover:translate-x-0.5'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span 
                      className={`material-symbols-outlined text-[20px] transition-colors ${
                        isActive ? 'text-primary drop-shadow-[0_0_8px_rgba(166,200,255,0.6)]' : 'text-outline group-hover:text-secondary'
                      }`}
                      style={{ fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0" }}
                    >
                      {item.icon}
                    </span>
                    <span className="text-body-md text-[13.5px] font-medium">{item.label}</span>
                  </div>
                  {item.badge && (
                    <span className={`text-[10px] px-2 py-0.5 rounded-full ${item.badgeColor}`}>
                      {item.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-outline-variant px-md mb-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Clinical Tools
          </div>

          <nav className="flex flex-col gap-1">
            {clinicalTools.map((tool) => (
              <a
                key={tool.label}
                href={tool.href}
                className="flex items-center gap-3 p-3 rounded-xl text-on-surface-variant hover:bg-surface-container-highest/40 hover:text-on-surface transition-all duration-200 group border border-transparent"
              >
                <span className="material-symbols-outlined text-[20px] text-outline group-hover:text-secondary transition-colors" style={{ fontVariationSettings: "'FILL' 0" }}>
                  {tool.icon}
                </span>
                <span className="text-body-md text-[13.5px] font-medium">{tool.label}</span>
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom Section */}
        <div className="px-sm flex flex-col gap-1 border-t border-outline-variant/20 pt-md mt-auto relative z-10">
          <div className="bg-surface-container-highest/30 rounded-xl p-3 border border-outline-variant/20 flex items-center gap-3 mb-2">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></div>
            <div className="text-[11px] text-on-surface-variant">
              System Online <span className="text-outline text-[10px] block">AI Engine v2.4 Active</span>
            </div>
          </div>
          <a
            className="flex items-center gap-3 text-on-surface-variant p-2.5 hover:bg-surface-container-highest transition-all duration-200 rounded-xl hover:text-primary group"
            href="#"
          >
            <span className="material-symbols-outlined text-[20px] text-outline group-hover:text-primary transition-colors" style={{ fontVariationSettings: "'FILL' 0" }}>
              help
            </span>
            <span className="text-body-md text-[13px] text-on-surface-variant group-hover:text-primary">Support &amp; Docs</span>
          </a>
        </div>
      </aside>
    </>
  );
}
