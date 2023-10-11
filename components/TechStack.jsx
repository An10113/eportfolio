import React from "react";
import { useTypewriter } from "react-simple-typewriter";
export default function TechStack() {
  const [text] = useTypewriter({
    words: ["Tech Stack"],
  });
  const techstack = [
    {
      id: 1,
      name: "HTML",
      img: "https://cdn-icons-png.flaticon.com/512/174/174854.png",
    },
    {
      id: 2,
      name: "CSS",
      img: "/tech/css.png",
    },
    {
      id: 3,
      name: "Javascript",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
    },
    {
      id: 4,
      name: "Typescript",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png",
    },
    {
      id: 5,
      name: "React",
      img: "/tech/React-icon.svg.png",
    },
    {
      id: 6,
      name: "NextJS",
      img: "https://static-00.iconduck.com/assets.00/next-js-icon-512x512-zuauazrk.png",
    },
    {
      id: 7,
      name: "Tailwind CSS",
      img: "/tech/Tailwind_CSS_Logo.svg.png",
    },
    {
      id: 8,
      name: "Redux",
      img: "/tech/redux.png",
    },
    {
      id: 9,
      name: "Firebase",
      img: "https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-512.png",
    },
    {
      id: 10,
      name: "NodeJS",
      img: "https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png"
    },
  ];
  return (
    <div id="techstack" className="p-5">
      <div className="max-w-[1000px] mx-auto ">
        <div className="h-[100px] mt-5 md:p-4 xl:mb-5 text-center text-[#337357] font-bold text-3xl lg:text-[64px]">
          {text}
        </div>
        <div className="flex flex-wrap" data-aos="fade-up">
          {techstack.map((data) => (
            <figure className="techstack__language" key={data.id}>
              <img src={data.img} alt="" />
              <span className="language__name xl:text-3xl text-base md:text-2xl">{data.name}</span>
            </figure>
          ))}
        </div>
      </div>
    </div>
  );
}
