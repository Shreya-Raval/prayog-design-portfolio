'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { RosePetal, FloatingPetals, DecorativeFrame, MandalaPattern } from './RomanticDecorations';

// SVG Assets for decoration
const RoseIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--accent)] w-6 h-6 inline-block">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
)

export default function AboutMe() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
    const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [50, 0, 0, -50]);

    return (
        <section
            ref={containerRef}
            className="min-h-screen py-24 px-4 md:px-12 flex flex-col items-center justify-center relative overflow-hidden"
            style={{ color: 'var(--foreground)' }} // Ensure text color is inherited from dynamic theme
        >
            {/* Background Decorative Elements */}
            {/* We rely on global theme transition for main background, but add subtle local elements */}
            <FloatingPetals />
            <MandalaPattern />

            <motion.div
                className="max-w-4xl w-full relative z-10"
                style={{ opacity, y }}
            >
                <div className="text-center mb-16 space-y-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-7xl font-serif text-[var(--accent)] font-medium tracking-tight"
                        style={{ fontFamily: 'var(--font-playfair), serif' }}
                    >
                        Why Choose Me
                    </motion.h2>
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: 100 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="h-[2px] bg-[var(--accent)] mx-auto mt-4"
                    />
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-start relative">
                    {/* Story Column */}
                    <motion.div
                        className="space-y-6 text-lg/relaxed md:text-xl/relaxed font-light"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <p className="first-letter:text-5xl first-letter:font-serif first-letter:mr-2 first-letter:float-left first-letter:text-[var(--accent)]">
                            I spent two years building scalable web applications in the corporate world—APIs, databases, full-stack systems. I was good at it. But somewhere between the sprint meetings and bug fixes, I realized I was building code, not moments.
                        </p>
                        <p>
                            During Diwali, while decorating my home, something clicked. I spent hours arranging diyas, choosing colors, creating little corners that felt magical. That's when I understood—I don't just want to build websites. I want to design experiences that people feel.
                        </p>
                        <p className="font-medium italic text-[var(--accent)]">
                            "Rajat's vision of 'experiences people remember long after the lights fade' resonates deeply with me."
                        </p>
                        <p>
                            I see Prayog as a place where my technical skills can serve something bigger—storytelling, emotion, celebration.
                        </p>
                    </motion.div>

                    {/* Skills Column with frame */}
                    <motion.div
                        className="relative p-8 md:p-10 border border-[var(--accent)]/30 rounded-xl bg-[var(--background)]/40 backdrop-blur-sm shadow-xl"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        {/* Inner decorative logic */}
                        <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-[var(--accent)]" />
                        <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-[var(--accent)]" />

                        <h3 className="text-2xl font-serif mb-6 text-[var(--accent)]" style={{ fontFamily: 'var(--font-playfair), serif' }}>What I Bring</h3>
                        <ul className="space-y-4 font-light">
                            {[
                                "2+ years of full-stack development (MERN, PHP/Laravel)",
                                "Problem-solving mindset shaped by real projects",
                                "Video editing skills for social media content",
                                "The hunger to learn event design and execution",
                                "A belief that every celebration deserves to be unforgettable"
                            ].map((item, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.6 + (i * 0.1) }}
                                    className="flex items-start gap-3"
                                >
                                    <span className="mt-1 text-[var(--accent)]"><RoseIcon /></span>
                                    <span>{item}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                <motion.div
                    className="mt-16 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    <p className="text-2xl md:text-3xl font-serif text-[var(--accent)] italic" style={{ fontFamily: 'var(--font-playfair), serif' }}>
                        I'm not just switching careers. <br className="hidden md:block" /> I'm coming home to what truly lights me up.
                    </p>
                </motion.div>
            </motion.div>
        </section>
    );
}
