"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollReveal from "../components/ScrollReveal";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-24">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 md:px-8 py-20 editorial-grid gap-y-12">
          <div className="col-span-full md:col-span-7">
            <ScrollReveal>
              <h1 className="font-headline text-6xl md:text-7xl text-primary leading-tight tracking-tight mb-8">
                Our <br /><span className="italic font-normal">Essence</span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-emerald-800/80 leading-tight mb-8 font-serif">
                Healing naturally, <span className="italic">glowing beautifully.</span>
              </h2>
              <p className="text-xl text-on-surface-variant max-w-xl leading-relaxed">
                At Homoeoglow, we merge the ancient wisdom of homeopathy with modern clinical excellence to provide a sanctuary for your total well-being.
              </p>
            </ScrollReveal>
          </div>
          <div className="col-span-full md:col-span-5 relative">
            <ScrollReveal variant="scale" delay={200}>
              <div className="aspect-[4/5] overflow-hidden rounded-xl shadow-2xl relative z-10 hover-zoom-img">
                <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuCllJmizNC9WahGVhOqYnQe2Vs1hbz7RSUQFjTKhXsDBYYtUBdXAPrvgJV9AvuHjZkkuR__lsJui6Scd-YFK4ph-lN9_wjCOzwn80Lg8ho_R7oNcqkO4ygcQC3Z-vaWXFzZl8LJ_fzv5rR_4-wHCYwliCC3KR3huHx2hqPCskf2lgLqE5u37YUo7TWVQwoTdYP5_78AGsNXqCfI_RC-e41-grK55gEY_SDtJPFG-IVHJg6bb1O-TCLY4u_CzT0YEaCIGqC_TJ3QwZo" alt="Clinical Sanctuary" fill className="object-cover" sizes="(max-width:768px) 100vw, 40vw" />
              </div>
            </ScrollReveal>
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-secondary-container rounded-full -z-10 blur-3xl opacity-30 animate-blob-morph" />
          </div>
        </section>

        {/* Mobile: Editorial Profile */}
        <section className="px-6 pt-12 md:hidden">
          <ScrollReveal>
            <div className="relative mb-12">
              <div className="aspect-[4/5] bg-surface-container-low rounded-xl overflow-hidden shadow-2xl shadow-stone-900/5 hover-zoom-img">
                <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuDriwtXtP9o1-Xp5sfxlocRwzUrXwTkIwD4acvmUCR5-z-lkLZ-Mb9fBLjsCSOtvLdyLfBcD44g5759Gzc8UwyePZtfMlqo1602LMWFlKyYV41jgfCvj98FrlIc-E9AxzQ7T-yxBpyeNR7NV1Nl3snEV7uLEPSqmbci5YeqWKSlG931hux3wXtVkCH67MDxKgJihkkhJbmCD_Bug1G4_OEGhSG__A-ch935flznhaapkhqkUboCsLs5kcqyw3Dw3MQuaByCwOAAh_w" alt="Dr. Rutuja" fill className="object-cover" sizes="100vw" />
              </div>
              <div className="absolute -bottom-6 -right-2 bg-secondary-container p-6 rounded-xl shadow-xl max-w-[200px]">
                <p className="italic text-on-secondary-container text-lg leading-tight" style={{ fontFamily: "var(--font-headline)" }}>&ldquo;Healing begins when we listen to the body&apos;s silent whispers.&rdquo;</p>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="space-y-6 mt-16">
              <span className="text-xs uppercase tracking-[0.3em] text-secondary font-bold">The Visionary</span>
              <h2 className="text-5xl text-primary leading-none tracking-tight">Dr. Rutuja</h2>
              <p className="text-lg text-on-surface-variant leading-relaxed opacity-90 max-w-sm">
                Founder and Lead Consultant with over 12 years of specialized practice in Constitutional Homeopathy and Holistic Wellness.
              </p>
            </div>
          </ScrollReveal>
        </section>

        {/* Doctor Profile Section */}
        <section className="bg-surface-container-low py-24">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              <div className="lg:col-span-5 lg:sticky lg:top-32 hidden md:block">
                <ScrollReveal variant="left">
                  <div className="relative">
                    <div className="bg-surface-container-lowest p-4 rounded-xl shadow-sm">
                      <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuALi2z4VoCInsOsgh2c7gPHmQ68hq4-s8T_ExlUy7pU_tqVIx6XB_lOiP8CFom8hUj0mfomC_tjnOP3pDE0y8J4APbhjqh3HTIy3CpSKcUCET89V24fYymClohc4YlXeRHhos1OYawJJ5cgOCiAoragoE6oO6Z-tDmQT7QVKzPeByULk0cgiHGgog6AC6AbmgSQjej16Cg5b-01qaxGWM9M_s_bERHKOfKzVjRtxyRgiYzOQnudRjsFMxnv7BNPbIsiVxY4VqOCH7g" alt="Dr. Rutuja Chapalgaonkar" width={500} height={667} className="w-full aspect-[3/4] object-cover rounded-lg grayscale hover:grayscale-0 transition-all duration-700" />
                      <div className="mt-6 flex flex-wrap gap-2">
                        {["BHMS", "PGDCC", "Diploma in Diet & Nutrition"].map((tag) => (
                          <span key={tag} className="px-3 py-1 bg-secondary-container text-on-secondary-container text-xs font-bold rounded-full uppercase tracking-tighter">{tag}</span>
                        ))}
                      </div>
                    </div>
                    <div className="absolute -top-10 -right-10 opacity-5 pointer-events-none">
                      <span className="material-symbols-outlined text-[12rem]">eco</span>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
              <div className="lg:col-span-7">
                <ScrollReveal>
                  <h2 className="text-primary mb-2">Dr. Rutuja Chapalgaonkar</h2>
                  <p className="text-secondary font-medium text-lg mb-10">Chief Consultant &amp; Wellness Expert</p>
                </ScrollReveal>
                <div className="space-y-12">
                  {[
                    { icon: "history_edu", title: "Biography", bg: "bg-primary-fixed", text: "With over 10 years of clinical experience, Dr. Rutuja has dedicated her career to understanding the intricate balance of the human body. She is a renowned expert in treating chronic illnesses and persistent allergies, while also specializing in clinical cosmetology to help patients achieve a natural, healthy glow from within." },
                    { icon: "psychology", title: "Philosophy", bg: "bg-secondary-fixed", text: "Her approach is rooted in ethical, compassionate, and patient-centric care. Rather than merely addressing symptoms, Dr. Rutuja focuses on uncovering and treating the root cause of every ailment, ensuring sustainable healing and long-term vitality." },
                  ].map((item, i) => (
                    <ScrollReveal key={item.title} delay={i * 200}>
                      <div className="flex gap-8 items-start group">
                        <div className={`w-12 h-12 flex-shrink-0 ${item.bg} rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}>
                          <span className="material-symbols-outlined text-primary">{item.icon}</span>
                        </div>
                        <div>
                          <h3 className="text-xl mb-4 text-on-surface">{item.title}</h3>
                          <p className="text-on-surface-variant leading-relaxed">{item.text}</p>
                        </div>
                      </div>
                    </ScrollReveal>
                  ))}
                  <ScrollReveal delay={400}>
                    <div className="bg-primary p-10 rounded-xl relative overflow-hidden hover-glow">
                      <span className="material-symbols-outlined absolute -top-4 -left-2 text-white/10 text-9xl select-none">format_quote</span>
                      <p className="text-white text-2xl italic relative z-10 leading-snug" style={{ fontFamily: "var(--font-headline)" }}>
                        &ldquo;My focus is always on patient well-being. I follow a responsible and ethical approach in all my treatments, ensuring that every individual who walks through our doors feels heard, valued, and healed.&rdquo;
                      </p>
                      <div className="mt-6 flex items-center gap-4 relative z-10">
                        <div className="h-[1px] w-12 bg-lime-400" />
                        <span className="text-lime-400 font-bold tracking-widest uppercase text-xs">The Clinical Standard</span>
                      </div>
                    </div>
                  </ScrollReveal>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Methodology Bento */}
        <section className="max-w-7xl mx-auto px-6 md:px-8 py-24">
          <ScrollReveal>
            <h2 className="text-3xl text-center mb-16 text-primary">The Homoeoglow Methodology</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: "account_tree", title: "Root Cause Focus", desc: "We dig deeper than surface symptoms to identify the environmental and constitutional triggers of your condition.", color: "text-primary" },
              { icon: "auto_awesome", title: "Natural Glow", desc: "Integrating cosmetology with homeopathic care to ensure your external radiance reflects your internal health.", color: "text-secondary" },
              { icon: "verified_user", title: "Ethical Approach", desc: "Every treatment plan is built on a foundation of transparency, integrity, and clinical responsibility.", color: "text-primary-container" },
            ].map((card, i) => (
              <ScrollReveal key={card.title} delay={i * 150}>
                <div className="bg-surface p-8 rounded-xl border border-outline-variant/20 hover:bg-surface-container-low transition-all duration-500 group hover-lift cursor-default">
                  <span className={`material-symbols-outlined text-4xl ${card.color} mb-6 block group-hover:scale-110 transition-transform duration-300`}>{card.icon}</span>
                  <h4 className="text-xl mb-4">{card.title}</h4>
                  <p className="text-on-surface-variant text-sm leading-relaxed">{card.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-7xl mx-auto px-6 md:px-8 pb-24">
          <ScrollReveal>
            <div className="bg-gradient-to-r from-primary to-primary-container rounded-3xl p-12 md:p-20 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-secondary-container/10 rounded-full -mr-48 -mt-48 blur-3xl" />
              <h2 className="text-4xl md:text-5xl text-white mb-8 relative z-10">Begin your journey to<br /><span className="italic">holistic radiance.</span></h2>
              <div className="flex flex-col md:flex-row gap-6 justify-center relative z-10">
                <Link href="/contact" className="bg-secondary-container text-on-secondary-container px-10 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-white transition-all duration-300 active:scale-95">
                  <span className="material-symbols-outlined">calendar_month</span> Book a Consultation
                </Link>
                <Link href="/services" className="bg-transparent border border-white/30 text-white px-10 py-4 rounded-xl font-bold hover:bg-white/10 transition-all duration-300">
                  Explore Our Services
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
