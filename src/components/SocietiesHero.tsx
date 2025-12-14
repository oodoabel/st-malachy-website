"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const SocietiesHero: React.FC = () => {
    return (
        <section className="relative min-h-[85vh] w-full overflow-hidden bg-[var(--primary-bg)] flex items-center justify-center">
            {/* Background Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary-red)]/5 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-[var(--secondary-bg)] to-transparent pointer-events-none" />
            {/* Noise Texture Overlay */}
            <div className="absolute inset-0 z-0 bg-noise opacity-30 pointer-events-none mix-blend-overlay"></div>

            {/* Background Editorial Typography */}
            <div className="absolute top-1/4 left-0 w-full overflow-hidden pointer-events-none z-0 select-none opacity-5">
                <h1 className="text-[12vw] leading-none font-black text-outline whitespace-nowrap animate-[shimmer_60s_linear_infinite]">
                    COMMUNITY • FELLOWSHIP • SERVICE • COMMUNITY • FELLOWSHIP
                </h1>
            </div>

            <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <span className="h-[1px] w-12 bg-[var(--primary-red)]"></span>
                        <span className="text-[var(--primary-red)] font-bold tracking-widest uppercase text-sm">
                            Find Your Place
                        </span>
                        <span className="h-[1px] w-12 bg-[var(--primary-red)]"></span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-[var(--text-primary)] leading-[1.1] mb-6">
                        Join a Vibrant <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary-red)] to-[var(--primary-red)]/70">
                            Community of Faith
                        </span>
                    </h1>

                    <p className="text-base sm:text-lg md:text-xl text-[var(--text-secondary)] mb-8 max-w-2xl mx-auto leading-relaxed">
                        Connect with like-minded students, grow in your spiritual journey, and serve the community through our diverse societies and ministries.
                    </p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className="absolute bottom-[-80px] left-1/2 transform -translate-x-1/2 animate-bounce"
                    >
                        <ArrowDown className="w-6 h-6 text-[var(--primary-red)] opacity-50" />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default SocietiesHero;
