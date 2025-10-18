import React from "react";
import { FaHamburger } from "react-icons/fa";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { Button } from "./ui/button";
import { NavItem } from "./navBar";

const Hamburger: React.FC<{ navItems: NavItem[] }> = ({ navItems }) => {
  return (
    <div>
      <Sheet>
        <SheetTrigger className="">
          <img
            width={28}
            height={28}
            src="https://img.icons8.com/ios-filled/50/7e7e7e/menu--v1.png"
            alt="menu"
            className="transition-transform duration-200 hover:scale-110  text-gray-100 hover:text-gray-300 cursor-pointer"
          />
        </SheetTrigger>
        <SheetContent className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-gray-100 shadow-2xl border-0 animate-in fade-in slide-in-from-right-8">
          <SheetHeader>
            <SheetTitle className="text-2xl font-bold tracking-wide text-gray-100 mb-2">
              St. Malachy
            </SheetTitle>
            <SheetDescription>
              Welcome to the St. Malachy chaplaincy!
            </SheetDescription>
            {/* Move nav and other block elements OUTSIDE of SheetDescription */}
            <nav className="w-full flex flex-col items-center gap-6 mt-4">
              <ul className="flex flex-col gap-2 w-full">
                {navItems.map(({ icon, href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="flex items-center px-6 py-3 rounded-lg text-lg font-medium bg-transparent hover:bg-gray-700 focus:bg-gray-600 transition-colors duration-200 shadow hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                    >
                      {icon} {label}
                    </Link>
                  </li>
                ))}
              </ul>
              {/* <a href="/login">
                <Button className="h-10 w-full bg-gradient-to-r from-gray-700 via-gray-600 to-gray-800 text-gray-100 font-semibold rounded-lg shadow hover:from-gray-600 hover:to-gray-700 transition-all duration-200 mt-4">
                  Sign in
                </Button>
              </a> */}
              <div className="flex justify-center items-center gap-6 pt-6">
                <img
                  className="h-12 w-auto grayscale hover:grayscale-0 transition duration-300"
                  src="futminna-logo.png"
                  alt="FUTMinna Logo"
                />
                <img
                  className="h-12 w-auto grayscale hover:grayscale-0 transition duration-300"
                  src="nfcs-logo.png"
                  alt="NFCS Logo"
                />
              </div>
            </nav>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Hamburger;
