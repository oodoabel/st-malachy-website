// components/MissionVision.tsx
import React from "react";
import { Target, Lightbulb } from "lucide-react";

const MissionVision: React.FC = () => {
  return (
    <section className="relative w-full py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-[var(--secondary-bg)] to-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50 to-transparent pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--border-color)] to-transparent"></div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">

          {/* Header Area */}
          <div className="relative">
            <h2 className="text-[var(--primary-red)] font-bold tracking-widest uppercase text-sm mb-4 flex items-center gap-3">
              <span className="w-8 h-[2px] bg-[var(--primary-red)]"></span>
              Our Purpose
            </h2>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-6 sm:mb-8 leading-tight">
              Guided by Faith, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary-red)] to-pink-600">
                Driven by Service.
              </span>
            </h3>
            <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed max-w-md border-l-4 border-[var(--primary-red)] pl-4 sm:pl-6">
              We exist to nurture the spiritual, academic, and social lives of Catholic students, creating a holistic environment for growth.
            </p>
          </div>

          {/* Cards Area */}
          <div className="grid gap-8">
            {/* Mission Card */}
            <div className="group relative p-6 sm:p-8 rounded-2xl bg-white border-2 border-[var(--border-color)] hover:border-[var(--primary-red)]/50 shadow-lg hover:shadow-xl hover:shadow-[var(--primary-red)]/10 transition-all duration-500 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary-red)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[var(--primary-red)] to-pink-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Target className="w-7 h-7 text-white transition-colors" />
                </div>
                <h4 className="text-2xl font-bold text-[var(--text-primary)] mb-4">Our Mission</h4>
                <p className="text-[var(--text-secondary)] leading-relaxed">
                  To fulfill our purpose by integrating spiritual, academic, and social life, ensuring every student finds their place in the body of Christ.
                </p>
              </div>
            </div>

            {/* Vision Card */}
            <div className="group relative p-6 sm:p-8 rounded-2xl bg-white border-2 border-[var(--border-color)] hover:border-blue-500/50 shadow-lg hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-2 ml-0 lg:ml-12 mt-8 lg:mt-0">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Lightbulb className="w-7 h-7 text-white transition-colors" />
                </div>
                <h4 className="text-2xl font-bold text-[var(--text-primary)] mb-4">Our Vision</h4>
                <p className="text-[var(--text-secondary)] leading-relaxed">
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
