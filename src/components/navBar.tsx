"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Hamburger from "./Hamburger";
import React from "react";
import { Home, Info, MessageSquare, Users, Calendar } from "lucide-react";
import Link from "next/link";

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
    <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-white/90 backdrop-blur-md border-b border-[var(--border-color)]">
      <div className="max-w-[1400px] mx-auto px-6 h-20 flex justify-between items-center">
        {/* Logo Area */}
        <a
          href="/"
          className="group flex items-center gap-3"
        >
          <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-[var(--secondary-bg)] border border-[var(--border-color)] group-hover:border-[var(--primary-red)]/50 transition-colors">
            <span className="text-xl text-[var(--primary-red)] font-serif">✝</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[var(--text-primary)] font-bold tracking-wider text-sm uppercase leading-none">St. Malachy's</span>
            <span className="text-[var(--text-secondary)] text-[10px] tracking-[0.2em] uppercase leading-none mt-1 group-hover:text-[var(--primary-red)] transition-colors">Chaplaincy</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map(({ icon, href, label }) => (
            <li key={href}>
              <a
                href={href}
                className="relative group flex items-center gap-2 py-2"
              >
                <span className="text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] text-xs font-bold uppercase tracking-widest transition-colors">
                  {label}
                </span>
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[var(--primary-red)] transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Auth Buttons (Desktop) */}
        <div className="hidden md:flex items-center gap-4 ml-8">
          <Link href="/login" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] font-bold text-sm transition-colors">
            Log In
          </Link>
          <Link href="/register" className="px-5 py-2.5 bg-[var(--primary-red)] text-white rounded-full font-bold text-sm hover:shadow-lg hover:shadow-[var(--primary-red)]/20 transition-all transform hover:-translate-y-0.5">
            Join Us
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <Hamburger navItems={navItems} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
