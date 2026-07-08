"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ProjectVisual from "@/components/ProjectVisual";
import { ArrowUpRightIcon } from "@/components/icons";
import { projects } from "@/data/site";

export default function WorkGrid() {
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(projects.map((p) => p.category)))],
    []
  );
  const [active, setActive] = useState("All");

  const shown = projects.filter((p) => active === "All" || p.category === active);

  return (
    <>
      <div className="filters">
        {categories.map((c) => (
          <button
            key={c}
            className="pill"
            data-active={active === c}
            onClick={() => setActive(c)}
          >
            {c}
          </button>
        ))}
      </div>

      <motion.div layout className="work-grid">
        <AnimatePresence mode="popLayout">
          {shown.map((p) => (
            <motion.div
              key={p.slug}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link href="/contact" className="work-card">
                <div className="work-visual">
                  <ProjectVisual accent={p.accent} />
                  <span className="chip">
                    {p.category} · {p.year}
                  </span>
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
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </>
  );
}
