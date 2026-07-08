import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import ProjectVisual from "@/components/ProjectVisual";
import { ArrowRightIcon } from "@/components/icons";
import { values, timeline, team, stats } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "A small, senior studio designing and building premium mobile and web products.",
};

export default function AboutPage() {
  return (
    <>
      <section className="page-hero shell">
        <div className="aurora-blob" />
        <Reveal>
          <span className="eyebrow">About</span>
        </Reveal>
        <Reveal delay={0.06}>
          <h1>
            A studio built around <span className="italic aurora-text">craft</span>.
          </h1>
        </Reveal>
        <Reveal delay={0.14}>
          <p className="lead">
            SK Apps is a small, senior team of designers and engineers. We take
            on a handful of products a year and treat each one like it carries
            our name — because it does.
          </p>
        </Reveal>
      </section>

      {/* STORY */}
      <section className="section shell">
        <div className="two-col">
          <Reveal>
            <div>
              <span className="eyebrow">Our story</span>
              <h2 className="serif story-title">
                We started because good apps felt rare.
              </h2>
              <p className="lead">
                In 2016 we were two people who kept noticing the same thing: most
                apps were either beautiful or well-built, almost never both. We
                set out to close that gap.
              </p>
              <p className="lead">
                Nine years later the team is bigger and the work is more
                ambitious, but the standard hasn't moved. If it wouldn't earn a
                place on our own phones, it isn't done.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="framed">
              <ProjectVisual accent="#8FB8FF" rows={4} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* VALUES */}
      <section className="section shell section--flush-top">
        <div className="section-head">
          <Reveal>
            <h2 className="serif">What we hold to</h2>
          </Reveal>
        </div>
        <div className="values-grid">
          {values.map((v, i) => (
            <Reveal key={v.title} className="value" delay={i * 0.08}>
              <h3>{v.title}</h3>
              <p>{v.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* TIMELINE */}
      <section className="section shell section--flush-top">
        <div className="section-head">
          <Reveal>
            <h2 className="serif">The short version</h2>
          </Reveal>
        </div>
        <div className="timeline">
          {timeline.map((t, i) => (
            <Reveal key={t.year} className="tl-row" delay={i * 0.05}>
              <div className="tl-year serif">{t.year}</div>
              <div className="tl-event">{t.event}</div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* TEAM */}
      <section className="section shell section--flush-top">
        <div className="section-head">
          <Reveal>
            <h2 className="serif">The people</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="lead">Senior from day one — no handoffs to a junior bench.</p>
          </Reveal>
        </div>
        <div className="team-grid">
          {team.map((m, i) => (
            <Reveal key={m.name} className="member" delay={i * 0.06}>
              <div className="avatar serif">{m.initials}</div>
              <h4>{m.name}</h4>
              <div className="role">{m.role}</div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* STAT BAND */}
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

      <section className="section shell">
        <Reveal>
          <div className="cta-band">
            <div className="aurora-blob" />
            <h2 className="serif">Want to see how we'd approach your product?</h2>
            <Link href="/contact" className="btn btn-primary">
              Start a project <ArrowRightIcon />
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
