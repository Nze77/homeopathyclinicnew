import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-emerald-900 w-full pt-16 pb-8 text-emerald-50 tracking-wide border-t border-emerald-800">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-7xl mx-auto px-8">
        {/* Brand Column */}
        <div className="col-span-1 md:col-span-2">
          <span
            className="text-3xl text-lime-400 mb-4 block"
            style={{ fontFamily: "var(--font-headline)" }}
          >
            Homoeoglow
          </span>
          <p className="text-emerald-100/70 max-w-md leading-relaxed mb-6">
            Transforming health through the power of nature and clinical
            precision. We believe in the synergy of homeopathy, nutrition, and
            cosmetology.
          </p>
          <div className="flex gap-4">
            {["public", "share", "mail"].map((icon) => (
              <span
                key={icon}
                className="material-symbols-outlined cursor-pointer hover:text-lime-400 transition-all duration-300 hover:scale-110"
              >
                {icon}
              </span>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lime-400 font-bold mb-6 text-sm uppercase tracking-widest">
            Quick Links
          </h4>
          <ul className="space-y-4">
            {[
              { label: "Home", href: "/" },
              { label: "About", href: "/about" },
              { label: "Services", href: "/services" },
              { label: "Blogs", href: "/blogs" },
              { label: "Testimonials", href: "/testimonials" },
              { label: "Contact", href: "/contact" },
            ].map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-emerald-100/80 hover:text-white transition-all opacity-80 hover:opacity-100 hover:translate-x-1 inline-block"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h4 className="text-lime-400 font-bold mb-6 text-sm uppercase tracking-widest">
            Contact Information
          </h4>
          <ul className="space-y-4 text-sm text-emerald-100/80">
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-lime-400">
                location_on
              </span>
              <span>
                123 Wellness Ave, Clinical District, Pune, Maharashtra
              </span>
            </li>
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-lime-400">
                call
              </span>
              <span>+91 98765 43210</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-lime-400">
                schedule
              </span>
              <span>Mon - Sat: 10:00 AM - 08:00 PM</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-8 mt-16 pt-8 border-t border-emerald-800 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-emerald-100/60 text-sm">
          © 2024 Homoeoglow Wellness Clinic. Healing naturally, glowing
          beautifully.
        </p>
        <div className="flex gap-6 text-sm text-emerald-100/60">
          <Link href="#" className="hover:text-lime-400 transition-colors">
            Privacy Policy
          </Link>
          <Link href="#" className="hover:text-lime-400 transition-colors">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
