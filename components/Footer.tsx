"use client";

import Image from "next/image";
import { scrollToSection } from "@/lib/utils";

const footerLinks = ["ABOUT", "WORK", "TEAM", "CONTACT"];

export default function Footer() {
  return (
    <footer
      className="w-full py-12"
      style={{ background: "var(--black)", borderTop: "1px solid var(--border-color)" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-3">
          <Image
            src="/images/bobs-logo.jpeg"
            alt="Black On Both Sides Music"
            width={100}
            height={50}
            className="h-10 w-auto object-contain opacity-80"
          />
          <p className="font-barlow font-semibold text-xs text-center md:text-left" style={{ color: "var(--muted)", letterSpacing: "0.15em" }}>
            ALL BLACK-OWNED · MUSIC SUPERVISION
          </p>
        </div>

        <p className="font-syne text-xs text-center" style={{ color: "#555555" }}>
          © 2025 Black On Both Sides Music. All rights reserved.
        </p>

        <div className="flex items-center gap-6">
          {footerLinks.map((label) => (
            <button
              key={label}
              onClick={() => scrollToSection(label.toLowerCase())}
              className="footer-link"
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </footer>
  );
}
