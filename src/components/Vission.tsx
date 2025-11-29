// components/MissionVision.tsx
import React from "react";
import { Target, Lightbulb } from "lucide-react";

const MissionVision: React.FC = () => {
  return (
    <section className="relative w-full py-24 bg-[var(--primary-navy)] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[var(--primary-red)]/5 to-transparent pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Header Area */}
          <div className="relative">
            <h2 className="text-[var(--primary-red)] font-bold tracking-widest uppercase text-sm mb-4 flex items-center gap-3">
              <span className="w-8 h-[2px] bg-[var(--primary-red)]"></span>
              Our Purpose
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
              Guided by Faith, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-silver)] to-white/50">
                Driven by Service.
              </span>
            </h3>
            <p className="text-[var(--accent-silver)] text-lg leading-relaxed max-w-md border-l-2 border-[var(--primary-red)] pl-6">
              We exist to nurture the spiritual, academic, and social lives of Catholic students, creating a holistic environment for growth.
            </p>
          </div>

          {/* Cards Area */}
          <div className="grid gap-8">
            {/* Mission Card */}
            <div className="group relative p-8 rounded-2xl glass-card-dark border border-white/5 hover:border-[var(--primary-red)]/30 transition-all duration-500 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary-red)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-full bg-[var(--primary-red)]/10 flex items-center justify-center mb-6 group-hover:bg-[var(--primary-red)] transition-colors duration-300">
                  <Target className="w-6 h-6 text-[var(--primary-red)] group-hover:text-white transition-colors" />
                </div>
                <h4 className="text-2xl font-bold text-white mb-4">Our Mission</h4>
                <p className="text-[var(--accent-silver)] leading-relaxed">
                  To fulfill our purpose by integrating spiritual, academic, and social life, ensuring every student finds their place in the body of Christ.
                </p>
              </div>
            </div>

            {/* Vision Card */}
            <div className="group relative p-8 rounded-2xl glass-card-dark border border-white/5 hover:border-[var(--primary-red)]/30 transition-all duration-500 hover:-translate-y-2 ml-0 lg:ml-12">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary-red)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-full bg-[var(--primary-red)]/10 flex items-center justify-center mb-6 group-hover:bg-[var(--primary-red)] transition-colors duration-300">
                  <Lightbulb className="w-6 h-6 text-[var(--primary-red)] group-hover:text-white transition-colors" />
                </div>
                <h4 className="text-2xl font-bold text-white mb-4">Our Vision</h4>
                <p className="text-[var(--accent-silver)] leading-relaxed">
                  Enhancing spiritual growth and ensuring members are guided by Catholic principles in their educational pursuits and beyond.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MissionVision;
