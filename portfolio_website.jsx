import { useEffect, useRef, useState } from "react";

const heroIcons = [
  {
    label: "Email",
    icon: "/icons/gmail.svg",
    href: "mailto:adeoluwaadekoya4@gmail.com",
  },
  {
    label: "LinkedIn",
    icon: "/icons/linkedin.svg",
    href: "https://www.linkedin.com/in/adeoluwa-adekoya-656836324",
  },
  {
    label: "GitHub",
    icon: "/icons/github.svg",
    href: "https://github.com/adeoluwa-4",
  },
  {
    label: "Resume",
    icon: "/icons/resume.svg",
    href: "/Ade_Adekoya_Resume_.pdf",
  },
];

const flagshipImages = [];

const voicePreserveLogo =
  "data:image/svg+xml;charset=UTF-8," +
  encodeURIComponent(`
    <svg width="256" height="256" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="256" height="256" rx="52" fill="#145C43"/>
      <path d="M64 168L96 88L128 152L160 88L192 168" stroke="#F4F6F3" stroke-width="20" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M70 190H186" stroke="#D8A34F" stroke-width="14" stroke-linecap="round"/>
      <circle cx="128" cy="54" r="18" fill="#D8A34F"/>
    </svg>
  `);

const featuredImages = [
  {
    src: "/RealSched.png",
    alt: "SchedAI planner experience",
  },
  {
    src: "/Airlineshow2.png",
    alt: "Airline no-show prediction view",
  },
  {
    src: voicePreserveLogo,
    alt: "Voice Preserve logo",
  },
];

const IconRow = ({ className }) => (
  <div className={className}>
    {heroIcons.map((item) => {
      const isMail = item.href.startsWith("mailto:");
      return (
        <a
          key={item.label}
          href={item.href}
          target={isMail ? undefined : "_blank"}
          rel={isMail ? undefined : "noreferrer"}
          className="tile-animate flex items-center gap-2 rounded-2xl border border-white/20 bg-white/5 px-4 py-2 text-sm text-white transition hover:border-blue-300 hover:bg-white/10"
        >
          <img src={item.icon} alt={`${item.label} icon`} className="h-6 w-6" />
          {item.label}
        </a>
      );
    })}
  </div>
);

export default function PortfolioWebsite() {
  const rootRef = useRef(null);

  const projects = [
    {
      title: "SchedAI",
      description:
        "An AI-powered planning app that converts natural language into structured daily plans, with offline parsing support and a polished cross-platform experience.",
      tech: ["SwiftUI", "iOS", "Offline NLP", "OpenAI API", "Custom algorithms", "Vercel"],
      demo: "https://schedai-snowy.vercel.app/",
      code: "https://github.com/adeoluwa-4/SchedAI",
      stats: ["Live demo deployed", "Task planning", "Real-time scheduling", "OpenAI integration", "Personalized plans"],
    },
    {
      title: "Airline No-Show Prediction",
      description:
        "A machine learning project that predicts airline passenger no-shows and explores the strongest drivers behind the outcome.",
      tech: ["Python", "scikit-learn", "Pandas", "Feature engineering"],
      demo: null,
      code: "https://github.com/adeoluwa-4/airline-no-show-prediction",
      stats: ["Classification model", "Feature analysis", "Real-world dataset", "Precision + validation"],
    },
    {
      title: "Voice Preserve",
      description:
        "A voice-driven AI project focused on natural interaction, responsive feedback, and a clean path from capture to deployment.",
      tech: ["Python", "Streamlit", "Speech-to-text", "LLM tooling", "Deployment"],
      demo: null,
      code: "https://github.com/adeoluwa-4/VoicePreserve",
      stats: ["Voice workflow", "Fast interaction", "User feedback", "Deployable app", "Assistant UX"],
    },
  ];

  const experience = [
    {
      role: "Incoming Systems Developer Intern",
      company: "Textron Aviation",
      logo: "/logos/textron.svg",
      dates: "May 2026 - August 2026",
      details:
        "Incoming summer role focused on systems development, cross-functional engineering collaboration, and building reliable software solutions.",
    },
    {
      role: "AI Web Developer Intern",
      company: "JNT Company",
      logo: "/logos/jnt.svg",
      dates: "May 2025 - July 2025",
      details:
        "Built machine learning web features, worked across frontend and backend systems, and helped improve performance and deployment workflows.",
    },
    {
      role: "IT Support Representative",
      company: "Kansas State University",
      logo: "/logos/kstate.svg",
      dates: "2024-present",
      details:
        "Resolved technical issues for students, improved troubleshooting workflows, and built a stronger foundation in systems thinking, communication, and support engineering.",
    },
  ];

  const skills = [
    "Python",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "React",
    "React Native",
    "SwiftUI",
    "SQL",
    "Machine Learning",
    "Deep Learning",
    "Pandas",
    "scikit-learn",
    "XGBoost",
    "Streamlit",
    "TensorFlow",
    "AWS",
    "Supabase",
    "Vercel",
    "Tailwind CSS",
    "Docker",
    "Figma",
    "Git",
    "API Integration",
  ];

  const [preview, setPreview] = useState(null);
  const closePreview = () => setPreview(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    let frameId = 0;
    let pointerX = 0;
    let pointerY = 0;
    let scrollDepth = 0;

    const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

    const applyParallax = () => {
      frameId = 0;
      root.style.setProperty("--parallax-deep-x", `${pointerX * -56}px`);
      root.style.setProperty("--parallax-deep-y", `${pointerY * -28 + scrollDepth * -68}px`);
      root.style.setProperty("--parallax-mid-x", `${pointerX * 44}px`);
      root.style.setProperty("--parallax-mid-y", `${pointerY * 28 + scrollDepth * -42}px`);
      root.style.setProperty("--parallax-near-x", `${pointerX * -34}px`);
      root.style.setProperty("--parallax-near-y", `${pointerY * 36 + scrollDepth * 28}px`);
      root.style.setProperty("--parallax-grid-x", `${pointerX * 24}px`);
      root.style.setProperty("--parallax-grid-y", `${pointerY * 18 + scrollDepth * -22}px`);
    };

    const queueParallax = () => {
      if (!frameId) frameId = window.requestAnimationFrame(applyParallax);
    };

    const updatePointer = (event) => {
      pointerX = clamp((event.clientX / window.innerWidth - 0.5) * 2, -1, 1);
      pointerY = clamp((event.clientY / window.innerHeight - 0.5) * 2, -1, 1);
      queueParallax();
    };

    const resetPointer = () => {
      pointerX = 0;
      pointerY = 0;
      queueParallax();
    };

    const updateScroll = () => {
      const maxScrollable = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
      const progress = clamp(window.scrollY / maxScrollable, 0, 1);
      scrollDepth = (progress - 0.5) * 2;
      queueParallax();
    };

    updateScroll();
    applyParallax();
    window.addEventListener("pointermove", updatePointer, { passive: true });
    window.addEventListener("pointerleave", resetPointer, { passive: true });
    window.addEventListener("scroll", updateScroll, { passive: true });
    window.addEventListener("resize", updateScroll, { passive: true });

    return () => {
      window.removeEventListener("pointermove", updatePointer);
      window.removeEventListener("pointerleave", resetPointer);
      window.removeEventListener("scroll", updateScroll);
      window.removeEventListener("resize", updateScroll);
      if (frameId) window.cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <div ref={rootRef} className="portfolio-bg parallax-root relative min-h-screen text-white">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="parallax-layer parallax-deep">
          <div className="slideshow-layer" />
        </div>
        <div className="parallax-layer parallax-mid">
          <div className="ambient-orb ambient-orb-a" />
        </div>
        <div className="parallax-layer parallax-near">
          <div className="ambient-orb ambient-orb-b" />
        </div>
        <div className="parallax-layer parallax-grid">
          <div className="ambient-grid" />
        </div>
      </div>

      <section className="slide-panel relative z-10 overflow-hidden border-b border-white/10" style={{ animationDelay: "0.05s" }}>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-indigo-500/10 to-emerald-400/10" />
        <div className="relative mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
          <div className="grid items-center gap-10 md:grid-cols-[1.3fr_0.7fr]">
            <div>
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-blue-300">
                Portfolio
              </p>
              <h1 className="max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">
                <span className="typing-line">
                  Hi, I’m <span className="typing-accent">Ade Adekoya</span>.
                </span>
                <br />
                <span className="hero-title typing-follow">
                  I build software that solves real problems with AI and thoughtful design.
                </span>
              </h1>
              <p className="hero-lead mt-6 max-w-2xl text-base leading-7 text-slate-300 md:text-lg">
                From machine learning prediction systems to cloud deployed web apps, I like
                taking ideas from concept to production and continuously improving how they
                work.
              </p>
              <div className="hero-cta-row mt-8 flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="tile-animate rounded-2xl bg-white px-5 py-3 text-sm font-medium text-slate-950 shadow-lg transition hover:-translate-y-0.5"
                >
                  View Projects
                </a>
                <a
                  href="#contact"
                  className="tile-animate rounded-2xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
                >
                  Contact Me
                </a>
              </div>
              <IconRow className="hero-icons-row mt-6 flex flex-wrap items-center gap-4" />
            </div>

            <div className="flex justify-center md:justify-end">
              <div className="float-card tile-animate w-full max-w-sm rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur">
                <div className="rounded-[1.5rem] border border-white/10 bg-slate-900/80 p-6">
                  <p className="text-sm text-slate-400">Currently focused on</p>
                  <ul className="mt-4 space-y-3 text-sm text-slate-200">
                    <li>• AI powered products</li>
                    <li>• Machine learning systems</li>
                    <li>• Mobile experiences</li>
                    <li>• Practical software tools</li>
                  </ul>
                  <div className="mt-6 rounded-2xl bg-blue-400/10 p-4 text-sm text-blue-200">
                    Open to internships, software engineering roles, and product-focused opportunities.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="slide-panel relative z-10 mx-auto max-w-6xl px-6 py-16 md:px-10" style={{ animationDelay: "0.12s" }} id="about">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl">
            <h2 className="text-2xl font-semibold">About Me</h2>
            <p className="mt-4 leading-7 text-slate-300">
              I like building things that feel clean, practical, and ambitious. My background
              blends software engineering, machine learning, and product thinking, which lets
              me move comfortably from idea to execution.
            </p>
            <p className="mt-4 leading-7 text-slate-300">
              Lately I’ve been focused on predictive systems, automation, and polished app
              experiences from machine learning products like World Cup 2026 Predictor to mobile and
              full-stack tools that solve real problems.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl">
            <h2 className="text-2xl font-semibold">Skills</h2>
            <div className="mt-5 flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <span
                  key={skill}
                  className="chip-animate flex items-center gap-2 rounded-full border border-white/10 bg-slate-900 px-4 py-2 text-sm text-slate-200"
                  style={{ animationDelay: `${0.18 + index * 0.05}s` }}
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-full border border-blue-400/20 bg-blue-400/10 text-[0.65rem] uppercase tracking-[0.2em] text-blue-200">
                    {skill[0]}
                  </span>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="slide-panel relative z-10 mx-auto max-w-6xl px-6 py-8 md:px-10" style={{ animationDelay: "0.2s" }} id="projects">
        <div className="mb-12 rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl">
          <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-blue-300">Flagship Project</p>
              <h3 className="mt-2 text-3xl font-semibold">World Cup 2026 Predictor</h3>
              <p className="mt-4 max-w-2xl leading-7 text-slate-300">
                Built an end-to-end machine learning and simulation platform for the 2026 FIFA World Cup. The dashboard cleans historical match data, joins ranking signals, predicts expected goals, and surfaces advancement odds through Monte Carlo sampling alongside the new FIFA brand direction.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href="https://adeoluwa-4-wc26-predictor-streamlit-app-awcr9s.streamlit.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl bg-white px-4 py-2 text-sm font-medium text-slate-950 transition hover:bg-slate-100"
                >
                  Live Demo
                </a>
                <a
                  href="https://github.com/adeoluwa-4/wc26-predictor"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-white/20 px-4 py-2 text-sm font-medium text-white transition hover:border-blue-300 hover:bg-white/5"
                >
                  GitHub
                </a>
              </div>
              <div className="mt-5 flex flex-wrap gap-3 text-sm text-slate-300">
                <span className="rounded-full border border-white/10 px-3 py-1">49,071 historical matches</span>
                <span className="rounded-full border border-white/10 px-3 py-1">48-team tournament model</span>
                <span className="rounded-full border border-white/10 px-3 py-1">Monte Carlo simulation</span>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {flagshipImages.map((image, index) => (
                <button
                  key={image.src}
                  type="button"
                  onClick={() => setPreview(image)}
                  aria-label={`Preview ${image.alt}`}
                  className="slide-panel tile-animate overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70"
                  style={{ animationDelay: `${0.22 + index * 0.08}s` }}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    className="h-48 w-full object-contain bg-slate-950 transition duration-200 hover:scale-105"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-blue-300">Selected Work</p>
            <h2 className="mt-2 text-3xl font-semibold">Featured Projects</h2>
          </div>
        </div>

        <div className="mb-10 grid gap-6 md:grid-cols-3">
          {featuredImages.map((image, index) => (
            <button
              key={image.src}
              type="button"
              onClick={() => setPreview(image)}
              aria-label={`Preview ${image.alt}`}
              className="slide-panel tile-animate group rounded-3xl border border-white/10 bg-white/5 p-4 shadow-xl"
              style={{ animationDelay: `${0.26 + index * 0.08}s` }}
            >
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60">
                <img
                  src={image.src}
                  className="h-56 w-full object-contain bg-slate-950 transition duration-300 group-hover:scale-[1.02]"
                  alt={image.alt}
                  loading="lazy"
                />
              </div>
            </button>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="slide-panel tile-animate flex h-full flex-col rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl transition hover:-translate-y-1"
              style={{ animationDelay: `${0.32 + index * 0.08}s` }}
            >
              <div className="flex flex-col gap-4">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-sm leading-6 text-slate-300">{project.description}</p>
              </div>
              <div className="mt-5 mb-8 flex flex-wrap gap-3 pb-4 text-xs text-slate-400">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-slate-900 px-3 py-1 text-xs text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex flex-wrap gap-3 text-xs text-slate-400">
                {project.stats.map((item) => (
                  <span key={item} className="rounded-full border border-white/10 px-3 py-1">
                    {item}
                  </span>
                ))}
              </div>
              {project.demo || project.code ? (
                <div className="mt-auto pt-4 flex gap-3 text-sm">
                  {project.demo ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-xl bg-white px-4 py-2 font-medium text-slate-950"
                    >
                      Live Demo
                    </a>
                  ) : null}
                  {project.code ? (
                    <a
                      href={project.code}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-xl border border-white/20 px-4 py-2 font-medium text-white transition hover:border-blue-300 hover:bg-white/5"
                    >
                      GitHub
                    </a>
                  ) : null}
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </section>

      <section className="slide-panel relative z-10 mx-auto max-w-6xl px-6 py-16 md:px-10" style={{ animationDelay: "0.26s" }} id="experience">
        <p className="text-sm uppercase tracking-[0.2em] text-blue-300">Background</p>
        <h2 className="mt-2 text-3xl font-semibold">Experience</h2>
        <div className="mt-8 space-y-5">
          {experience.map((item, index) => (
            <div
              key={item.role}
              className="slide-panel tile-animate rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl"
              style={{ animationDelay: `${0.38 + index * 0.08}s` }}
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-xl font-semibold">{item.role}</h3>
                  <div className="mt-1 flex flex-wrap items-center gap-3 text-sm text-slate-400">
                    <p>{item.company}</p>
                    {item.dates ? (
                      <span className="rounded-full border border-white/15 px-2.5 py-0.5 text-xs text-slate-300">
                        {item.dates}
                      </span>
                    ) : null}
                  </div>
                </div>
                {item.logo ? (
                  <div className="flex h-16 w-full shrink-0 items-center justify-center rounded-xl border border-slate-200/90 bg-white px-4 shadow-sm md:w-[260px]">
                    <img
                      src={item.logo}
                      alt={`${item.company} logo`}
                      className="max-h-11 w-full object-contain"
                      loading="lazy"
                    />
                  </div>
                ) : null}
              </div>
              <p className="mt-3 leading-7 text-slate-300">{item.details}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="slide-panel relative z-10 mx-auto max-w-6xl px-6 pb-20 md:px-10" style={{ animationDelay: "0.32s" }} id="contact">
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-r from-blue-500/15 to-purple-500/15 p-8 shadow-2xl">
          <h2 className="text-3xl font-semibold">Let’s build something great</h2>
          <p className="mt-4 max-w-2xl leading-7 text-slate-300">
            I’m interested in opportunities where I can contribute, learn fast, and ship useful
            products. Reach out for internships, collaborations, or tech conversations.
          </p>
        </div>
      </section>
      {preview && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 px-4 py-10"
          onClick={closePreview}
        >
          <div
            className="relative w-full max-w-5xl rounded-3xl border border-white/20 bg-slate-950/90 p-4 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Close preview"
              onClick={closePreview}
              className="absolute right-4 top-4 rounded-full border border-white/20 bg-white/5 px-3 py-2 text-sm text-white transition hover:bg-white/10"
            >
              ✕
            </button>
            <img
              src={preview.src}
              alt={preview.alt}
              className="mx-auto max-h-[80vh] max-w-[90vw] object-contain"
            />
            <p className="mt-4 text-center text-sm text-slate-300">{preview.alt}</p>
          </div>
        </div>
      )}
    </div>
  );
}
