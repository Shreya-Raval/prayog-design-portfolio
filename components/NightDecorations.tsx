'use client';

import { motion } from 'framer-motion';

export const Sparkle = ({ delay = 0, style }: { delay?: number; style?: React.CSSProperties }) => (
    <motion.div
        className="absolute rounded-full bg-white shadow-[0_0_10px_2px_rgba(255,255,255,0.8)]"
        style={{ ...style, width: 2, height: 2 }}
        animate={{
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
        }}
        transition={{
            duration: 1.5,
            delay: delay,
            repeat: Infinity,
            repeatDelay: Math.random() * 3,
        }}
    />
);

export const Spotlight = ({ color = "rgba(129, 140, 248, 0.15)" }: { color?: string }) => (
    <div
        className="absolute pointer-events-none w-[60vw] h-[60vw] rounded-full blur-[100px] opacity-60 mix-blend-screen"
        style={{
            background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
            top: '-20%',
            left: '20%',
        }}
    />
);

export const StageLights = () => {
    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {/* Left Beam */}
            <motion.div
                className="absolute -top-20 left-[10%] w-[100px] h-[120vh] bg-gradient-to-b from-[var(--accent)]/20 to-transparent blur-2xl origin-top"
                animate={{ rotate: [-5, 5, -5] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            {/* Right Beam */}
            <motion.div
                className="absolute -top-20 right-[10%] w-[100px] h-[120vh] bg-gradient-to-b from-[var(--accent)]/20 to-transparent blur-2xl origin-top"
                animate={{ rotate: [5, -5, 5] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />
        </div>
    )
}

export const BackgroundSparkles = () => {
    const sparkles = Array.from({ length: 10 });
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {sparkles.map((_, i) => (
                <Sparkle
                    key={i}
                    delay={Math.random() * 5}
                    style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                    }}
                />
            ))}
        </div>
    );
};

export const NeonFrame = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
    <div className={`relative group ${className}`}>
        <div className="absolute -inset-0.5 bg-gradient-to-r from-[var(--accent)] to-purple-600 rounded-xl blur opacity-20 group-hover:opacity-60 transition duration-500"></div>
        <div className="relative h-full bg-[#0F172A]/80 backdrop-blur-xl border border-[var(--accent)]/20 rounded-xl p-6">
            {children}
            {/* Corner acccents */}
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[var(--accent)] opacity-50" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[var(--accent)] opacity-50" />
        </div>
    </div>
)
