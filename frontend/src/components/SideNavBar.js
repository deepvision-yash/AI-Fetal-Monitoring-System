import Link from "next/link";

export default function SideNavBar({ isOpen }) {
  return (
    <aside className={`bg-surface-container-low/95 dark:bg-surface-container-low/95 backdrop-blur-xl border-r border-outline-variant/30 shadow-2xl fixed left-0 top-16 h-[calc(100vh-64px)] flex flex-col justify-between py-md w-64 z-40 transition-all duration-500 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <div className="absolute right-0 top-0 h-full w-[1px] bg-gradient-to-b from-primary/30 via-transparent to-transparent"></div>
      <div className="relative z-10">
        <nav className="flex flex-col gap-xs px-sm mt-md">
          <Link href="/" className="flex items-center gap-md text-on-surface-variant p-md hover:bg-surface-container-highest transition-all duration-300 hover:translate-x-1 rounded-xl hover:text-primary group border border-transparent hover:border-outline-variant/30 hover:shadow-lg">
            <span className="material-symbols-outlined text-secondary group-hover:text-primary transition-colors drop-shadow-[0_0_8px_rgba(176,237,249,0.3)] group-hover:drop-shadow-[0_0_12px_rgba(166,200,255,0.6)]" style={{ fontVariationSettings: "'FILL' 0" }}>monitor_heart</span>
            <span className="text-body-md text-secondary dark:text-secondary-fixed-dim group-hover:text-primary transition-colors font-medium">CTG-Assist</span>
          </Link>
        </nav>
      </div>
      <div className="px-sm flex flex-col gap-xs border-t border-outline-variant/20 pt-md mt-auto relative z-10">
        <a className="flex items-center gap-md text-on-surface-variant p-md hover:bg-surface-container-highest transition-all duration-300 hover:translate-x-1 rounded-xl hover:text-primary group border border-transparent hover:border-outline-variant/30" href="#">
          <span className="material-symbols-outlined group-hover:text-primary transition-colors" style={{ fontVariationSettings: "'FILL' 0" }}>help</span>
          <span className="text-body-md text-on-surface-variant group-hover:text-primary transition-colors">Support</span>
        </a>
      </div>
    </aside>
  );
}
