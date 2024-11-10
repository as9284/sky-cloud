import React from "react";

export const Footer = () => {
  return (
    <>
      <div className="relative w-full border-t-[3px] border-neutral-900 min-h-[30dvh] m-auto bg-cover flex flex-col justify-center items-center select-none text-center">
        <div className="relative w-full flex flex-col justify-center items-center p-8">
          <h2 className="w-full text-xl md:text-2xl font-bold text-neutral-900 mb-2">
            About Sky Cloud
          </h2>
          <p className="w-full md:w-3/4">
            Sky Cloud provides secure and reliable cloud storage solutions to
            keep your data safe and accessible from anywhere. Our mission is to
            make data storage simple, safe, and efficient.
          </p>
          <div className="w-full flex flex-wrap justify-center items-center gap-2">
            <button className="w-28 h-10 mt-4 text-neutral-500 font-semibold hover:text-neutral-800 duration-200">
              Facebook
            </button>
            <button className="w-28 h-10 mt-4 text-neutral-500 font-semibold hover:text-neutral-800 duration-200">
              Twitter
            </button>
            <button className="w-28 h-10 mt-4 text-neutral-500 font-semibold hover:text-neutral-800 duration-200">
              Instagram
            </button>
            <button className="w-28 h-10 mt-4 text-neutral-500 font-semibold hover:text-neutral-800 duration-200">
              LinkedIn
            </button>
            <button className="w-28 h-10 mt-4 text-neutral-500 font-semibold hover:text-neutral-800 duration-200">
              Email
            </button>
          </div>
          <p className="w-full md:w-3/4 text-sm font-medium text-neutral-400 pt-4">
            &copy; 2024 Sky Cloud. All Rights Reserved.
          </p>
        </div>
      </div>
    </>
  );
};
