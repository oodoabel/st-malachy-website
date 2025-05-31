"use client";
import React from "react";
import { motion } from "framer-motion";

interface Executive {
  id: number;
  name: string;
  position: string;
  forum: string;
  image?: string;
}

const ExecutivesPage = () => {
  const executives: Executive[] = [
    {
      id: 1,
      name: "Ella Solomon Echobu",
      position: "President",
      forum: "Luminous Family",
      image: "/excos/presido.png",
    },
    {
      id: 2,
      name: "Arome Juliet",
      position: "VP GK",
      forum: "Luminous",
      image: "/excos/vp-gk.png",
    },
    {
      id: 3,
      name: "Mercy Ojone",
      position: "Gen Secretary",
      forum: "Luminous",
      image: "/excos/sec-gk.png",
    },
    {
      id: 7,
      name: "Oodo Abel Oche",
      position: "AGS GK",
      forum: "Luminous",
      image: "/excos/ags-gk.png",
    },
    {
      id: 4,
      name: "Lucy Terkula",
      position: "Financial Secretary",
      forum: "Luminous",
      image: "/excos/fin-sec-gk.png",
    },
    {
      id: 5,
      name: "Tresure Victor",
      position: "Treasurer GK",
      forum: "Luminous",
      image: "/excos/treasurer-gk.png",
    },
    {
      id: 6,
      name: "Ogbuefi Jude",
      position: "Tresurer/Fin. Sec Bosso",
      forum: "Luminous",
      image: "/excos/sec-bosso.png",
    },
    {
      id: 8,
      name: "Ayuba Bitrus",
      position: "PRO",
      forum: "Luminous",
      image: "/excos/pro-gk.png",
    },
    {
      id: 13,
      name: "Apaila Ugbede Vincent",
      position: "Catechist GK",
      forum: "",
      image: "/excos/cate-gk.png",
    },
    {
      id: 14,
      name: "Apaa Felix",
      position: "Asst. Catechist GK",
      forum: "",
      image: "/excos/asst-cate-gk.png",
    },
    {
      id: 12,
      name: "Abuh Emmanuel Alechine",
      position: "Catechist Bosso",
      forum: "Luminous",
      image: "/excos/cate-bosso.png",
    },
    {
      id: 9,
      name: "Asaka Leo Jime",
      position: "Asst. Catechist Bosso",
      forum: "Luminous",
      image: "/excos/asst-cate-bosso.png",
    },
    {
      id: 10,
      name: "Ogbobe Faith Ndidiamaka",
      position: "Sisters's Cordinator GK",
      forum: "Luminous",
      image: "/excos/sis-cord-gk.png",
    },
    {
      id: 15,
      name: "Loveth Ufedoojo Kiara Joel",
      position: "Assistant Sisters's Cordinator GK",
      forum: "Luminous",
      image: "/excos/asst-sis-cord-gk.png",
    },
    {
      id: 11,
      name: "Marachi Odoh",
      position: "Sister's Cordinator",
      forum: "Luminous",
      image: "/excos/sis-cord-bosso.png",
    },
    {
      id: 16,
      name: "Akunne Emmanuel Obinna",
      position: "Brother's Cordinator GK",
      forum: "Luminous",
      image: "/excos/bro-cord-gkk.png",
    },
    {
      id: 17,
      name: "Anayochukwu O. Emmanuel",
      position: "Asst. Brother's Cordinator GK",
      forum: "Luminous",
      image: "/excos/asst-bro-cord-gk.png",
    },
    {
      id: 18,
      name: "Chubuike D. Kaosisochukwu",
      position: "Tresurer Bosso",
      forum: "Luminous",
      image: "/excos/tresurer-gk.png",
    },
    {
      id: 19,
      name: "Uche Emmanuel Chiwendu",
      position: "PRO Bosso",
      forum: "Luminous",
      image: "/excos/pro-bosso.png",
    },
    {
      id: 20,
      name: "Izuakor Chinedu",
      position: "Mr NFCS",
      forum: "Luminous",
      image: "/excos/mr-nfcs.png",
    },
    {
      id: 21,
      name: "Ihemadu Ugochi Maryann",
      position: "Miss NFCS",
      forum: "Luminous",
      image: "/excos/mr-nfcs.png",
    },
    {
      id: 22,
      name: "Odah Bartholomew Onyilo",
      position: "Brothers Cordinator Bosso",
      forum: "Luminous",
      image: "/excos/bro-cord-bosso.png",
    },
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 pt-20 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Animated Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl bg-gradient-to-r from-gray-600 to-gray-800 bg-clip-text ">
            Chaplaincy Executive Council
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Our dedicated team serving the NFCS community
          </p>
          <div className="mt-6 h-1 w-24 bg-gray-500 mx-auto rounded-full" />
        </motion.div>

        {/* Executives Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {executives.map((executive) => (
            <motion.div
              key={executive.id}
              variants={item}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group relative overflow-hidden rounded-xl shadow-lg bg-white border border-gray-200 hover:shadow-xl transition-all duration-300"
            >
              {/* Amber accent bar */}
              <div className="absolute top-0 left-0 h-full w-1.5 bg-gray-500" />

              <div className="p-6 flex flex-col h-full">
                {/* Profile Image or Placeholder */}
                <div className="mb-4 relative">
                  {executive.image ? (
                    <motion.img
                      src={executive.image}
                      alt={executive.name}
                      className="w-32 h-32 rounded-full object-cover mx-auto border-4 border-gray-200 group-hover:border-gray-300 transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                    />
                  ) : (
                    <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto flex items-center justify-center border-4 border-gray-200 group-hover:border-gray-300 transition-colors duration-300">
                      <svg
                        className="w-16 h-16 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </div>
                  )}
                </div>

                {/* Executive Details */}
                <div className="text-center flex-grow">
                  <motion.h3
                    className="text-xl font-bold text-gray-800 mb-1 hover:text-gray-500"
                    whileHover={{ color: "" }} // amber-700
                  >
                    {executive.name}
                  </motion.h3>
                  <p className="text-gray-600 font-medium mb-2">
                    {executive.position}
                  </p>
                </div>

                {/* Contact Button */}
                {/* <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-4 w-full py-2 bg-gradient-to-r from-gray-500 to-gray-600 text-white rounded-lg font-medium hover:from-gray-600 hover:to-gray-700 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Contact
                </motion.button> */}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center text-gray-500 text-sm"
        >
          <p>Together we serve in faith and fellowship</p>
        </motion.div>
      </div>
    </div>
  );
};

export default ExecutivesPage;
