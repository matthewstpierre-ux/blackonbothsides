"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ease } from "@/lib/motion";
import { scrollToSection } from "@/lib/utils";

const team = [
  {
    name: "EVERTON LEWIS JR.",
    role: "FOUNDER & CHIEF MUSIC SUPERVISOR",
    photo: "/images/everton.jpg",
    objectPosition: "40% top",
    bio: "Everton Lewis Jr. is the visionary behind both Wracket Music Supervision and Black On Both Sides Music, with a career defined by bold creative instincts and an unwavering commitment to cultural authenticity. A former Music Supervisor at Apple (Contract) and Vice Media, and a proud member of the Guild of Music Supervisors Canada, Everton brings over a decade of industry expertise and a rare ability to translate lived culture into powerful sonic storytelling.",
  },
  {
    name: "CHANTEL ANAIS",
    role: "MUSIC SUPERVISOR",
    photo: "/images/chantel.jpg",
    bio: "Chantel Anais is a Music Supervisor at both Wracket Music Supervision and Black On Both Sides Music, and a proud graduate of the Sync Music Production Accelerator. As a member of the Guild of Music Supervisors Canada, Chantel brings a sharp ear for sync-ready music and a passion for finding the sounds that elevate a story from good to unforgettable.",
  },
  {
    name: "CHRIS WILSON",
    role: "MUSIC SUPERVISOR",
    photo: "/images/chris.jpg",
    bio: "Chris Wilson is a Music Supervisor at Wracket Music Supervision and Black On Both Sides Music, and a Doctoral Candidate in Cultural Studies with a specialized focus in Black Sound Studies. Chris brings rare academic rigour and deep cultural literacy to the art of music supervision — understanding not just what sounds right, but why it matters.",
  },
  {
    name: "TRACEY SOMAN",
    role: "MUSIC COORDINATOR",
    photo: "/images/tracey.jpg",
    bio: "Tracey Soman is a seasoned Music Coordinator at both Wracket Music Supervision and Black On Both Sides Music, with over five years of specialized experience working with CMRRA. Her meticulous approach to music rights and licensing ensures that every production moves forward with clarity, accuracy, and creative confidence.",
  },
  {
    name: "AZIZA JAFFER",
    role: "MUSIC COORDINATOR",
    photo: "/images/aziza.jpg",
    bio: "Aziza Jaffer is a Music Coordinator at both Wracket Music Supervision and Black On Both Sides Music, bringing over 15 years of experience in client services and hospitality to the world of music production. Her exceptional attention to detail and people-first approach make her an indispensable bridge between artists, rights holders, and productions.",
  },
  {
    name: "DEVIN O'BANNON",
    role: "COMPOSER",
    photo: "/images/devin.jpg",
    bio: "Devin O'Bannon is a Grammy-nominated music producer, artist, and the founder of Black Irish Entertainment LLC — a leading creative hub for musicians and artists with studios in Los Angeles and Bermuda. Driven by a vision to inspire artists in crafting musical masterpieces, Devin has pivoted powerfully into the sync industry, producing music for film, television, video games, brands, and ads with international reach.",
  },
];

export default function TeamSection() {
  return (
    <section
      id="team"
      className="relative w-full py-24 md:py-36"
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
            THE PEOPLE
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="font-bebas"
            style={{ fontSize: "clamp(56px, 8vw, 112px)", color: "var(--offwhite)", letterSpacing: "0.02em", lineHeight: 0.9 }}
          >
            MEET THE TEAM
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 48 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.65, delay: i * 0.08, ease }}
              className="group flex flex-col"
              style={{ background: "var(--surface)", border: "1px solid var(--border-color)", transition: "border-color 200ms ease" }}
              whileHover={{ borderColor: "var(--orange)" } as never}
            >
              <div className="relative overflow-hidden" style={{ aspectRatio: "3/4" }}>
                <Image
                  src={member.photo}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ objectPosition: member.objectPosition ?? "center top" }}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "rgba(196,74,26,0.10)", mixBlendMode: "multiply" }}
                />
                <div
                  className="absolute bottom-0 left-0 right-0 h-1/4"
                  style={{ background: "linear-gradient(transparent, rgba(20,20,20,0.8))" }}
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ boxShadow: "inset 0 0 0 2px var(--orange)" }}
                />
              </div>

              <div className="p-6 flex flex-col gap-3 flex-1">
                <h3 className="font-bebas text-2xl leading-tight" style={{ color: "var(--offwhite)", letterSpacing: "0.04em" }}>
                  {member.name}
                </h3>
                <p className="font-barlow font-semibold text-xs" style={{ color: "var(--orange)", letterSpacing: "0.14em" }}>
                  {member.role}
                </p>
                <p className="font-syne text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

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
