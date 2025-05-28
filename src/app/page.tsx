import Link from "next/link";
import Footer from "@/components/Footer";
import PriestsListing from "@/components/Priest";
import ExecutiveTeam from "@/components/excos";
import MissionVision from "@/components/Vission";
import NavbarHero from "@/components/HeroSection";

export default function Home() {
  return (
    <div className="">
      <NavbarHero />
      <MissionVision />
      <PriestsListing />
      <ExecutiveTeam />
      <Footer />
    </div>
  );
}
