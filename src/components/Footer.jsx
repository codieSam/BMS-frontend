import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-gradient-to-r from-[#9E96FC] to-[#8984c1] px-6 mt-4 md:px-16 lg:px-24 xl:px-32 pt-8 w-full text-white">
        <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500/30 pb-6">
          <div className="md:max-w-96">
            <img
              className="h-12 rounded-[50%] shadow-lg shadow-gray-800"
              src="../assets/logo.png"
              alt="dummyLogoDark"
            />
            <p className="mt-6 text-sm">
              "Tech Byte delivers concise, insightful, and up-to-date technical
              blogs designed to empower tech enthusiasts and professionals. Dive
              into the latest trends, tutorials, and innovations in the tech
              world, crafted to keep you informed and ahead in this
              ever-evolving landscape."
            </p>
          </div>
          <div className="flex-1 flex items-start md:justify-end gap-20">
            <div>
              <h2 className="font-semibold mb-5 text-gray-300">Company</h2>
              <ul className="text-sm space-y-2">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">Contact us</a>
                </li>
                <li>
                  <a href="#">Privacy policy</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="font-extrabold  text-gray-300 mb-5">
                Subscribe to our Tech Byte
              </h2>
              <div className="text-sm space-y-2">
                <p>Streaming the real world Tech Blogs. The no. 1</p>
                <div className="flex items-center gap-2 pt-4">
                  <input
                    className="border border-gray-200/30 placeholder-gray-100 outline-none w-full max-w-64 h-9 rounded px-2"
                    type="email"
                    placeholder="It will wrok soon,stay tuned !"
                  />
                  <button className="bg-slate-600 cursor-pointer w-24 h-9 text-white rounded">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="pt-4 text-center text-xs md:text-sm pb-5">
          Copyright 2025 © Tech Byte⚡ by Samrat . All Right Reserved.
        </p>
      </footer>
    </div>
  );
};

export default Footer;
