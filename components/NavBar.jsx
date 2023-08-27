import React, { useCallback, useState } from "react";
import { BiSolidUser } from "react-icons/bi";
import { BsCodeSlash, BsFillEnvelopeFill, BsChevronDown } from "react-icons/bs";
import { AiFillProject } from "react-icons/ai";
import Menu from "./Menu";

export default function NavBar() {
  // const [showMenu, setShowMenu] = useState(false);
  // const toggleMenu = useCallback(() => {
  //   setShowMenu((current) => !current);
  // }, []);
  return (
    <nav className="p-5 top-0 flex items-start justify-between max-w-7xl mx-auto z-20">
      <img src="/assets/letter-a.png" className="w-16 h-16" />
      <div className=" items-center flex">
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
        <a
          href="#project"
          className="hover:scale-125 transition duration-300 ease p-3"
        >
          <div className="w-12 h-12 cursor-pointer flex items-center justify-center">
            <AiFillProject color="green" size={30} />
          </div>
        </a>
        <a
          href="#contact"
          className="hover:scale-125 transition duration-300 ease p-3"
        >
          <div className="w-12 h-12 cursor-pointer flex items-center justify-center">
            <BsFillEnvelopeFill color="green" size={30} />
          </div>
        </a>
      </div>
      {/* <div
        onClick={toggleMenu}
        className="flex w-8 h-8 flex-row items-center gap-2 ml-8 cursor-pointer relative md:hidden"
      >
        <BsChevronDown size={32}
          className={` text-white fill-green-700 transition ${
            showMenu ? "rotate-180" : "rotate-0"
          }`}
        />
        <Menu visible={showMenu} />
      </div> */}
    </nav>
  );
}
