import React from "react";
import { BiSolidUser } from "react-icons/bi";
import { BsCodeSlash,BsFillEnvelopeFill } from "react-icons/bs";
import { AiFillProject } from "react-icons/ai";

export default function NavBar() {
  return (
    <nav className="sticky p-5 top-0 flex items-start justify-between max-w-7xl mx-auto z-20">
      <img src="/assets/letter-a.png" className="w-16 h-16" />
      <div className="flex items-center">
        <a href="#about" className="hover:scale-125 transition duration-300 ease p-3">
          <BiSolidUser color="green" size={30}/>
        </a>
        <a href="" className="hover:scale-125 transition duration-300 ease p-3">
          <BsCodeSlash color="green" size={30}/>
        </a>
        <a href="" className="hover:scale-125 transition duration-300 ease p-3">
          <AiFillProject color="green" size={30}/>
        </a>
        <a href="" className="hover:scale-125 transition duration-300 ease p-3">
          <BsFillEnvelopeFill color="green" size={30}/>
        </a>
      </div>
    </nav>
  );
}
