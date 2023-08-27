import React from "react";
import { useTypewriter } from "react-simple-typewriter";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { BsEnvelopeFill } from "react-icons/bs";

export default function About() {
  const [text] = useTypewriter({
    words: ["<About me />"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div id="about" className="bg-black bg-opacity-10">
      <div className="p-5">
        <div className="max-w-[1000px] mx-auto ">
          <div className="h-[100px] md:p-4 mt-5 xl:mb-5 text-center text-green-700 text-3xl lg:text-[64px]">
            {text}
          </div>
          <div className="flex items-center justify-around p-3 my-6 md:flex-row flex-col">
            <img
              src="/assets/picture.jpg"
              alt="about-me"
              className="w-[300px] h-[300px] rounded-full none m-5"
            />
            <div className="max-w-[500px]">
              <div className="text-lg xl:text-2xl mb-5">
                Here's a brief overview of myself.
              </div>
              <div className="text-lg xl:text-2xl my-3">
                I'm a youthful{" "}
                <span className="text-green-700">software engineer</span>{" "}
                possessing an expansive expertise within the domain.
              </div>
              <div className="text-lg xl:text-2xl my-3">
                I enjoy challenging myself to{" "}
                <span className="text-green-700">solve problems</span> and
                devise the most efficient solutions to enhance situations.
              </div>
              <div className="flex items-center">
                <a href="https://www.linkedin.com/in/antranthanh/" target="_blank">
                  <div className="w-12 h-12 cursor-pointer flex items-center justify-center">
                    <AiFillLinkedin color="green" size={30} />
                  </div>
                </a>
                <a
                  href="https://github.com/An10113"
                  target="_blank"
                >
                  <div className="w-12 h-12 cursor-pointer flex items-center justify-center">
                    <AiFillGithub color="green" size={30} />
                  </div>
                </a>
                <a href="" target="_blank">
                  <div className="w-12 h-12 cursor-pointer flex items-center justify-center">
                    <BsEnvelopeFill color="green" size={30} />
                  </div>
                </a>
              </div>
              {/* <button
                className="bg-green-700 px-5 py-2 text-lg  mr-5 text-white 
              hover:bg-white hover:text-green-700 transition"
              >
                <a href="">Contact me</a>
              </button>
              <button
                className="bg-green-700 px-5 py-2 text-lg  mr-5 text-white 
              hover:bg-white hover:text-green-700 transition"
              >
                <a href="">Resume</a>
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
