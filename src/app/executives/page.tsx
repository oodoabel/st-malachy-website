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
      name: "Rev. Fr. Emmanuel Adebayo",
      position: "Chaplain",
      forum: "Chaplaincy Board",
      image: "/chaplain.jpg",
    },
    {
      id: 2,
      name: "Bro. John Okafor",
      position: "President",
      forum: "St. Peter's Forum",
    },
    {
      id: 3,
      name: "Sis. Grace Oluwaseun",
      position: "Vice President",
      forum: "St. Mary's Forum",
    },
    {
      id: 4,
      name: "Bro. Michael Ajayi",
      position: "Secretary",
      forum: "St. Paul's Forum",
    },
    {
      id: 5,
      name: "Sis. Sarah Chukwu",
      position: "Treasurer",
      forum: "St. Theresa's Forum",
    },
    {
      id: 6,
      name: "Bro. David Okonkwo",
      position: "Public Relations Officer",
      forum: "St. Jude's Forum",
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
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Animated Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl bg-gradient-to-r from-gray-600 to-gray-800 bg-clip-text text-transparent">
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
