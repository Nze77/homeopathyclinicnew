"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Blogs", href: "/blogs" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled
            ? "bg-white/90 backdrop-blur-xl shadow-lg shadow-primary/5"
            : "bg-white/80 backdrop-blur-md shadow-sm"
          }`}
        style={{ borderBottom: scrolled ? "1px solid rgba(190,201,197,0.3)" : "none" }}
      >
        <div className="flex justify-between items-center max-w-7xl mx-auto px-8 py-4">
          <Link href="/" className="flex items-center group">
            <div className="relative w-64 h-14 transition-transform duration-500 group-hover:scale-[1.02]">
              <Image src="/logo.png" alt="Homoeoglow" fill className="object-contain object-left" sizes="256px" priority />
            </div>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`transition-all duration-300 font-serif hover-underline-sweep ${pathname === link.href
                    ? "text-emerald-900 font-bold border-b-2 border-lime-500"
                    : "text-emerald-700/70 hover:text-emerald-900"
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <Link href="/contact" className="hidden md:inline-flex bg-primary text-on-primary px-6 py-2.5 rounded-xl font-medium hover:bg-primary-container transition-all active:scale-95 duration-200 hover-ripple">
            Book Consultation
          </Link>
          <button className="md:hidden flex flex-col gap-1.5 p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
            <span className={`block w-6 h-0.5 bg-emerald-900 transition-all duration-300 ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-emerald-900 transition-all duration-300 ${mobileMenuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-emerald-900 transition-all duration-300 ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </nav>
      <div className={`fixed inset-0 z-40 bg-white/95 backdrop-blur-xl transition-all duration-500 md:hidden ${mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link, i) => (
            <Link key={link.label} href={link.href} onClick={() => setMobileMenuOpen(false)}
              className={`text-2xl transition-all duration-500 font-serif ${mobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"} ${pathname === link.href ? "text-primary font-bold" : "text-emerald-700/70"}`}
              style={{ transitionDelay: `${i * 80}ms` }}>
              {link.label}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="mt-4 bg-primary text-on-primary px-10 py-4 rounded-xl font-semibold text-lg">Book Consultation</Link>
        </div>
      </div>
    </>
  );
}
