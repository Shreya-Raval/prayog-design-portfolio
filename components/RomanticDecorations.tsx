'use client';

import { motion } from 'framer-motion';

export const RosePetal = ({
    size = 20,
    initialX = 0,
    initialY = 0,
    delay = 0,
}: {
    size?: number;
    initialX?: number;
    initialY?: number;
    delay?: number;
}) => {
    return (
        <motion.div
            className="absolute pointer-events-none opacity-40 z-0 text-[var(--pink-accent)]"
            initial={{ x: initialX, y: initialY, rotate: 0, scale: 0.8 }}
            animate={{
                y: [initialY, initialY + 100, initialY + 200],
                x: [initialX, initialX + 20, initialX - 20, initialX],
                rotate: [0, 45, -45, 0],
                opacity: [0.4, 0.6, 0],
            }}
            transition={{
                duration: 10 + Math.random() * 5,
                repeat: Infinity,
                ease: "linear",
                delay: delay,
            }}
        >
            <svg
                width={size}
                height={size}
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M12 2C9 2 2 6 2 12C2 17 6 22 12 22C17 22 22 17 22 12C22 7 14 2 12 2ZM12 20C8 20 4 16 4 12C4 8 8 4 12 4C16 4 20 8 20 12C20 16 16 20 12 20Z" fillOpacity="0.3" />
                <path d="M12 2C7 5 3 9 3 12C3 16 7 20 12 20C17 20 21 16 21 12C21 9 17 5 12 2Z" />
            </svg>
        </motion.div>
    );
};

export const FloatingPetals = () => {
    // Generate random positions for subtle background effect
    const petals = Array.from({ length: 8 }).map((_, i) => ({
        id: i,
        x: Math.random() * 100, // percentage
        y: Math.random() * 100, // percentage
        size: 15 + Math.random() * 20,
        delay: Math.random() * 5,
    }));

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none h-full w-full">
            {petals.map((petal) => (
                <div key={petal.id} style={{ left: `${petal.x}%`, top: `${petal.y}%`, position: 'absolute' }}>
                    <RosePetal size={petal.size} delay={petal.delay} />
                </div>
            ))}
        </div>
    )
}

export const DecorativeFrame = () => {
    return (
        <div className="absolute inset-4 border border-[var(--pink-accent)]/20 pointer-events-none rounded-lg z-10" />
    );
};

export const MandalaPattern = () => {
    return (
        <motion.div
            className="absolute -right-20 top-1/4 w-96 h-96 opacity-10 text-[var(--pink-accent)] pointer-events-none"
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        >
            <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5">
                <circle cx="50" cy="50" r="40" strokeDasharray="4 4" />
                <circle cx="50" cy="50" r="30" />
                <path d="M50 10 L50 90 M10 50 L90 50" />
                <path d="M22 22 L78 78 M22 78 L78 22" />
            </svg>
        </motion.div>
    )
}
