"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const labelStyle: React.CSSProperties = {
  fontFamily: "var(--font-barlow)",
  fontWeight: 600,
  fontSize: "11px",
  letterSpacing: "0.15em",
  color: "var(--muted)",
  display: "block",
  marginBottom: "8px",
};

const inputBase: React.CSSProperties = {
  background: "var(--surface)",
  color: "var(--offwhite)",
  outline: "none",
  width: "100%",
  padding: "14px 16px",
  fontFamily: "var(--font-syne)",
  fontSize: "16px",
};

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const fieldBorder = (name: string): React.CSSProperties => ({
    border: `1px solid ${focused === name ? "var(--orange)" : "var(--border-color)"}`,
    transition: "border-color 200ms ease",
  });

  return (
    <section
      id="contact"
      className="relative w-full py-24 md:py-36"
      style={{ background: "var(--black)" }}
    >
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, #C44A1A, transparent)" }} />

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="font-barlow font-semibold text-sm mb-3"
            style={{ color: "var(--orange)", letterSpacing: "0.20em" }}
          >
            LET&rsquo;S TALK
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="font-bebas"
            style={{ fontSize: "clamp(56px, 8vw, 112px)", color: "var(--offwhite)", letterSpacing: "0.02em", lineHeight: 0.9 }}
          >
            GET IN TOUCH
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="font-barlow text-base mt-5"
            style={{ color: "var(--muted)", fontStyle: "italic", letterSpacing: "0.05em" }}
          >
            Ready to shape culture through sound?
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 32, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mx-auto"
          style={{ maxWidth: "600px" }}
        >
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center py-20"
              >
                <p className="font-bebas text-5xl md:text-7xl" style={{ color: "var(--orange)", letterSpacing: "0.04em" }}>
                  THANK YOU.
                </p>
                <p className="font-bebas text-3xl md:text-4xl mt-3" style={{ color: "var(--offwhite)", letterSpacing: "0.04em" }}>
                  WE&rsquo;LL BE IN TOUCH.
                </p>
              </motion.div>
            ) : (
              <motion.form key="form" onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div>
                  <label style={labelStyle}>NAME</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    onFocus={() => setFocused("name")}
                    onBlur={() => setFocused(null)}
                    required
                    placeholder="Your name"
                    style={{ ...inputBase, ...fieldBorder("name") }}
                  />
                </div>

                <div>
                  <label style={labelStyle}>EMAIL</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    onFocus={() => setFocused("email")}
                    onBlur={() => setFocused(null)}
                    required
                    placeholder="your@email.com"
                    style={{ ...inputBase, ...fieldBorder("email") }}
                  />
                </div>

                <div>
                  <label style={labelStyle}>MESSAGE</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    onFocus={() => setFocused("message")}
                    onBlur={() => setFocused(null)}
                    required
                    rows={5}
                    placeholder="Tell us about your production..."
                    style={{ ...inputBase, ...fieldBorder("message"), resize: "none" }}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-solid py-4 w-full mt-1"
                  style={{ letterSpacing: "0.12em" }}
                >
                  SEND MESSAGE
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
