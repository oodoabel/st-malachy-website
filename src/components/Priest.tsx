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
    <div
      className="
        flex flex-col items-center rounded-lg bg-white p-6 shadow-md 
        transition-transform duration-300 ease-in-out 
        hover:shadow-lg hover:-translate-y-2 hover:scale-105
        animate-fadeInUp
      "
    >
      <div className="relative mb-4 h-40 w-40 overflow-hidden rounded-full">
        <Image
          src={priest.imageUrl}
          alt={`Portrait of ${priest.name}`}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, 200px"
        />
      </div>
      <h3 className="text-xl font-bold text-gray-900">{priest.name}</h3>
      <p className="text-gray-600">{priest.office}</p>
    </div>
  );
};

const PriestsListing = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">
          Our Clergy
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {priests.map((priest) => (
            <PriestCard key={priest.id} priest={priest} />
          ))}
        </div>
        <ExecutiveTeam />
      </div>
    </section>
  );
};

export default PriestsListing;
