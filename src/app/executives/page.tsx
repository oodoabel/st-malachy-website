"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Users, Award, Mail, ChevronDown } from "lucide-react";
import Image from "next/image";

interface Executive {
  id: number;
  name: string;
  position: string;
  forum: string;
  image?: string;
  category?: "leadership" | "coordinators" | "representatives";
}

const ExecutivesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const executives: Executive[] = [
    {
      id: 1,
      name: "Ella Solomon Echobu",
      position: "President",
      forum: "Luminous Family",
      image: "/excos/presido.png",
      category: "leadership",
    },
    {
      id: 2,
      name: "Arome Juliet",
      position: "VP GK",
      forum: "Luminous Family",
      image: "/excos/vp-gk.png",
      category: "leadership",
    },
    {
      id: 3,
      name: "Mercy Ojone",
      position: "Gen Secretary",
      forum: "Luminous Family",
      image: "/excos/sec-gk.png",
      category: "leadership",
    },
    {
      id: 7,
      name: "Oodo Abel Oche",
      position: "AGS GK",
      forum: "Luminous Family",
      image: "/excos/ags.png",
      category: "leadership",
    },
    {
      id: 4,
      name: "Lucy Terkula",
      position: "Financial Secretary",
      forum: "Luminous Family",
      image: "/excos/fin-sec-gk.png",
      category: "leadership",
    },
    {
      id: 5,
      name: "Tresure Victor",
      position: "Treasurer GK",
      forum: "Luminous Family",
      image: "/excos/treasurer-gk.png",
      category: "leadership",
    },
    {
      id: 6,
      name: "Ogbuefi Jude",
      position: "Tresurer/Fin. Sec Bosso",
      forum: "Golden Phoenix",
      image: "/excos/sec-bosso.png",
      category: "leadership",
    },
    {
      id: 8,
      name: "Ayuba Bitrus",
      position: "PRO",
      forum: "Golden Phoenix",
      image: "/excos/pro-gk.png",
      category: "leadership",
    },
    {
      id: 13,
      name: "Apaila Ugbede Vincent",
      position: "Catechist GK",
      forum: "Luminous Family",
      image: "/excos/cate-gk.png",
      category: "coordinators",
    },
    {
      id: 14,
      name: "Apaa Felix",
      position: "Asst. Catechist GK",
      forum: "Golden Phoenix",
      image: "/excos/asst-cate-gk.png",
      category: "coordinators",
    },
    {
      id: 12,
      name: "Abuh Emmanuel Alechine",
      position: "Catechist Bosso",
      forum: "Luminous Family",
      image: "/excos/cate-bosso.png",
      category: "coordinators",
    },
    {
      id: 9,
      name: "Asaka Leo Jime",
      position: "Asst. Catechist Bosso",
      forum: "Golden Phoenix",
      image: "/excos/asst-cate-bosso.png",
      category: "coordinators",
    },
    {
      id: 10,
      name: "Ogbobe Faith Ndidiamaka",
      position: "Sisters's Cordinator GK",
      forum: "Luminous Family",
      image: "/excos/sis-cord-gk.png",
      category: "coordinators",
    },
    {
      id: 15,
      name: "Loveth Ufedoojo Kiara Joel",
      position: "Assistant Sisters's Cordinator GK",
      forum: "Golden Phoenix  ",
      image: "/excos/asst-sis-cord-gk.png",
      category: "coordinators",
    },
    {
      id: 11,
      name: "Marachi Odoh",
      position: "Sister's Cordinator",
      forum: "Luminous Family",
      image: "/excos/sis-cord-bosso.png",
      category: "coordinators",
    },
    {
      id: 16,
      name: "Akunne Emmanuel Obinna",
      position: "Brother's Cordinator GK",
      forum: "Luminous Family",
      image: "/excos/bro-cord-gkk.png",
      category: "coordinators",
    },
    {
      id: 17,
      name: "Anayochukwu O. Emmanuel",
      position: "Asst. Brother's Cordinator GK",
      forum: "Golden Phoenix",
      image: "/excos/asst-bro-cord-gk.png",
      category: "coordinators",
    },
    {
      id: 18,
      name: "Chubuike D. Kaosisochukwu",
      position: "Tresurer Bosso",
      forum: "Golden Phoenix",
      image: "/excos/tresurer-gk.png",
      category: "leadership",
    },
    {
      id: 19,
      name: "Uche Emmanuel Chiwendu",
      position: "PRO Bosso",
      forum: "Golden Phoenix",
      image: "/excos/pro-bosso.png",
      category: "leadership",
    },
    {
      id: 20,
      name: "Izuakor Chinedu",
      position: "Mr NFCS",
      forum: "Golden Phoenix",
      image: "/excos/mr-nfcs.png",
      category: "representatives",
    },
    {
      id: 21,
      name: "Ihemadu Ugochi Maryann",
      position: "Miss NFCS",
      forum: "Luminous Family",
      image: "/excos/miss-nfcs.png",
      category: "representatives",
    },
    {
      id: 22,
      name: "Odah Bartholomew Onyilo",
      position: "Brothers Cordinator Bosso",
      forum: "Luminous Family",
      image: "/excos/bro-cord-bosso.png",
      category: "coordinators",
    },
  ];

  const categories = [
    { id: "all", label: "All Members" },
    { id: "leadership", label: "Leadership" },
    { id: "coordinators", label: "Coordinators" },
    { id: "representatives", label: "Representatives" },
  ];

  const filteredExecutives =
    selectedCategory === "all"
      ? executives
      : executives.filter((exec) => exec.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[var(--primary-red)] to-red-700 rounded-full mb-6 shadow-lg"
            whileHover={{ scale: 1.1, rotate: 360 }}
            transition={{ duration: 0.6 }}
          >
            <Award className="w-8 h-8 text-white" />
          </motion.div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Executive Council
          </h1>

          <div className="flex items-center justify-center gap-2 mb-6">
            <motion.div
              className="h-1 w-12 bg-gradient-to-r from-transparent to-[var(--primary-red)] rounded-full"
              initial={{ width: 0 }}
              animate={{ width: 48 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            />
            <motion.div
              className="h-1 w-24 bg-gradient-to-r from-[var(--primary-red)] via-red-600 to-[var(--primary-red)] rounded-full"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            />
            <motion.div
              className="h-1 w-12 bg-gradient-to-r from-[var(--primary-red)] to-transparent rounded-full"
              initial={{ width: 0 }}
              animate={{ width: 48 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />
          </div>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Meet our dedicated team of student leaders serving the NFCS
            community with faith, excellence, and commitment.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-gradient-to-r from-[var(--primary-red)] to-red-700 text-white shadow-lg"
                    : "bg-white text-gray-700 border border-gray-200 hover:border-[var(--primary-red)] hover:text-[var(--primary-red)]"
                }`}
              >
                {category.label}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Executives Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          key={selectedCategory}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {filteredExecutives.map((executive, index) => (
            <motion.div
              key={executive.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200"
            >
              {/* Image Section */}
              <div className="relative h-64 overflow-hidden bg-gray-100">
                {executive.image ? (
                  <img
                    src={executive.image}
                    alt={executive.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                      const parent = e.currentTarget.parentElement;
                      if (parent) {
                        parent.innerHTML = `
                          <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                            <svg class="w-20 h-20 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                          </div>
                        `;
                      }
                    }}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                    <svg
                      className="w-20 h-20 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Position Badge */}
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full shadow-lg">
                  <span className="text-xs font-bold text-[var(--primary-red)] uppercase tracking-wide">
                    {executive.position}
                  </span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-[var(--primary-red)] transition-colors duration-300">
                  {executive.name}
                </h3>
                {executive.forum && (
                  <p className="text-sm text-gray-500 flex items-center gap-1">
                    <Users className="w-3 h-3" />
                    {executive.forum}
                  </p>
                )}
              </div>

              {/* Decorative Bottom Border */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[var(--primary-red)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredExecutives.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-gray-500 text-lg">
              No executives found in this category.
            </p>
          </motion.div>
        )}

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-gray-50 to-white rounded-2xl px-8 py-4 border border-gray-200">
            <p className="text-gray-600 font-medium">
              Together we serve in faith and fellowship
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ExecutivesPage;
