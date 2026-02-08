'use client';

import { motion } from 'framer-motion';

export const TopDecoration = () => {
    return (
        <motion.div
            className="absolute top-0 left-0 w-full h-[30vh] pointer-events-none overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
        >
            <motion.svg
                viewBox="0 0 1440 320"
                className="w-full h-full text-[var(--accent)] opacity-20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
                <path
                    d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
                    fill="currentColor"
                />
                <path // Additional decorative line
                    d="M0,160 C300,250 600,50 900,160 C1200,280 1440,100 1440,100"
                    stroke="currentColor"
                    strokeWidth="2"
                    opacity="0.5"
                    fill="none"
                />
            </motion.svg>
        </motion.div>
    );
};

export const BottomDecoration = () => {
    return (
        <motion.div
            className="absolute bottom-0 right-0 w-[40vw] h-[40vh] pointer-events-none"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
        >
            <motion.svg
                viewBox="0 0 500 500"
                className="w-full h-full text-[var(--accent)] opacity-15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                animate={{ y: [0, 15, 0], rotate: [0, 2, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            >
                {/* Abstract floral shape */}
                <circle cx="250" cy="250" r="200" stroke="currentColor" strokeWidth="1" strokeDasharray="10 5" />
                <path
                    d="M250 50 Q 350 50 350 150 T 250 250 T 150 150 T 250 50"
                    stroke="currentColor" strokeWidth="2"
                />
                <path
                    d="M250 250 Q 350 250 350 350 T 250 450 T 150 350 T 250 250"
                    stroke="currentColor" strokeWidth="2"
                />
                <path
                    d="M50 250 Q 50 150 150 150 T 250 250"
                    stroke="currentColor" strokeWidth="2"
                />
                <path
                    d="M450 250 Q 450 350 350 350 T 250 250"
                    stroke="currentColor" strokeWidth="2"
                />
            </motion.svg>
        </motion.div>
    );
};
