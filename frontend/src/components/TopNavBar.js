"use client";

import { useState } from "react";
import Link from "next/link";

export default function TopNavBar({ title, onToggleSidebar, centerContent }) {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const notifications = [
    { id: 1, type: "critical", title: "Category III Pattern", desc: "Labor Room 3 — Recurrent late decelerations", time: "2 min ago" },
    { id: 2, type: "info", title: "Offline File Processed", desc: "recording_001.dat analysis completed", time: "15 min ago" },
  ];

  return (
    <header className="bg-surface-container-lowest/90 fixed top-0 left-0 w-full z-50 flex justify-between items-center px-lg h-16 border-b border-primary/10 backdrop-blur-2xl transition-all duration-300 shadow-[0_1px_0_rgba(166,200,255,0.1),0_4px_24px_rgba(0,0,0,0.4)]">
      {/* Gradient line at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent"></div>

      <div className="flex items-center gap-3 relative z-10">
        {onToggleSidebar && (
          <button
            onClick={onToggleSidebar}
            className="p-1.5 -ml-2 rounded-lg hover:bg-surface-variant/60 transition-colors text-on-surface-variant flex items-center justify-center cursor-pointer hover:text-primary"
            aria-label="Toggle Navigation Menu"
          >
            <span className="material-symbols-outlined text-[22px]" style={{ fontVariationSettings: "'FILL' 0" }}>menu</span>
          </button>
        )}

        {/* Premium Logo Mark */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#1a5fa8] via-primary-container to-[#0d8a7f] flex items-center justify-center shadow-[0_0_16px_rgba(166,200,255,0.35)] border border-primary/30 shrink-0 group-hover:scale-105 transition-transform duration-300">
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
        </Link>

        {title && (
          <>
            <div className="w-px h-6 bg-outline-variant/40 mx-1 hidden sm:block"></div>
            <span className="text-body-md text-on-surface-variant/80 font-medium hidden sm:inline-block">{title}</span>
          </>
        )}
      </div>

      {centerContent && (
        <div className="flex-1 flex justify-center items-center gap-4 relative z-10">
          {centerContent}
        </div>
      )}

      <div className="flex items-center gap-3 sm:gap-4 relative z-10">
        <div className="flex items-center gap-1 sm:gap-2">
          {/* Notifications Button & Dropdown */}
          <div className="relative">
            <button 
              onClick={() => { setShowNotifications(!showNotifications); setShowProfileMenu(false); }}
              className="w-9 h-9 rounded-lg flex items-center justify-center text-outline-variant hover:text-primary hover:bg-surface-variant/50 transition-all duration-200 cursor-pointer relative"
              aria-label="Notifications"
            >
              <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 0" }}>notifications</span>
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-error animate-pulse shadow-[0_0_8px_rgba(229,62,62,0.8)]"></span>
            </button>

            {showNotifications && (
              <div className="absolute right-0 mt-2 w-80 bg-surface-container-high border border-outline-variant/40 rounded-xl shadow-2xl backdrop-blur-xl p-3 z-50 modal-content">
                <div className="flex justify-between items-center pb-2 border-b border-outline-variant/20 mb-2">
                  <span className="text-panel-title text-on-surface text-[12px]">Clinical Alerts</span>
                  <span className="text-[10px] text-primary cursor-pointer hover:underline">Mark all read</span>
                </div>
                <div className="flex flex-col gap-2">
                  {notifications.map((n) => (
                    <div key={n.id} className="p-2.5 rounded-lg bg-surface-container-lowest/60 border border-outline-variant/20 hover:border-primary/30 transition-all">
                      <div className="flex items-center justify-between mb-1">
                        <span className={`text-[11px] font-bold ${n.type === 'critical' ? 'text-error' : 'text-secondary'}`}>{n.title}</span>
                        <span className="text-[9px] text-outline">{n.time}</span>
                      </div>
                      <p className="text-[11.5px] text-on-surface-variant leading-snug">{n.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Quick Settings Link */}
          <Link href="/live" className="w-9 h-9 rounded-lg flex items-center justify-center text-outline-variant hover:text-primary hover:bg-surface-variant/50 transition-all duration-200 cursor-pointer" title="Live Dashboard">
            <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 0" }}>monitor_heart</span>
          </Link>
        </div>

        <div className="w-px h-7 bg-outline-variant/30"></div>

        {/* Doctor Profile Menu */}
        <div className="relative">
          <div 
            onClick={() => { setShowProfileMenu(!showProfileMenu); setShowNotifications(false); }}
            className="flex items-center gap-2 cursor-pointer group"
          >
            <div className="text-right hidden md:block">
              <div className="text-panel-title text-on-surface/90 group-hover:text-primary transition-colors duration-200 text-[12.5px]">Dr. Clinical Lead</div>
              <div className="text-[10px] text-outline tracking-normal normal-case" style={{ fontFamily: "'DM Sans', sans-serif" }}>Obstetrics &amp; Fetal Medicine</div>
            </div>
            <div className="relative">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary to-secondary p-[1.5px] shadow-[0_0_10px_rgba(166,200,255,0.3)]">
                <div className="w-full h-full rounded-full bg-surface-container flex items-center justify-center text-primary font-bold text-[12px]">
                  CL
                </div>
              </div>
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-surface-container-lowest shadow-sm"></span>
            </div>
          </div>

          {showProfileMenu && (
            <div className="absolute right-0 mt-2 w-56 bg-surface-container-high border border-outline-variant/40 rounded-xl shadow-2xl backdrop-blur-xl p-2 z-50 modal-content">
              <div className="px-3 py-2 border-b border-outline-variant/20 mb-1">
                <p className="text-body-md text-on-surface font-semibold text-[13px]">Dr. Clinical Lead</p>
                <p className="text-[11px] text-on-surface-variant">lead.clinician@hospital.org</p>
              </div>
              <a href="#" className="flex items-center gap-2 px-3 py-2 rounded-lg text-[12.5px] text-on-surface-variant hover:bg-surface-container-highest hover:text-on-surface transition-colors">
                <span className="material-symbols-outlined text-[16px]">account_circle</span> Profile Settings
              </a>
              <a href="#" className="flex items-center gap-2 px-3 py-2 rounded-lg text-[12.5px] text-on-surface-variant hover:bg-surface-container-highest hover:text-on-surface transition-colors">
                <span className="material-symbols-outlined text-[16px]">tune</span> Alarm Thresholds
              </a>
              <div className="h-px bg-outline-variant/20 my-1"></div>
              <a href="#" className="flex items-center gap-2 px-3 py-2 rounded-lg text-[12.5px] text-error hover:bg-error/10 transition-colors">
                <span className="material-symbols-outlined text-[16px]">logout</span> Log Out
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
