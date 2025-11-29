"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Hamburger from "./Hamburger";
import React from "react";
import { Home, Info, MessageSquare, Users, Calendar } from "lucide-react";

type IconProps = React.SVGProps<SVGSVGElement>;

export interface NavItem {
  icon: React.ReactElement<IconProps>;
  label: string;
  href: string;
}

const Navbar = () => {
  const navItems: NavItem[] = [
    { icon: <Home className="w-5 h-5 mx-2" />, label: "Home", href: "/" },
    { icon: <Info className="w-5 h-5 mx-2" />, label: "About", href: "/about" },
    {
      icon: <MessageSquare className="w-5 h-5 mx-2" />,
      label: "Forums",
      href: "/about/forums",
    },
    {
      icon: <Users className="w-5 h-5 mx-2" />,
      label: "Societies",
      href: "/societies",
    },
    {
      icon: <Calendar className="w-5 h-5 mx-2" />,
      label: "Events",
      href: "/event",
    },
  ];

  return (
    <nav className="fixed top-0 mb-10 w-full glass-card-dark shadow-lg z-50 border-b border-[var(--primary-gold)]/20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a
          href="/"
          className="md:text-xl text-lg font-extrabold text-[var(--primary-gold)] hover:text-[var(--primary-gold)]/80 transition-colors duration-300 flex items-center gap-2"
        >
          <span className="text-2xl">✝</span>
          St Malachy's Chaplaincy
        </a>

        <ul className="hidden md:flex space-x-8 text-sm font-medium text-gray-200">
          {navItems.map(({ icon, href, label }) => (
            <li key={href} className="ml-2">
              <a
                href={href}
                className="hover:text-[var(--primary-gold)] flex items-center space-x-1 transition-all duration-300 group relative"
              >
                <span className="group-hover:scale-110 transition-transform duration-300">
                  {icon}
                </span>
                <span>{label}</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--primary-gold)] transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <div
          aria-label="Toggle menu"
          className="md:hidden text-[var(--primary-gold)] focus:outline-none"
        >
          <div className="md:hidden">
            <Hamburger navItems={navItems} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
