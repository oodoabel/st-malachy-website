import { AboutUs } from "@/components/AboutUs";
import Slider from "@/components/Slider";
import Staffs from "@/components/Staffs";
import about from "@/components/About";
import Link from "next/link";
import SetPersons from "@/components/SetPersons";
import Footer from "@/components/Footer";
import PriestsListing from "@/components/Priest";
import ExecutiveTeam from "@/components/excos";
import ChaplaincyAnthem from "@/components/ChaplaincyAnthem";
import MissionVision from "@/components/Vission";

export default function Home() {
  return (
    <div className="">
      <Slider />
      <AboutUs />
      {/* <SetPersons /> */}
      <MissionVision />
      <ChaplaincyAnthem />
      <PriestsListing />
      <ExecutiveTeam />
      <Footer />
    </div>
  );
}
