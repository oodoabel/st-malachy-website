import React from "react";
import { Clock, MapPin } from "lucide-react";

const massTimes = [
  {
    day: "Sunday",
    location: "Bosso Campus",
    time: "7:00 AM",
    note: "",
  },
  {
    day: "Sunday",
    location: "Gidan Kwano",
    time: "8:00 AM",
    note: "",
  },
  {
    day: "Tuesday",
    location: "Gidan Kwano",
    time: "6:00 AM",
    note: "",
  },
  {
    day: "Wednesday",
    location: "Bosso Campus",
    time: "6:00 PM",
    note: "Confession @ 5:00PM",
  },
  {
    day: "Thursday",
    location: "Gidan Kwano",
    time: "6:00 PM",
    note: "Confession @ 5:00PM",
  },
];

const MassSchedule = () => {
  return (
    <section className="w-full py-20 bg-white border-t border-[var(--border-color)]">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-[var(--primary-red)] font-bold tracking-widest uppercase text-sm mb-3">
              Worship With Us
            </h2>
            <h3 className="text-4xl font-bold text-[var(--text-primary)]">
              Mass Schedule
            </h3>
          </div>
          <p className="text-[var(--text-secondary)] max-w-md">
            Join us in the celebration of the Holy Eucharist.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {massTimes.map((mass, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-white to-[var(--secondary-bg)] border-2 border-[var(--border-color)] rounded-xl p-6 hover:border-[var(--primary-red)]/50 hover:shadow-lg hover:shadow-[var(--primary-red)]/10 transition-all duration-300"
            >
              <div className="flex justify-between text-center md:flex-col items-start mb-4">
                <span className="text-[var(--text-primary)] font-bold text-lg">
                  {mass.day}
                </span>
                <span className="px-3 py-1 rounded-full bg-[var(--primary-red)] text-white text-xs font-bold uppercase tracking-wider shadow-md">
                  {mass.time}
                </span>
              </div>

              <div className="flex items-center gap-2 text-[var(--text-secondary)] text-sm mb-2">
                <MapPin className="w-4 h-4" />
                {mass.location}
              </div>

              {mass.note && (
                <div className="mt-4 pt-4 border-t border-white/10 flex items-center gap-2 text-xs text-[var(--primary-red)] font-medium">
                  <Clock className="w-3 h-3" />
                  {mass.note}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MassSchedule;
