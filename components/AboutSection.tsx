"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeUp, slideFromLeft, slideFromRight, staggerContainer } from "@/lib/motion";
import { scrollToSection } from "@/lib/utils";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative w-full py-24 md:py-36 overflow-hidden"
      style={{ background: "var(--black)" }}
    >
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, #C44A1A, transparent)" }} />

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center mb-16 md:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="font-barlow font-semibold text-sm mb-3"
            style={{ color: "var(--orange)", letterSpacing: "0.20em" }}
          >
            WHO WE ARE
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="font-bebas"
            style={{ fontSize: "clamp(56px, 8vw, 112px)", color: "var(--offwhite)", letterSpacing: "0.02em", lineHeight: 0.9 }}
          >
            ABOUT US
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
          {/* Photo */}
          <motion.div
            variants={slideFromLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="relative"
          >
            <div className="relative overflow-hidden" style={{ aspectRatio: "4/5" }}>
              <Image
                src="/images/team-group.jpg"
                alt="Black On Both Sides Music Team"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div
                className="absolute inset-0"
                style={{ background: "rgba(196,74,26,0.12)", mixBlendMode: "multiply" }}
              />
              <div
                className="absolute bottom-0 left-0 right-0 h-1/3"
                style={{ background: "linear-gradient(transparent, rgba(10,10,10,0.6))" }}
              />
            </div>
            <div className="absolute -bottom-3 -left-3 w-16 h-16 border-l-2 border-b-2" style={{ borderColor: "var(--orange)" }} />
            <div className="absolute -top-3 -right-3 w-16 h-16 border-t-2 border-r-2" style={{ borderColor: "var(--orange)" }} />
          </motion.div>

          {/* Copy — outer slides in from right; inner staggerContainer inherits the visible state */}
          <motion.div
            variants={slideFromRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col justify-center"
          >
            <motion.div variants={staggerContainer} className="flex flex-col gap-5">
              <motion.p variants={fadeUp} className="font-syne text-lg leading-relaxed" style={{ color: "var(--offwhite)" }}>
                Black on Both Sides Music is an all-Black-owned and operated Music
                Supervision company, built on decades of combined industry experience.
                Our team brings an unmatched depth of cultural intelligence to every
                production — from independent film to major network television to
                global commercial campaigns.
              </motion.p>
              <motion.p variants={fadeUp} className="font-syne text-lg leading-relaxed" style={{ color: "var(--offwhite)" }}>
                We specialize in sourcing, licensing, and clearing music that moves
                authentically within Black culture — not as an afterthought, but as
                the foundation. When your production demands music that resonates with
                lived experience and cultural truth, Black on Both Sides is your team.
              </motion.p>

              <motion.div variants={fadeUp} className="mt-4">
                <button
                  onClick={() => scrollToSection("contact")}
                  className="btn-outline px-7 py-3"
                >
                  CONTACT NOW
                </button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Denzel quote */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mt-24 md:mt-32 text-center"
        >
          <div className="w-16 h-px mx-auto mb-8" style={{ background: "var(--orange)" }} />
          <blockquote
            className="font-bebas leading-tight"
            style={{ fontSize: "clamp(36px, 6vw, 80px)", color: "var(--orange)", letterSpacing: "0.02em" }}
          >
            &ldquo;It&rsquo;s not about colour,
            <br />
            it&rsquo;s about culture.&rdquo;
          </blockquote>
          <p className="font-barlow font-semibold mt-5 text-sm" style={{ color: "var(--muted)", letterSpacing: "0.15em" }}>
            — DENZEL WASHINGTON
          </p>
          <div className="w-16 h-px mx-auto mt-8" style={{ background: "var(--orange)" }} />
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, #C44A1A, transparent)" }} />
    </section>
  );
}
