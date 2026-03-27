"use client";

import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollReveal from "../components/ScrollReveal";

const IMG = {
  map: "https://lh3.googleusercontent.com/aida-public/AB6AXuATl5zrfNx5GnIs6eUE-xc2pSWpgV3vdpNYeiivRD0yYS7RCEyYqsTJTFwcxg3yVNx6BEr1tp1Wqy-8lrHZv2e6Zj5G5J5G0MzU34MDtFvkvLYvF9s-HJdi1Y7w7jBCYOTpoCu9lxY7omgPJk2lZOiOz9b68XOUR3cs9ZEro9oepfGbdyToCEo5qOcablod7ns1j460mOA5my_cylCJ_EUjoyCYRagNVF2bwmv4QjhoYiKzwOg8eD8qqcTnOqXOR2DA5gTavvpweHY",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 bg-surface text-on-surface font-body selection:bg-secondary-container selection:text-on-secondary-container antialiased">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-8 mb-24">
          <div className="editorial-grid gap-8">
            <div className="col-span-full md:col-span-7">
              <ScrollReveal>
                <h1 className="font-headline text-6xl md:text-7xl text-primary leading-tight tracking-tight mb-8">
                  Begin Your Journey <br />
                  to <span className="italic text-secondary">Natural Radiance</span>
                </h1>
                <p className="text-on-surface-variant text-xl max-w-xl font-light leading-relaxed">
                  Connect with our holistic experts in Udgir. We combine the
                  wisdom of homeopathy with modern wellness to reveal your inner
                  glow.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Main Content: Bento Layout */}
        <section className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Contact Form Card */}
            <ScrollReveal className="md:col-span-7">
              <div className="bg-surface-container-lowest rounded-xl p-10 shadow-sm border border-outline-variant/10 h-full">
                <h2 className="font-headline text-3xl text-primary mb-10">
                  Send us a message
                </h2>
                <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="relative">
                      <label className="block text-xs font-bold uppercase tracking-widest text-secondary mb-2">
                        Full Name
                      </label>
                      <input
                        className="w-full bg-surface-container-low border-none border-b border-outline-variant/30 focus:ring-0 focus:border-primary focus:bg-surface-container-lowest transition-all py-3 px-4 rounded-lg outline-none"
                        placeholder="John Doe"
                        type="text"
                      />
                    </div>
                    <div className="relative">
                      <label className="block text-xs font-bold uppercase tracking-widest text-secondary mb-2">
                        Phone Number
                      </label>
                      <input
                        className="w-full bg-surface-container-low border-none border-b border-outline-variant/30 focus:ring-0 focus:border-primary focus:bg-surface-container-lowest transition-all py-3 px-4 rounded-lg outline-none"
                        placeholder="+91 00000 00000"
                        type="tel"
                      />
                    </div>
                  </div>
                  <div className="relative">
                    <label className="block text-xs font-bold uppercase tracking-widest text-secondary mb-2">
                      Email Address
                    </label>
                    <input
                      className="w-full bg-surface-container-low border-none border-b border-outline-variant/30 focus:ring-0 focus:border-primary focus:bg-surface-container-lowest transition-all py-3 px-4 rounded-lg outline-none"
                      placeholder="john@example.com"
                      type="email"
                    />
                  </div>
                  <div className="relative">
                    <label className="block text-xs font-bold uppercase tracking-widest text-secondary mb-2">
                      Message / Symptoms Detail
                    </label>
                    <textarea
                      className="w-full bg-surface-container-low border-none border-b border-outline-variant/30 focus:ring-0 focus:border-primary focus:bg-surface-container-lowest transition-all py-3 px-4 rounded-lg resize-none outline-none"
                      placeholder="Tell us how we can help you..."
                      rows={5}
                    ></textarea>
                  </div>
                  <button
                    className="group flex items-center gap-3 bg-primary text-on-primary px-10 py-4 rounded-full font-bold hover:shadow-xl hover:shadow-primary/20 transition-all duration-300"
                    type="submit"
                  >
                    Send Message
                    <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
                      arrow_forward
                    </span>
                  </button>
                </form>
              </div>
            </ScrollReveal>

            {/* Info Column */}
            <div className="md:col-span-5 flex flex-col gap-8">
              {/* Contact Details Card */}
              <ScrollReveal delay={200}>
                <div className="bg-primary text-on-primary p-10 rounded-xl relative overflow-hidden h-full">
                  <span className="material-symbols-outlined absolute -right-8 -bottom-8 text-9xl opacity-10 rotate-12">
                    eco
                  </span>
                  <h3 className="font-headline text-2xl mb-8">
                    Clinical Sanctuary
                  </h3>
                  <div className="space-y-8">
                    <div className="flex gap-4">
                      <span className="material-symbols-outlined text-secondary-container">
                        location_on
                      </span>
                      <div>
                        <p className="font-bold text-secondary-container text-sm uppercase tracking-widest mb-1">
                          Visit Us
                        </p>
                        <p className="text-lg font-light">
                          Homoeoglow Wellness Clinic,
                          <br />
                          Udgir, Maharashtra, India
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <span className="material-symbols-outlined text-secondary-container">
                        schedule
                      </span>
                      <div>
                        <p className="font-bold text-secondary-container text-sm uppercase tracking-widest mb-1">
                          Hours
                        </p>
                        <p className="text-lg font-light">
                          Mon-Sat, 10 AM - 6 PM
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <span className="material-symbols-outlined text-secondary-container">
                        call
                      </span>
                      <div>
                        <p className="font-bold text-secondary-container text-sm uppercase tracking-widest mb-1">
                          Call Us
                        </p>
                        <p className="text-xl font-bold tracking-tight">
                          +91 98765 43210
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Map/Visual Card */}
              <ScrollReveal delay={400}>
                <div className="bg-surface-container rounded-xl overflow-hidden h-full min-h-[300px] relative group">
                  <Image
                    alt="Aerial view of wellness retreat"
                    className="w-full h-full object-cover grayscale transition-all group-hover:grayscale-0 duration-700"
                    src={IMG.map}
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-primary/20 backdrop-overlay"></div>
                  <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md p-4 rounded-lg flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">
                      map
                    </span>
                    <span className="text-sm font-bold text-primary">
                      View on Map
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Newsletter / Secondary Call to Action */}
        <section className="max-w-7xl mx-auto px-8 mt-24">
          <ScrollReveal>
            <div className="bg-secondary-container rounded-3xl p-12 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="max-w-lg">
                <h2 className="font-headline text-3xl text-on-secondary-container mb-4">
                  Join our wellness circle
                </h2>
                <p className="text-on-secondary-container/80">
                  Receive monthly insights on natural healing and holistic skin
                  health directly to your inbox.
                </p>
              </div>
              <div className="flex flex-col md:flex-row w-full md:w-auto gap-4 md:gap-2">
                <input
                  className="flex-grow md:w-80 bg-surface-container-lowest border-none px-6 py-4 rounded-full focus:ring-2 focus:ring-primary outline-none"
                  placeholder="Email Address"
                  type="email"
                />
                <button className="bg-primary text-on-primary px-8 py-4 rounded-full font-bold hover:bg-emerald-900 transition-all active:scale-95">
                  Subscribe
                </button>
              </div>
            </div>
          </ScrollReveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
