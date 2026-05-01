"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ease } from "@/lib/motion";
import { scrollToSection } from "@/lib/utils";

const SLOTS = [
  { slot: 1, title: "PRODUCTION TITLE", category: "FILM" },
  { slot: 2, title: "PRODUCTION TITLE", category: "TELEVISION" },
  { slot: 3, title: "PRODUCTION TITLE", category: "COMMERCIAL" },
  { slot: 4, title: "PRODUCTION TITLE", category: "FILM" },
  { slot: 5, title: "PRODUCTION TITLE", category: "TELEVISION" },
  { slot: 6, title: "PRODUCTION TITLE", category: "COMMERCIAL" },
  { slot: 7, title: "PRODUCTION TITLE", category: "FILM" },
  { slot: 8, title: "PRODUCTION TITLE", category: "TELEVISION" },
];

function PlayIcon() {
  return (
    <svg width="72" height="72" viewBox="0 0 72 72" fill="none" aria-hidden="true">
      <circle cx="36" cy="36" r="35" stroke="#C44A1A" strokeWidth="1.5" />
      <polygon points="29,22 53,36 29,50" fill="#C44A1A" />
    </svg>
  );
}

function ArrowIcon({ dir }: { dir: "left" | "right" }) {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      {dir === "left"
        ? <path d="M13 17L7 11L13 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        : <path d="M9 5L15 11L9 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      }
    </svg>
  );
}

const slideVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? 48 : -48, opacity: 0, filter: "blur(3px)" }),
  center: { x: 0, opacity: 1, filter: "blur(0px)", transition: { duration: 0.38, ease } },
  exit: (dir: number) => ({ x: dir > 0 ? -24 : 24, opacity: 0, filter: "blur(2px)", transition: { duration: 0.28, ease } }),
};

export default function WorkSection() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);
  const total = SLOTS.length;

  const go = (d: number) => {
    setDir(d);
    setIndex((prev) => (prev + d + total) % total);
  };

  const slot = SLOTS[index];

  return (
    <section
      id="work"
      className="relative w-full py-24 md:py-36"
      style={{ background: "var(--black)" }}
    >
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, #C44A1A, transparent)" }} />

      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Section header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="font-barlow font-semibold text-sm mb-3"
            style={{ color: "var(--orange)", letterSpacing: "0.20em" }}
          >
            FILM · TELEVISION · COMMERCIALS
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="font-bebas"
            style={{ fontSize: "clamp(56px, 8vw, 112px)", color: "var(--offwhite)", letterSpacing: "0.02em", lineHeight: 0.9 }}
          >
            OUR WORK
          </motion.h2>
        </div>

        {/* Single video viewer */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease }}
        >
          {/* Video row: arrow · [video + footer] · arrow */}
          <div className="flex items-center gap-5 md:gap-7">

            <button
              onClick={() => go(-1)}
              className="arrow-btn"
              aria-label="Previous video"
            >
              <ArrowIcon dir="left" />
            </button>

            {/* Video column: frame + footer naturally aligned */}
            <div className="flex-1 flex flex-col gap-5">
              {/* 16:9 video frame */}
              <div
                className="relative overflow-hidden w-full"
                style={{
                  aspectRatio: "16 / 9",
                  background: "var(--surface)",
                  border: "1px solid var(--border-color)",
                }}
              >
                <AnimatePresence custom={dir} mode="wait">
                  <motion.div
                    key={index}
                    custom={dir}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <span
                      className="absolute top-5 left-7 font-bebas pointer-events-none select-none"
                      style={{ fontSize: "clamp(64px, 12vw, 120px)", color: "rgba(196,74,26,0.07)", lineHeight: 1 }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <PlayIcon />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Footer — directly under video, edges naturally aligned */}
              <div className="flex items-end justify-between">
                <div>
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={`title-${index}`}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.22 }}
                      className="font-bebas text-2xl"
                      style={{ color: "var(--offwhite)", letterSpacing: "0.04em" }}
                    >
                      {slot.title}
                    </motion.p>
                  </AnimatePresence>
                  <p
                    className="font-barlow font-semibold text-xs mt-1"
                    style={{ color: "var(--orange)", letterSpacing: "0.15em" }}
                  >
                    {slot.category}
                  </p>
                </div>

                <p
                  className="font-barlow font-semibold"
                  style={{ fontSize: "13px", color: "var(--muted)", letterSpacing: "0.12em" }}
                >
                  <span style={{ color: "var(--orange)" }}>{String(index + 1).padStart(2, "0")}</span>
                  <span style={{ margin: "0 6px", color: "var(--border-color)" }}>/</span>
                  {String(total).padStart(2, "0")}
                </p>
              </div>
            </div>

            <button
              onClick={() => go(1)}
              className="arrow-btn"
              aria-label="Next video"
            >
              <ArrowIcon dir="right" />
            </button>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mt-16 text-center"
        >
          <button
            onClick={() => scrollToSection("contact")}
            className="btn-outline px-7 py-3"
          >
            CONTACT NOW
          </button>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, #C44A1A, transparent)" }} />
    </section>
  );
}
