"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Users, GraduationCap, BookOpen, Heart, Star, Award } from "lucide-react";
import ForumsHero from "@/components/ForumsHero";
import Footer from "@/components/Footer";

const forums = [
  {
    level: "100 Level",
    name: "Triumphant Family",
    slug: "triumphant-family",
    icon: <Users className="w-8 h-8" />,
    description:
      "A welcoming space for new students to build friendships, get guidance, and grow in faith as they begin their university journey.",
  },
  {
    level: "200 Level",
    name: "Golden Phoenix Family",
    slug: "golden-phoenix-family",
    icon: <BookOpen className="w-8 h-8" />,
    description:
      "Focused on helping students strengthen their identity in Christ and navigate the challenges of their academic pursuit with resilience.",
  },
  {
    level: "300 Level",
    name: "Luminous Family",
    slug: "luminous-family",
    icon: <Star className="w-8 h-8" />,
    description:
      "Grooming leaders and encouraging responsibility through service, spiritual maturity, and active participation in chaplaincy activities.",
  },
  {
    level: "400 Level",
    name: "Excellers in Christ Family",
    slug: "excellers-in-christ-family",
    icon: <Award className="w-8 h-8" />,
    description:
      "Deepening Catholic faith, spiritual discernment, and striving for excellence in both character and career preparation.",
  },
  {
    level: "500 Level",
    name: "Exquisite Family",
    slug: "exquisite-family",
    icon: <GraduationCap className="w-8 h-8" />,
    description:
      "Support and encouragement as students prepare to transition into the next phase of life, focusing on vocation and professional ethics.",
  },
  {
    level: "Alumni",
    name: "Legacy Family",
    slug: "legacy-family",
    icon: <Heart className="w-8 h-8" />,
    description:
      "A dedicated forum for alumni to stay connected, mentor current students, and continue their faith journey beyond the campus walls.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1] as any,
    },
  }),
};

const ForumsPage = () => {
  return (
    <div className="min-h-screen bg-[var(--primary-bg)] font-sans selection:bg-[var(--primary-red)] selection:text-white">
      <ForumsHero />

      <section className="py-24 sm:py-32 relative">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-[var(--primary-red)] font-bold tracking-widest uppercase text-sm mb-4">
              Academic Levels
            </h2>
            <h3 className="text-4xl sm:text-5xl font-black text-[var(--text-primary)] mb-6">
              Find Your Tribe
            </h3>
            <p className="text-xl text-[var(--text-secondary)]">
              The Chaplaincy has established forums that align with each level of study, creating safe spaces for spiritual development, mentorship, and fellowship.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {forums.map((forum, idx) => (
              <motion.div
                key={idx}
                custom={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={cardVariants}
                whileHover={{ y: -10 }}
                className="group relative bg-white rounded-3xl overflow-hidden border border-[var(--border-color)] hover:border-[var(--primary-red)]/30 hover:shadow-2xl hover:shadow-[var(--primary-red)]/10 transition-all duration-300 flex flex-col h-full"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary-red)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10 p-8 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 rounded-2xl bg-[var(--secondary-bg)] text-[var(--primary-red)] group-hover:bg-[var(--primary-red)] group-hover:text-white transition-colors duration-300 shadow-sm">
                      {forum.icon}
                    </div>
                    <span className="px-3 py-1 rounded-full bg-[var(--secondary-bg)] text-[var(--text-secondary)] text-xs font-bold uppercase tracking-wider border border-[var(--border-color)]">
                      {forum.level}
                    </span>
                  </div>

                  <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4 group-hover:text-[var(--primary-red)] transition-colors duration-300">
                    {forum.name}
                  </h2>

                  <p className="text-[var(--text-secondary)] mb-8 leading-relaxed flex-grow">
                    {forum.description}
                  </p>

                  <Link
                    href={`/about/forums/${forum.slug}`}
                    className="inline-flex items-center gap-2 text-[var(--text-primary)] font-bold group/link"
                  >
                    <span className="group-hover/link:text-[var(--primary-red)] transition-colors">Explore Forum</span>
                    <div className="w-8 h-8 rounded-full bg-[var(--secondary-bg)] flex items-center justify-center group-hover/link:bg-[var(--primary-red)] group-hover/link:text-white transition-all duration-300 group-hover/link:translate-x-2">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ForumsPage;
