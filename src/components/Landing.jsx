import React from "react";

import ServerBg from "../assets/servers.webp";
import { SiGooglecloudstorage } from "react-icons/si";
import { Link } from "react-scroll";

export const Landing = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${ServerBg})`,
        }}
        className="w-full m-auto flex flex-col justify-center items-center xl:items-start bg-cover text-center xl:text-left select-none"
      >
        <div className="relative w-full xl:w-1/2 min-h-dvh bg-white/85 backdrop-blur-md flex flex-col justify-center items-center xl:items-start">
          <div className="w-full flex flex-col justify-center items-center xl:items-start gap-4 px-8">
            <h1 className="text-xl md:text-2xl font-bold absolute left-4 top-2 flex justify-start items-center gap-2">
              <span>
                <SiGooglecloudstorage />
              </span>
              Sky Cloud
            </h1>
            <h2 className="w-full text-4xl md:text-5xl font-bold text-neutral-900">
              Changing cloud storage forever.
            </h2>
            <p className="w-full md:w-3/4 text-base md:text-lg font-medium text-neutral-900 mt-4">
              Offering secure, scalable cloud storage solutions for seamless
              data management and reliable access anytime, anywhere.
            </p>
            <Link to="plans" smooth={true} duration={500} className="w-full">
              <button className="w-52 h-16 mt-4 bg-neutral-900 text-neutral-200 font-semibold hover:bg-neutral-700 focus:bg-neutral-700 active:scale-95 duration-200">
                Explore our plans
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
