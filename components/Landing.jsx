import React from "react";
import {AiFillLinkedin, AiFillGithub} from "react-icons/ai"
import {BsEnvelopeFill} from "react-icons/bs"
import BackgroundCircles from "./BackgroundCircle";

const Landing = () => {
  return (
    <>
      <header>
          <div className="p-5 h-[100vh]">
          <div className="max-w-[1000px] middle text-center">
          <BackgroundCircles />
            <div className=" max-w-500px ">
                <h1 className="text-5xl lg:text-[64px] font-semibold">Xin chao, I'm <span className="text-green-700">An</span></h1>
                <p className="text-base lg:text-2xl max-w-[800px] mt-4">
                  I'm a young{" "}
                  <b className="text-green-700">Frontend Software Engineer</b> with
                  a deep enthusiasm for creating web applications that offer
                  exceptional user experiences.
                </p>
            </div>
            <div className="mt-3 flex items-center justify-center">
              <a href="" className="p-3">
              <AiFillLinkedin color="green" size={32}/>
              </a>
              <a href="" className="p-3">
              <AiFillGithub color="green" size={32}/>
              </a>
              <a href="" className="p-3">
              <BsEnvelopeFill color="green" size={32}/>
              </a> 
          </div>
          </div>
        </div>
        
      </header>
    </>
  );
};

export default Landing;
