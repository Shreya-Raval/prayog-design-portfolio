'use client';

import { motion } from 'framer-motion';
import { BackgroundSparkles, Spotlight } from './NightDecorations';

export default function MetaMoment() {
    return (
        <section className="min-h-screen py-24 px-4 md:px-12 relative flex flex-col items-center justify-center overflow-hidden">

            {/* Background Effects specifically for this reveal */}
            <div className="absolute inset-0 bg-slate-950 z-0">
                <BackgroundSparkles />
                <Spotlight color="rgba(217, 70, 239, 0.1)" /> {/* Purple/Pink ish spotlight */}
            </div>

            <div className="relative z-10 max-w-4xl mx-auto text-center space-y-12">

                <motion.h2
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="text-2xl md:text-3xl font-light text-slate-400 uppercase tracking-widest mb-8"
                >
                    And About This Website...
                </motion.h2>

                <div className="space-y-6 md:text-xl text-lg font-light leading-relaxed text-slate-200">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    >
                        You asked for my portfolio. You asked what design means to me. <br className="hidden md:block" /> You asked how I'd bring creativity to Prayog.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, scale: 1.5, filter: "blur(10px)" }}
                        whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.8, duration: 1.2, ease: "circOut" }}
                    >
                        <h1 className="text-5xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-white via-slate-200 to-slate-500 py-4 my-8 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                            This website is <br /> my answer.
                        </h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 1.5, duration: 1 }}
                        className="max-w-2xl mx-auto"
                    >
                        Instead of sending a standard application, I built you an experience. Every scroll transition represents a different event mood—from graceful daytime ceremonies to romantic pink celebrations to high-energy night parties.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 2.0, duration: 0.8 }}
                        className="grid gap-2 text-slate-400 text-base md:text-lg mt-8"
                    >
                        <p>From blank code to a scrolling story.</p>
                        <p>From static information to an immersive experience.</p>
                        <p>From application to demonstration.</p>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 2.5, duration: 0.8 }}
                    className="pt-16"
                >
                    <a href="mailto:shreyaraval@example.com" className="inline-block relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full blur opacity-50 group-hover:opacity-100 transition duration-500"></div>
                        <button className="relative px-12 py-5 bg-slate-900 rounded-full leading-none flex items-center divide-x divide-slate-600">
                            <span className="flex items-center space-x-5">
                                <span className="pr-6 text-slate-100 font-bold text-lg md:text-xl group-hover:text-white transition duration-200">
                                    Ready to explore what we could create together?
                                </span>
                            </span>
                        </button>
                    </a>
                </motion.div>

            </div>

        </section>
    );
}
