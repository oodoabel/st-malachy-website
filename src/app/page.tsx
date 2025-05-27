import { AboutUs } from "@/components/AboutUs";
import Slider from "@/components/Slider";
import Staffs from "@/components/Staffs";
import Vission from "@/components/Vission";
import about from "@/components/About";
import Link from "next/link";
import SetPersons from "@/components/SetPersons";
import Footer from "@/components/Footer";
import PriestsListing from "@/components/Priest";
import ExecutiveTeam from "@/components/excos";

export default function Home() {
  return (
    <div className="">
      <Slider />
      <AboutUs />
      {/* <SetPersons /> */}
      <PriestsListing />
      <ExecutiveTeam />
      <Footer />
    </div>
  );
}
