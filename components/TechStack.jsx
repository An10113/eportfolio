import React from "react";
import { useTypewriter } from "react-simple-typewriter";

export default function TechStack() {
  const [text] = useTypewriter({
    words: ["<Tech Stack />"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="p-6">
      <div className="max-w-[1000px]">
        <div>
          <div className="h-[100px] p-4 my-5 text-center text-green-700 text-3xl lg:text-[64px]">
            {text}
          </div>
          <div className="my-5">
            <ul className="w-[100%]">
                
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
