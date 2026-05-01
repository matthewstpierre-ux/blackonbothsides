"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { ease, heroVariants, slideUp, fadeIn } from "@/lib/motion";
import { scrollToSection } from "@/lib/utils";

function ScrollIndicator() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handler = () => { if (window.scrollY > 80) setVisible(false); };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <motion.span
            className="font-barlow text-xs"
            style={{ color: "var(--orange)", letterSpacing: "0.15em" }}
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            SCROLL
          </motion.span>
          <div
            className="relative w-px overflow-hidden"
            style={{ height: "48px", background: "var(--border-color)" }}
          >
            <motion.div
              className="absolute top-0 left-0 w-full"
              style={{ height: "40%", background: "var(--orange)" }}
              animate={{ y: ["0%", "260%"] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut", repeatDelay: 0.3 }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

const dividerVariant: Variants = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: { scaleX: 1, opacity: 1, transition: { duration: 0.6, ease } },
};

export default function HeroSection() {
  const vimeoContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let player: import("@vimeo/player").default | null = null;

    async function initPlayer() {
      const Player = (await import("@vimeo/player")).default;
      if (!vimeoContainerRef.current) return;

      player = new Player(vimeoContainerRef.current, {
        id: 754357858,
        background: true,
        autoplay: true,
        muted: true,
        loop: true,
        playsinline: true,
        controls: false,
      });

      // Play immediately on load
      player.on("loaded", () => { player?.play().catch(() => {}); });

      // iOS: trigger on first touch (user has interacted = browser allows play)
      const onTouch = () => { player?.play().catch(() => {}); };
      document.addEventListener("touchstart", onTouch, { once: true });
    }

    initPlayer();
    return () => { player?.destroy(); };
  }, []);

  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center min-h-screen w-full overflow-hidden pt-20"
      style={{ background: "var(--black)" }}
    >
      {/* Looping video background */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div ref={vimeoContainerRef} className="video-bg" />
        <div className="absolute inset-0" style={{ background: "rgba(10,10,10,0.68)" }} />
      </div>

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(196,74,26,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl mx-auto">
        <motion.div
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-3 md:gap-4"
        >
          <motion.div variants={slideUp} className="overflow-hidden">
            <h1
              className="font-bebas leading-none"
              style={{ fontSize: "clamp(52px, 10vw, 140px)", color: "var(--orange)", letterSpacing: "0.03em" }}
            >
              NOT ABOUT COLOUR.
            </h1>
          </motion.div>

          <motion.div variants={slideUp} className="overflow-hidden">
            <h1
              className="font-bebas leading-none"
              style={{ fontSize: "clamp(52px, 10vw, 140px)", color: "var(--orange)", letterSpacing: "0.03em" }}
            >
              ABOUT CULTURE.
            </h1>
          </motion.div>

          <motion.div
            variants={dividerVariant}
            className="w-24 h-px origin-left mt-4"
            style={{ background: "var(--orange)" }}
          />

          <motion.p
            variants={fadeIn}
            className="font-barlow font-semibold text-sm md:text-base mt-2"
            style={{ color: "var(--muted)", letterSpacing: "0.20em" }}
          >
            ALL BLACK-OWNED · MUSIC SUPERVISION
          </motion.p>

          <motion.div variants={fadeIn} className="mt-8 md:mt-10">
            <button
              onClick={() => scrollToSection("contact")}
              className="btn-solid px-8 py-3.5"
            >
              CONTACT NOW
            </button>
          </motion.div>
        </motion.div>
      </div>

      <ScrollIndicator />
    </section>
  );
}
