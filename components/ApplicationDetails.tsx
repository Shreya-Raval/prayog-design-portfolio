'use client';

import { motion } from 'framer-motion';
import { NeonFrame } from './NightDecorations';
import { Briefcase, MapPin, IndianRupee, Heart, Clock, Code2 } from 'lucide-react';

const DetailCard = ({ icon: Icon, title, children, delay }: { icon: any, title: string, children: React.ReactNode, delay: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        className="h-full"
    >
        <NeonFrame className="h-full bg-slate-900/40 border-slate-700/50">
            <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-[var(--accent)]/10 text-[var(--accent)]">
                    <Icon size={20} />
                </div>
                <h3 className="text-lg font-bold text-slate-200">{title}</h3>
            </div>
            <div className="space-y-2 text-slate-400 font-light">
                {children}
            </div>
        </NeonFrame>
    </motion.div>
);

export default function ApplicationDetails() {
    return (
        <section className="py-24 px-4 md:px-12 relative min-h-screen flex flex-col justify-center max-w-7xl mx-auto">

            <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 mb-4">
                    Let's Talk Details
                </h2>
                <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-transparent mx-auto rounded-full" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                {/* Professional Background */}
                <DetailCard icon={Briefcase} title="Professional Background" delay={0.1}>
                    <p><span className="text-slate-200 font-medium">Current:</span> Open to New Opportunities</p>
                    <p><span className="text-slate-200 font-medium">Last Role:</span> Full Stack Developer</p>
                    <p className="text-xs opacity-70 mb-2">(April 2025 - August 2025)</p>
                    <p><span className="text-slate-200 font-medium">Experience:</span> 2+ Years in Web Dev</p>
                </DetailCard>

                {/* Location & Availability */}
                <DetailCard icon={MapPin} title="Location & Availability" delay={0.2}>
                    <p>Based in <span className="text-slate-200">Ahmedabad, Gujarat</span></p>
                    <p>Available for <span className="text-slate-200">On-Site Work</span></p>
                    <p className="mt-2 text-green-400 font-medium flex items-center gap-2">
                        <Clock size={14} /> Ready to Start Immediately
                    </p>
                    <p className="text-sm italic mt-1">Full-time commitment</p>
                </DetailCard>

                {/* Compensation */}
                <DetailCard icon={IndianRupee} title="Compensation" delay={0.3}>
                    <div className="flex justify-between items-baseline border-b border-slate-700/50 pb-2 mb-2">
                        <span className="text-sm">Previous (Intern)</span>
                        <span className="text-slate-300">₹8,000/mo</span>
                    </div>
                    <div className="flex justify-between items-baseline border-b border-slate-700/50 pb-2 mb-2">
                        <span className="text-sm">Offered</span>
                        <span className="text-slate-300">₹15,000/mo</span>
                    </div>
                    <div className="flex justify-between items-baseline">
                        <span className="text-sm text-[var(--accent)]">Expected</span>
                        <span className="text-[var(--accent)] font-bold text-lg">₹25,000/mo</span>
                    </div>
                    <p className="text-xs mt-3 opacity-60 italic">
                        "Flexible & excited to grow with Prayog"
                    </p>
                </DetailCard>

                {/* Core Tech Skills */}
                <DetailCard icon={Code2} title="Core Tech Stack" delay={0.4}>
                    <div className="flex flex-wrap gap-2">
                        {['PHP', 'Laravel', 'Node.js', 'React', 'Next.js', 'Tailwind', 'MySQL', 'MongoDB'].map(tech => (
                            <span key={tech} className="px-2 py-1 bg-slate-800 rounded-md text-xs border border-slate-700">{tech}</span>
                        ))}
                    </div>
                </DetailCard>

                {/* Event Experience */}
                <DetailCard icon={Heart} title="Event Aspirations" delay={0.5}>
                    <p className="italic text-slate-300">"Currently exploring event design - no prior professional experience."</p>
                    <p className="mt-3 text-sm">
                        Bringing fresh perspective from tech world + genuine passion for creating memorable experiences.
                    </p>
                </DetailCard>

                {/* Mindset */}
                <DetailCard icon={Briefcase} title="The Mindset" delay={0.6}>
                    <p className="text-lg font-serif italic text-[var(--accent)] leading-relaxed">
                        "This isn't just a career shift - it's coming home to what genuinely excites me."
                    </p>
                    <p className="mt-4 text-sm">
                        Prepared for long hours & weekend events alongside the team.
                    </p>
                </DetailCard>

            </div>

        </section>
    );
}
