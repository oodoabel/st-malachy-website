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

const Hamburger = () => {
  return (
    <div>
      <Sheet>
        <SheetTrigger>
          <img
            width="20"
            height="20"
            src="https://img.icons8.com/ios-filled/50/menu--v1.png"
            alt="menu-squared-2"
          />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>St. Malachy</SheetTitle>
            <SheetDescription className="flex flex-col justify-center items-center mb-5 gap-3">
              <Link href="#">About</Link>
              <Link href="#">Contact us</Link>
              <Link href="#">Gallery</Link>
              <Link href="#">Events</Link>
              <Link href="#">Executives</Link>
              <Link href="#">Forums</Link>
              <Link href="#">Societies</Link>

              <Button className="h-7 w-full md:w-20 md:h-9">Sign in</Button>
              <span className="flex justify-center items-center gap-4 pt-6">
                <img className="h-10 md:h-20" src="futminna-logo.png" alt="" />
                <img className="h-10 md:h-20" src="nfcs-logo.png" alt="" />
              </span>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Hamburger;
