import React from "react";
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

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Memories", href: "/memories" },
  { name: "Forums", href: "/forums" },
  { name: "Societies", href: "/societies" },
  { name: "Events", href: "/events" },
];

const Hamburger: React.FC = () => {
  return (
    <div>
      <Sheet>
        <SheetTrigger>
          <img
            width={28}
            height={28}
            src="https://img.icons8.com/ios-filled/50/7e7e7e/menu--v1.png"
            alt="menu"
            className="transition-transform duration-200 hover:scale-110 cursor-pointer"
          />
        </SheetTrigger>
        <SheetContent className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-gray-100 shadow-2xl border-0 animate-in fade-in slide-in-from-right-8">
          <SheetHeader>
            <SheetTitle className="text-2xl font-bold tracking-wide text-gray-100 mb-2">
              St. Malachy
            </SheetTitle>
            <SheetDescription>
              Welcome to the St. Malachy community!
            </SheetDescription>
            {/* Move nav and other block elements OUTSIDE of SheetDescription */}
            <nav className="w-full flex flex-col items-center gap-6 mt-4">
              <ul className="flex flex-col gap-2 w-full">
                {navItems.map(({ name, href }) => (
                  <li key={name}>
                    <Link
                      href={href}
                      className="block px-6 py-3 rounded-lg text-lg font-medium bg-gray-800 hover:bg-gray-700 focus:bg-gray-600 transition-colors duration-200 shadow hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                    >
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
              <Button className="h-10 w-full bg-gradient-to-r from-gray-700 via-gray-600 to-gray-800 text-gray-100 font-semibold rounded-lg shadow hover:from-gray-600 hover:to-gray-700 transition-all duration-200 mt-4">
                Sign in
              </Button>
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
