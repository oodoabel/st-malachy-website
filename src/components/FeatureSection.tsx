"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface FeatureSectionProps {
    title: string;
    subtitle: string;
    description: string;
    image?: string; // URL or component
    reversed?: boolean;
    children?: React.ReactNode;
    link?: string;
    linkText?: string;
}

const FeatureSection: React.FC<FeatureSectionProps> = ({
    title,
    subtitle,
    description,
    image,
    reversed = false,
    children,
    link,
    linkText,
}) => {
    return (
        <section className="py-24 sm:py-32 w-full overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
                <div
                    className={`flex flex-col ${reversed ? "lg:flex-row-reverse" : "lg:flex-row"
                        } items-center gap-12 lg:gap-24`}
                >
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: reversed ? 50 : -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex-1"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <span className="h-[2px] w-12 bg-[var(--primary-red)]"></span>
                            <span className="text-[var(--primary-red)] font-bold tracking-widest uppercase text-sm">
                                {subtitle}
                            </span>
                        </div>
                        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[var(--text-primary)] mb-8 leading-tight">
                            {title}
                        </h2>
                        <p className="text-lg sm:text-xl text-[var(--text-secondary)] mb-8 leading-relaxed">
                            {description}
                        </p>

                        {link && linkText && (
                            <Link href={link} className="group inline-flex items-center gap-2 text-[var(--text-primary)] font-bold text-lg hover:text-[var(--primary-red)] transition-colors">
                                {linkText}
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        )}

                        {children}
                    </motion.div>

                    {/* Visual Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex-1 w-full"
                    >
                        {image ? (
                            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-[var(--border-color)] group">
                                <div className="absolute inset-0 bg-[var(--primary-red)]/5 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                                {/* Placeholder for actual image if string, or render component */}
                                {typeof image === 'string' ? (
                                    <img src={image} alt={title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                                ) : (
                                    image
                                )}
                            </div>
                        ) : (
                            <div className="relative aspect-[4/3] rounded-3xl bg-[var(--secondary-bg)] border border-[var(--border-color)] flex items-center justify-center">
                                <span className="text-[var(--text-secondary)]">Visual Content</span>
                            </div>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default FeatureSection;
