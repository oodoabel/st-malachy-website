import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export const AboutUs = () => {
  return (
    <>
      <div className="flex items-center flex-col p-10">
        <div className="md:px-40">
          <p className="text-lg font-thin md:text-3xl text-gray-400">
            About Us
          </p>
          <p className="text-lg py-4 pt-4 font-serif md:text-4xl text-gray-600">
            ...one family working for Christ!
          </p>

          <div className="md:flex md:flex-row w-full md:h-[500pt] p-1">
            <div className="flex justify-center md:w-1/2 mx:p-20 p-5 ">
              <img src="st-malachy2.png" alt="" />
            </div>

            <div className="md:w-1/2 md:py-[100pt] text-gray-500">
              <p className="md:text-xl text-center">
                {" "}
                Our family working for Jesus Christ is more than just a
                calling—it’s our greatest joy and purpose. We lean on His
                promises, trusting that as we walk in faith, He will use our
                family to shine His light in this world.
              </p>
              <p className="text-3xl md:text-5xl text-center text-gray-700 pt-[20pt]">
                "Do not fear the storms of this world, for the anchor of prayer
                holds fast to the rock of God’s mercy."
              </p>
              <p className="text-center p-10">
                — Inspired by the faith of St. Malachy
              </p>
            </div>
          </div>
        </div>

        <div className="md:flex p-5 gap-4 md:px-40 ">
          <div className="w-full md:w-1/2 pb-5 font-sans text-left text-md md:text-xl border-b border-r md:border-t border-gray-400 flex flex-col">
            <div className="px-3">
              <p className="flex gap-2 font-bold text-gray-600 text-xl pt-5 md:text-4xl">
                <img
                  className="h-10 w-10"
                  src="mission.png"
                  alt="mission icon"
                />
                Mission
              </p>
              We were founded for a purpose, just as you were created for a
              purpose too! At the NFCS, we are always working towards fulfilling
              our purpose, and what do you think that purpose will worth if it
              does not include your spiritual, academic and social life as a
              Catholic student?
            </div>
          </div>

          <div className="w-full md:w-1/2 pb-5 font-sans text-left text-md md:text-xl border-b border-r md:border-t border-gray-400 flex flex-col">
            <div className="px-3">
              <p className="flex gap-1 items-center font-bold text-gray-600 text-xl pt-5 md:text-4xl">
                <img
                  className="h-15 w-15"
                  src="vision.png"
                  alt="mission icon"
                />
                Vision
              </p>
              Enhancing the spiritual growth of her members, ensuring that they
              are imbibed with and guided by Catholic principles in their
              educational pursuits and manifest same during and after school
              life. To serve as a rallying point for all Catholic students in
              the local chapter, by helping to co-ordinate their religious life.
            </div>
          </div>
        </div>

        <Dialog>
          <DialogTrigger className="cursor-pointer">
            click to view Anthem{" "}
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>NFCS ANTHEM</DialogTitle>
              <DialogDescription>
                <div className="w-full pb-5 font-sans text-left text-md md:text-xl border-b border-r md:border-t border-gray-400 md:flex flex-col">
                  <div className="">
                    <p>
                      1.NFCS Nigeria Federation of Catholic Students is living
                      the Faith. We are the hope of our Faith to blossom The
                      dreams of the Church, hail NFCS. With the strength of our
                      Youth, We will move our faith forward. And defend it
                      whatever be the case.
                    </p>
                    <br />
                    <p>
                      Chorus: <br /> When the roll is called On the last day A
                      joyful song we’ll raise Hail NFCS!
                    </p>
                    <br />
                    <p>
                      2. Let’s spread the good news of the Kingdom To all people
                      on earth, through NFCS, And join hands with groups of like
                      minds. To evangelize the world, through NFCS Let the
                      message be brought to every living soul. By the life we
                      live as students
                    </p>
                    <br />
                    <p>
                      Chorus: <br /> When the roll is called On the last day A
                      joyful song we’ll raise Hail NFCS!
                    </p>
                    <br />
                    <p>
                      3. We say no to corruption, and greed, Sectionalism and
                      violence in NFCS. And chant down the agent of Bribery,
                      Ethnicism and war in NFCS. With Jesus, Prince of Love and
                      Peace, We pitch our tent. Yes the enemies will forever be
                      shamed
                    </p>
                    <br />
                    <p>
                      Chorus: <br /> When the roll is called On the last day A
                      joyful song we’ll raise Hail NFCS!
                    </p>
                  </div>
                </div>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
};
