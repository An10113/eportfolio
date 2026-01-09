import React from "react";
import { useTypewriter } from "react-simple-typewriter";
export default function TechStack() {
  const [text] = useTypewriter({
    words: ["Skillset"],
  });
  const techstack = [
        {
      id: 1,
      name: "SEO",
      img: "/tech/seo.jpg",
    },
    {
      id: 2,
      name: "photograph",
      img: "/tech/photo.jfif",
    },
    {
      id: 3,
      name: "Excel",
      img: "tech/excel.png",
    },
    {
      id: 4,
      name: "Premier Pro",
      img: "/tech/pr.png",
    },
    {
      id: 5,
      name: "Photoshop",
      img: "/tech/pts.png",
    },
  ];
  return (
    <div id="techstack" className="p-10">
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
