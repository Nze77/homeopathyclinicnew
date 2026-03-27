"use client";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollReveal from "../components/ScrollReveal";

const IMG = {
  featured: "https://lh3.googleusercontent.com/aida-public/AB6AXuC-1XEoIMDqubTRGXoHLYmLIUteQm_D6EAT8KA7I_WV_E2F55bGTjTuNKLDvKeI61jx_zzXkl8XAOvoXeq67xtOX8UNr2mxWkd4fEShmFPZKhvJ1coR4VHnyz8H-9Yb0yBIIZMNiaU4YCv4h5KTa66st79X5pfPK7Ak0ZLBoPYnUF5K12jVI3uQ-PWIHkaFQxNoml2Fr1S3ZYR5atnY6JakkjEYM7EEhw6UTFwp4yqWyze4lSu9LWUSW5pOVy5mecW5UkP8E9cHrWU",
  c1: "https://lh3.googleusercontent.com/aida-public/AB6AXuBUVzVfkYt7oKlL5qJoZSFOWQwqdai-Ode3JWIKpxBk5FR6VPd0u9fSXvqOtwsynkqLyXQgTSyX7nreiX4NU9BRb6HaFwklAKRID1dnxMQvlD6dIzJQB0FM006Jr2_ystvcbPNrAU1EOKY-AT89Egg0AiwU2uQ_sna20K0PdO4qiGPncRoluqTFqIT48q5asKczcJZe-st1fZ5oF0qTXpuizWA4hLoo8jzi0-JGcY5vdv2XeSfUFuXVIekXHMl8kgLu2d9dZg5XQKI",
  c2: "https://lh3.googleusercontent.com/aida-public/AB6AXuAoaxuxPKgbpsPsRTRDApwoTv3tdXXHL_nMJxVs7TWRt7Z3w4mNWHJ92utHvhvpn0518cBRHqkPO6IObk-pn344PdvEwbG_sPCtaESMHopqFsiyX26Q_PIIFzq3GfMXfoC7CBOP9_CoTa8II8UaazWFrj6hDdS0nht-vI3b24kWTK7fCgNtTm9ND3HMO4w98V1pBxc8WzDWwNo57kwRTDZfYtWO8Dm43txjssSnSvyqTXVfl0T2hS9rZO2bZiHu2Bsn-FAFrPsuEOw",
  c3: "https://lh3.googleusercontent.com/aida-public/AB6AXuBc6yv4Es3YvQPrdN1miZ_y_zJdTvSskFMq91kTMuoix6IoSLR8r43dWNVEov7Ak5R-1qw9CgOQEawosvceA2c1BkRjDfhev0VR0K88t5R1be9QhCMVqDCxM6lGpFBO6B38gUNHxMKsrpdcM6a_E3iDQSRVyY02vQ_NyGGwzZ4MscV0ia10qJnu8MW49O3Bv95S_mu6IpUqgdBZiACllb4ng-N8XSljuugeSed_4cnDVZxEszmb5d7KPKgadw7_YupaIr9AhxsL0H0",
  mf: "https://lh3.googleusercontent.com/aida-public/AB6AXuBoQJ51YtqsFjOsvt8V2bUJagXFPz-FxmUrbq0CRdKEjUUggWm8quDVNtIao2qGSambPvpXe_RGN2mqiqjhW4BIdwsEF9rhjRpHbU8zFPsvF6e2SD5V0A6X52pmqgK5sOk93z8qsUpjoH9I7U1V21O8p8weS8Gmrvy3xlmnwY64gbTinULEgHSX212GGSYn4AyMOUCzaF2BAEOx7TgV8w9HlG4n3ShM28O-XV3yvAY1vZ6VFTk9OTsRG169JDReSVEo-WuwX6emh_I",
  m2: "https://lh3.googleusercontent.com/aida-public/AB6AXuBsofaWMYxOcPATCNjjo5J6_rMYWXZGhKmFea_rRm_NplW0dqlVrlruTNIoUiWdkkl4cw4Zzczj0VFLjMieP8jhYNYwWne5YfqMDAtnMH3AnoWxPFWJMuRCcHR5G4kDvhLsolIE8-4IYS6SYrLG8QOgyH4KIZQpvhUEi1c9QopcYlOtV0uuWDU5s-I632ZWzfVa2ieR4gmk0M2gWMNE2zzt4_rTWHWAbMRIcEcuBTO1xQqBb90betElMxovkzum6-9d5XiJd_1zScA",
  m3: "https://lh3.googleusercontent.com/aida-public/AB6AXuC-JcUryZfvISkRWQTk8oQ42K4hqrDuM5cKplysOVxByesav1N7s15Dn7QelqEGlYp-HvkvvIUxLAOfA7XUnOgLuZpKwEqdy0xNd-TjFSQquDLfCgOc7sV6XIYeT_JyxWh1l2Ns3Prsi4_jZ9eopswB-YKMyrxJgs1Y4D5ZXT2kyJFA6e3rliFtX3Da-Y_anjYPdJ47nXjglBX50muI8jxQ4qXpJZJ-W9j0VmdMnztZAbK-RlGyKH-MF-ofgC25G4ba7Nldx_MpUVM",
};

const posts = [
  { cat: "Therapies", title: "The Science Behind PRP Therapy", desc: "Exploring the regenerative power of Platelet-Rich Plasma in skin rejuvenation.", img: IMG.c1, cta: "Read Investigation" },
  { cat: "Vitality", title: "5 Foods to Boost Your Natural Immunity", desc: "A clinical guide to the most bioavailable nutrients found in your local garden.", img: IMG.c2, cta: "View Guide" },
  { cat: "Clinical Homeopathy", title: "Why Homeopathy Works for Chronic Allergies", desc: "Understanding 'Like Cures Like' in managing respiratory and skin sensitivities.", img: IMG.c3, cta: "Deep Dive" },
];

const mobileArticles = [
  { cat: "Clinic Update", date: "May 12, 2024", title: "The Science of Subtle Healing: How Micro-dosing Works", desc: "Exploring molecular memory and clinical efficacy of high-dilution therapeutics.", img: IMG.mf, featured: true },
  { cat: "Skin Health", date: "May 08, 2024", title: "Beyond Topicals: Nourishing Your Glow From Within", desc: "Why your skincare routine should start at the gut level.", img: IMG.m2, featured: false },
  { cat: "Mindfulness", date: "May 02, 2024", title: "The Nervous System: Our Silent Architect of Health", desc: "Understanding chronic stress and the homeopathic approach to nervous regulation.", img: IMG.m3, featured: false },
];

function BlogCard({ post, i }: { post: typeof posts[0]; i: number }) {
  return (
    <ScrollReveal delay={i * 150}>
      <article className="flex flex-col group">
        <div className="aspect-[4/5] mb-8 overflow-hidden rounded-lg bg-surface-container-low relative hover-zoom-img">
          <Image src={post.img} alt={post.title} fill className="object-cover transition-transform duration-500 group-hover:scale-110" sizes="33vw" />
        </div>
        <span className="text-[10px] font-bold text-secondary uppercase tracking-[0.2em] mb-4">{post.cat}</span>
        <h4 className="text-2xl text-on-surface mb-4 leading-snug group-hover:text-primary transition-colors" style={{ fontFamily: "var(--font-headline)" }}>{post.title}</h4>
        <p className="text-on-surface-variant text-sm leading-relaxed mb-6">{post.desc}</p>
        <Link href="#" className="mt-auto flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary group-hover:gap-4 transition-all">
          {post.cta} <span className="material-symbols-outlined text-sm">arrow_forward</span>
        </Link>
      </article>
    </ScrollReveal>
  );
}

export default function BlogsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-32 pb-24">
        {/* Desktop Hero */}
        <header className="max-w-7xl mx-auto px-6 md:px-8 mb-20 hidden md:block">
          <ScrollReveal>
            <div className="grid grid-cols-12 gap-8 items-end">
              <div className="col-span-8">
                <span className="text-secondary font-bold tracking-[0.2em] uppercase text-xs mb-4 block">The Journal</span>
                <h1 className="text-primary leading-tight italic tracking-tight">Health &amp; Wellness Insights</h1>
              </div>
              <div className="col-span-4 border-l border-outline-variant/30 pl-8 pb-2">
                <p className="text-on-surface-variant font-light leading-relaxed">A curated collection of clinical wisdom and holistic lifestyle guidance.</p>
              </div>
            </div>
          </ScrollReveal>
        </header>

        {/* Mobile Hero */}
        <section className="px-6 mb-8 md:hidden">
          <ScrollReveal>
            <h2 className="text-primary mb-2 text-2xl">Wellness Blog</h2>
            <p className="text-on-surface-variant leading-relaxed max-w-xs">Insights on clinical excellence and natural healing.</p>
          </ScrollReveal>
          <div className="flex gap-3 overflow-x-auto pb-4 mt-6 no-scrollbar -mx-6 px-6">
            {["All Insights", "Homeopathy", "Skin Health", "Mindfulness"].map((c, i) => (
              <button key={c} className={`px-5 py-2 rounded-full text-sm flex-shrink-0 ${i === 0 ? "bg-primary text-on-primary" : "bg-surface-container-low text-on-surface-variant"}`}>{c}</button>
            ))}
          </div>
        </section>

        {/* Desktop Featured */}
        <section className="max-w-7xl mx-auto px-6 md:px-8 mb-32 hidden md:block">
          <ScrollReveal>
            <article className="relative group cursor-pointer overflow-hidden rounded-xl hover-zoom-img">
              <div className="aspect-[21/9] w-full relative">
                <Image src={IMG.featured} alt="Featured" fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="100vw" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-12 w-2/3">
                <div className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest inline-block mb-6">FEATURED STORY</div>
                <h2 className="text-4xl text-white mb-6 leading-tight" style={{ fontFamily: "var(--font-headline)" }}>The Future of Integrative Medicine: Why Your Glow Starts From Within</h2>
                <div className="flex items-center gap-4 text-white/90">
                  <span className="text-xs uppercase tracking-widest font-semibold">By Dr. Elena Vance</span>
                  <span className="w-1 h-1 bg-white/50 rounded-full" />
                  <span className="text-xs uppercase tracking-widest">12 Min Read</span>
                </div>
              </div>
            </article>
          </ScrollReveal>
        </section>

        {/* Desktop Grid */}
        <section className="max-w-7xl mx-auto px-6 md:px-8 hidden md:block">
          <ScrollReveal><div className="flex justify-between items-baseline mb-12"><h3 className="text-3xl text-primary">Latest Perspectives</h3><div className="h-px flex-grow mx-8 bg-outline-variant/20" /><span className="text-xs font-bold uppercase tracking-widest text-secondary">Browse All</span></div></ScrollReveal>
          <div className="grid grid-cols-3 gap-x-12 gap-y-20">{posts.map((p, i) => <BlogCard key={p.title} post={p} i={i} />)}</div>
        </section>

        {/* Mobile Feed */}
        <div className="px-6 space-y-12 md:hidden">
          {mobileArticles.map((a, i) => (
            <ScrollReveal key={a.title} delay={i * 100}>
              <article className="group">
                <div className="relative mb-4 rounded-xl overflow-hidden shadow-sm aspect-[16/10] hover-zoom-img">
                  <Image src={a.img} alt={a.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="100vw" />
                  {a.featured && <div className="absolute top-4 left-4"><span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase">Featured</span></div>}
                </div>
                <div className="flex items-center gap-2 text-[10px] text-outline uppercase tracking-wider mb-2"><span>{a.cat}</span><span className="w-1 h-1 rounded-full bg-outline-variant" /><span>{a.date}</span></div>
                <h3 className="text-2xl text-primary leading-tight mb-2" style={{ fontFamily: "var(--font-headline)" }}>{a.title}</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-2">{a.desc}</p>
                <Link href="#" className="inline-flex items-center gap-2 text-primary font-bold text-sm">Read Article <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span></Link>
              </article>
            </ScrollReveal>
          ))}
          <div className="mt-16 flex justify-center"><button className="bg-surface-container-low text-primary px-8 py-4 rounded-full font-bold text-sm hover:bg-primary hover:text-on-primary transition-all duration-300">Load Older Insights</button></div>
        </div>

        {/* Newsletter */}
        <section className="bg-primary py-24 px-6 md:px-8 text-on-primary mt-24">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="text-4xl mb-6">Receive Weekly Radiance</h2>
              <p className="font-light text-primary-fixed mb-12 max-w-xl mx-auto">Join our circle and receive curated clinical insights in your inbox.</p>
              <form className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
                <input className="flex-grow bg-white/10 border-b border-white/20 focus:border-white focus:ring-0 text-white placeholder:text-white/40 px-4 py-3 rounded-lg text-sm outline-none" placeholder="Email Address" type="email" />
                <button className="bg-secondary-container text-on-secondary-container px-8 py-3 rounded-xl font-bold uppercase tracking-widest text-xs">Subscribe</button>
              </form>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
