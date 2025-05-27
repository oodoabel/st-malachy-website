// components/MissionVision.tsx
import React from "react";

const MissionVision: React.FC = () => {
  return (
    <section className="max-w-5xl mx-auto my-16 px-6 py-12 bg-gray-50 rounded-3xl shadow-lg border border-gray-300">
      <h2 className="text-4xl font-extrabold text-gray-800 mb-12 text-center tracking-wide">
        Our Mission & Vision
      </h2>
      <div className="flex flex-col md:flex-row gap-12">
        {/* Mission */}
        <div className="flex-1 bg-white rounded-2xl p-8 shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4 border-b border-gray-300 pb-2">
            Mission
          </h3>
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">
            {`We were founded for a purpose, just as you were created for a purpose too! At the NFCS, we are always working towards fulfilling our purpose, and what do you think that purpose will worth if it does not include your spiritual, academic and social life as a Catholic student?`}
          </p>
        </div>

        {/* Vision */}
        <div className="flex-1 bg-white rounded-2xl p-8 shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4 border-b border-gray-300 pb-2">
            Vision
          </h3>
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">
            {`Enhancing the spiritual growth of her members, ensuring that they are imbibed with and guided by Catholic principles in their educational pursuits and manifest same during and after school life. To serve as a rallying point for all Catholic students in the local chapter, by helping to co-ordinate their religious life.`}
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
