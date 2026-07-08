"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/data/site";
import { CloseIcon, MenuIcon } from "@/components/icons";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className={`nav${scrolled ? " scrolled" : ""}`}>
      <div className="shell nav-inner">
        <Link href="/" className="brand" aria-label={`${site.name} — home`}>
          <span className="monogram">SK</span>
          <span>Apps</span>
        </Link>

        <nav className="nav-links" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              data-active={pathname === item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link href="/contact" className="btn btn-ghost nav-cta">
          Start a project
        </Link>

        <button
          className="nav-toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {open && (
        <div className="mobile-menu">
          {nav.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
          <Link href="/contact" className="btn btn-primary">
            Start a project
          </Link>
        </div>
      )}
    </header>
  );
}
