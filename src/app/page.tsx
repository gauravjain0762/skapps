import Link from "next/link";
import HeroScene from "@/components/HeroScene";
import Reveal from "@/components/Reveal";
import ProjectVisual from "@/components/ProjectVisual";
import { ArrowRightIcon, ArrowUpRightIcon } from "@/components/icons";
import { services, stats, projects, site } from "@/data/site";

const marqueeItems = [
  "iOS",
  "Android",
  "React Native",
  "Next.js",
  "Swift",
  "Kotlin",
  "Motion & 3D",
  "Design systems",
];

export default function HomePage() {
  const featured = projects.slice(0, 3);

  return (
    <>
      {/* HERO */}
      <section className="hero shell">
        <div className="aurora-blob" />
        <div className="hero-grid">
          <div>
            <Reveal>
              <span className="eyebrow">{site.tagline}</span>
            </Reveal>
            <h1>
              <Reveal className="line" delay={0.05}>
                We build apps
              </Reveal>
              <Reveal className="line" delay={0.12}>
                people <span className="italic aurora-text">keep</span>.
              </Reveal>
            </h1>
            <Reveal delay={0.2}>
              <p className="lead">
                SK Apps designs and engineers premium mobile and web products —
                from the first sketch to the App Store.
              </p>
            </Reveal>
            <Reveal delay={0.28}>
              <div className="hero-ctas">
                <Link href="/contact" className="btn btn-primary">
                  Start a project <ArrowRightIcon />
                </Link>
                <Link href="/portfolio" className="btn btn-ghost">
                  See our work
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.36}>
              <div className="hero-meta">
                {stats.slice(0, 3).map((s) => (
                  <div key={s.label}>
                    <div className="num serif">{s.value}</div>
                    <div className="cap">{s.label}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <HeroScene />
        </div>
      </section>

      {/* MARQUEE */}
      <div className="marquee">
        <div className="marquee-track">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i}>{item}</span>
          ))}
        </div>
      </div>

      {/* SERVICES */}
      <section className="section shell">
        <div className="section-head">
          <Reveal>
            <h2 className="serif">Everything a product needs, under one roof.</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="lead">
              We're a small, senior team. The people who design your product are
              the ones who build and ship it.
            </p>
          </Reveal>
        </div>

        <div className="services-grid">
          {services.map((s, i) => (
            <Reveal key={s.n} className="svc" delay={i * 0.06}>
              <span className="n serif">{s.n}</span>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="section shell section--flush-top">
        <Reveal>
          <div className="stats">
            {stats.map((s) => (
              <div className="stat" key={s.label}>
                <div className="value serif">{s.value}</div>
                <div className="label">{s.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* WORK PREVIEW */}
      <section className="section shell">
        <div className="section-head">
          <Reveal>
            <h2 className="serif">Selected work</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Link href="/portfolio" className="btn btn-ghost">
              View all <ArrowRightIcon />
            </Link>
          </Reveal>
        </div>

        <div className="work-grid">
          {featured.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.08}>
              <Link href="/portfolio" className="work-card">
                <div className="work-visual">
                  <ProjectVisual accent={p.accent} />
                  <span className="chip">{p.category}</span>
                </div>
                <div className="work-body">
                  <div>
                    <h3 className="serif">{p.name}</h3>
                    <p>{p.summary}</p>
                  </div>
                  <span className="view">
                    <ArrowUpRightIcon />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section shell">
        <Reveal>
          <div className="cta-band">
            <div className="aurora-blob" />
            <h2 className="serif">
              Let's make something people won't delete.
            </h2>
            <Link href="/contact" className="btn btn-primary">
              Start a project <ArrowRightIcon />
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
