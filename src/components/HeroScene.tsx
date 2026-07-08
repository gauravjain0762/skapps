"use client";

import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion";
import type { PointerEvent } from "react";

function Signal() {
  return (
    <span className="signal">
      <span />
      <span />
      <span />
    </span>
  );
}

export default function HeroScene() {
  const reduce = useReducedMotion();

  // pointer position, normalised to -0.5..0.5
  const px = useMotionValue(0);
  const py = useMotionValue(0);

  const sx = useSpring(px, { stiffness: 60, damping: 18, mass: 0.6 });
  const sy = useSpring(py, { stiffness: 60, damping: 18, mass: 0.6 });

  // map pointer to a gentle 3D rotation of the whole stage
  const rotateY = useTransform(sx, [-0.5, 0.5], [18, -18]);
  const rotateX = useTransform(sy, [-0.5, 0.5], [-12, 12]);

  function handleMove(e: PointerEvent<HTMLDivElement>) {
    if (reduce) return;
    const rect = e.currentTarget.getBoundingClientRect();
    px.set((e.clientX - rect.left) / rect.width - 0.5);
    py.set((e.clientY - rect.top) / rect.height - 0.5);
  }
  function reset() {
    px.set(0);
    py.set(0);
  }

  return (
    <div className="scene" onPointerMove={handleMove} onPointerLeave={reset} aria-hidden="true">
      <motion.div
        className="scene-stage"
        style={reduce ? undefined : { rotateX, rotateY }}
      >
        {/* back card — condensed list, no chrome */}
        <div className="glass-card card-c float c">
          <span className="sheen" />
          <div className="mini-ui">
            <div className="mini-list">
              <div className="mini-row">
                <span className="dot" />
                <span className="lines">
                  <span className="bar w2" />
                  <span className="bar w1" />
                </span>
              </div>
              <div className="mini-row">
                <span className="dot" />
                <span className="lines">
                  <span className="bar w3" />
                  <span className="bar w1" />
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* left card — nav + list, no status bar */}
        <div className="glass-card card-b float b">
          <span className="sheen" />
          <div className="mini-ui">
            <div className="mini-navbar">
              <span className="avatar" />
              <span className="bar w1" />
            </div>
            <div className="mini-list">
              <div className="mini-row">
                <span className="dot" />
                <span className="lines">
                  <span className="bar w2" />
                  <span className="bar w1" />
                </span>
              </div>
              <div className="mini-row">
                <span className="dot" />
                <span className="lines">
                  <span className="bar w3" />
                  <span className="bar w1" />
                </span>
              </div>
            </div>
            <span className="mini-pill" />
          </div>
        </div>

        {/* front hero card — full app chrome: status bar, nav, list, tab bar */}
        <div className="glass-card card-a float">
          <span className="sheen" />
          <div className="mini-ui">
            <div className="mini-status">
              <span>9:41</span>
              <Signal />
            </div>
            <div className="mini-navbar">
              <span className="avatar" />
              <span className="bar w1" />
            </div>
            <div className="mini-list">
              <div className="mini-row">
                <span className="dot" />
                <span className="lines">
                  <span className="bar w2" />
                  <span className="bar w1" />
                </span>
              </div>
              <div className="mini-row">
                <span className="dot" />
                <span className="lines">
                  <span className="bar w3" />
                  <span className="bar w1" />
                </span>
              </div>
              <div className="mini-row">
                <span className="dot" />
                <span className="lines">
                  <span className="bar w2" />
                  <span className="bar w1" />
                </span>
              </div>
            </div>
            <span className="mini-pill" />
            <div className="mini-tabbar">
              <span />
              <span data-active="true" />
              <span />
              <span />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
