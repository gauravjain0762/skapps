import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import Accordion from "@/components/Accordion";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Tell us what you're building. We reply within two working days.",
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero shell">
        <div className="aurora-blob" />
        <Reveal>
          <span className="eyebrow">Contact</span>
        </Reveal>
        <Reveal delay={0.06}>
          <h1>
            Let's <span className="italic aurora-text">talk</span>.
          </h1>
        </Reveal>
        <Reveal delay={0.14}>
          <p className="lead">
            Tell us what you're making and where it's headed. Every enquiry
            reaches a real person on the team — usually within two working days.
          </p>
        </Reveal>
      </section>

      <section className="section shell section--tight-top">
        <div className="contact-grid">
          <Reveal>
            <ContactForm />
          </Reveal>

          <Reveal delay={0.1}>
            <div>
              <div className="contact-detail">
                <span className="k">Email</span>
                <a className="v serif" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
              </div>
              <div className="contact-detail">
                <span className="k">Phone</span>
                <span className="v serif">{site.phone}</span>
              </div>
              <div className="contact-detail">
                <span className="k">Based in</span>
                <span className="v serif">{site.location}</span>
              </div>
              <div className="contact-detail">
                <span className="k">Elsewhere</span>
                <span className="v serif v-list">
                  {site.socials.map((s) => (
                    <a key={s.label} href={s.href} target="_blank" rel="noreferrer">
                      {s.label}
                    </a>
                  ))}
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section shell section--flush-top">
        <div className="section-head">
          <Reveal>
            <h2 className="serif">Common questions</h2>
          </Reveal>
        </div>
        <Reveal>
          <Accordion />
        </Reveal>
      </section>
    </>
  );
}
