import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { useTypewriter } from "react-simple-typewriter";

export const Contact = () => {
  const [text] = useTypewriter({
    words: ["<Let's connect />"],
    loop: true,
    delaySpeed: 2000,
  });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_23v8ruq",
        "template_h9d4xap",
        e.target,
        "Sdt9Ir8PBdxJJMT2d"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset;
  };

  return (
    <div id="contact">
      <div className="p-6">
        <div className="max-w-[1000px] mx-auto ">
          <div className="h-[100px] md:p-4 mt-5 xl:mb-5 text-center text-green-700 text-3xl lg:text-[64px]">
            {text}
          </div>
          <div className="max-w-[600px] m-auto">
            <form
              id="contact__form"
              className="bg-white rounded-2xl shadow-md p-5 w-full flex justify-center flex-col mb-6"
              onSubmit={sendEmail}
            >
              <input
                className="text-sm m-4 p-1 xl:text-xl outline-1 outline-green-700 border border-gray-400 rounded-xl"
                name="user_name"
                type="text"
                required
                placeholder="Name"
              ></input>
              <input
                className="text-sm m-4 p-1 xl:text-xl outline-1 outline-green-700 border border-gray-400 rounded-xl"
                name="user_email"
                type="email"
                required
                placeholder="Email"
              ></input>
              <textarea
                className="text-sm p-1 h-[150px] m-4 xl:text-xl outline-1 outline-green-700 border border-gray-400 rounded-xl"
                name="message"
                type="text"
                required
                placeholder="Message"
              ></textarea>

              <button id="contact__submit" className="bg-green-700 px-5 py-2 text-lg  mr-5 text-white rounded-xl
              hover:bg-white hover:text-green-700 transition hover:border hover:border-green-700">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
