"use client";
import React from "react";
import { motion } from "framer-motion";

// Simple Card component
function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl shadow-lg bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 hover:shadow-xl transition-all overflow-hidden">
      {children}
    </div>
  );
}

// Simple CardContent wrapper
function CardContent({ children }: { children: React.ReactNode }) {
  return <div className="p-6 space-y-4">{children}</div>;
}

const societies = [
  {
    name: "Sacred Heart Choir (SHC)",
    image: "/images/shc.png",
    about:
      "Leads worship through choral music during services and special programs.",
    schedule: [
      { day: "Wednesday", time: "5:00 PM - 7:00 PM" },
      { day: "Saturday", time: "4:00 PM - 6:00 PM" },
    ],
  },
  {
    name: "Lectors",
    image: "/images/lectors.png",
    about: "Proclaim the Word of God during Mass and liturgical celebrations.",
    schedule: [{ day: "Thursday", time: "After mass" }],
  },
  {
    name: "Legion of Mary",
    image: "/images/legion.png",
    about: "Engages in spiritual works of mercy and Marian devotions.",
    schedule: [{ day: "Sunday", time: "after mass" }],
  },
  {
    name: "Altar Knights",
    image: "/images/altar.png",
    about: "Assist the priest during Mass and maintain the altar.",
    schedule: [{ day: "Friday", time: "5:30pm" }],
  },
  {
    name: "Divine Mercy Apostolate",
    image: "/images/divinemercy.png",
    about:
      "Promotes devotion to the Divine Mercy through prayers and outreach.",
    schedule: [{ day: "Sunday", time: "2:45 pm" }],
  },
  {
    name: "St Vincent de Paul Society",
    image: "/images/vincent.png",
    about: "Supports the poor and less privileged through acts of charity.",
    schedule: [{ day: "Thursday", time: "After mass" }],
  },
  {
    name: "CCRN",
    image: "/images/ccrn.png",
    about:
      "Catholic Charismatic Renewal ministry focusing on prayer, healing and evangelism.",
    schedule: [{ day: "Sundays", time: "4:00pm" }],
  },
  {
    name: "Talent Theater",
    image: "/images/talent.png",
    about: "Drama unit",
    schedule: [{ day: "days", time: "" }],
  },
  {
    name: "NFCS Brigade",
    image: "gal5.png",
    about:
      "Ensures order and decorum during chaplaincy events with disciplined movement and formation.",
    schedule: [{ day: "", time: "" }],
  },
  {
    name: "Precious Blood of Jesus",
    image: "/images/preciousblood.png",
    about:
      "Promotes devotion to the Most Precious Blood of Jesus through prayers.",
    schedule: [{ day: "Thursdays", time: "after mass" }],
  },
  {
    name: "Purgatorial Society",
    image: "/images/purgatory.png",
    about:
      "Prays for the souls in purgatory and spreads teachings on the afterlife.",
    schedule: [{ day: "Saturday", time: "9:00AM" }],
  },
  {
    name: "Church Wardens",
    image: "/images/wardens.png",
    about:
      "Manages orderliness during church services and assists in logistics.",
    schedule: [{ day: "", time: "" }],
  },
  {
    name: "Cadet",
    image: "/images/cadet.png",
    about:
      "Maintains security and provides support during major chaplaincy events.",
    schedule: [{ day: "", time: "" }],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function ChaplaincySocieties() {
  return (
    <div className="min-h-screen mt-10 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 py-12 px-4 sm:px-8">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-800 drop-shadow-md">
        Chaplaincy Societies & Departments
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {societies.map((society, index) => (
          <motion.div
            key={society.name}
            custom={index}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            whileHover={{ scale: 1.03 }}
          >
            <Card>
              <img
                src={society.image}
                alt={society.name}
                className="w-full h-48 object-cover"
              />
              <CardContent>
                <h2 className="text-2xl font-bold text-gray-800 border-b border-gray-300 pb-2">
                  {society.name}
                </h2>
                <p className="text-gray-700">
                  <span className="font-semibold">About:</span> {society.about}
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Meeting Schedule:</span>
                </p>
                <ul className="list-disc list-inside text-gray-700">
                  {society.schedule.map((item, i) => (
                    <li key={i}>
                      {item.day}: {item.time}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
