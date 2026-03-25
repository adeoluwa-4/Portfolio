import { useState } from "react";

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
    href: "/Ade_Adekoya_Resume.pdf",
  },
];

const flagshipImages = [
  {
    src: "/FIFA-World-Cup-26-Official-Brand-unveiled-in-Los-Angeles.avif",
    alt: "World Cup 2026 Predictor brand concept",
  },
  {
    src: "/WC26-1.png",
    alt: "World Cup 2026 Predictor group winners view",
  },
  {
    src: "/WC26-2.png",
    alt: "World Cup 2026 Predictor team odds dashboard",
  },
];

const featuredImages = [
  {
    src: "/UEFA_Euro_2024_Logo.svg.png",
    alt: "UEFA Euro 2024 logo",
  },
  {
    src: "/Airlineshow2.png",
    alt: "Airline no-show prediction view",
  },
  {
    src: "/RealSched.png",
    alt: "SchedAI planner experience",
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
          className="flex items-center gap-2 rounded-2xl border border-slate-300 bg-white px-4 py-2 text-sm text-slate-700 shadow-sm transition hover:border-sky-400 hover:text-slate-900"
        >
          <img src={item.icon} alt={`${item.label} icon`} className="h-6 w-6" />
          {item.label}
        </a>
      );
    })}
  </div>
);

export default function PortfolioWebsite() {
  const projects = [
    {
      title: "Euro 2024 Score Predictor",
      description:
        "A soccer match score prediction project built around historical match data and predictive modeling.",
      tech: ["Python", "Streamlit", "Pandas", "scikit-learn", "Monte Carlo"],
      demo: null,
      code: "https://github.com/adeoluwa-4/euro-2024-score-predictor",
      stats: ["Match prediction", "Data + modeling", "Soccer analytics", "Random Forest + XGBoost", "Monte Carlo simulation"],
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
      title: "SchedAI",
      description:
        "An AI-powered planning app designed to turn natural language into structured daily plans with a polished mobile experience.",
      tech: ["SwiftUI", "iOS", "Offline NLP", "Product Design", "OpenAI API", "Custom algorithms"],
      demo: null,
      code: null,
      stats: ["Mobile UX", "Task planning", "Real-time scheduling", "OpenAI integration", "Personalized plans"],
    },
  ];

  const experience = [
    {
      role: "AI/ML Web Development Intern",
      company: "JNT Company",
      details:
        "Built machine learning web features, worked across frontend and backend systems, and helped improve performance and deployment workflows.",
    },
    {
      role: "IT Support Representative",
      company: "Kansas State University",
      details:
        "Resolved technical issues for students, improved troubleshooting workflows, and built a stronger foundation in systems thinking, communication, and support engineering.",
    },
  ];

  const skills = [
    "Python",
    "JavaScript",
    "React",
    "React Native",
    "SwiftUI",
    "SQL",
    "Machine Learning",
    "Pandas",
    "scikit-learn",
    "AWS",
    "Git",
    "API Integration",
  ];

  const [preview, setPreview] = useState(null);
  const closePreview = () => setPreview(null);

  return (
    <div className="ambient-bg relative min-h-screen text-slate-900">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="ambient-orb ambient-orb-a" />
        <div className="ambient-orb ambient-orb-b" />
        <div className="ambient-grid" />
      </div>

      <section className="relative z-10 overflow-hidden border-b border-slate-200">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-200/45 via-white/20 to-emerald-200/35" />
        <div className="relative mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
          <div className="grid items-center gap-10 md:grid-cols-[1.3fr_0.7fr]">
            <div>
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-sky-700">
                Portfolio
              </p>
              <h1 className="max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">
                Hi, I’m <span className="text-sky-700">Ade Adekoya</span>.
                <br />
                I build useful products with software, AI, and design.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 md:text-lg">
                I’m a Computer Science student at Kansas State University with a minor in
                Management Information Systems. I enjoy building tools that solve real
                problems, from predictive systems to polished app experiences.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="rounded-2xl bg-slate-900 px-5 py-3 text-sm font-medium text-white shadow-lg transition hover:-translate-y-0.5"
                >
                  View Projects
                </a>
                <a
                  href="#contact"
                  className="rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition hover:border-sky-400 hover:text-slate-900"
                >
                  Contact Me
                </a>
              </div>
              <IconRow className="mt-6 flex flex-wrap items-center gap-4" />
            </div>

            <div className="flex justify-center md:justify-end">
              <div className="w-full max-w-sm rounded-[2rem] border border-slate-200 bg-white/90 p-6 shadow-xl backdrop-blur">
                <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
                  <p className="text-sm text-slate-500">Currently focused on</p>
                  <ul className="mt-4 space-y-3 text-sm text-slate-700">
                    <li>• AI powered products</li>
                    <li>• Machine learning systems</li>
                    <li>• Mobile experiences</li>
                    <li>• Practical software tools</li>
                  </ul>
                  <div className="mt-6 rounded-2xl bg-sky-100 p-4 text-sm text-sky-800">
                    Open to internships, software engineering roles, and product-focused opportunities.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-6xl px-6 py-16 md:px-10" id="about">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">
            <h2 className="text-2xl font-semibold">About Me</h2>
            <p className="mt-4 leading-7 text-slate-600">
              I like building things that feel clean, practical, and ambitious. My background
              blends software engineering, machine learning, and product thinking, which lets
              me move comfortably from idea to execution.
            </p>
            <p className="mt-4 leading-7 text-slate-600">
              Lately I’ve been focused on predictive systems, automation, and polished app
              experiences from machine learning products like World Cup 2026 Predictor to mobile and
              full-stack tools that solve real problems.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">
            <h2 className="text-2xl font-semibold">Skills</h2>
            <div className="mt-5 flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-700"
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-full border border-sky-200 bg-sky-50 text-[0.65rem] uppercase tracking-[0.2em] text-sky-700">
                    {skill[0]}
                  </span>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-6xl px-6 py-8 md:px-10" id="projects">
        <div className="mb-12 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl">
          <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-sky-700">Flagship Project</p>
              <h3 className="mt-2 text-3xl font-semibold">World Cup 2026 Predictor</h3>
              <p className="mt-4 max-w-2xl leading-7 text-slate-600">
                Built an end-to-end machine learning and simulation platform for the 2026 FIFA World Cup. The dashboard cleans historical match data, joins ranking signals, predicts expected goals, and surfaces advancement odds through Monte Carlo sampling alongside the new FIFA brand direction.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href="https://github.com/adeoluwa-4/wc26-predictor"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-sky-400 hover:text-slate-900"
                >
                  GitHub
                </a>
              </div>
              <div className="mt-5 flex flex-wrap gap-3 text-sm text-slate-600">
                <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1">49,071 historical matches</span>
                <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1">48-team tournament model</span>
                <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1">Monte Carlo simulation</span>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {flagshipImages.map((image) => (
                <button
                  key={image.src}
                  type="button"
                  onClick={() => setPreview(image)}
                  aria-label={`Preview ${image.alt}`}
                  className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    className="h-48 w-full object-contain bg-slate-100 transition duration-200 hover:scale-105"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-sky-700">Selected Work</p>
            <h2 className="mt-2 text-3xl font-semibold">Featured Projects</h2>
          </div>
        </div>

        <div className="mb-10 grid gap-6 md:grid-cols-3">
          {featuredImages.map((image) => (
            <button
              key={image.src}
              type="button"
              onClick={() => setPreview(image)}
              aria-label={`Preview ${image.alt}`}
              className="group rounded-3xl border border-slate-200 bg-white p-4 shadow-lg"
            >
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">
                <img
                  src={image.src}
                  className="h-56 w-full object-contain bg-slate-100 transition duration-300 group-hover:scale-[1.02]"
                  alt={image.alt}
                  loading="lazy"
                />
              </div>
            </button>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-lg transition hover:-translate-y-1"
            >
              <div className="flex flex-col gap-4">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-sm leading-6 text-slate-600">{project.description}</p>
              </div>
              <div className="mt-5 mb-8 flex flex-wrap gap-3 pb-4 text-xs text-slate-500">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-600"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex flex-wrap gap-3 text-xs text-slate-500">
                {project.stats.map((item) => (
                  <span key={item} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1">
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
                      className="rounded-xl border border-slate-300 bg-white px-4 py-2 font-medium text-slate-700 transition hover:border-sky-400 hover:text-slate-900"
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

      <section className="relative z-10 mx-auto max-w-6xl px-6 py-16 md:px-10" id="experience">
        <p className="text-sm uppercase tracking-[0.2em] text-sky-700">Background</p>
        <h2 className="mt-2 text-3xl font-semibold">Experience</h2>
        <div className="mt-8 space-y-5">
          {experience.map((item) => (
            <div
              key={item.role}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg"
            >
              <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
                <h3 className="text-xl font-semibold">{item.role}</h3>
                <p className="text-sm text-slate-500">{item.company}</p>
              </div>
              <p className="mt-3 leading-7 text-slate-600">{item.details}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-20 md:px-10" id="contact">
        <div className="rounded-[2rem] border border-slate-200 bg-gradient-to-r from-sky-100/80 to-emerald-100/70 p-8 shadow-xl">
          <h2 className="text-3xl font-semibold">Let’s build something great</h2>
          <p className="mt-4 max-w-2xl leading-7 text-slate-600">
            I’m interested in opportunities where I can contribute, learn fast, and ship useful
            products. Reach out for internships, collaborations, or tech conversations.
          </p>
        </div>
      </section>
      {preview && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/65 px-4 py-10"
          onClick={closePreview}
        >
          <div
            className="relative w-full max-w-5xl rounded-3xl border border-slate-200 bg-white p-4 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Close preview"
              onClick={closePreview}
              className="absolute right-4 top-4 rounded-full border border-slate-300 bg-white px-3 py-2 text-sm text-slate-700 transition hover:border-slate-400"
            >
              ✕
            </button>
            <img
              src={preview.src}
              alt={preview.alt}
              className="mx-auto max-h-[80vh] max-w-[90vw] object-contain"
            />
            <p className="mt-4 text-center text-sm text-slate-600">{preview.alt}</p>
          </div>
        </div>
      )}
    </div>
  );
}
