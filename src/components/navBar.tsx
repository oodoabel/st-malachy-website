import { Button } from "@/components/ui/button";
import Link from "next/link";
import Hamburger from "./Hamburger";

const Navbar = () => {
  return (
    <div>
      <div className="flex items-center justify-between font-extrabold p-4 lg:p-6 lg:text-3xl  bg-white/80 backdrop-blur-sm fixed z-10 w-screen">
        <Link href="/" className=" lg:flex">
          St Malachy
        </Link>
        <div className="hidden md:flex font-light text-sm items-center ">
          <Link className="md:px-10" href="#">
            About
          </Link>
          <Link className="md:px-10" href="#">
            Contact us
          </Link>
          <Link className="md:px-10" href="#">
            Gallery
          </Link>
          <Link className="md:px-10" href="#">
            Executives
          </Link>
          <Link className="md:px-10" href="#">
            Mission
          </Link>
          <Link className="md:px-10" href="#">
            Vision
          </Link>
          <Link className="md:px-10" href="#">
            Forums
          </Link>
          <Link className="md:px-10" href="#">
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
