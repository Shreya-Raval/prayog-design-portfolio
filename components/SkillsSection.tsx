'use client';

import { motion } from 'framer-motion';
import { BackgroundSparkles, Spotlight, StageLights } from './NightDecorations';
import { Code2, Video, Users, Zap } from 'lucide-react';

const skills = [
    {
        title: "Technical Foundation",
        icon: Code2,
        accent: "cyan",
        items: [
            "MERN Stack & PHP/Laravel",
            "RESTful APIs & Backend",
            "Database Design",
            "React/Next.js"
        ]
    },
    {
        title: "Creative Tools",
        icon: Video,
        accent: "pink",
        items: [
            "Video Editing",
            "Design Software",
            "Visual Storytelling",
            "Social Media Content"
        ]
    },
    {
        title: "Soft Skills",
        icon: Users,
        accent: "yellow",
        items: [
            "Clear Communication",
            "Problem-Solving",
            "Team Collaboration",
            "Fast Learning"
        ]
    },
    {
        title: "The Unique Bridge",
        icon: Zap,
        accent: "purple",
        featured: true,
        items: [
            "Real-time event dashboards",
            "Interactive social content",
            "Branded web experiences",
            "Tech-forward event design"
        ]
    }
];

export default function SkillsSection() {
    return (
        <section className="h-screen w-full relative overflow-hidden bg-[#0F172A] flex flex-col items-center justify-center py-8 md:py-12 px-4 md:px-8">
            {/* Background Effects */}
            <Spotlight />
            <StageLights />
            <BackgroundSparkles />

            {/* Subtle Grid Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)] pointer-events-none" />

            {/* Content Container */}
            <div className="relative z-10 w-full max-w-6xl h-full flex flex-col">

                {/* Top Section (approx 25-30%) */}
                <motion.div
                    className="flex-initial flex flex-col justify-end items-center text-center space-y-3 pb-8 md:pb-12"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white uppercase drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                        What I Bring to <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Prayog</span>
                    </h2>
                    <p className="text-lg md:text-xl text-slate-400 font-light tracking-[0.2em] uppercase">
                        Where Technology Meets Celebration
                    </p>
                </motion.div>

                {/* Main Content Grid (60-65%) */}
                <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 min-h-0">
                    {skills.map((skill, index) => (
                        <SkillCard key={index} skill={skill} index={index} />
                    ))}
                </div>

                {/* Bottom Section (10%) - Spacer/Indicator */}
                <div className="flex-none h-[5vh] flex items-center justify-center mt-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.3 }}
                        transition={{ delay: 1, duration: 1 }}
                        className="w-px h-full bg-gradient-to-b from-white/20 to-transparent"
                    />
                </div>
            </div>
        </section>
    );
}

function SkillCard({ skill, index }: { skill: any, index: number }) {
    // Dynamic Accent Colors
    const colorVariants: any = {
        cyan: {
            bg: "from-cyan-900/20 to-cyan-900/5",
            border: "border-cyan-500/20",
            hoverBorder: "group-hover:border-cyan-500/50",
            glow: "group-hover:shadow-[0_0_30px_-5px_rgba(34,211,238,0.3)]",
            text: "text-cyan-400",
            dot: "bg-cyan-400"
        },
        pink: {
            bg: "from-pink-900/20 to-pink-900/5",
            border: "border-pink-500/20",
            hoverBorder: "group-hover:border-pink-500/50",
            glow: "group-hover:shadow-[0_0_30px_-5px_rgba(236,72,153,0.3)]",
            text: "text-pink-400",
            dot: "bg-pink-400"
        },
        yellow: {
            bg: "from-yellow-900/20 to-yellow-900/5",
            border: "border-yellow-500/20",
            hoverBorder: "group-hover:border-yellow-500/50",
            glow: "group-hover:shadow-[0_0_30px_-5px_rgba(250,204,21,0.3)]",
            text: "text-yellow-400",
            dot: "bg-yellow-400"
        },
        purple: {
            bg: "from-purple-900/20 to-purple-900/5",
            border: "border-purple-500/20",
            hoverBorder: "group-hover:border-purple-500/50",
            glow: "shadow-[0_0_30px_-5px_rgba(168,85,247,0.2)] group-hover:shadow-[0_0_40px_-5px_rgba(168,85,247,0.4)]",
            text: "text-purple-400",
            dot: "bg-purple-400"
        }
    };

    const colors = colorVariants[skill.accent as string] || colorVariants.cyan;

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className={`group relative h-full flex flex-col p-6 md:p-8 rounded-2xl border ${colors.border} ${colors.hoverBorder} ${colors.glow} bg-gradient-to-br ${colors.bg} backdrop-blur-md transition-all duration-300 overflow-hidden`}
        >
            {/* Header */}
            <div className="flex items-center gap-4 mb-4 md:mb-6">
                <div className={`p-2 rounded-lg bg-white/5 border border-white/10 ${colors.text}`}>
                    <skill.icon size={28} />
                </div>
                <h3 className={`text-xl md:text-2xl font-bold uppercase tracking-wider text-white`}>
                    {skill.title}
                </h3>
            </div>

            {/* List */}
            <ul className="space-y-2 md:space-y-3 flex-grow">
                {skill.items.map((item: string, i: number) => (
                    <li key={i} className="flex items-start gap-3 text-slate-300 text-sm md:text-base font-medium leading-relaxed">
                        <span className={`w-1.5 h-1.5 rounded-full mt-2 shrink-0 shadow-[0_0_8px_currentColor] ${colors.text} ${colors.dot}`} />
                        {item}
                    </li>
                ))}
            </ul>

            {/* Bottom Glow Gradient */}
            <div className={`absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t ${colors.bg} to-transparent opacity-50 pointer-events-none`} />
        </motion.div>
    );
}

// Fallback for types
const colors: any = {};
