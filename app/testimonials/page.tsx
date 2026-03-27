"use client";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollReveal from "../components/ScrollReveal";

const IMG = {
  hero: "https://lh3.googleusercontent.com/aida-public/AB6AXuC3fhmwBcSyFgd6DQ3RnavX1-3F-Lgnbs1saJCz4aRFjLGlNmU5kgrMbz_d1fjQBCZSB4bfelEdF4Hj8mSvdp7neFaS82_8E5eXEbRKfEH_uTJfOedjyQAK0OaEXn7vl8NH--N3ZmdLUGe4fXWXGvEfS7_ifo9otYS2qWf4ePDT03oytUh5YH826QEans2VW7nJrLWu7bA7wRI0K5Ye79lolqard7zHUNitUO2nDMwKttgkPJ4KE4T1Gy6CREUnPZN3x2pM5Fg0rIw",
  priya: "https://lh3.googleusercontent.com/aida-public/AB6AXuCL09dGn9Ewkq5cyHuBv1mSDHeUDLtiZ5OGPlZbl93IHGgvbmywtUZizVOGmbhN7HM7UO_DYOCIFlpLupF8YiGooD8wOq5fIVxHdRCzYC1xeQ-ipPCxjHR4UkJtXEeMGUueq1N_2lAXVHhBkH12EqrCtKzzafMPAjqFEu7EOsCJ-xLv_PxBe5LV_ujQ7S-n6lmw3kuW3stqOKhsJ_vewJM8fBzBacM-o5tmgqoz4nC-mpNmHqqMZMFEsXsVZ170CQmGhg5DqvSWtfA",
  rahul: "https://lh3.googleusercontent.com/aida-public/AB6AXuDJL0w5kBufOHZhnY-xkf0gpWvNWNdS1S_c830Jq0aPSLZFL8hhPjgsyP1Z0pw3Fara8VsWgjqnIJVwZJErOQJYiF5aXp8dP1-R1v3otiouim5XcHtMI4pt5GR3MBtvzFTlRksM6Qq_PX0pZFvxGmBVGhrGzI6SPsSpeoUxu1JergaTq8UES26gkcA_uJYqvkk11_8IFEh0kGM1biKZvqrXz0uCaR-8xFBt6cWQbSBRb9KZdUugHZ_vZsFIGHRsyBe8U2OFCPEq_mA",
  sarah: "https://lh3.googleusercontent.com/aida-public/AB6AXuDFb5V11fsYVqQR5_sz355dtIqQ0ZE4QR2HAmJ9RPPaKNFS6wLmUss3cv65QKWO75-Di_7T2YvQtaOCLHcbnPfWRW82HqnRkS9J1WIkOEQfAsZpvoT9SpsGiHe93He3VpuWSfxbaYEsHuAzEfVJgozVOu_hWGnnr0AS7Yw0iMOX1JzeaSWMudawe5dHLUzYmi9bLTULWJZ5H3Giq30m60VBRLKeZ2U1A_ytBhm0IMmPOQ0qd7qnA56SoWGrOf5_ILfvO93RyZ50MYI",
};

const testimonials = [
  { name: "Priya M.", quote: "After years of struggling with persistent skin concerns, I found Homoeoglow. Their precision-based approach felt clinical yet incredibly warm. Within three months, my skin glowed from within.", tag: "Dermatology Care", img: IMG.priya, span: "md:col-span-8", type: "large" },
  { name: "Rahul S.", quote: "A seamless blend of modern science and ancient healing. I can vouch for the clinical excellence.", tag: "Stress Management", img: IMG.rahul, span: "md:col-span-4", type: "featured" },
  { name: "Anita K.", quote: "\"The atmosphere itself is a part of the healing. I've never felt so heard.\"", tag: "Wellness Journey", icon: "local_florist", span: "md:col-span-4", bg: "bg-surface-container-low" },
  { name: "James L.", quote: "\"Precision homeopathy is the future. My chronic migraines vanished after two decades.\"", tag: "Chronic Care", icon: "science", span: "md:col-span-4", bg: "bg-white shadow-sm border border-outline-variant/10" },
  { name: "Sarah W.", quote: "\"Their post-consultation care is unmatched. You aren't just a patient; you're a partner.\"", tag: "Consultation", icon: "volunteer_activism", span: "md:col-span-4", bg: "bg-surface-container-highest" }
];

function Stars() {
  return (<div className="flex items-center gap-1">{[...Array(5)].map((_, i) => (<span key={i} className="material-symbols-outlined text-secondary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>))}</div>);
}

export default function TestimonialsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-24">
        {/* Desktop Hero */}
        <section className="relative min-h-[716px] hidden md:flex items-center overflow-hidden px-8">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/80 to-transparent z-10" />
            <Image src={IMG.hero} alt="Wellness" fill className="object-cover grayscale-[20%] opacity-40" sizes="100vw" />
          </div>
          <div className="relative z-20 max-w-4xl mx-auto text-left">
            <ScrollReveal>
              <h1 className="font-headline text-6xl md:text-7xl text-primary leading-tight tracking-tight mb-8">
                Testimonials <br />
              </h1>
              <h2 className="text-2xl md:text-3xl text-emerald-800/80 leading-tight mb-8 font-serif">
                Healing that feels like <span className="italic">a sanctuary.</span>
              </h2>
              <div className="flex gap-12 items-start mt-16">
                <div className="flex-1 border-l border-primary/20 pl-8">
                  <p className="text-2xl text-on-surface-variant italic leading-relaxed" style={{ fontFamily: "var(--font-headline)" }}>&ldquo;The holistic approach at Homoeoglow didn&apos;t just treat my symptoms; it restored my sense of self.&rdquo;</p>
                  <cite className="block mt-4 not-italic font-semibold text-primary uppercase tracking-widest">— Elena Rodriguez</cite>
                </div>
                <div className="w-32 h-32"><span className="material-symbols-outlined text-secondary-container text-8xl opacity-30 select-none">eco</span></div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Mobile Hero */}
        <section className="px-6 mb-12 md:hidden pt-4">
          <ScrollReveal>
            <h2 className="font-headline text-5xl text-primary leading-tight tracking-tight mb-4">Testimonials</h2>
            <p className="text-on-surface-variant leading-relaxed text-lg">Real stories of transformation from our Glow Sanctuary community.</p>
          </ScrollReveal>
        </section>

        {/* Testimonials Grid */}
        <section className="max-w-7xl mx-auto px-6 md:px-8 py-24">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.name} className={`col-span-1 ${t.span}`} delay={i * 100}>
                {t.type === "large" ? (
                  <div className="bg-surface-container-lowest p-8 md:p-10 rounded-xl shadow-sm flex flex-col md:flex-row gap-8 md:gap-10 items-center hover-lift h-full">
                    <div className="w-full md:w-1/3 aspect-[4/5] overflow-hidden rounded-lg relative"><Image src={t.img!} alt={t.name} fill className="object-cover" sizes="(max-width:768px) 100vw, 25vw" /></div>
                    <div className="w-full md:w-2/3">
                      <span className="inline-block bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider mb-4">{t.tag}</span>
                      <h3 className="text-3xl text-primary mb-4" style={{ fontFamily: "var(--font-headline)" }}>{t.name}</h3>
                      <p className="text-on-surface-variant leading-relaxed mb-6">{t.quote}</p>
                      <Stars />
                    </div>
                  </div>
                ) : t.type === "featured" ? (
                  <div className="bg-primary-container text-on-primary-container p-8 md:p-10 rounded-xl flex flex-col justify-between h-full hover-lift">
                    <div>
                      <span className="material-symbols-outlined text-secondary-container text-4xl mb-6">format_quote</span>
                      <p className="text-lg leading-relaxed italic opacity-90">&ldquo;{t.quote}&rdquo;</p>
                    </div>
                    <div className="mt-12 flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-secondary-container relative"><Image src={t.img!} alt={t.name} fill className="object-cover" sizes="48px" /></div>
                      <div><p className="font-bold">{t.name}</p><p className="text-xs uppercase tracking-widest opacity-70">{t.tag}</p></div>
                    </div>
                  </div>
                ) : (
                  <div className={`${t.bg} p-8 rounded-xl hover-lift h-full flex flex-col`}>
                    <h4 className="text-xl text-primary mb-2" style={{ fontFamily: "var(--font-headline)" }}>{t.name}</h4>
                    <p className="text-sm text-on-surface-variant italic leading-relaxed">{t.quote}</p>
                    <div className="mt-auto border-t border-outline-variant/30 pt-4 flex justify-between items-center">
                      <span className="text-[10px] uppercase font-bold tracking-tighter text-secondary">{t.tag}</span>
                      <span className="material-symbols-outlined text-primary text-lg">{t.icon}</span>
                    </div>
                  </div>
                )}
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-surface-container-lowest/50 py-24 md:py-32 border-t border-outline-variant/10">
          <ScrollReveal>
            <div className="max-w-5xl mx-auto px-6 md:px-8 text-center flex flex-col items-center">
              <div className="inline-block p-4 bg-white rounded-full mb-8 shadow-sm">
                <span className="material-symbols-outlined text-secondary text-4xl">spa</span>
              </div>
              <h2 className="font-headline text-4xl md:text-5xl text-primary mb-6">Begin Your Own Story</h2>
              <p className="text-on-surface-variant max-w-xl mx-auto mb-12 text-lg">Discover the synergy between nature and science. Our experts are ready to curate your personalized wellness journey.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
                <Link href="/contact" className="bg-primary text-on-primary px-10 py-4 rounded-xl font-bold text-sm uppercase tracking-widest hover:opacity-90 transition-all active:scale-95 flex items-center justify-center gap-2">Book Your Consultation <span className="material-symbols-outlined text-sm">arrow_forward</span></Link>
                <Link href="/services" className="bg-white border border-outline-variant/30 text-primary px-10 py-4 rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-stone-50 transition-all flex items-center justify-center">View Treatments</Link>
              </div>
            </div>
          </ScrollReveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
