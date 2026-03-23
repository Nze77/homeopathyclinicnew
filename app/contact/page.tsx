"use client";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollReveal from "../components/ScrollReveal";
import MobileBottomNav from "../components/MobileBottomNav";

const IMG = {
  map: "https://lh3.googleusercontent.com/aida-public/AB6AXuATl5zrfNx5GnIs6eUE-xc2pSWpgV3vdpNYeiivRD0yYS7RCEyYqsTJTFwcxg3yVNx6BEr1tp1Wqy-8lrHZv2e6Zj5G5J5G0MzU34MDtFvkvLYvF9s-HJdi1Y7w7jBCYOTpoCu9lxY7omgPJk2lZOiOz9b68XOUR3cs9ZEro9oepfGbdyToCEo5qOcablod7ns1j460mOA5my_cylCJ_EUjoyCYRagNVF2bwmv4QjhoYiKzwOg8eD8qqcTnOqXOR2DA5gTavvpweHY",
  mobileMap: "https://lh3.googleusercontent.com/aida-public/AB6AXuD9gJ4WOlF2U20IQoHuobXtmYReyusGEWgq-iyrFsGZQxsS3iLRAaDod0G8zmipQb9FYvnXJ5BVBCqKgrGUIt85VY8Ww4H8xTauMi6RkAAo0EEj5A2yD2GuuHuSOuyDv6gETGNgeqdVP62KW8-KdtTdDcvbdttRa4y3d8_3mLZyK7fFjySww1Bjreo-GuxGYxpn812HrwlxdvabxfB0QYsl5sWcgB31mJYwtZri6BmBmfYv2Gkk01LFTA4jtleD3XcDaZrAW4isu8k",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-32 pb-24">
        {/* Desktop Hero */}
        <section className="max-w-7xl mx-auto px-6 md:px-8 mb-24 hidden md:block">
          <ScrollReveal>
            <div className="grid grid-cols-12 gap-8">
              <div className="col-span-7">
                <h1 className="text-primary leading-tight tracking-tight mb-8">Begin Your Journey <br />to <span className="italic text-secondary">Natural Radiance</span></h1>
                <p className="text-on-surface-variant text-xl max-w-xl font-light leading-relaxed">Connect with our holistic experts in Udgir. We combine the wisdom of homeopathy with modern wellness to reveal your inner glow.</p>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* Mobile Hero */}
        <section className="px-6 space-y-4 mb-12 md:hidden">
          <ScrollReveal>
            <h1 className="text-4xl text-primary leading-tight tracking-tight">Connect with <br /><span className="italic font-normal">Our Sanctuary</span></h1>
            <p className="text-on-surface-variant leading-relaxed max-w-[85%]">Begin your journey toward holistic vitality. Our clinical experts are here to guide your restoration.</p>
          </ScrollReveal>
        </section>

        {/* Mobile Info Grid */}
        <section className="px-6 grid grid-cols-1 gap-8 md:hidden mb-8">
          <ScrollReveal>
            <div className="space-y-6">
              <div className="flex flex-col space-y-2">
                <span className="text-secondary text-[10px] uppercase tracking-[0.2em] font-bold">Location</span>
                <p className="text-xl text-on-surface" style={{ fontFamily: "var(--font-headline)" }}>Homoeoglow Wellness Clinic,<br />Udgir, Maharashtra, India</p>
              </div>
              <div className="flex flex-col space-y-2">
                <span className="text-secondary text-[10px] uppercase tracking-[0.2em] font-bold">Enquiries</span>
                <p className="text-lg text-on-surface underline underline-offset-4 decoration-outline-variant/30">care@homoeoglow.com</p>
                <p className="text-lg text-on-surface">+91 98765 43210</p>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="relative w-full h-64 bg-surface-container rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent z-10" />
              <Image src={IMG.mobileMap} alt="Map location" fill className="object-cover grayscale opacity-60" sizes="100vw" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center animate-pulse"><div className="w-4 h-4 bg-primary rounded-full" /></div>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* Desktop Bento Layout */}
        <section className="max-w-7xl mx-auto px-6 md:px-8 hidden md:block">
          <div className="grid grid-cols-12 gap-8">
            {/* Form */}
            <ScrollReveal className="col-span-7">
              <div className="bg-surface-container-lowest rounded-xl p-10 shadow-sm border border-outline-variant/10">
                <h2 className="text-3xl text-primary mb-10" style={{ fontFamily: "var(--font-headline)" }}>Send us a message</h2>
                <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-2 gap-8">
                    <div><label className="block text-xs font-bold uppercase tracking-widest text-secondary mb-2">Full Name</label><input className="w-full bg-surface-container-low border-none py-3 px-4 rounded-lg focus:ring-0 focus:bg-surface-container-lowest transition-all outline-none" placeholder="John Doe" type="text" /></div>
                    <div><label className="block text-xs font-bold uppercase tracking-widest text-secondary mb-2">Phone Number</label><input className="w-full bg-surface-container-low border-none py-3 px-4 rounded-lg focus:ring-0 focus:bg-surface-container-lowest transition-all outline-none" placeholder="+91 00000 00000" type="tel" /></div>
                  </div>
                  <div><label className="block text-xs font-bold uppercase tracking-widest text-secondary mb-2">Email Address</label><input className="w-full bg-surface-container-low border-none py-3 px-4 rounded-lg focus:ring-0 focus:bg-surface-container-lowest transition-all outline-none" placeholder="john@example.com" type="email" /></div>
                  <div><label className="block text-xs font-bold uppercase tracking-widest text-secondary mb-2">Message / Symptoms Detail</label><textarea className="w-full bg-surface-container-low border-none py-3 px-4 rounded-lg focus:ring-0 focus:bg-surface-container-lowest transition-all outline-none resize-none" placeholder="Tell us how we can help you..." rows={5} /></div>
                  <button className="group flex items-center gap-3 bg-primary text-on-primary px-10 py-4 rounded-full font-bold hover:shadow-xl hover:shadow-primary/20 transition-all duration-300" type="submit">
                    Send Message <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
                  </button>
                </form>
              </div>
            </ScrollReveal>
            {/* Info Column */}
            <div className="col-span-5 flex flex-col gap-8">
              <ScrollReveal delay={200}>
                <div className="bg-primary text-on-primary p-10 rounded-xl relative overflow-hidden hover-glow">
                  <span className="material-symbols-outlined absolute -right-8 -bottom-8 text-9xl opacity-10 rotate-12">eco</span>
                  <h3 className="text-2xl mb-8" style={{ fontFamily: "var(--font-headline)" }}>Clinical Sanctuary</h3>
                  <div className="space-y-8">
                    {[
                      { icon: "location_on", label: "Visit Us", value: "Homoeoglow Wellness Clinic,\nUdgir, Maharashtra, India" },
                      { icon: "schedule", label: "Hours", value: "Mon-Sat, 10 AM - 6 PM" },
                      { icon: "call", label: "Call Us", value: "+91 98765 43210" },
                    ].map((item) => (
                      <div key={item.label} className="flex gap-4">
                        <span className="material-symbols-outlined text-secondary-container">{item.icon}</span>
                        <div>
                          <p className="font-bold text-secondary-container text-sm uppercase tracking-widest mb-1">{item.label}</p>
                          <p className="text-lg font-light whitespace-pre-line">{item.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={400}>
                <div className="bg-surface-container rounded-xl overflow-hidden h-full min-h-[300px] relative group">
                  <Image src={IMG.map} alt="Clinic location" fill className="object-cover grayscale transition-all group-hover:grayscale-0 duration-700" sizes="40vw" />
                  <div className="absolute inset-0 bg-primary/20" />
                  <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md p-4 rounded-lg flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">map</span>
                    <span className="text-sm font-bold text-primary">View on Map</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Mobile Form */}
        <section className="px-6 md:hidden">
          <ScrollReveal>
            <div className="bg-surface-container-low p-8 rounded-3xl space-y-8">
              <div className="space-y-2">
                <h2 className="text-2xl text-on-surface" style={{ fontFamily: "var(--font-headline)" }}>Inquiry Form</h2>
                <div className="h-0.5 w-12 bg-secondary-container" />
              </div>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-1"><label className="text-[10px] uppercase tracking-widest text-outline">Full Name</label><input className="w-full bg-transparent border-b border-outline-variant/40 py-2 focus:border-primary focus:ring-0 outline-none" placeholder="Julianne Moore" type="text" /></div>
                <div className="space-y-1"><label className="text-[10px] uppercase tracking-widest text-outline">Email Address</label><input className="w-full bg-transparent border-b border-outline-variant/40 py-2 focus:border-primary focus:ring-0 outline-none" placeholder="hello@aesthetic.com" type="email" /></div>
                <div className="space-y-1"><label className="text-[10px] uppercase tracking-widest text-outline">Interest</label>
                  <select className="w-full bg-transparent border-b border-outline-variant/40 py-2 focus:border-primary focus:ring-0 outline-none appearance-none">
                    <option>Classical Homoeopathy</option><option>Glow Restoration</option><option>Chronic Care</option><option>Other Enquiries</option>
                  </select>
                </div>
                <div className="space-y-1 pt-4"><label className="text-[10px] uppercase tracking-widest text-outline">Message</label><textarea className="w-full bg-surface-container-lowest/50 rounded-xl p-4 focus:ring-0 outline-none border-none mt-2" placeholder="How can we assist your healing journey?" rows={3} /></div>
                <button className="w-full bg-primary text-on-primary py-4 rounded-xl font-semibold tracking-wide flex items-center justify-center gap-2 group hover:bg-primary/90 transition-all" type="submit">
                  Send Inquiry <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </button>
              </form>
            </div>
          </ScrollReveal>
          <div className="flex justify-center py-8"><span className="material-symbols-outlined text-secondary/30 text-5xl">spa</span></div>
        </section>

        {/* Newsletter */}
        <section className="max-w-7xl mx-auto px-6 md:px-8 mt-24 hidden md:block">
          <ScrollReveal>
            <div className="bg-secondary-container rounded-3xl p-12 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="max-w-lg">
                <h2 className="text-3xl text-on-secondary-container mb-4" style={{ fontFamily: "var(--font-headline)" }}>Join our wellness circle</h2>
                <p className="text-on-secondary-container/80">Receive monthly insights on natural healing and holistic skin health directly to your inbox.</p>
              </div>
              <div className="flex w-full md:w-auto gap-2">
                <input className="flex-grow md:w-80 bg-surface-container-lowest border-none px-6 py-4 rounded-full focus:ring-2 focus:ring-primary outline-none" placeholder="Email Address" type="email" />
                <button className="bg-primary text-on-primary px-8 py-4 rounded-full font-bold hover:bg-emerald-900 transition-colors">Subscribe</button>
              </div>
            </div>
          </ScrollReveal>
        </section>
      </main>
      <MobileBottomNav />
      <Footer />
    </>
  );
}
