import Link from "next/link";
import React from "react";

const Staffs = () => {
  const pix = "excos/";
  const excos = [
    "excos/presido.png",
    "excos/vp-gk.png",
    "excos/vp-bosso.png",
    "excos/fin-sec-gk.png",
    "excos/sec-gk.png",
    "excos/asst-bro-cord-gk.png",
  ];
  return (
    <div>
      <div className="flex flex-col md:flex-row gap-10 items-center justify-center p-10">
        <div className="overflow-clip w-3xs h-[10] flex flex-col">
          <img className=" rounded-b-[10rem] " src="fr-nelson.png" alt="" />
          <p className="text-2xl text-center">
            Very Rev. Fr. <br />{" "}
            <span className="font-bold">Gabriel Nelson Onuh</span> <br />
            <span className="text-sm">National Chaplain, NFCS</span>
          </p>
        </div>

        <div className="overflow-clip w-3xs flex flex-col">
          <img className="rounded-b-[10rem] " src="fr-patasitti2.png" alt="" />
          <p className="text-2xl text-center">
            Rev. Fr. <br /> <span className="font-bold">Jaen Patasitti</span>{" "}
            <br />
            <span className="text-sm">Assisting Chaplain, NFCS FUTMinna</span>
          </p>
        </div>

        <div className="overflow-clip w-3xs flex flex-col">
          <img className="rounded-b-[10rem]" src="fr-sedi.png" alt="" />
          <p className="text-2xl text-center">
            Rev. Fr. <br /> <span className="font-bold">Benedict Sedi</span>{" "}
            <br />
            <span className="text-sm">Assisting Chaplain, NFCS FUTMinna</span>
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:flex justify-center gap-1 p-7">
        {excos.map((exco, index) => (
          <div key={index} className="flex flex-col  w-[10rem] h-[10rem]">
            <img className="rounded-[10rem]" src={exco} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Staffs;
