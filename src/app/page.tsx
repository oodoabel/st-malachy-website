import Link from "next/link";
import Footer from "@/components/Footer";
import PriestsListing from "@/components/Priest";
// import MissionVision from "@/components/Vission";
import NavbarHero from "@/components/HeroSection";
import MassSchedule from "@/components/MassSchedule";
import ExecutiveTeam from "@/components/excos";

export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      <NavbarHero />
      {/* <MissionVision /> */}
      <MassSchedule />
      <PriestsListing />
      <ExecutiveTeam />
      <Footer />
    </div>
  );
}
