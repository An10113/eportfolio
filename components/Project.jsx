import React from "react";
import { useTypewriter } from "react-simple-typewriter";
import { AiFillGithub } from "react-icons/ai";

export default function Project() {
  const [text] = useTypewriter({
    words: ["Some of my project"],
  });
  const project = [
    {
        id: 1,
        title:'JS fight game' ,
        img: "/assets/JSfighting.jpg",
        Github: "https://github.com/An10113/js-fighting-game",
        link: "https://an10113.github.io/js-fighting-game/",
        description:'A JavaScript combat game for two players. It showcases health bars, fluid combat moves, and continuous animations, creating an engaging and immersive experience.' ,
        description2: "",
        tech: 'Html, CSS, JavaScript',
    },
    {
      id: 2,
        title:'Twitter clone' ,
        img: "/assets/twitter-clone.png",
        Github: "https://github.com/An10113/twitter-clone",
        link: "https://twitter-clone-nndn.vercel.app/",
        description:"This is a clone inspired by Elon Musk's Twitter, incorporating my field expertise." ,
        description2: "This side project includes a webpage with sign-in, log-in, image uploading, tweeting, and real-time display using a Firebase database.",
        tech: 'NextJS, JavaScript, HTML, CSS, Firebase',
    },
    {
      id: 3,
        title:'Netflix clone' ,
        img: "/assets/netflix-clone.png",
        Github: "https://github.com/An10113/netflix-clone",
        link: "https://netflix-clone-one-lime-65.vercel.app/",
        description:"A replication of one of the largest global platforms for streaming movies, catering to millions of users." ,
        description2: "This secondary endeavor encompasses the fundamental aspects that define Netflix",
        tech: 'React, Tailwind CSS, Next.JS, Prisma, MongoDB, NextAuth',
    },
  ]
  return (
    <div id="project" className="bg-black bg-opacity-10">
      <div className="p-5">
        <div className="max-w-[1000px] mx-auto ">
          <div className="h-[100px] md:p-4 mt-5 font-bold xl:mb-5 text-center text-[#337357] text-3xl lg:text-[64px]">
            {text}
          </div>
          <ul className="project__list">
            {project.map(data => 
            <li className="project" key={data.id} data-aos="zoom-in">
            <div className="project__wrapper">
              <img src={data.img} className="project__img" alt=""></img>
              <div className="project__wrapper--bg"></div>
              <div className="project__description left-0 ">
                <h3 className="project__description--title xl:text-4xl md:text-xl font-bold text-xs">
                  {data.title}
                </h3>
                <h4 className="project__description--sub-title ">
                  {data.tech}
                </h4>
                <p className="project__description--para ">
                  {data.description}
                  <br />
                  {data.description2}
                </p>
                <div className="project__description--links ">
                  <a href={data.Github} className="project__description--link ">
                    Github
                  </a>
                  <a href={data.link} className="project__description--link">
                    Web 
                  </a>
                </div>
              </div>
            </div>
          </li>
          )}
          </ul>
        </div>
      </div>
    </div>
  );
}
