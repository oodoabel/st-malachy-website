import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Executive = {
  id: number;
  name: string;
  position: string;
  imageUrl: string;
};

const executives: Executive[] = [
  {
    id: 4,
    name: "Prof. H.A Makun",
    position: "Chaplaincy Chairman",
    imageUrl: "/chaplaincyChairman.png",
  },
  {
    id: 1,
    name: "Ella Solomon Echobu",
    position: "President",
    imageUrl: "/presido.png",
  },
  {
    id: 2,
    name: "Arome Perpetual Juliet",
    position: "Vice President GK",
    imageUrl: "/vp-gk.png",
  },
  {
    id: 3,
    name: "Otabo",
    position: "Vice President Bosso",
    imageUrl: "/vp-bosso.png",
  },
];

const ExecutiveCard = ({ executive }: { executive: Executive }) => {
  return (
    <div className="group relative bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-[var(--primary-red)]/50 transition-all duration-500">
      <div className="relative h-64 w-full overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
        <Image
          src={executive.imageUrl}
          alt={`Portrait of ${executive.name}`}
          fill
          className="object-cover object-top transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, 300px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary-navy)] via-transparent to-transparent opacity-60"></div>
      </div>

      <div className="p-6 relative">
        <p className="text-[var(--primary-red)] text-[10px] font-bold uppercase tracking-widest mb-2">
          {executive.position}
        </p>
        <h3 className="text-lg font-bold text-white leading-tight group-hover:text-[var(--primary-red)] transition-colors">
          {executive.name}
        </h3>
      </div>
    </div>
  );
};

const ExecutiveTeam = () => {
  return (
    <section className="py-24 bg-[var(--primary-navy)] relative">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-[var(--primary-red)] font-bold tracking-widest uppercase text-sm mb-3">
              Student Leadership
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white">
              Executive Council
            </h3>
          </div>

          <Link
            href="/executives"
            className="group inline-flex items-center gap-2 text-white font-bold text-sm uppercase tracking-widest hover:text-[var(--primary-red)] transition-colors"
          >
            View Full Council
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {executives.map((executive) => (
            <ExecutiveCard key={executive.id} executive={executive} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExecutiveTeam;
