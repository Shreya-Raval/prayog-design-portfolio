'use client';

import { useScroll, useTransform, motion, MotionValue } from 'framer-motion';
import { useRef } from 'react';
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import AnswersSection from "@/components/AnswersSection";
import SkillsSection from "@/components/SkillsSection";
import ApplicationDetails from "@/components/ApplicationDetails";
import MetaMoment from "@/components/MetaMoment";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { THEME_COLORS } from "@/lib/scroll-theme";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll progress of the entire page content
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // --- Theme Transition Logic ---
  // 0% - 25%: Hero Section (Day Theme)
  // 25% - 40%: Transition to Pink Theme
  // 40% - 60%: About Me & Answers (Pink Theme)
  // 60% - 75%: Transition to Night Theme
  // 75% - ...: Skills, Details, Meta, Contact (Night Theme)

  const backgroundColor = useTransform(
    scrollYProgress,
    [0.25, 0.40, 0.60, 0.70],
    [
      THEME_COLORS.day.background,
      THEME_COLORS.pink.background,
      THEME_COLORS.pink.background,
      THEME_COLORS.night.background
    ]
  );

  const foregroundColor = useTransform(
    scrollYProgress,
    [0.25, 0.40, 0.60, 0.70],
    [
      THEME_COLORS.day.foreground,
      THEME_COLORS.pink.foreground,
      THEME_COLORS.pink.foreground,
      THEME_COLORS.night.foreground
    ]
  );

  const accentColor = useTransform(
    scrollYProgress,
    [0.25, 0.40, 0.60, 0.70],
    [
      THEME_COLORS.day.accent,
      THEME_COLORS.pink.accent,
      THEME_COLORS.pink.accent,
      THEME_COLORS.night.accent
    ]
  );

  return (
    <motion.main
      ref={containerRef}
      className="flex flex-col relative"
      style={{
        backgroundColor,
        color: foregroundColor,
        // Using Type Assertion for custom properties to satisfy TS
        ['--background' as any]: backgroundColor,
        ['--foreground' as any]: foregroundColor,
        ['--accent' as any]: accentColor,
      }}
    >

      {/* Hero Section */}
      <div className="relative z-10 w-full">
        <Hero />
      </div>

      {/* About Me Section */}
      <div className="relative z-10 w-full">
        <AboutMe />
      </div>

      {/* Answers Section */}
      <div className="relative z-10 w-full">
        <AnswersSection />
      </div>

      {/* Skills Section - Night Theme */}
      <div className="relative z-20 w-full">
        <SkillsSection />
      </div>

      {/* Application Details - Night Theme */}
      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto border-t border-slate-800/50 w-3/4 my-12" />
        <ApplicationDetails />
      </div>

      {/* Meta Moment / Final Reveal - Night Theme */}
      <div className="relative z-10 w-full">
        <MetaMoment />
      </div>

      {/* Contact Section - Night Theme */}
      <div className="relative z-10 w-full">
        <ContactSection />
      </div>

      {/* Footer */}
      <div className="relative z-10 w-full">
        <Footer />
      </div>

    </motion.main>
  );
}
