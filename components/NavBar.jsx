import React, { useCallback, useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function NavBar() {
  function openMenu() {
    document.body.classList += "menu--open";
  }
  function closeMenu() {
    document.body.classList.remove("menu--open");
  }

  return (
    <nav className="p-5 top-0 flex items-start justify-between max-w-7xl mx-auto z-10">
      <img src="/assets/letter-a.png" className="w-16 h-16" />
      <div className=" items-center md:flex hidden ">
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
            Tech
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
      {/* <button
        className="md:hidden flex items-center w-12 h-12"
        onClick={openMenu}
      >
        <FaBars size={30} color="#337357" />
      </button>
      <div className="menu__backdrop">
        <button className="btn__menu btn__menu--close" onClick={closeMenu}>
          <FaTimes size={30} color="#337357" />
        </button>
        <ul className=" flex text-2xl items-center justify-around flex-col text-white">
          <a className="p-8" href="#about">About</a>
          <a className="p-8" href="#techstack">Tech</a>
          <a className="p-8" href="#project">Project</a>
          <a className="p-8" href="#contact">Contact</a>
        </ul>
      </div> */}
    </nav>
  );
}
