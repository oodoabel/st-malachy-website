"use client";

import MassSchedule from "@/components/MassSchedule";
import { motion } from "framer-motion";
import { ArrowRight, Target, Users, Heart, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import AboutHero from "@/components/AboutHero";
import Footer from "@/components/Footer";
import FeatureSection from "@/components/FeatureSection";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-[var(--primary-bg)] font-sans selection:bg-[var(--primary-red)] selection:text-white">
      <AboutHero />

      {/* Introduction / Our Story */}
      <section className="py-24 sm:py-32 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-[var(--primary-red)] font-bold tracking-widest uppercase text-sm mb-6">
              Welcome to St. Malachy's
            </h2>
            <p className="text-2xl sm:text-3xl md:text-4xl font-medium text-[var(--text-primary)] leading-relaxed">
              "We are more than just a chaplaincy; we are a vibrant family of faith, dedicated to nurturing the spiritual and academic growth of every student at FUT Minna."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <FeatureSection
        title="Our Mission"
        subtitle="Purpose Driven"
        description="To nurture spiritual growth through sacraments, formation programs, and service opportunities rooted in Catholic tradition. We strive to create an environment where faith and reason coexist harmoniously."
        image="/gal1.png" // Using placeholder image from Hero
        link="/chaplaincy-anthem"
        linkText="View Our Anthem"
      />

      {/* Vision Section */}
      <FeatureSection
        title="Our Vision"
        subtitle="Future Focused"
        description="A diverse family of Catholic students united in faith, fellowship, and commitment to academic excellence. We envision a community where every student is empowered to be a light in the world."
        image="/gal2.png" // Using placeholder image from Hero
        reversed
        link="/about/forums"
        linkText="Explore Our Forums"
      />

      {/* Worship Section - Full Width Background */}
      <div className="bg-[var(--secondary-bg)]/30 border-y border-[var(--border-color)]">
        <MassSchedule />
      </div>

      {/* Community Impact Section */}
      <section className="py-24 sm:py-32">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-[var(--primary-red)] font-bold tracking-widest uppercase text-sm mb-4">
              Community & Impact
            </h2>
            <h3 className="text-4xl sm:text-5xl font-black text-[var(--text-primary)] mb-6">
              Making a Difference
            </h3>
            <p className="text-xl text-[var(--text-secondary)]">
              Through outreach programs, leadership development, and service initiatives, we are transforming campus life and beyond.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="w-8 h-8" />,
                title: "Fellowship",
                desc: "Building lasting friendships through social events, retreats, and small groups."
              },
              {
                icon: <Heart className="w-8 h-8" />,
                title: "Service",
                desc: "Engaging in charitable works and community service to help those in need."
              },
              {
                icon: <Target className="w-8 h-8" />,
                title: "Leadership",
                desc: "Empowering students to take on leadership roles and develop essential life skills."
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-10 rounded-3xl border border-[var(--border-color)] hover:border-[var(--primary-red)]/30 hover:shadow-xl hover:shadow-[var(--primary-red)]/5 transition-all duration-300 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-[var(--secondary-bg)] flex items-center justify-center mb-8 group-hover:bg-[var(--primary-red)] transition-colors duration-300">
                  <div className="text-[var(--text-primary)] group-hover:text-white transition-colors duration-300">
                    {item.icon}
                  </div>
                </div>
                <h4 className="text-2xl font-bold text-[var(--text-primary)] mb-4">{item.title}</h4>
                <p className="text-[var(--text-secondary)] text-lg leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 sm:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-red-600 -z-10"></div>

        <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent -z-10"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center text-white">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-8">
            Ready to Join the Family?
          </h2>
          <p className="text-xl sm:text-2xl text-white/90 mb-12 max-w-2xl mx-auto">
            Whether you're a new student or looking to reconnect with your faith, there's a place for you here.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/register">
              <button className="px-10 py-5 bg-white text-[var(--primary-red)] rounded-full font-bold text-xl hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl">
                Become a Member
              </button>
            </Link>
            <Link href="/events">
              <button className="px-10 py-5 bg-transparent border-2 border-white text-white rounded-full font-bold text-xl hover:bg-white/10 transition-all flex items-center justify-center gap-3">
                See Upcoming Events <ArrowUpRight className="w-6 h-6" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
