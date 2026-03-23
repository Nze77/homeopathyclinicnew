"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  { icon: "grid_view", label: "Explore", href: "/" },
  { icon: "event_available", label: "Consult", href: "/services" },
  { icon: "person_outline", label: "Account", href: "/about" },
  { icon: "favorite_border", label: "Saved", href: "/testimonials" },
];

export default function MobileBottomNav() {
  const pathname = usePathname();
  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center pt-3 pb-6 bg-white/90 backdrop-blur-xl border-t border-stone-200/50 shadow-[0_-4px_20px_rgba(0,0,0,0.03)] md:hidden">
      {items.map((item) => {
        const active = pathname === item.href;
        return (
          <Link key={item.label} href={item.href}
            className={`flex flex-col items-center transition-all duration-300 ${active ? "text-emerald-900 scale-110" : "text-stone-400 hover:text-emerald-600 active:scale-95"}`}>
            <span className="material-symbols-outlined" style={active ? { fontVariationSettings: "'FILL' 1" } : undefined}>{item.icon}</span>
            <span className="text-[10px] uppercase tracking-widest mt-1">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
