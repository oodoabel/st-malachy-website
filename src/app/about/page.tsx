"use client";

import MassSchedule from "@/components/MassSchedule";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import { FaChurch, FaUserFriends, FaHandsHelping } from "react-icons/fa";

const announcements = [
  {
    id: 1,
    date: "January 15, 2026",
    title: "Rosary Procession",
    description:
      "Join us for the Rosary Procession this Sunday at 10:00 AM. All students are invited to celebrate the new semester together.",
  },
  {
    id: 2,
    date: "January 12, 2026",
    title: "Bible Study Sessions",
    description:
      "Weekly Bible study sessions resume this Wednesday at 6:00 PM in the Chaplaincy Hall. Come deepen your faith with fellow students.",
  },
  {
    id: 3,
    date: "January 10, 2026",
    title: "Outreach Program",
    description:
      "Volunteer for our community outreach program. Registration is now open for students interested in serving the local community.",
  },
];

const AboutPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] as any },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br mt-10 from-gray-100 to-gray-200 text-gray-800 py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <motion.div
        className="max-w-6xl mx-auto space-y-16"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Header */}
        <motion.header className="text-center" variants={itemVariants as any}>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            About Our Chaplaincy
          </h1>
          <div className="w-24 h-1 bg-gray-400 mx-auto my-6"></div>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Discover the vibrant Catholic community at the Federal University of
            Technology, Minna - where faith, knowledge, and service converge.
          </p>
        </motion.header>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.section
            className="bg-white rounded-xl p-8 shadow-md border border-gray-200"
            variants={itemVariants}
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Announcements
            </h2>
            <div className="space-y-4 max-h-96 overflow-y-auto">
              {announcements.map((announcement) => (
                <div
                  key={announcement.id}
                  className="border-l-4 border-gray-400 pl-4 py-2 hover:bg-gray-50 transition-colors rounded-r"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded">
                      {announcement.date}
                    </span>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-1">
                    {announcement.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {announcement.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.section>
          <motion.section
            className="bg-white rounded-xl p-8 shadow-md border border-gray-200"
            variants={itemVariants}
          >
            <MassSchedule />
          </motion.section>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutPage;
