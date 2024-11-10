import React from "react";

import ServerBg from "../assets/servers.webp";
import { SiGooglecloudstorage } from "react-icons/si";

export const Landing = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${ServerBg})`,
        }}
        className="w-full m-auto flex flex-col justify-center items-center lg:items-start bg-cover text-center lg:text-left select-none"
      >
        <div className="relative w-full lg:w-1/2 min-h-dvh bg-white/90 backdrop-blur-md flex flex-col justify-center items-center lg:items-start">
          <div className="w-full flex flex-col justify-center items-center lg:items-start gap-4 px-8">
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
            <button className="w-52 h-16 mt-4 bg-neutral-900 text-neutral-200 font-semibold hover:bg-neutral-700 duration-300">
              Explore our plans
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
