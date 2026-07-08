"use client";

import { useState } from "react";
import { faqs } from "@/data/site";
import { PlusIcon } from "@/components/icons";

export default function Accordion() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="accordion">
      {faqs.map((f, i) => (
        <div className="acc-item" key={f.q} data-open={open === i}>
          <button
            className="acc-q"
            aria-expanded={open === i}
            onClick={() => setOpen(open === i ? null : i)}
          >
            {f.q}
            <span className="sign">
              <PlusIcon />
            </span>
          </button>
          <div className="acc-a">
            <p>{f.a}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
