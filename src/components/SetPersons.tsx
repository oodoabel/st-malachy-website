import Link from "next/link";
import React from "react";

const SetPersons = () => {
  return (
    <>
      <div className="flex flex-col items-center md:text-2xl  ">
        <div className="flex item-center justify-center">
          <h3 className="text-2xl text-gray-700 font-bold border-2 px-10 md:border-gray-400 md:px-50">
            Set Persons
          </h3>
        </div>
        <div className="md:flex items-center justify-center gap-10 p-10">
          <div className="flex flex-col items-center justify-center border-2 mb-10 border-gray-300">
            <div className="md:h-[24rem] h-[24rem] w-full md:w-[18rem] bg-gray-400/20 overflow-hidden">
              <img src="fr-nelson.png" alt="" />
            </div>
            <p className="text-2xl text-center text-gray-500 bg-white">
              Very Rev. Fr. <br />{" "}
              <span className="font-bold text-gray-700">
                Nelson Gabriel Onuh
              </span>{" "}
              <br />
              <span className="text-sm text-gray-500">
                Chaplain, NFCS National/FUTMinna
              </span>
            </p>
          </div>

          <div className="flex flex-col items-center justify-center border-2 mb-10 border-gray-300">
            <div className="md:h-[24rem] h-[23rem] w-full md:w-[18rem] bg-gray-400/20 overflow-hidden">
              <img src="fr-patasitti2.png" alt="" />
            </div>
            <p className="text-2xl text-center text-gray-500 bg-white">
              Rev. Fr. <br />{" "}
              <span className="font-bold  text-gray-700">Jaen Patassitti</span>{" "}
              <br />
              <span className="text-sm text-gray-500">
                Assisting Chaplain, NFCS FUTMinna
              </span>
            </p>
          </div>

          <div className="flex flex-col items-center justify-center border-2 mb-10 border-gray-300">
            <div className="md:h-[24rem] h-[24rem] w-full md:w-[18rem] bg-gray-400/20 overflow-hidden">
              <img src="fr-sedi.png" alt="" />
            </div>
            <p className="text-2xl text-center text-gray-500 bg-white">
              Rev. Fr. <br />{" "}
              <span className="font-bold  text-gray-700">Benedict Sedi</span>{" "}
              <br />
              <span className="text-sm text-gray-500">
                Assisting Chaplain, NFCS FUTMinna
              </span>
            </p>
          </div>
        </div>

        <div className="md:flex item-center justify-center gap-5">
          <div className="flex item-center justify-center mb-8">
            {/* <h3 className="text-2xl text-gray-700 font-bold border-2 px-10 md:border-gray-400 md:px-50">
              Executives
            </h3> */}
            <div className="">
              <div className="md:h-[15rem] h-[15rem] rounded-full w-[15rem] md:w-[15rem] bg-gray-400/20 overflow-hidden">
                <img src="presido.png" alt="" />
              </div>
              <p className="text-xl text-center bg-white">
                <span className="font-bold text-gray-700">
                  Ella Solomon Echobu
                </span>{" "}
                <br />
                <span className="text-gray-500">President, NFCS FUTMinna</span>
              </p>
            </div>
          </div>

          <div className="flex item-center justify-center">
            {/* <h3 className="text-2xl text-gray-700 font-bold border-2 px-10 md:border-gray-400 md:px-50">
              Executives
            </h3> */}
            <div className="">
              <div className="md:h-[15rem] h-[15rem] rounded-full w-[15rem] md:w-[15rem] bg-gray-400/20 overflow-hidden">
                <img src="vp-gk.png" alt="" />
              </div>
              <p className="text-xl text-center bg-white">
                <span className="font-bold text-gray-700">
                  Arome Perpetual Juliet
                </span>{" "}
                <br />
                <span className="text-gray-500">VP GK</span>
              </p>
            </div>
          </div>

          <div className="flex item-center justify-center">
            {/* <h3 className="text-2xl text-gray-700 font-bold border-2 px-10 md:border-gray-400 md:px-50">
              Executives
            </h3> */}
            <div className="">
              <div className="md:h-[15rem] h-[15rem] rounded-full w-[15rem] md:w-[15rem] bg-gray-400/20 overflow-hidden">
                <img src="vp-bosso.png" alt="" />
              </div>
              <p className="text-xl text-center bg-white">
                <span className="font-bold text-gray-700">
                  Atama Daniel Otabo
                </span>{" "}
                <br />
                <span className="text-gray-500">VP Bosso</span>
              </p>
            </div>
          </div>

          <div className="flex item-center justify-center">
            {/* <h3 className="text-2xl text-gray-700 font-bold border-2 px-10 md:border-gray-400 md:px-50">
              Executives
            </h3> */}
            <div className="">
              <div className="md:h-[15rem] h-[15rem] rounded-full w-[15rem] md:w-[15rem] bg-gray-400/20 overflow-hidden">
                <img src="sec-gk.png" alt="" />
              </div>
              <p className="text-xl text-center bg-white">
                <span className="font-bold text-gray-700">
                  Ebute Mercy Ojone
                </span>{" "}
                <br />
                <span className="text-gray-500">Gen Sec.</span>
              </p>
            </div>
          </div>
        </div>

        <Link className="pt-10" href="/">
          View more...
        </Link>
      </div>
    </>
  );
};

export default SetPersons;
