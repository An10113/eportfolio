import React, { useState } from "react";
import emailjs from "emailjs-com";
import { useTypewriter } from "react-simple-typewriter";

export const Contact = () => {
  const [loading, setLoading] = useState(false);

  const [text] = useTypewriter({
    words: ["Let's connect"],
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
          setLoading(true);
          setTimeout(() => {
            setLoading(false);
            alert("Great to work with you!");
          },3000)
        },
        (error) => {
          alert(error.text)
        }
      );
    e.target.reset;
  };

  return (
    <div id="contact">
      <div className="p-6">
        <div className="max-w-[1000px] mx-auto ">
          <div className="h-[100px] md:p-4 mt-5 xl:mb-5 font-bold text-center text-[#337357] text-3xl lg:text-[64px]">
            {text}
          </div>
          {!loading ? (
            <div className="max-w-[600px] m-auto" data-aos="fade-up">
              <form
                id="contact__form"
                className="bg-white rounded-2xl shadow-md p-5 w-full flex justify-center flex-col mb-6"
                onSubmit={sendEmail}
              >
                <input
                  className="text-sm m-4 p-1 xl:text-xl outline-1 outline-[#337357] border border-gray-400 rounded-xl"
                  name="user_name"
                  type="text"
                  required
                  placeholder="Name"
                ></input>
                <input
                  className="text-sm m-4 p-1 xl:text-xl outline-1 outline-[#337357] border border-gray-400 rounded-xl"
                  name="user_email"
                  type="email"
                  required
                  placeholder="Email"
                ></input>
                <textarea
                  className="text-sm p-1 h-[150px] m-4 xl:text-xl outline-1 outline-[#337357] border border-gray-400 rounded-xl"
                  name="message"
                  type="text"
                  required
                  placeholder="Message"
                ></textarea>
                <button
                  id="contact__submit"
                  className="bg-[#337357] px-5 py-2 text-lg  mr-5 text-white rounded-xl
              hover:bg-white hover:text-[#337357] transition hover:border hover:border-[#337357]"
                >
                  Send
                </button>
              </form>
            </div>
          ) : (
            <div className="w-40 h-[300px] relative m-auto">
            <div className="middle">
              <div class="bar">
                <div class="ball"></div>
              </div>
            </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
