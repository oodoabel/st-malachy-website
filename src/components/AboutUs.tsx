import React from "react";

export const AboutUs = () => {
  return (
    <>
      <div className="flex flex-col p-10">
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
              <p className="font-bold text-gray-600 text-xl pt-5 md:text-4xl">
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
              <p className="font-bold text-gray-600 text-xl pt-5 md:text-4xl">
                Vision
              </p>
              We were founded for a purpose, just as you were created for a
              purpose too! At the NFCS, we are always working towards fulfilling
              our purpose, and what do you think that purpose will worth if it
              does not include your spiritual, academic and social life as a
              Catholic student?
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
