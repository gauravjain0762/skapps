import Link from "next/link";
import { nav, site } from "@/data/site";
import { ArrowRightIcon } from "@/components/icons";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="shell">
        <div className="footer-top">
          <div>
            <h3 className="serif">Have something worth building?</h3>
            <Link href="/contact" className="btn btn-primary footer-cta">
              Start a project
              <ArrowRightIcon />
            </Link>
          </div>

          <div className="footer-col">
            <h5>Pages</h5>
            {nav.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>

          <div className="footer-col">
            <h5>Elsewhere</h5>
            {site.socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer">
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </span>
          <span>{site.email}</span>
        </div>
      </div>
    </footer>
  );
}
