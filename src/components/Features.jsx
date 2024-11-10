import React from "react";
import { MdFolderShared, MdSecurity, MdStorage, MdSync } from "react-icons/md";

export const Features = () => {
  return (
    <>
      <div className="relative w-full min-h-dvh m-auto bg-cover flex flex-col justify-center items-center select-none text-center">
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
        ></div>
        <div className="relative w-full flex flex-col justify-center items-center p-8 z-10">
          <p className="w-28 h-8 flex flex-col justify-center items-center text-neutral-700 bg-neutral-700/25 rounded-full text-center text-sm font-bold mb-4">
            Features
          </p>
          <h2 className="w-full text-4xl md:text-5xl font-bold text-neutral-900 mb-4 md:mb-12">
            Our main features.
          </h2>
          <div className="w-full flex flex-wrap justify-center items-center gap-0 md:gap-8">
            <div className="relative w-80 h-72 flex flex-col justify-center items-center p-4">
              <div className="feature-icon">
                <MdSecurity />
              </div>
              <h3 className="absolute top-20 text-xl font-semibold py-2">
                Secure File Storage
              </h3>
              <p className="absolute top-28 p-1 py-2 text-neutral-600">
                All files are stored with advanced end-to-end encryption,
                ensuring that only authorized users have access, and protecting
                your data from unauthorized access or breaches.
              </p>
            </div>
            <div className="relative w-80 h-72 flex flex-col justify-center items-center p-4">
              <div className="feature-icon">
                <MdFolderShared />
              </div>
              <h3 className="absolute top-20 text-xl font-semibold py-2">
                File Sharing
              </h3>
              <p className="absolute top-28 p-1 py-2 text-neutral-600">
                Easily share files or folders with others through secure,
                customizable links. Control access with permissions, allowing
                you to manage who can view, edit, or download the content.
              </p>
            </div>
            <div className="relative w-80 h-72 flex flex-col justify-center items-center p-4">
              <div className="feature-icon">
                <MdSync />
              </div>
              <h3 className="absolute top-20 text-xl font-semibold py-2">
                Multi-Device Sync
              </h3>
              <p className="absolute top-28 p-1 py-2 text-neutral-600">
                Sync files across all your devices automatically, ensuring that
                you have the latest version of your files wherever you are.
                Changes made on one device are instantly reflected on others.
              </p>
            </div>
            <div className="relative w-80 h-72 flex flex-col justify-center items-center p-4">
              <div className="feature-icon">
                <MdStorage />
              </div>
              <h3 className="absolute top-20 text-xl font-semibold py-2">
                Storage Management
              </h3>
              <p className="absolute top-28 p-1 py-2 text-neutral-600">
                Organize your files efficiently with tools for creating folders,
                searching, tracking usage, and managing file versions. Keep your
                cloud storage neat and easily accessible.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
