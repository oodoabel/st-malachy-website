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
    <div className="group relative bg-white border-2 border-[var(--border-color)] rounded-2xl overflow-hidden hover:border-[var(--primary-red)]/50 shadow-lg hover:shadow-xl hover:shadow-[var(--primary-red)]/10 transition-all duration-500">
      <div className="relative h-[400px] w-full overflow-hidden transition-all duration-500">
        <Image
          src={priest.imageUrl}
          alt={`Portrait of ${priest.name}`}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, 400px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>

        <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/90 to-transparent">
          <p className="text-[var(--primary-red)] text-xs font-bold uppercase tracking-widest mb-2">
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
    <section className="bg-gradient-to-b from-white to-[var(--secondary-bg)] py-24 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-10 right-0 w-96 h-96 bg-gradient-to-br from-[var(--primary-red)]/5 to-transparent rounded-full blur-3xl"></div>

      <div className="mx-auto max-w-[1400px] px-6 relative z-10">
        <div className="mb-16">
          <h2 className="text-[var(--primary-red)] font-bold tracking-widest uppercase text-sm mb-4 flex items-center gap-3">
            <span className="w-8 h-[2px] bg-[var(--primary-red)]"></span>
            Our Shepherds
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)]">
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
