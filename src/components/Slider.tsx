"use client";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { useRef } from "react";
const pictures = [
  "gal1.png",
  "gal2.png",
  "gal3.png",
  "gal4.png",
  "gal5.png",
  "gal6.png",
  "gal7.png",
  "gal8.png",
  "gal9.png",
];

const Slider = () => {
  const plugin = useRef(
    Autoplay({
      delay: 4000,
    })
  );
  return (
    <div className="h-screen lg:h-[700pt] bg-gray-300 hover-effect">
      {/* <Carousel plugins={[plugin.current]}>
        <CarouselContent>
          {pictures.map((picture, index) => (
            <CarouselItem key={index}>
              <img className="w-full mt-10" src={picture} alt="" />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel> */}
    </div>
  );
};

export default Slider;
