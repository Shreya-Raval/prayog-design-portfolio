'use client';

import { motion } from 'framer-motion';
import { TopDecoration, BottomDecoration } from './DecorativeElements';

export default function Hero() {
    return (
        <section className="h-screen w-full relative flex flex-col items-center justify-center overflow-hidden bg-[var(--background)] transition-colors duration-500">
            {/* Decorative Background Elements */}
            <TopDecoration />
            <BottomDecoration />

            {/* Main Content */}
            <div className="z-10 text-center px-4 space-y-8 max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative inline-block"
                >
                    <p className="text-sm md:text-base tracking-[0.3em] font-sans uppercase text-[var(--accent)] font-medium">
                        Applying to Prayog Design Studio
                    </p>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                    className="text-6xl md:text-8xl lg:text-9xl font-serif font-medium tracking-tight text-[var(--foreground)] drop-shadow-sm"
                    style={{ fontFamily: 'var(--font-playfair), serif' }}
                >
                    Shreya Raval
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="flex flex-col md:flex-row items-center justify-center gap-4 text-[var(--foreground)]"
                >
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: 60 }}
                        transition={{ duration: 1, delay: 1 }}
                        className="h-[1px] bg-[var(--accent)] hidden md:block"
                    />
                    <span className="text-xl md:text-2xl font-light italic opacity-90 tracking-wide font-serif" style={{ fontFamily: 'var(--font-playfair), serif' }}>
                        Where Code Meets Celebration
                    </span>
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: 60 }}
                        transition={{ duration: 1, delay: 1 }}
                        className="h-[1px] bg-[var(--accent)] hidden md:block"
                    />
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-12 left-1/2 -translate-x-1/2 text-[var(--accent)] flex flex-col items-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ delay: 1.5, duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
                <span className="text-[10px] uppercase tracking-[0.2em]">Scroll to Explore</span>
                <div className="w-[1px] h-8 bg-[var(--accent)]/50" />
            </motion.div>
        </section>
    );
}
