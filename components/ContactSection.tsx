'use client';

import { motion } from 'framer-motion';
import { Mail, MapPin, Github, Linkedin, ArrowRight } from 'lucide-react';
import { BackgroundSparkles } from './NightDecorations';

export default function ContactSection() {
    return (
        <section className="py-24 px-4 md:px-12 relative flex flex-col items-center justify-center overflow-hidden min-h-[80vh]">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[#0F172A] opacity-90 -z-10" />
            <div className="absolute inset-0 pointer-events-none">
                <BackgroundSparkles />
            </div>

            <div className="max-w-4xl mx-auto w-full relative z-10 text-center space-y-12">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 mb-6 pb-2">
                        Let's Create Something Unforgettable
                    </h2>
                    <p className="text-lg md:text-xl text-slate-300 font-light max-w-2xl mx-auto leading-relaxed">
                        Ready to bring tech-forward thinking to Prayog's celebrations? I'd love to discuss how we can work together to design experiences that resonate.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                    {/* Email Card */}
                    <motion.a
                        href="mailto:ravalshreya.2004@gmail.com"
                        className="group relative block"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-500" />
                        <div className="relative bg-slate-900 border border-slate-700/50 rounded-xl p-8 flex flex-col items-center justify-center gap-4 hover:bg-slate-800/80 transition duration-300 h-full">
                            <div className="p-4 rounded-full bg-slate-800 text-pink-400 group-hover:scale-110 transition duration-300">
                                <Mail size={32} />
                            </div>
                            <div className="space-y-1">
                                <h3 className="text-slate-200 font-medium">Email Me</h3>
                                <p className="text-slate-400 text-sm">ravalshreya.2004@gmail.com</p>
                            </div>
                        </div>
                    </motion.a>

                    {/* Location Card */}
                    <motion.div
                        className="group relative block"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl blur opacity-30 group-hover:opacity-70 transition duration-500" />
                        <div className="relative bg-slate-900 border border-slate-700/50 rounded-xl p-8 flex flex-col items-center justify-center gap-4 h-full">
                            <div className="p-4 rounded-full bg-slate-800 text-cyan-400">
                                <MapPin size={32} />
                            </div>
                            <div className="space-y-1">
                                <h3 className="text-slate-200 font-medium">Location</h3>
                                <p className="text-slate-400 text-sm">Ahmedabad, Gujarat, India</p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Social / Closing */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="space-y-8 pt-8"
                >
                    <div className="flex justify-center gap-6">
                        {[
                            { icon: Github, href: "https://github.com/Shreya-Raval", label: "GitHub" },
                            { icon: Linkedin, href: "https://www.linkedin.com/in/raval-shreya/", label: "LinkedIn" }
                        ].map((social, i) => (
                            <a
                                key={i}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 text-slate-400 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 border border-transparent hover:border-slate-700"
                                aria-label={social.label}
                            >
                                <social.icon size={24} />
                            </a>
                        ))}
                    </div>

                    <div className="relative inline-block">
                        <p className="text-2xl font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-500">
                            "From code to celebration. From vision to execution.<br />Let's build something beautiful together."
                        </p>
                    </div>

                </motion.div>

            </div>
        </section>
    );
}
