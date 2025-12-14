"use client";
import React from "react";
import { motion } from "framer-motion";
import SocietiesHero from "@/components/SocietiesHero";
import Footer from "@/components/Footer";
import { Clock, Calendar } from "lucide-react";

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
    about: "Drama unit utilizing arts to evangelize.",
    schedule: [{ day: "TBA", time: "" }],
  },
  {
    name: "NFCS Brigade",
    image: "gal5.png",
    about:
      "Ensures order and decorum during chaplaincy events with disciplined movement.",
    schedule: [{ day: "TBA", time: "" }],
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
    schedule: [{ day: "TBA", time: "" }],
  },
  {
    name: "Cadet",
    image: "/images/cadet.png",
    about:
      "Maintains security and provides support during major chaplaincy events.",
    schedule: [{ day: "TBA", time: "" }],
  },
  {
    name: "Media Team",
    image: "/images",
    about: "Capture and document moments/events in the chaplaincy.",
    schedule: [{ day: "TBA", time: "" }],
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

export default function ChaplaincySocieties() {
  return (
    <div className="min-h-screen bg-[var(--primary-bg)] font-sans selection:bg-[var(--primary-red)] selection:text-white">
      <SocietiesHero />

      <section className="py-24 sm:py-32 relative">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-[var(--primary-red)] font-bold tracking-widest uppercase text-sm mb-4">
              Our Ministries
            </h2>
            <h3 className="text-4xl sm:text-5xl font-black text-[var(--text-primary)] mb-6">
              Serve & Grow
            </h3>
            <p className="text-xl text-[var(--text-secondary)]">
              Explore the various societies and find where you can best use your talents for God's glory.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {societies.map((society, index) => (
              <motion.div
                key={society.name}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={cardVariants}
                whileHover={{ y: -10 }}
                className="group relative bg-white rounded-3xl overflow-hidden border border-[var(--border-color)] hover:border-[var(--primary-red)]/30 hover:shadow-2xl hover:shadow-[var(--primary-red)]/10 transition-all duration-300 flex flex-col h-full"
              >
                {/* Image Area */}
                <div className="relative h-56 overflow-hidden bg-[var(--secondary-bg)]">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                  {society.image && !society.image.includes("/images") ? ( // Simple check for valid image path
                    <img
                      src={society.image}
                      alt={society.name}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-[var(--text-secondary)]">
                      <span className="text-4xl font-black opacity-20">{society.name.charAt(0)}</span>
                    </div>
                  )}
                  <div className="absolute bottom-4 left-6 z-20">
                    <h2 className="text-2xl font-bold text-white leading-tight">
                      {society.name}
                    </h2>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-8 flex flex-col flex-grow">
                  <p className="text-[var(--text-secondary)] mb-6 leading-relaxed flex-grow">
                    {society.about}
                  </p>

                  <div className="pt-6 border-t border-[var(--border-color)]">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-[var(--secondary-bg)] rounded-lg text-[var(--primary-red)]">
                        <Calendar className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-[var(--text-secondary)] uppercase tracking-wider mb-1">Meeting Schedule</p>
                        <ul className="space-y-1">
                          {society.schedule.map((item, i) => (
                            <li key={i} className="text-sm font-medium text-[var(--text-primary)]">
                              {item.day} {item.time && `- ${item.time}`}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
