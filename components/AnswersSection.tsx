'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import { FloatingPetals } from './RomanticDecorations';

const QA_CONTENT = [
    {
        id: 1,
        question: "What do events mean to you?",
        answer: "Events are not just gatherings—they are designed moments that transcend time. They are the points in our lives where emotions crystallize into memories that pass through generations.\n\nI believe designing events means designing feelings. The nervousness before a first dance. The tears during a parent's speech. The laughter that echoes through a decorated hall.\n\nEvery celebration is a blank canvas where stories are written not in words, but in experiences—the warmth of lighting, the flow of space, the rhythm of moments that unfold.\n\nEvents mean creating spaces where people don't just attend—they feel, they connect, they remember."
    },
    {
        id: 2,
        question: "What does design mean to you?",
        answer: "Design, for me, is the language of emotion expressed through aesthetics.\n\nIt's the art of taking abstract feelings—love, joy, nostalgia, anticipation—and translating them into tangible experiences. A color palette that evokes warmth. A spatial arrangement that guides movement and creates anticipation. Lighting that transforms a simple venue into magic.\n\nDesign is my healing. It's where I channel passion, tell stories, and create beauty that resonates beyond the visual. Every design choice carries intention. Every element serves the emotion you want people to feel.\n\nBeautiful design doesn't just look good—it makes people feel something long after they've left the space. That's what I want to create at Prayog."
    }
];

export default function AnswersSection() {
    return (
        <section className="py-24 px-4 md:px-12 min-h-screen relative overflow-hidden flex flex-col justify-center">
            {/* Background Decor */}
            <FloatingPetals />

            <div className="max-w-6xl mx-auto w-full relative z-10 space-y-32">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2
                        className="text-4xl md:text-6xl font-serif text-[var(--accent)] font-medium tracking-tight"
                        style={{ fontFamily: 'var(--font-playfair), serif' }}
                    >
                        My Philosophy
                    </h2>
                    <div className="h-[1px] w-24 bg-[var(--accent)] mx-auto mt-6" />
                </motion.div>

                {QA_CONTENT.map((item, index) => (
                    <div key={item.id} className={`flex flex-col md:flex-row gap-8 md:gap-16 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>

                        {/* Question Side */}
                        <motion.div
                            className="flex-1 text-center md:text-left relative"
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <span className="absolute -top-12 -left-8 text-9xl opacity-10 font-serif text-[var(--accent)]">"</span>
                            <h3
                                className="text-3xl md:text-5xl font-serif leading-tight text-[var(--foreground)]"
                                style={{ fontFamily: 'var(--font-playfair), serif' }}
                            >
                                {item.question}
                            </h3>
                        </motion.div>

                        {/* Answer Side */}
                        <motion.div
                            className="flex-1"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            <div className="relative p-8 md:p-10 bg-[var(--background)]/40 backdrop-blur-md rounded-lg border border-[var(--accent)]/10 shadow-lg">
                                {/* Decorative corners */}
                                <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[var(--accent)]/40" />
                                <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[var(--accent)]/40" />

                                <div className="space-y-4 text-justify md:text-left text-lg font-light leading-relaxed whitespace-pre-line">
                                    {item.answer}
                                </div>
                            </div>
                        </motion.div>

                    </div>
                ))}
            </div>
        </section>
    );
}
