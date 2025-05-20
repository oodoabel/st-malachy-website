import React from "react";

const Vission = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row  justify-center items-center gap-2 lg:gap-4 md:px-5 pt-3 ">
        <div className="flex items-center lg:w-[60rem] flex-col w-screen justify-center md:rounded-bl-4xl md:rounded-4xl py-5 px-2 bg-[#008080]/70">
          <div className="text-3xl flex text-[#FFD700] font-extrabold ">
            <img className="h-10 w-10" src="vision.png" alt="" />
            VISION
          </div>
          <div>
            {/* <img className="h- md:h-20" src="nfcs-logo.png" alt="" /> */}
            <p className="text-center font-sans text-lg flex text-white">
              Always include proper alt text for accessibility when using the
              Image component. Always include proper alt text for accessibility
              when using the Image component.
            </p>
          </div>
        </div>

        <div className="lg:w-[60rem] md:rounded-br-4xl md:rounded-4xl flex items-center flex-col w-screen py-5 px-2 bg-[#008080]/70">
          <div className="text-3xl flex text-[#FFD700] font-extrabold ">
            MISSION
            <img className="h-10 w-10" src="mission.png" alt="mission icon" />
          </div>
          <div>
            {/* <img className="h- md:h-20" src="nfcs-logo.png" alt="" /> */}
            <p className="text-center font-sans text-lg flex text-white">
              Always include proper alt text for accessibility when using the
              Image component. Always include proper alt text for accessibility
              when using the Image component.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vission;
