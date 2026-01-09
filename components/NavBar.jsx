import React, { useCallback, useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Modal } from "@mui/material";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="p-5 top-0 flex items-start justify-between max-w-7xl mx-auto">
      <img src="/assets/letter-a.png" className="w-16 h-16" />
      <div className=" items-center md:flex hidden z-10">
        <a
          href="#about"
          className="hover:scale-110 transition duration-200 ease p-3"
        >
          <div className="text-[#337357] text-xl font-bold cursor-pointer flex items-center justify-center">
            About
          </div>
        </a>
        <a
          href="#techstack"
          className="hover:scale-110 transition duration-200 ease p-3"
        >
          <div className="text-[#337357] text-xl font-bold cursor-pointer flex items-center justify-center">
            Skillset
          </div>
        </a>
        <a
          href="#project"
          className="hover:scale-110 transition duration-200 ease p-3"
        >
          <div className="text-[#337357] text-xl font-bold cursor-pointer flex items-center justify-center">
            Project
          </div>
        </a>
        <a
          href="#contact"
          className="hover:scale-110 transition duration-200 ease p-3"
        >
          <div className="text-[#337357] text-xl font-bold cursor-pointer flex items-center justify-center">
            Contact
          </div>
        </a>
      </div>
      <button
        className="md:hidden flex items-center w-12 h-12"
        onClick={() => setOpen(!open)}
      >
        <FaBars size={30} color="#337357" />
      </button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        className="bg-black items-center flex justify-center"
      >
        <div className="text-white text-2xl items-center flex flex-col">
          <a className="p-6" onClick={()=> setOpen(false)} href="#about">
            <div>About</div>
          </a>
          <a className="p-6" onClick={()=> setOpen(false)} href="#techstack">
            <div>Tech</div>
          </a>
          <a className="p-6" onClick={()=> setOpen(false)} href="#project">
            <div>Project</div>
          </a>
          <a className="p-6" onClick={()=> setOpen(false)} href="#contact">
            <div>Contact</div>
          </a>
        </div>
      </Modal>
    </nav>
  );
}
