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
      <section className="py-24 sm:py-32 bg-[var(--secondary-bg)] px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="relative bg-white rounded-[2.5rem] p-8 sm:p-16 md:p-20 text-center overflow-hidden border border-[var(--border-color)] shadow-2xl shadow-[var(--primary-red)]/5">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
              <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-[var(--primary-red)]/5 rounded-full blur-3xl"></div>
              <div className="absolute bottom-[-10%] left-[-10%] w-64 h-64 bg-[var(--primary-red)]/5 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[var(--text-primary)] mb-6 leading-tight">
                Ready to Join the Family?
              </h2>
              <p className="text-lg sm:text-xl text-[var(--text-secondary)] mb-10 max-w-2xl mx-auto leading-relaxed">
                Whether you're a new student or looking to reconnect with your faith, there's a place for you here.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/register" className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto px-8 py-4 bg-[var(--primary-red)] text-white rounded-full font-bold text-lg hover:shadow-lg hover:shadow-[var(--primary-red)]/20 transition-all transform hover:-translate-y-1">
                    Become a Member
                  </button>
                </Link>
                <Link href="/events" className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto px-8 py-4 bg-white border border-[var(--border-color)] text-[var(--text-primary)] rounded-full font-bold text-lg hover:bg-[var(--secondary-bg)] hover:border-[var(--primary-red)]/30 transition-all flex items-center justify-center gap-2 group">
                    See Upcoming Events
                    <ArrowUpRight className="w-5 h-5 group-hover:text-[var(--primary-red)] transition-colors" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
