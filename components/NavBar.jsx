import React from "react";
import { BiSolidUser } from "react-icons/bi";
import { BsCodeSlash, BsFillEnvelopeFill } from "react-icons/bs";
import { AiFillProject } from "react-icons/ai";

export default function NavBar() {
  return (
    <nav className="p-5 top-0 flex items-start justify-between max-w-7xl mx-auto z-20">
      <img src="/assets/letter-a.png" className="w-16 h-16" />
      <div className="flex items-center">
        <a
          href="#about"
          className="hover:scale-125 transition duration-300 ease p-3"
        >
          <div className="w-12 h-12 cursor-pointer flex items-center justify-center">
            <BiSolidUser color="green" size={30} />
          </div>
        </a>
        <a
          href="#techstack"
          className="hover:scale-125 transition duration-300 ease p-3"
        >
          <div className="w-12 h-12 cursor-pointer flex items-center justify-center">
            <BsCodeSlash color="green" size={30} />
          </div>
        </a>
        <a href="" className="hover:scale-125 transition duration-300 ease p-3">
          <div className="w-12 h-12 cursor-pointer flex items-center justify-center">
            <AiFillProject color="green" size={30} />
          </div>
        </a>
        <a href="" className="hover:scale-125 transition duration-300 ease p-3">
          <div className="w-12 h-12 cursor-pointer flex items-center justify-center">
            <BsFillEnvelopeFill color="green" size={30} />
          </div>
        </a>
      </div>
    </nav>
  );
}
