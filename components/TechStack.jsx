import React from "react";
import { useTypewriter } from "react-simple-typewriter";
export default function TechStack() {
  const [text] = useTypewriter({
    words: ["<Tech Stack />"],
    loop: true,
    delaySpeed: 2000,
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
      img: "9data:image/png;base64,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",
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
        <div className="h-[100px] mt-5 md:p-4 xl:mb-5 text-center text-green-700 text-3xl lg:text-[64px]">
          {text}
        </div>
        <div className="flex flex-wrap">
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
