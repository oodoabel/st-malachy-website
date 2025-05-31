import { Button } from "@/components/ui/button";
import Link from "next/link";
import Slider from "react-slick";

// Import slick-carousel css in your global styles or here:
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Hamburger from "./Hamburger";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Memories", href: "/about/forums" },
  { name: "Forums", href: "/about/forums" },
  { name: "Societies", href: "/about/forums" },
  { name: "Events", href: "/events" },
];

const Navbar = () => {
  return (
    <div>
      <nav className="fixed top-0 w-full bg-gray-800 bg-opacity-95 backdrop-blur-sm shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <a
            href="/"
            className="text-2xl font-serif font-extrabold text-gray-100 hover:text-gray-300 transition"
          >
            NFCS FUTMINNA
          </a>

          <ul className="hidden md:flex space-x-10 font-medium text-gray-300">
            {navItems.map(({ name, href }) => (
              <li key={name}>
                <a
                  href={href}
                  className="hover:text-gray-100 transition-colors duration-300"
                >
                  {name}
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

      <div className=" hidden  items-center justify-between text-gray-800 font-extrabold p-4 lg:p-6 lg:text-3xl  bg-white/80 backdrop-blur-sm fixed z-10 w-screen">
        <Link href="/" className=" lg:flex">
          St Malachy
        </Link>
        <div className="hidden md:flex font-light text-sm items-center ">
          <Link className="md:px-5" href="#">
            About
          </Link>
          <Link className="md:px-5" href="#">
            Contact us
          </Link>
          <Link className="md:px-5" href="#">
            Gallery
          </Link>
          <Link className="md:px-5" href="#">
            Executives
          </Link>
          <Link className="md:px-5" href="#">
            Mission
          </Link>
          <Link className="md:px-5" href="#">
            Vision
          </Link>
          <Link className="md:px-5" href="#">
            Forums
          </Link>
          <Link className="md:px-5" href="#">
            Societies
          </Link>
          <Button className="h-7 w-15 md:w-20 md:h-9">Sign in</Button>
        </div>
        <div className="md:hidden">
          <Hamburger />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
