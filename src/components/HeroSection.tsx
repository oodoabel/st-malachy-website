"use client";
import React from "react";
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

const images = [
  "/gal1.png",
  "/gal2.png",
  "/gal3.png",
  "/gal4.png",
  "/gal5.png",
  "/gal6.png",
  "/gal7.png",
  "/gal8.png",
  "/gal9.png",
];

const NavbarHero: React.FC = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4500,
    arrows: true,
    pauseOnHover: true,
    fade: true,
  };

  return (
    <>
      Navbar
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
      {/* Hero Section */}
      <section className="pt-15 min-h-screen lg:px-50 bg-gray-100 flex flex-col md:flex-row items-center mx-auto px-6 gap-12">
        {/* Left Text Content */}
        <div className="md:w-1/2 space-y-8">
          <h1 className="text-5xl font-serif font-extrabold text-gray-900 leading-tight">
            Welcome to St. Malachy Chaplaincy
          </h1>

          <div className="flex flex-wrap gap-6 pt-4">
            <a
              href="/about"
              className="bg-gray-800 text-gray-100 px-8 py-3 rounded-md font-semibold shadow-md hover:bg-gray-700 transition"
            >
              Register as an NFCSer
            </a>
            <a
              href="/about/forums"
              className="border-2 border-gray-800 text-gray-800 px-8 py-3 rounded-md font-semibold hover:bg-gray-800 hover:text-gray-100 transition"
            >
              Our Forums
            </a>
          </div>
        </div>

        {/* Right Image Slider */}
        <div className="md:w-1/2 w-full rounded-lg overflow-hidden shadow-lg">
          <Slider {...sliderSettings}>
            {images.map((src, idx) => (
              <div key={idx} className="h-96 md:h-[500px] relative">
                <img
                  src={src}
                  alt={`Gallery image ${idx + 1}`}
                  className="w-full h-full object-cover rounded-lg"
                  loading="lazy"
                />
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default NavbarHero;
