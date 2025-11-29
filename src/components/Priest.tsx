import React from "react";
import Image from "next/image";
import Link from "next/link";
import ExecutiveTeam from "./excos";

type Priest = {
  id: number;
  name: string;
  office: string;
  imageUrl: string;
};

const priests: Priest[] = [
  {
    id: 1,
    name: "Very Rv. Fr. Nelson Gabriel Onuh",
    office: "Chaplain NFCS National/Futminna",
    imageUrl: "/fr-nelson.png",
  },
  {
    id: 2,
    name: "Rev. Fr. Jean Patasitti",
    office: "Assisting Chaplain, NFCS Futminna",
    imageUrl: "/fr-patasitti2.png",
  },
  {
    id: 3,
    name: "Rev. Fr Benedict Sedi",
    office: "Assisting Chaplain, NFCS Futminna",
    imageUrl: "/fr-sedi.png",
  },
];

const PriestCard = ({ priest }: { priest: Priest }) => {
  return (
    <div className="group relative">
      <div className="relative h-[400px] w-full overflow-hidden rounded-xl bg-white/5 grayscale transition-all duration-500 group-hover:grayscale-0">
        <Image
          src={priest.imageUrl}
          alt={`Portrait of ${priest.name}`}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, 400px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary-navy)] via-transparent to-transparent opacity-80"></div>

        <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <p className="text-[var(--primary-red)] text-xs font-bold uppercase tracking-widest mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
            {priest.office}
          </p>
          <h3 className="text-2xl font-bold text-white leading-tight">
            {priest.name}
          </h3>
        </div>
      </div>
    </div>
  );
};

const PriestsListing = () => {
  return (
    <section className="bg-[var(--primary-navy)] py-24 relative overflow-hidden">
      {/* Background Text */}
      <div className="absolute top-10 right-0 pointer-events-none select-none opacity-5">
        <h2 className="text-[10vw] font-black text-white leading-none text-right">
          LEADERS<br />GUIDES
        </h2>
      </div>

      <div className="mx-auto max-w-[1400px] px-6 relative z-10">
        <div className="mb-16">
          <h2 className="text-[var(--primary-red)] font-bold tracking-widest uppercase text-sm mb-4 flex items-center gap-3">
            <span className="w-8 h-[2px] bg-[var(--primary-red)]"></span>
            Our Shepherds
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white">
            Spiritual Leadership
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {priests.map((priest) => (
            <PriestCard key={priest.id} priest={priest} />
          ))}
        </div>

        {/* Executives Section Integration */}
        {/* <ExecutiveTeam /> */}
        {/* Commented out for now to focus on the main flow, can be re-enabled or redesigned separately */}
      </div>
    </section>
  );
};

export default PriestsListing;
