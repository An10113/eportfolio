import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useTypewriter } from "react-simple-typewriter";

export const Contact = () => {
  const [text] = useTypewriter({
    words: ["<Let's connect />"],
    loop: true,
    delaySpeed: 2000,
  });

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.TAG_1,
        process.env.TAG_2,
        form.current,
        process.env.TAG_3
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div id="connect">
      <div className="p-5">
        <div className="max-w-[1000px] mx-auto ">
          <div className="h-[100px] md:p-4 mt-5 xl:mb-5 text-center text-green-700 text-3xl lg:text-[64px]">
            {text}
          </div>
          
        </div>
      </div>
    </div>
  );
};
