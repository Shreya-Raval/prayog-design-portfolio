'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <footer className="w-full bg-slate-950 border-t border-slate-800/50 py-12 px-4 md:px-12 relative z-50">
            {/* Top Border Gradient */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

            <div className="max-w-7xl mx-auto flex flex-col items-center gap-8 md:flex-row md:justify-between text-center md:text-left">

                {/* Left Side: Identity */}
                <div className="space-y-2">
                    <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
                        Shreya Raval
                    </h3>
                    <p className="text-sm text-slate-400 font-light">
                        Full Stack Developer × Event Design Aspirant
                    </p>
                    <p className="text-xs text-slate-500 mt-2">
                        Built with 💗
                    </p>
                </div>

                {/* Center: Connect (Optional) - Can be quick nav or simple message */}
                <div className="hidden md:block">
                    <button
                        onClick={scrollToTop}
                        className="group flex flex-col items-center gap-2 text-slate-500 hover:text-[var(--accent)] transition-colors duration-300"
                    >
                        <div className="p-3 rounded-full border border-slate-700 group-hover:bg-slate-800 transition-all duration-300">
                            <ArrowUp size={16} />
                        </div>
                        <span className="text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                            Back to Top
                        </span>
                    </button>
                </div>

                {/* Right Side: Copyright & Links */}
                <div className="space-y-4 flex flex-col md:items-end">
                    <p className="text-sm text-slate-400">
                        © 2026 Shreya Raval. <br className="md:hidden" /> Designed for <span className="text-[var(--accent)]">Prayog Design Studio</span>.
                    </p>

                    <div className="flex justify-center md:justify-end gap-4">
                        <a href="https://github.com/Shreya-Raval" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors">
                            <span className="sr-only">GitHub</span>
                            <Github size={18} />
                        </a>
                        <a href="https://www.linkedin.com/in/raval-shreya/" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors">
                            <span className="sr-only">LinkedIn</span>
                            <Linkedin size={18} />
                        </a>
                        <a href="mailto:ravalshreya.2004@gmail.com" className="text-slate-500 hover:text-white transition-colors">
                            <span className="sr-only">Email</span>
                            <Mail size={18} />
                        </a>
                    </div>
                </div>

            </div>
        </footer>
    );
}
