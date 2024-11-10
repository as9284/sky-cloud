import React from "react";
import { IoIosCheckmarkCircle } from "react-icons/io";

export const Plans = () => {
  return (
    <>
      <div
        id="plans"
        className="relative w-full min-h-dvh m-auto bg-cover flex flex-col justify-center items-center select-none"
      >
        <div
          style={{
            backgroundColor: "#ffffff",
            opacity: "0.4",
            backgroundImage:
              "radial-gradient(#000000 0.5px, transparent 0.5px), radial-gradient(#000000 0.5px, #ffffff 0.5px)",
            backgroundSize: "20px 20px",
            backgroundPosition: "0 0,10px 10px",
          }}
          className="absolute inset-0 w-full h-full z-0"
        />
        <div className="relative w-full flex flex-col justify-center items-center p-8 z-10">
          <p className="feature-tag">Plans</p>
          <h2 className="w-full text-4xl md:text-5xl font-bold text-neutral-900 mb-4 md:mb-12 text-center">
            Our storage plans.
          </h2>
          <div className="w-full flex flex-wrap justify-center items-center gap-8">
            <div className="relative w-96 h-[32rem] bg-white border-[3px] border-neutral-900 drop-shadow-md flex flex-col justify-start items-center p-4 hover:scale-[1.02] duration-200">
              <div className="w-full flex flex-col justify-center items-center">
                <h3 className="text-lg font-semibold text-neutral-600 py-2">
                  Community
                </h3>
                <h4 className="text-4xl font-extrabold py-2">Free</h4>
                <p className="py-2 text-center">Free plan for everyone.</p>
                <hr className="w-full border-[1px] border-neutral-900" />
              </div>
              <div className="w-full flex flex-col justify-center items-start pt-4">
                <p className="plan-text">
                  <span>
                    <IoIosCheckmarkCircle />
                  </span>
                  5 GB of storage
                </p>
                <p className="plan-text">
                  <span>
                    <IoIosCheckmarkCircle />
                  </span>
                  Share 20 files a month
                </p>
                <p className="plan-text">
                  <span>
                    <IoIosCheckmarkCircle />
                  </span>
                  Sync 2 devices
                </p>
                <p className="plan-text">
                  <span>
                    <IoIosCheckmarkCircle />
                  </span>
                  Standard encryption
                </p>
                <p className="plan-text">
                  <span>
                    <IoIosCheckmarkCircle />
                  </span>
                  7-day version history
                </p>
                <p className="plan-text">
                  <span>
                    <IoIosCheckmarkCircle />
                  </span>
                  Weekly Backup
                </p>
              </div>
              <button className="absolute bottom-4 w-52 h-12 bg-neutral-900 text-neutral-200 font-semibold hover:bg-neutral-700 focus:bg-neutral-700 active:scale-95 duration-200">
                Get Started
              </button>
            </div>

            <div className="relative w-96 h-[32rem] bg-white border-[3px] border-neutral-900 drop-shadow-md flex flex-col justify-start items-center p-4 scale-105 hover:scale-[1.07] duration-200">
              <div className="w-full flex flex-col justify-center items-center">
                <h3 className="text-lg font-semibold text-neutral-600 py-2">
                  Standard
                </h3>
                <h4 className="text-4xl font-extrabold py-2">7$/month</h4>
                <p className="py-2 text-center">
                  Standard plan for the average user.
                </p>
                <hr className="w-full border-[1px] border-neutral-900" />
              </div>
              <div className="w-full flex flex-col justify-center items-start pt-4">
                <p className="plan-text">
                  <span>
                    <IoIosCheckmarkCircle />
                  </span>
                  100 GB of storage
                </p>
                <p className="plan-text">
                  <span>
                    <IoIosCheckmarkCircle />
                  </span>
                  Unlimited sharing
                </p>
                <p className="plan-text">
                  <span>
                    <IoIosCheckmarkCircle />
                  </span>
                  Sync 5 devices
                </p>
                <p className="plan-text">
                  <span>
                    <IoIosCheckmarkCircle />
                  </span>
                  Advanced encryption with 2FA
                </p>
                <p className="plan-text">
                  <span>
                    <IoIosCheckmarkCircle />
                  </span>
                  30-day version history
                </p>
                <p className="plan-text">
                  <span>
                    <IoIosCheckmarkCircle />
                  </span>
                  Daily Backup
                </p>
                <p className="plan-text">
                  <span>
                    <IoIosCheckmarkCircle />
                  </span>
                  Email Support
                </p>
                <p className="plan-text">
                  <span>
                    <IoIosCheckmarkCircle />
                  </span>
                  Shared folders collaboration
                </p>
              </div>
              <button className="absolute bottom-4 w-52 h-12 bg-neutral-900 text-neutral-200 font-semibold hover:bg-neutral-700 focus:bg-neutral-700 active:scale-95 duration-200">
                Free Trial
              </button>
            </div>

            <div className="relative w-96 h-[32rem] bg-white border-[3px] border-neutral-900 drop-shadow-md flex flex-col justify-start items-center p-4 hover:scale-[1.02] duration-200">
              <div className="w-full flex flex-col justify-center items-center">
                <h3 className="text-lg font-semibold text-neutral-600 py-2">
                  Premium
                </h3>
                <h4 className="text-4xl font-extrabold py-2">20$/month</h4>
                <p className="py-2 text-center">
                  Premium plan for power users.
                </p>
                <hr className="w-full border-[1px] border-neutral-900" />
              </div>
              <div className="w-full flex flex-col justify-center items-start pt-4">
                <p className="plan-text">
                  <span>
                    <IoIosCheckmarkCircle />
                  </span>
                  1 TB of storage
                </p>
                <p className="plan-text">
                  <span>
                    <IoIosCheckmarkCircle />
                  </span>
                  Unlimited sharing
                </p>
                <p className="plan-text">
                  <span>
                    <IoIosCheckmarkCircle />
                  </span>
                  Sync 10 devices
                </p>
                <p className="plan-text">
                  <span>
                    <IoIosCheckmarkCircle />
                  </span>
                  End-to-end encryption with 2FA
                </p>
                <p className="plan-text">
                  <span>
                    <IoIosCheckmarkCircle />
                  </span>
                  60-day version history
                </p>
                <p className="plan-text">
                  <span>
                    <IoIosCheckmarkCircle />
                  </span>
                  Real-time backup
                </p>
                <p className="plan-text">
                  <span>
                    <IoIosCheckmarkCircle />
                  </span>
                  24/7 priority support
                </p>
                <p className="plan-text">
                  <span>
                    <IoIosCheckmarkCircle />
                  </span>
                  Real-time file editing collaboration
                </p>
              </div>
              <button className="absolute bottom-4 w-52 h-12 bg-neutral-900 text-neutral-200 font-semibold hover:bg-neutral-700 focus:bg-neutral-700 active:scale-95 duration-200">
                Go Premium
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
