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
  spa: "https://lh3.googleusercontent.com/aida-public/AB6AXuAjrdEFB7qmwVc2kJvzXVYh6wWqgFMLxaixhFQLYA1a6JG7y5YeIwtVkPsdmZmOT8pkjbvcPr5patU7RIzU8Bzh1Rb4bBZUANALyrqeE-rY6N-9Rt4D23wZnjTzkz3rKL7Uwt4pMFSZ-40BHtcKn7tiwl2vmLa0JcUjNdwnAIEjxgSYkYh6GEqgNTYg2ZwwDaAK-OpTqvtEkQW2Xn8ug_covXM5-BHFc5RVnhdS3_W83QxWyr8hBxCShqtQ7gwJgoZie0BiulbmTy0",
};

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
              <span className="text-secondary font-semibold tracking-[0.2em] uppercase text-xs mb-6 block">Voices of Radiance</span>
              <h1 className="text-primary leading-tight mb-8 italic">Healing that feels like <br />a sanctuary.</h1>
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
            <span className="text-sm uppercase tracking-widest text-secondary mb-3 block font-bold">Testimonials</span>
            <h2 className="text-4xl text-primary leading-tight mb-6">Healing <span className="italic">Journeys</span></h2>
            <p className="text-on-surface-variant leading-relaxed text-lg">Real stories of transformation from our Glow Sanctuary community.</p>
          </ScrollReveal>
        </section>

        {/* Desktop Bento */}
        <section className="max-w-7xl mx-auto px-8 py-24 hidden md:block">
          <div className="grid grid-cols-12 gap-6">
            {/* Large */}
            <ScrollReveal className="col-span-8">
              <div className="bg-surface-container-lowest p-10 rounded-xl shadow-sm flex gap-10 items-center hover-lift">
                <div className="w-1/3 aspect-[4/5] overflow-hidden rounded-lg relative"><Image src={IMG.priya} alt="Priya M." fill className="object-cover" sizes="25vw" /></div>
                <div className="w-2/3">
                  <span className="inline-block bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider mb-4">Dermatology Care</span>
                  <h3 className="text-3xl text-primary mb-4" style={{ fontFamily: "var(--font-headline)" }}>Priya M.</h3>
                  <p className="text-on-surface-variant leading-relaxed mb-6">After years of struggling with persistent skin concerns, I found Homoeoglow. Their precision-based approach felt clinical yet incredibly warm. Within three months, my skin glowed from within.</p>
                  <Stars />
                </div>
              </div>
            </ScrollReveal>
            {/* Dark card */}
            <ScrollReveal className="col-span-4" delay={200}>
              <div className="bg-primary-container text-on-primary-container p-10 rounded-xl flex flex-col justify-between h-full hover-lift">
                <div>
                  <span className="material-symbols-outlined text-secondary-container text-4xl mb-6">format_quote</span>
                  <p className="text-lg leading-relaxed italic opacity-90">&ldquo;A seamless blend of modern science and ancient healing. I can vouch for the clinical excellence.&rdquo;</p>
                </div>
                <div className="mt-12 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-secondary-container relative"><Image src={IMG.rahul} alt="Rahul S." fill className="object-cover" sizes="48px" /></div>
                  <div><p className="font-bold">Rahul S.</p><p className="text-xs uppercase tracking-widest opacity-70">Stress Management</p></div>
                </div>
              </div>
            </ScrollReveal>
            {/* Small cards */}
            {[
              { name: "Anita K.", quote: "\"The atmosphere itself is a part of the healing. I've never felt so heard.\"", tag: "Wellness Journey", icon: "local_florist", bg: "bg-surface-container-low" },
              { name: "James L.", quote: "\"Precision homeopathy is the future. My chronic migraines vanished after two decades.\"", tag: "Chronic Care", icon: "science", bg: "bg-white shadow-sm border border-outline-variant/10" },
              { name: "Sarah W.", quote: "\"Their post-consultation care is unmatched. You aren't just a patient; you're a partner.\"", tag: "Consultation", icon: "volunteer_activism", bg: "bg-surface-container-highest" },
            ].map((t, i) => (
              <ScrollReveal key={t.name} className="col-span-4" delay={i * 150 + 300}>
                <div className={`${t.bg} p-8 rounded-xl hover-lift h-full`}>
                  <h4 className="text-xl text-primary mb-2" style={{ fontFamily: "var(--font-headline)" }}>{t.name}</h4>
                  <p className="text-sm text-on-surface-variant italic leading-relaxed">{t.quote}</p>
                  <div className="mt-4 border-t border-outline-variant/30 pt-4 flex justify-between items-center">
                    <span className="text-[10px] uppercase font-bold tracking-tighter text-secondary">{t.tag}</span>
                    <span className="material-symbols-outlined text-primary text-lg">{t.icon}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Mobile Testimonials */}
        <div className="px-6 flex flex-col gap-16 md:hidden">
          <ScrollReveal>
            <article className="relative">
              <div className="absolute -top-4 -left-2 opacity-10"><span className="material-symbols-outlined text-7xl text-primary">format_quote</span></div>
              <div className="pl-4 border-l-2 border-secondary-container/30">
                <p className="text-xl leading-relaxed text-on-surface mb-6 italic" style={{ fontFamily: "var(--font-headline)" }}>&ldquo;The constitutional treatment for my chronic migraines was life-changing.&rdquo;</p>
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden"><Image src={IMG.sarah} alt="Sarah" fill className="object-cover" sizes="48px" /></div>
                  <div><h4 className="font-bold text-primary">Sarah Mitchell</h4><p className="text-xs text-on-surface-variant uppercase tracking-tighter">Chronic Care Patient</p></div>
                </div>
              </div>
            </article>
          </ScrollReveal>
          <div className="flex justify-center py-4"><span className="material-symbols-outlined text-secondary/40 text-3xl">eco</span></div>
          <ScrollReveal delay={100}>
            <article className="relative ml-4">
              <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm border border-outline-variant/5">
                <Stars />
                <p className="text-on-surface-variant leading-relaxed my-6">&ldquo;The wellness blog helped me understand the &apos;why&apos; behind my symptoms. Homoeoglow is an education in self-care.&rdquo;</p>
                <div className="flex items-center gap-3"><div className="w-8 h-[1px] bg-outline-variant" /><h4 className="text-primary" style={{ fontFamily: "var(--font-headline)" }}>James Henderson</h4></div>
              </div>
            </article>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <article className="relative mt-4">
              <div className="relative overflow-hidden rounded-2xl mb-6 aspect-video"><Image src={IMG.spa} alt="Spa" fill className="object-cover" sizes="100vw" /><div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" /><div className="absolute bottom-4 left-6"><span className="text-white text-xs uppercase tracking-widest">Skin &amp; Glow Ritual</span></div></div>
              <p className="text-xl leading-relaxed text-on-surface mb-6" style={{ fontFamily: "var(--font-headline)" }}>&ldquo;My skin has never looked better. The holistic approach addressed the internal inflammation I didn&apos;t know I had.&rdquo;</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary-container rounded-full flex items-center justify-center text-on-primary-container text-lg" style={{ fontFamily: "var(--font-headline)" }}>EL</div>
                <div><h4 className="font-bold text-primary">Elena Lowery</h4><p className="text-xs text-on-surface-variant uppercase tracking-tighter">Wellness Member</p></div>
              </div>
            </article>
          </ScrollReveal>
          <ScrollReveal delay={300}>
            <article className="bg-secondary-container/10 p-8 rounded-3xl text-center">
              <p className="leading-relaxed italic mb-4">&ldquo;The most gentle yet effective treatment for my children&apos;s allergies. Forever grateful.&rdquo;</p>
              <p className="text-xs uppercase text-secondary font-bold tracking-widest">— The Parker Family</p>
            </article>
          </ScrollReveal>
        </div>

        {/* Desktop CTA */}
        <section className="bg-stone-50 py-32 hidden md:block">
          <ScrollReveal>
            <div className="max-w-5xl mx-auto px-8 text-center">
              <div className="inline-block p-4 bg-surface-container-lowest rounded-full mb-8"><span className="material-symbols-outlined text-secondary text-3xl">spa</span></div>
              <h2 className="text-4xl md:text-5xl text-primary mb-6">Begin Your Own Story</h2>
              <p className="text-on-surface-variant max-w-xl mx-auto mb-12 text-lg">Discover the synergy between nature and science. Our experts are ready to curate your personalized wellness journey.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-primary text-on-primary px-10 py-4 rounded-xl font-semibold text-sm uppercase tracking-widest hover:opacity-90 transition-all active:scale-95 flex items-center justify-center gap-2">Book Your Consultation <span className="material-symbols-outlined text-sm">arrow_forward</span></Link>
                <Link href="/services" className="bg-surface-container-highest text-primary px-10 py-4 rounded-xl font-semibold text-sm uppercase tracking-widest hover:bg-surface-container-high transition-all">View Treatments</Link>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* Mobile CTA */}
        <section className="mt-20 mx-6 p-8 bg-primary rounded-3xl text-center relative overflow-hidden md:hidden">
          <ScrollReveal>
            <div className="absolute top-0 right-0 p-4 opacity-10"><span className="material-symbols-outlined text-8xl">spa</span></div>
            <h3 className="text-2xl text-on-primary mb-4 relative z-10" style={{ fontFamily: "var(--font-headline)" }}>Start Your Glow Story</h3>
            <p className="text-on-primary-container mb-8 relative z-10">Book a consultation and discover the path to vibrant health.</p>
            <Link href="/contact" className="w-full py-4 bg-secondary-container text-on-secondary-container font-bold rounded-xl flex items-center justify-center gap-2 active:scale-95 relative z-10">
              Book Now <span className="material-symbols-outlined">calendar_month</span>
            </Link>
          </ScrollReveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
