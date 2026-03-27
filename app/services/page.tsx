"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollReveal from "../components/ScrollReveal";

const IMAGES = {
  homeopathy: "https://lh3.googleusercontent.com/aida-public/AB6AXuDuX3Kn9dRngI74hXGyWNZBV_1xZEPUFg6Qweou3QjtRSbaGs0Rq9HGThKVd7_C39D3-nkyxJ_ekTlIdgU64iq3Q8fD0FplaIbkMJD5RKRpy7dJ_xvxkAlWgFx91MQgklcJRRIkinxMc3SNu2IcWxikucNkn3h1nhAgEXlJMmwpPYh936YG4ApWRu2lD3gw9pnj9lfo2TbiSq4Vl0idcYdVgjqQmbXApUAy75uWxyrAd-vR3fGrsn-4brmaBvuzkB4egIJe_PliL8M",
  nutrition: "https://lh3.googleusercontent.com/aida-public/AB6AXuDXqXw_Ov7u9smbi6doxKZjZHNtFVY9Z5ooxRpKySL_fqtxdGHk4Uxv9kDOUVTbPQicQy5ZWabIYCAhrp6AESGT5lLwqg36Ps2h9xzCtFzgS6w5QPVkWJFDbUacfojRU6F3jXHB-DdlLMlaAzmkAesO0sO61CwT3Xl60trUTb0I7N0xbS89qy9eoghT2xhTI2WwY6jF6GrCMoQLYVXE9WsgouRbV_Ts9563JwZXLv0L3QXCwimlSeRvlN58AWV8UmWPKlGKYHnty6w",
  cosmo1: "https://lh3.googleusercontent.com/aida-public/AB6AXuCJ7DNvdBY-TKuIGHsuL2V5BBpqjK-gnLnlol4BEjTb1gI_uRw5Ik5niCT_gATMqJXXGYvZKBFuJ8Xoopk8-7JFMxRy4vz70iTB5vu0Pk9bTtaqf4WF4InsOlPYIL15eEpkXC1_e2LdQ-dYPEtuzXipV-G07SFA-cBk9JJiJIZ8eio38Kbd_0q6qdvqbUUpcUsjrjCfPfCNEXbT8PmlZP0lea3HGgbD4vt47fjp_YoOmIgI6RSHVbDiyGLYqwxyePaXTCXPiYMrGaY",
  cosmo2: "https://lh3.googleusercontent.com/aida-public/AB6AXuDyyttbxD_r1IUgqWTDj2zcAKStZ2sJTXqz6FTYsKQf2IjtwJcE2OUdTG0DL36PaJuUFtpO49PvuFonzcoOglzmB4L_ezsXiwtbjDO4PgsyVyhdxUiX5Nq8AOJPRobdI1GTmDJ7L_gXabnWd_6_cCsIRNyd2IjvtyKfMp8veGn4lwjLWoD0_MM2WsotuBW6x1mCOCnTWUIJmpuoByZkj3xjqxtJGn5p4YOq5aNuTW3r9oQzJedDf6k_h4F13geLbqIppyAUuHsvPIA",
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 bg-surface text-on-surface font-body antialiased">
        {/* Hero Header */}
        <header className="max-w-7xl mx-auto px-8 mb-24">
          <div className="editorial-grid gap-8">
            <div className="col-span-full md:col-span-7">
              <ScrollReveal>
                <h1 className="font-headline text-6xl md:text-7xl text-primary leading-tight tracking-tight mb-8">
                  Our Healing <br />
                  <span className="italic font-normal">Sanctuary</span>
                </h1>
              </ScrollReveal>
            </div>
            <div className="col-span-full md:col-span-5 flex items-end">
              <ScrollReveal delay={200}>
                <p className="text-on-surface-variant text-lg leading-relaxed max-w-md">
                  Explore our curated selection of holistic treatments, where
                  ancient wisdom meets modern clinical precision to restore your
                  natural glow.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </header>

        {/* Service Section 1: Homeopathy */}
        <section className="mb-32">
          <div className="max-w-7xl mx-auto px-8">
            <div className="editorial-grid gap-12 items-center">
               <div className="col-span-full md:col-span-6 rounded-xl overflow-hidden aspect-[4/5] relative">
                <ScrollReveal variant="left">
                  <Image
                    src={IMAGES.homeopathy}
                    alt="Close up of small white homeopathic pills and green leaf"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute bottom-8 left-8 bg-secondary-container/90 backdrop-blur-sm px-4 py-2 rounded-lg">
                    <span className="font-label text-secondary text-sm font-bold uppercase tracking-widest">
                      Natural Restoration
                    </span>
                  </div>
                </ScrollReveal>
              </div>
              <div className="col-span-full md:col-span-5 md:col-start-8">
                <ScrollReveal delay={200}>
                  <span className="material-symbols-outlined text-secondary text-5xl mb-6">
                    fluid_med
                  </span>
                  <h2 className="font-headline text-4xl text-primary mb-6">
                    Homeopathy
                  </h2>
                  <div className="space-y-6 text-on-surface-variant text-lg">
                    <p>
                      A natural, holistic system restoring overall health from
                      within. Our approach focuses on the individual as a whole,
                      rather than just isolated symptoms.
                    </p>
                    <ul className="space-y-4">
                      <li className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-secondary">
                          check_circle
                        </span>
                        <span>Safe for all age groups</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-secondary">
                          check_circle
                        </span>
                        <span>Minimal side effects</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-secondary">
                          check_circle
                        </span>
                        <span>Root-cause analysis</span>
                      </li>
                    </ul>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* Service Section 2: Diet and Nutrition (Bento Style) */}
        <section className="bg-surface-container-low py-24 mb-32">
          <div className="max-w-7xl mx-auto px-8">
            <ScrollReveal>
              <div className="mb-16">
                <h2 className="font-headline text-4xl text-primary mb-2">
                  Diet and Nutrition
                </h2>
                <p className="text-on-surface-variant">
                  Fueling your body with intention and vitality.
                </p>
              </div>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Bento Item 1 */}
              <ScrollReveal className="md:col-span-2">
                <div className="bg-surface-container-lowest p-10 rounded-xl flex flex-col justify-between h-full hover-lift transition-all duration-300">
                  <div>
                    <span className="material-symbols-outlined text-secondary text-4xl mb-4">
                      restaurant
                    </span>
                    <h3 className="font-headline text-2xl text-primary mb-4">
                      Personalized Habits
                    </h3>
                    <p className="text-on-surface-variant max-w-md">
                      We focus on building healthy eating habits and balanced
                      meal structures tailored to your lifestyle and metabolic
                      needs.
                    </p>
                  </div>
                  <div className="mt-8 flex gap-4">
                    <div className="bg-surface-container-low px-4 py-2 rounded-full text-sm font-medium">
                      Bespoke Plans
                    </div>
                    <div className="bg-surface-container-low px-4 py-2 rounded-full text-sm font-medium">
                      Clinical Oversight
                    </div>
                  </div>
                </div>
              </ScrollReveal>
              {/* Bento Item 2 (The Visual) */}
              <ScrollReveal delay={100}>
                <div className="rounded-xl overflow-hidden min-h-[300px] relative hover-zoom-img">
                  <Image
                    src={IMAGES.nutrition}
                    alt="Top view of a balanced green salad with avocado and seeds"
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              </ScrollReveal>
              {/* Bento Item 3 (Grid of Goals) */}
              <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
                <ScrollReveal delay={150}>
                  <div className="bg-primary text-on-primary p-8 rounded-xl hover-lift transition-all duration-300">
                    <h4 className="font-bold text-xl mb-2">Boost Immunity</h4>
                    <p className="opacity-80 text-sm">
                      Fortify your body's defense mechanisms through
                      nutrient-dense protocols.
                    </p>
                  </div>
                </ScrollReveal>
                <ScrollReveal delay={200}>
                  <div className="bg-primary-container text-on-primary-container p-8 rounded-xl hover-lift transition-all duration-300">
                    <h4 className="font-bold text-xl mb-2">Improve Digestion</h4>
                    <p className="opacity-80 text-sm">
                      Optimize gut health and absorption for sustained energy
                      levels.
                    </p>
                  </div>
                </ScrollReveal>
                <ScrollReveal delay={250}>
                  <div className="bg-secondary-container text-on-secondary-container p-8 rounded-xl hover-lift transition-all duration-300">
                    <h4 className="font-bold text-xl mb-2">Healthy Weight</h4>
                    <p className="opacity-80 text-sm">
                      Maintain your ideal composition through sustainable
                      nutrition patterns.
                    </p>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* Service Section 3: Clinical Cosmetology */}
        <section className="max-w-7xl mx-auto px-8 mb-32">
          <div className="editorial-grid gap-12 items-start">
            <div className="col-span-full md:col-span-5 order-2 md:order-1">
              <ScrollReveal>
                <span className="material-symbols-outlined text-secondary text-5xl mb-6">
                  face_6
                </span>
                <h2 className="font-headline text-4xl text-primary mb-6">
                  Clinical Cosmetology
                </h2>
                <p className="text-on-surface-variant text-lg mb-10 leading-relaxed">
                  Precision-driven aesthetic enhancements designed to revitalize
                  your skin and hair health using state-of-the-art
                  dermatological technology.
                </p>
                <div className="space-y-4">
                  {/* Treatment Accordion Style */}
                  <div className="bg-surface-container p-6 rounded-xl border-l-4 border-secondary hover-lift transition-all duration-300">
                    <h4 className="font-bold text-primary mb-2">
                      Skin Rejuvenation
                    </h4>
                    <p className="text-sm text-on-surface-variant">
                      Microdermabrasion, Mesotherapy, and Microneedling to
                      address acne, pigmentation, and fine lines.
                    </p>
                  </div>
                  <div className="bg-surface-container-low p-6 rounded-xl hover-lift transition-all duration-300">
                    <h4 className="font-bold text-primary mb-2">
                      Hair Restoration
                    </h4>
                    <p className="text-sm text-on-surface-variant">
                      PRP (Platelet-Rich Plasma) therapy and specialized
                      treatments for hair fall and scalp vitality.
                    </p>
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="mt-12 flex items-center gap-2 text-primary font-bold group"
                >
                  View All Treatments
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </Link>
              </ScrollReveal>
            </div>
            <div className="col-span-full md:col-span-6 md:col-start-7 order-1 md:order-2 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <ScrollReveal variant="left">
                  <div className="rounded-xl overflow-hidden aspect-square relative hover-zoom-img">
                    <Image
                      src={IMAGES.cosmo1}
                      alt="Close up of a luxury skin treatment being applied"
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-105"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                </ScrollReveal>
                <ScrollReveal variant="left" delay={100}>
                  <div className="bg-secondary p-8 rounded-xl aspect-[4/3] flex items-center justify-center text-center hover-glow transition-all duration-300">
                    <p className="text-white font-headline text-xl">
                      Advanced Technology
                    </p>
                  </div>
                </ScrollReveal>
              </div>
              <div className="pt-12 space-y-4">
                <ScrollReveal variant="right">
                  <div className="bg-primary-container p-8 rounded-xl aspect-[4/3] flex items-center justify-center text-center hover-glow transition-all duration-300">
                    <p className="text-on-primary-container font-headline text-xl">
                      Expert Precision
                    </p>
                  </div>
                </ScrollReveal>
                <ScrollReveal variant="right" delay={100}>
                  <div className="rounded-xl overflow-hidden aspect-square relative hover-zoom-img">
                    <Image
                      src={IMAGES.cosmo2}
                      alt="Scientific representation of hair restoration therapy"
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-105"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-7xl mx-auto px-8 mb-24">
          <ScrollReveal>
            <div className="bg-emerald-900 rounded-3xl p-16 relative overflow-hidden text-center">
              <div className="relative z-10">
                <h2 className="font-headline text-4xl md:text-5xl text-white mb-6">
                  Ready for your transformation?
                </h2>
                <p className="text-emerald-100/70 text-lg mb-10 max-w-2xl mx-auto">
                  Schedule a one-on-one consultation with our specialists to
                  create a personalized wellness roadmap.
                </p>
                <Link
                  href="/contact"
                  className="bg-lime-400 text-emerald-950 px-10 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all inline-block active:scale-95"
                >
                  Book Your Consultation
                </Link>
              </div>
              {/* Abstract Gradient Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-800 rounded-full blur-3xl opacity-50 -mr-32 -mt-32"></div>
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-lime-600/20 rounded-full blur-3xl opacity-30 -ml-48 -mb-48"></div>
            </div>
          </ScrollReveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
