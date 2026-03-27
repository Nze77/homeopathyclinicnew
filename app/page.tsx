"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollReveal from "./components/ScrollReveal";

/* ===== IMAGE URLS (from original HTML) ===== */
const IMAGES = {
  hero: "https://lh3.googleusercontent.com/aida-public/AB6AXuCy39p_iuLEgEWvNk5EBXFSDbQgLwRcw2K0bV_MIlQWgfTx6W-khQNOcnh-M-2UM-t4pJB9AOkX10E4BGXwhiIPIYrBn02k372rD-6iAQpWS0Mo4MGEzC6RL2eVjb9b5rOPnv-jzhWBaQmUxmJ_3Llsw_XuRiwO1qw1T6VPXe21Mu7FzzRF_ScAhKm6-0y1Be_v7vf_psY1t-gRzBTUlU197DOvejm3bQ7ELaAc8ZoM5oulmOpmYR_ziGHZwgKBTuHZPsRXHp0Ow-Q",
  heroMobile:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDwztNpmTXAi96_aLMKsVi2VoUe44P4odhMAM2RCy3Pp7d2aoQczCCX_8a5_SbVXE_SqhQyPJdNTsWeEM8zt3x-JbY4K1xIIF_2g2bBWydtWtJeV9wcMaP9GEbO2z32WK0rHbFc6-KGX_wMJ5093wMC5TVpuGbWpRVVbikXeFLGlTUb1YgQ6nD7kvPlwmq0b2JztvRcvimrhbPOuV1uTeRD4Ymj60jESQZ2ozEF0xAnpDckH5s704ibEariGpUk4azE6UrebW7RWJU",
  clinic:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDLbUSUcYWYWM5jLFHBk7XtlYNtPf1_Cw97Wy9bw3Y_EXhACJk05622ugIdnCOj7kP28LZ5RXtv4Q26fhQXY54LUl1LEgYYWWpHBIzLT0f50XFbwCpL66_GQknZ014G7WBNcGTe5aYJbCifnecGuCbbeDq5uWmQfjMFldNXLpAwDpROgx2lnzC9WLUHGHYQRUdMlhqZjM0rOioz23cysxv9e7gH1-XwEgbgfIZtzTBsy7C2iXTNtDiJUiqTBpsrS1Y7Zl0TtsknHec",
  doctor:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBdi4srUnI8bI46iB7RIf9Wdd3s4uUlIg4yb_riX3ilC3JwIwJYIeCNsCj0osRalqHhDLQkxKYDlOiMqIO7o4QD3DgsXkaRujW3ZBlk0K9mSSymNheeFnbskkpFGdp3a7z9SI49sSzUPCYfv2DjWNTmaDlIw8jPjLbGnJbqBPqrV3HZt0w-Y6E06rfmaOaPoeo6411AJVjv8v7kXXIAi-7lrKNEaqRBLZIZ3OY6iLMa9_CFbL1uVULiKWRO4910EEbQW5u9nX0Xvyk",
  testimonial:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBq52RtHAL2Dog4gDiKkaUS_xk28xdKyzYg6tsl1qMvZh47U7Z8LR_ZRB6sJVMjUfXoN2c-lGZKNwBmrJUe5TP3X06THseywU7vccTzxEBIWNdnD17KbXIk8-yPT5B_58Zu5J-6mluvmQtmeHSYp31BmFEWENrDK8XDUx_oDrWy8qASJRzgHanYLnCgWyj4IAzJkbR7s8JOhnfs2QmRSmxMVz8jrVe7yMG7yByFgEG28QHOeB3EOLCUnsQsgWgJzy34p76Rejm69lQ",
  skincare:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCa5h8u885Qf5PCJfpqllihkCo57j5s4jNx8IJP7StAVMkfvGdG1WRccO5rsG97kwA1NVum-hEP9Pw1yd2rW_TjJRV6WWiSqDFp9JhMNI8KhhKYpVF7sdjWi2utfcXZ7xpPwoEFyaYV0RCbYF4C4xKCZC4fK_VYiZKGtgfvH_d1ukF89NiYo1YYjaOPPFcW0Lc4bk2sAx-05NVU530k2vhYIHtNwNngWY-x2LsE6Hx8EXq_1CQWuRjvDz9uE9LS9DQRK_NkAmizZuk",
  mindfulness:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAXqTuxJHQSMm1uYXn0I0bl9DEvHH7-4a306UaMl5Z9EE6bRXC_Q3L012rGMENUjVdXNhpmQHgd3OVkY9HGiZZbd5y9DaTAjAsX5w-lP6ezk2OUY2q_G4sjqFWbxPwTe1NnAU-IfYKdphMLBCYy9QRYVsk36G6-OZ4O-C_-2eixsgR4RuFeYm31MRYTuuaH9D4rm__nKYWjHJKmMhtWTvMksZlRMdMPiydhfrSkrquzAI8zmPT213MkCKqdLFDHFULbv8aka_igUU0",
  ctaBg:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuB_fPXrVJH7qsYTvXLNZA7Gy_XX-EeNPab21puD5NY_7mMSa5fINYELjGjvVnxfVePB9_ZGk2IVzx14urGILNtFNZIYZvHtDZTs27JOSy6YGwkAIQ48xjJQcXMga_7TZncE0Alse9oht6epxTYxC9V7BIUWQn1IncGr6mh2JK4EiW5jik0vHJLtbUWS7MFioW-xgU7Y-gu8UKcOlbinpWw_4kTjhNL7-7BeSh2dh4lHrI0UDoUI2XQFVobCBH4ULCuPIQbdQ3lRIoQ",
};

/* ===== EXPERTISE DATA ===== */
const expertiseCards = [
  {
    icon: "medical_services",
    title: "Homeopathy",
    description:
      "Individualized holistic treatment addressing the root cause of chronic and acute ailments through gentle, natural remedies.",
    bgHover: "hover:bg-primary-container",
    iconBg: "bg-primary-container/10",
    decorIcon: "nature",
  },
  {
    icon: "nutrition",
    title: "Diet & Nutrition",
    description:
      "Personalized nutritional roadmaps designed to balance your metabolism, improve energy levels, and sustain long-term health.",
    bgHover: "hover:bg-secondary",
    iconBg: "bg-secondary-container/30",
    decorIcon: "restaurant",
  },
  {
    icon: "face_6",
    title: "Clinical Cosmetology",
    description:
      "Advanced skin and hair treatments merging clinical precision with holistic care for a radiant, natural glow.",
    bgHover: "hover:bg-primary-container",
    iconBg: "bg-primary-container/10",
    decorIcon: "shutter_speed",
  },
];

/* ===== CARE STEPS ===== */
const careSteps = [
  {
    step: "01",
    title: "Detailed Consultation",
    description:
      "A deep dive into your medical history and lifestyle to understand the unique patterns of your health.",
  },
  {
    step: "02",
    title: "Advanced Treatments",
    description:
      "Utilization of modern clinical tools combined with centuries-old homeopathic wisdom for effective results.",
  },
  {
    step: "03",
    title: "Long-Term Wellness",
    description:
      "Ongoing support and lifestyle adjustments to ensure the glow isn't just temporary, but a permanent state of being.",
  },
];

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main className="flex-1">
        {/* ===== HERO SECTION ===== */}
        {/*
          FIX 1: Changed min-h-screen to min-h-[100svh] for accurate mobile viewport height.
          FIX 2: Added pb-12 md:pb-0 so content doesn't press against the bottom on mobile.
        */}
        <header className="relative min-h-[100svh] flex items-center pt-20 pb-12 md:pb-0 overflow-hidden bg-gradient-to-br from-surface to-primary-container/10">
          <div className="max-w-7xl mx-auto px-6 md:px-8 w-full editorial-grid gap-8">
            {/* Left Content */}
            <div className="col-span-full lg:col-span-7 flex flex-col justify-center">
              <ScrollReveal delay={100}>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary-container text-on-secondary-container rounded-full text-sm font-label mb-6 self-start">
                  <span
                    className="material-symbols-outlined text-sm"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                    data-icon="verified"
                  >
                    verified
                  </span>
                  Trusted Wellness Sanctuary
                </div>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                {/*
                  FIX 3: Reduced base font size from text-5xl to text-4xl to prevent
                  overflow on 320–375px phones. Restored text-5xl at sm: breakpoint.
                */}
                <h1 className="font-headline text-4xl sm:text-5xl md:text-7xl text-primary leading-[1.1] mb-8 tracking-tight">
                  Natural Healing.
                  <br />
                  <span className="text-secondary italic">Radiant Glow.</span>
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={350}>
                <p className="text-on-surface-variant text-base md:text-xl max-w-xl mb-10 leading-relaxed font-light">
                  Experience holistic homeopathy, personalized diet nutrition,
                  and advanced clinical cosmetology with{" "}
                  <span className="text-primary font-semibold">
                    Dr. Rutuja Chapalgaonkar.
                  </span>
                </p>
              </ScrollReveal>

              <ScrollReveal delay={500}>
                <div className="flex flex-wrap gap-4 items-center">
                  <Link
                    href="/contact"
                    /*
                      FIX 4: Reduced horizontal padding on mobile (px-7 → px-10 on md+)
                      and font size (text-base → text-lg on md+) for better fit.
                    */
                    className="bg-primary text-on-primary px-7 py-4 md:px-10 rounded-xl text-base md:text-lg font-semibold flex items-center group transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 hover:gap-4 hover-ripple active:scale-95"
                  >
                    Start Your Journey
                    <span className="material-symbols-outlined ml-2 transition-all duration-300 group-hover:translate-x-1">
                      arrow_forward
                    </span>
                  </Link>
                </div>
              </ScrollReveal>

              {/* Trust Badges */}
              <ScrollReveal delay={650}>
                {/*
                  FIX 5: Added flex-wrap so badges wrap on very narrow screens instead
                  of overflowing. Reduced gap to gap-5 on mobile, gap-8 on md+.
                */}
                <div className="mt-10 md:mt-16 flex flex-wrap gap-5 md:gap-8 items-center border-t border-outline-variant/20 pt-8">
                  {[
                    { icon: "shield_with_heart", label: "Safe Care" },
                    { icon: "all_inclusive", label: "Holistic" },
                    { icon: "eco", label: "Natural" },
                  ].map((badge) => (
                    <div
                      key={badge.label}
                      className="flex items-center gap-2 text-on-surface-variant group cursor-default"
                    >
                      <span
                        className="material-symbols-outlined text-secondary transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                        data-icon={badge.icon}
                      >
                        {badge.icon}
                      </span>
                      <span className="text-sm font-label font-medium">
                        {badge.label}
                      </span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>

            {/* Right Image */}
            {/*
              FIX 6: On mobile the image was aspect-[4/5] at full column width — extremely
              tall. Now it's a fixed max-h-[340px] square crop on mobile, restoring the
              original oval shape only on lg+ where there's enough horizontal space.
              Also reduced top margin from mt-12 to mt-8 on mobile.
            */}
            <div className="col-span-full lg:col-span-5 relative mt-8 lg:mt-0">
              <ScrollReveal variant="scale" delay={300}>
                <div className="w-full max-h-[340px] lg:max-h-none lg:aspect-[4/5] rounded-2xl lg:rounded-full overflow-hidden border-[8px] lg:border-[12px] border-surface-container-low shadow-2xl relative z-10 hover-zoom-img animate-pulse-glow">
                  {/* Desktop hero image */}
                  <Image
                    src={IMAGES.hero}
                    alt="Professional holistic treatment session"
                    fill
                    className="object-cover hidden md:block"
                    priority
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                  {/* Mobile hero image */}
                  <Image
                    src={IMAGES.heroMobile}
                    alt="Dr. Rutuja in clinical setting"
                    fill
                    className="object-cover md:hidden"
                    priority
                    sizes="100vw"
                  />
                </div>
              </ScrollReveal>

              {/* Decorative blob */}
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-secondary-container rounded-2xl -z-0 hidden md:block opacity-40 blur-2xl animate-blob-morph" />

              {/* Floating card */}
              <ScrollReveal variant="right" delay={700}>
                <div className="absolute top-20 -right-4 bg-white p-6 rounded-2xl shadow-xl z-20 max-w-[200px] border border-surface-container-high hidden md:block">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full bg-secondary" />
                    <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                      Live Well
                    </span>
                  </div>
                  <p className="text-sm font-medium leading-tight">
                    100% Organic &amp; Chemical Free Treatments
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </header>

        {/* ===== MOBILE: PHILOSOPHY BENTO (visible on phone) ===== */}
        <section className="px-6 py-16 space-y-12 md:hidden">
          <ScrollReveal>
            <div className="space-y-2">
              <h3 className="font-headline text-3xl text-primary">Our Core Philosophy</h3>
              <div className="h-0.5 w-12 bg-secondary-container animate-line-reveal" />
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-2 gap-4">
            <ScrollReveal className="col-span-2" delay={100}>
              <div className="bg-surface-container-lowest p-8 rounded-xl space-y-4 hover-lift">
                <span className="material-symbols-outlined text-secondary text-3xl">
                  auto_awesome
                </span>
                <h4 className="text-xl">Root-Cause Analysis</h4>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  We dig deeper than symptoms to find the biological and
                  energetic origins of your health concerns.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="bg-primary text-on-primary p-6 rounded-xl flex flex-col justify-between aspect-square hover-lift cursor-default group">
                <span className="material-symbols-outlined text-2xl transition-transform duration-500 group-hover:rotate-12">
                  spa
                </span>
                <h4 className="font-medium text-sm">
                  Personalized Therapeutics
                </h4>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="bg-secondary-container text-on-secondary-container p-6 rounded-xl flex flex-col justify-between aspect-square hover-lift cursor-default group">
                <span className="material-symbols-outlined text-2xl transition-transform duration-500 group-hover:rotate-12">
                  vital_signs
                </span>
                <h4 className="font-medium text-sm">
                  Vitality Tracking
                </h4>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ===== CORE EXPERTISE ===== */}
        {/*
          FIX 7: Reduced section vertical padding on mobile from py-24 to py-16.
        */}
        <section className="py-16 md:py-24 bg-surface">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <ScrollReveal>
              <div className="mb-10 md:mb-16">
                <h2 className="font-headline text-3xl md:text-4xl text-primary mb-4">Core Expertise</h2>
                <div className="h-1 w-20 bg-secondary rounded-full animate-line-reveal" />
              </div>
            </ScrollReveal>

            {/* Desktop: Grid of 3 cards */}
            <div className="hidden md:grid md:grid-cols-3 gap-8">
              {expertiseCards.map((card, index) => (
                <ScrollReveal key={card.title} delay={index * 150}>
                  <div
                    className={`group relative overflow-hidden rounded-xl bg-surface-container-lowest p-8 transition-all duration-500 ${card.bgHover} hover:-translate-y-3 hover:shadow-2xl hover:shadow-primary/10 cursor-pointer`}
                  >
                    <div
                      className={`w-14 h-14 rounded-full ${card.iconBg} flex items-center justify-center mb-6 group-hover:bg-white/20 transition-all duration-500 group-hover:scale-110`}
                    >
                      <span className="material-symbols-outlined text-primary text-3xl group-hover:text-white transition-colors duration-300" data-icon={card.icon}>
                        {card.icon}
                      </span>
                    </div>
                    <h3 className="font-headline text-2xl text-primary mb-4 group-hover:text-white transition-colors duration-300">
                      {card.title}
                    </h3>
                    <p className="text-on-surface-variant leading-relaxed mb-6 group-hover:text-white/80 transition-colors duration-300">
                      {card.description}
                    </p>
                    <div className="flex items-center text-secondary font-bold group-hover:text-white cursor-pointer transition-all duration-300 group-hover:gap-2">
                      Learn More
                      <span className="material-symbols-outlined ml-2 transition-transform duration-300 group-hover:translate-x-2" data-icon="chevron_right">
                        chevron_right
                      </span>
                    </div>
                    {/* Decorative background icon */}
                    <span
                      className="material-symbols-outlined absolute -bottom-4 -right-4 text-9xl opacity-5 group-hover:opacity-10 transition-opacity"
                      data-icon={card.decorIcon}
                    >
                      {card.decorIcon}
                    </span>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Mobile: Horizontal scroll cards */}
            <div className="md:hidden">
              <ScrollReveal>
                <div className="flex overflow-x-auto pb-8 gap-6 no-scrollbar px-6">
                  {[
                    {
                      img: IMAGES.skincare,
                      title: "Dermatological Care",
                      description:
                        "Holistic solutions for lasting radiance and skin health.",
                    },
                    {
                      img: IMAGES.mindfulness,
                      title: "Metabolic Health",
                      description:
                        "Balancing internal systems for sustainable energy.",
                    },
                  ].map((card) => (
                    <div
                      key={card.title}
                      className="flex-shrink-0 w-72 space-y-4 group"
                    >
                      <div className="h-96 rounded-xl overflow-hidden relative hover-zoom-img">
                        <Image
                          src={card.img}
                          alt={card.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          sizes="288px"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                      </div>
                      <div>
                        <h4 className="text-xl text-primary">{card.title}</h4>
                        <p className="text-sm text-on-surface-variant mt-1">
                          {card.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ===== PATIENT CARE & COMFORT ===== */}
        {/*
          FIX 8: Reduced section padding on mobile (py-16 md:py-24).
          FIX 9: Reduced gap between image grid and steps on mobile (gap-10 lg:gap-16).
        */}
        {/*
          FIX 15: overflow-x-clip is stronger than overflow-hidden — it clips
          transformed children (e.g. ScrollReveal translateX) that can escape
          overflow-hidden in Chrome/WebKit without creating a new scroll container.
        */}
        <section className="py-16 md:py-24 bg-surface-container-low overflow-x-clip">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            {/*
              FIX 16: Added w-full min-w-0 to editorial-grid wrapper.
              Without min-w-0, CSS grid children can set the grid's intrinsic
              width wider than the container on some browsers.
            */}
            <div className="editorial-grid w-full min-w-0 gap-10 lg:gap-16 items-center">
              {/* Image Grid */}
              <div className="col-span-full lg:col-span-6 relative min-w-0">
                <div className="grid grid-cols-2 gap-3 md:gap-4">
                  <ScrollReveal variant="left" delay={100}>
                    <div className="rounded-xl w-full h-44 md:h-64 overflow-hidden shadow-lg hover-zoom-img hover-lift">
                      <Image
                        src={IMAGES.clinic}
                        alt="Clinical environment"
                        width={400}
                        height={256}
                        className="w-full h-full object-cover"
                        sizes="(max-width: 768px) 50vw, 25vw"
                      />
                    </div>
                  </ScrollReveal>
                  {/*
                    FIX 17: Removed mt-8 on mobile — the stagger offset only makes
                    visual sense when images sit side-by-side (lg+). On mobile the
                    images are in a 2-col grid within a full-width stacked block;
                    the offset was the main contributor to the right-overflow bleed.
                  */}
                  <ScrollReveal delay={300}>
                    <div className="rounded-xl w-full h-44 md:h-64 overflow-hidden md:mt-12 shadow-lg hover-zoom-img hover-lift">
                      <Image
                        src={IMAGES.doctor}
                        alt="Doctor consultation"
                        width={400}
                        height={256}
                        className="w-full h-full object-cover"
                        sizes="(max-width: 768px) 50vw, 25vw"
                      />
                    </div>
                  </ScrollReveal>
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-secondary/20 rounded-full blur-3xl animate-blob-morph" />
              </div>

              {/* Steps Content */}
              <div className="col-span-full lg:col-span-6 min-w-0">
                <ScrollReveal>
                  <span className="text-secondary font-bold tracking-widest uppercase text-xs mb-4 block">
                    The Experience
                  </span>
                  <h2 className="font-headline text-3xl md:text-4xl text-primary mb-8 leading-tight">
                    Patient Care &amp; <br className="hidden md:block" />
                    Comfort
                  </h2>
                </ScrollReveal>

                <div className="space-y-8 md:space-y-10">
                  {careSteps.map((step, index) => (
                    <ScrollReveal key={step.step} delay={200 + index * 200}>
                      <div className="flex gap-5 md:gap-6 group cursor-default">
                        <div className="flex-shrink-0 w-11 h-11 md:w-12 md:h-12 rounded-full border border-primary flex items-center justify-center font-headline text-lg md:text-xl text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/20">
                          {step.step}
                        </div>
                        {/* min-w-0 is essential: flex children default to min-width:auto,
                            which lets them grow past the flex container boundary.
                            Without it, long text overflows instead of wrapping. */}
                        <div className="min-w-0">
                          <h4 className="font-headline text-lg md:text-xl text-primary mb-2 group-hover:translate-x-1 transition-transform duration-300">
                            {step.title}
                          </h4>
                          <p className="text-on-surface-variant leading-relaxed text-sm md:text-base break-words">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== TESTIMONIAL TEASER ===== */}
        {/*
          FIX 11: Reduced section padding on mobile (py-16 md:py-24).
          FIX 12: Reduced quote font size on mobile (text-xl → text-2xl → text-3xl).
        */}
        <section className="py-16 md:py-24 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 md:px-8 text-center">
            <ScrollReveal variant="scale">
              <span
                className="material-symbols-outlined text-secondary text-5xl mb-6 inline-block"
                style={{ fontVariationSettings: "'FILL' 1" }}
                data-icon="format_quote"
              >
                format_quote
              </span>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p className="font-headline text-xl sm:text-2xl md:text-3xl text-primary max-w-4xl mx-auto leading-relaxed mb-8 italic">
                &ldquo;Dr. Rutuja&apos;s approach is life-changing. She
                doesn&apos;t just treat symptoms; she heals you from within. My
                skin has never looked better, and I feel more energetic than
                ever.&rdquo;
              </p>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full overflow-hidden mb-4 border-2 border-secondary-container hover:scale-110 transition-transform duration-500">
                  <Image
                    src={IMAGES.testimonial}
                    alt="Patient testimonial avatar"
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="font-bold text-primary">Ananya Sharma</p>
                <p className="text-sm text-on-surface-variant">
                  Wellness Patient
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ===== MOBILE: JOURNAL PREVIEW ===== */}
        <section className="px-6 py-20 bg-white md:hidden">
          <ScrollReveal>
            <div className="flex justify-between items-end mb-10">
              <h3 className="font-headline text-3xl text-primary leading-none">
                The Journal
              </h3>
              <Link
                href="/blogs"
                className="text-secondary text-sm tracking-widest uppercase flex items-center gap-1 hover-underline-sweep"
              >
                View All
                <span className="material-symbols-outlined text-xs">
                  north_east
                </span>
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <article className="group space-y-4 border-b border-surface-container pb-10 mb-10">
              <p className="text-[10px] uppercase tracking-widest text-on-surface-variant/60 font-medium">
                May 24, 2024 • Nutrition
              </p>
              <h4 className="font-headline text-2xl group-hover:text-primary transition-colors duration-300">
                The Alchemy of Morning Rituals: Setting Your Biological Clock
              </h4>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Explore how specific Ayurvedic and modern chronobiological
                practices can reset your cortisol levels...
              </p>
            </article>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <article className="group space-y-4">
              <p className="text-[10px] uppercase tracking-widest text-on-surface-variant/60 font-medium">
                May 12, 2024 • Wellness
              </p>
              <h4 className="font-headline text-2xl group-hover:text-primary transition-colors duration-300">
                Micro-Dosing Stillness: A Guide for the Modern Professional
              </h4>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Finding sanctuary in the silence between tasks to preserve
                neurological health...
              </p>
            </article>
          </ScrollReveal>
        </section>

        {/* ===== CTA SECTION ===== */}
        <section className="py-16 md:py-20 bg-primary-container relative overflow-hidden">
          {/* Background overlay */}
          <div className="absolute inset-0 opacity-10">
            <Image
              src={IMAGES.ctaBg}
              alt=""
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>

          {/* Animated decorative elements */}
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-float" />
          <div
            className="absolute bottom-10 right-10 w-48 h-48 bg-secondary/10 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          />

          <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 text-center">
            <ScrollReveal>
              {/*
                FIX 13: Reduced headline font size on mobile (text-3xl → text-4xl → text-5xl).
              */}
              <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl text-white mb-6 md:mb-8">
                Ready for your holistic transformation?
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p className="text-white/80 text-base md:text-lg mb-10 md:mb-12 max-w-2xl mx-auto">
                Join over 500+ satisfied patients who have found their natural
                path to health and beauty with Homoeoglow.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              {/*
                FIX 14: Scaled CTA button padding down on mobile.
                px-12 py-5 text-xl  →  px-8 py-4 text-base on mobile, restored on md+.
                Also changed to w-full sm:w-auto so it's a full-width tap target on phones.
              */}
              <Link
                href="/contact"
                className="inline-flex w-full sm:w-auto items-center justify-center bg-secondary-container text-on-secondary-container px-8 md:px-12 py-4 md:py-5 rounded-full text-base md:text-xl font-bold hover:bg-white hover:text-primary transition-all duration-500 shadow-xl active:scale-95 hover:shadow-2xl hover:shadow-white/20 group"
              >
                Book Your Consultation Now
                <span className="material-symbols-outlined ml-3 transition-transform duration-300 group-hover:rotate-12" data-icon="calendar_month">
                  calendar_month
                </span>
              </Link>
            </ScrollReveal>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}