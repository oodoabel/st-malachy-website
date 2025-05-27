import React from "react";
import Image from "next/image";
import Link from "next/link";

type Executive = {
  id: number;
  name: string;
  position: string;
  imageUrl: string;
};

const executives: Executive[] = [
  {
    id: 1,
    name: "Ella Solomon Echobu",
    position: "President",
    imageUrl: "/presido.png",
  },
  {
    id: 2,
    name: "Arome Perpetual Juliet",
    position: "Vice president GK",
    imageUrl: "/vp-gk.png",
  },
  {
    id: 3,
    name: "Otabo",
    position: "Vice president Bosso",
    imageUrl: "/vp-bosso.png",
  },
  {
    id: 4,
    name: "Ojone Mercy Obute",
    position: "Secretary",
    imageUrl: "/sec-gk.png",
  },
];

const ExecutiveCard = ({ executive }: { executive: Executive }) => {
  return (
    <div className="group overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 hover:shadow-lg">
      <div className="relative h-52 w-full overflow-hidden">
        <Image
          src={executive.imageUrl}
          alt={`Portrait of ${executive.name}`}
          fill
          className="object-contain transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, 300px"
        />
      </div>
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold text-gray-800">
          {executive.name}
        </h3>
        <p className="text-blue-600">{executive.position}</p>
      </div>
    </div>
  );
};

const ExecutiveTeam = () => {
  return (
    <section className="py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col items-center justify-between sm:flex-row">
          <div className="mb-4 sm:mb-0">
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
              Our Leadership Team
            </h2>
          </div>
          <Link
            href="/executives"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          >
            View All Executives
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-1 h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {executives.map((executive) => (
            <ExecutiveCard key={executive.id} executive={executive} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExecutiveTeam;
