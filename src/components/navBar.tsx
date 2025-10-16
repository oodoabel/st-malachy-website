"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Hamburger from "./Hamburger";

import React from "react";
import { Home, User, Info, MessageSquare, Users, Calendar } from "lucide-react";
// import useAppContext from "@/context";

type IconProps = React.SVGProps<SVGSVGElement>;

export interface NavItem {
  icon: React.ReactElement<IconProps>;
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
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
  {
    icon: <User className="w-5 h-5 mx-2" />,
    label: "",
    href: "/login",
  },
];

const Navbar = () => {
  return (
    <nav className="fixed top-0 mb-10 w-full bg-gray-800 bg-opacity-95 backdrop-blur-sm shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a
          href="/"
          className="md:text-xl text-lg font-extrabold text-gray-100 hover:text-gray-300 transition"
        >
          St Malachy's Chaplaincy
        </a>

        <ul className="hidden md:flex space-x-10 text-sm font-sans text-gray-300">
          {navItems.map(({ icon, href, label }) => (
            <li key={href} className="ml-2">
              <a
                href={href}
                className="hover:text-gray-100 flex space-x-1 transition-colors duration-300"
              >
                {icon} {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu button placeholder */}
        <div
          aria-label="Toggle menu"
          className="md:hidden text-gray-100 focus:outline-none"
        >
          <div className="md:hidden">
            <Hamburger />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
