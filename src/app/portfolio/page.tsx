import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import WorkGrid from "@/components/WorkGrid";
import ProjectVisual from "@/components/ProjectVisual";
import { ArrowRightIcon } from "@/components/icons";
import { projects } from "@/data/site";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected products designed and built by SK Apps.",
};

export default function PortfolioPage() {
  const feature = projects[0];

  return (
    <>
      <section className="page-hero shell">
        <div className="aurora-blob" />
        <Reveal>
          <span className="eyebrow">Work</span>
        </Reveal>
        <Reveal delay={0.06}>
          <h1>
            Products we're <span className="italic aurora-text">proud</span> of.
          </h1>
        </Reveal>
        <Reveal delay={0.14}>
          <p className="lead">
            A selection from the last few years. Names are changed where clients
            asked; the craft is exactly as it shipped.
          </p>
        </Reveal>
      </section>

      {/* FEATURED */}
      <section className="section shell section--tight-bottom">
        <Reveal>
          <div className="two-col">
            <div className="framed">
              <ProjectVisual accent={feature.accent} rows={4} />
            </div>
            <div>
              <span className="eyebrow">
                Featured · {feature.category} · {feature.year}
              </span>
              <h2 className="serif feature-title">{feature.name}</h2>
              <p className="lead">{feature.description}</p>
              <Link href="/contact" className="btn btn-ghost">
                Discuss a project like this <ArrowRightIcon />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      {/* GRID + FILTERS */}
      <section className="section shell section--flush-top">
        <WorkGrid />
      </section>

      <section className="section shell">
        <Reveal>
          <div className="cta-band">
            <div className="aurora-blob" />
            <h2 className="serif">Have a project in mind?</h2>
            <Link href="/contact" className="btn btn-primary">
              Start a project <ArrowRightIcon />
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
