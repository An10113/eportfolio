import React from "react";
import { useTypewriter } from "react-simple-typewriter";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { BsFileCodeFill } from "react-icons/bs";

export default function About() {
  const [text] = useTypewriter({
    words: ["About me "]
  });
  return (
    <div id="about" className="bg-black bg-opacity-10">
      <div className="p-5">
        <div className="max-w-[1000px] mx-auto ">
          <div className="md:h-[100px] md:p-4 mt-5 xl:mb-5 text-center text-[#337357] text-3xl font-bold lg:text-[64px]">
            {text}
          </div>
          <div className="flex items-center justify-around p-3 my-6 md:flex-row flex-col">
            <img
              data-aos="fade-up"
              src="/assets/picture.jpg"
              alt="about-me"
              className="w-[300px] h-[300px] rounded-full none m-5"
            />
            <div className="max-w-[500px]" data-aos="fade-up">
              <div className="text-lg xl:text-2xl mb-5">
                Here's a brief overview of myself.
              </div>
              <div className="text-lg xl:text-2xl my-3">
                I'm a youthful{" "}
                <span className="text-[#337357]">Marketer</span>{" "}
                , expertise in creating unique journey for customer.
              </div>
              <div className="text-lg xl:text-2xl my-3">
                I enjoy challenging myself to{" "}
                <span className="text-[#337357]">solve problems</span> and
                devise the most efficient solutions to enhance situations.
              </div>
              <div className="flex items-center">
                <a href="https://www.linkedin.com/in/antranthanh/" target="_blank">
                  <div className="w-12 h-12 cursor-pointer flex items-center justify-center">
                    <AiFillLinkedin color="#337357" size={30} />
                  </div>
                </a>
                <a
                  href="https://github.com/An10113"
                  target="_blank"
                >
                  <div className="w-12 h-12 cursor-pointer flex items-center justify-center">
                    <AiFillGithub color="#337357" size={30} />
                  </div>
                </a>
                <a href="https://drive.google.com/file/d/1cpHYEgvjbnflrsmRqqvFuKw6-QWoHLiZ/view?usp=sharing" target="_blank">
                  <div className="w-12 h-12 cursor-pointer flex items-center justify-center">
                    <BsFileCodeFill color="#337357" size={30} />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
