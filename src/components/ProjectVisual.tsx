import type { CSSProperties } from "react";

type Props = {
  accent: string;
  rows?: number;
};

export default function ProjectVisual({ accent, rows = 3 }: Props) {
  return (
    <div className="visual-field" style={{ "--accent": accent } as CSSProperties}>
      <div className="visual-glow" />
      <div className="visual-grain" />
      <div className="visual-frame">
        <div className="frame-bar">
          <span className="frame-dot" />
          <span className="frame-dot" />
          <span className="frame-dot" />
          <span className="frame-pill" />
        </div>
        <div className="frame-body">
          <span className="frame-block big" />
          {Array.from({ length: rows }).map((_, i) => (
            <span className="frame-block" key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
