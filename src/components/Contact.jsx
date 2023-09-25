import React from "react";
import { BsTwitter, BsFacebook, BsInstagram } from "react-icons/bs";

const Contact = () => {
  return (
    <div
      name="CONTACT"
      className="w-full h-screen p-4 text-white bg-gradient-to-b from-black via-black to-gray-900"
    >
      <div className="flex flex-col justify-center h-full max-w-screen-lg p-4 mx-auto">
        <div className="pt-28 lg:pt-16">
          <h2 className="inline ml-1 text-3xl font-semibold text-amber-500 font-myName">
            CONTACT
          </h2>
          <p className="text-2xl text-stone-400">
            Submit the form below to discuss any job opportunities
          </p>
        </div>
        <div className="flex items-center">
          <form
            action="https://getform.io/f/29039527-e1ca-42a1-ba33-a31ca01310e1"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <div>
              <div className="px-2 py-2 text-white">
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="p-2 my-1 bg-transparent border-2 rounded-lg focus:outline-none w-72"
                />
              </div>
              <div className="px-2 py-2 text-white">
                <input
                  type="text"
                  name="email"
                  placeholder="Enter your email"
                  className="p-2 my-1 bg-transparent border-2 rounded-lg focus:outline-none w-72"
                />
              </div>
              <div className="px-2 py-2 text-white">
                <textarea
                  name="message"
                  rows="7"
                  placeholder="Enter your message"
                  className="p-2 my-1 bg-transparent border-2 rounded-lg focus:outline-none w-72"
                ></textarea>
              </div>
            </div>

            <button className="flex w-32 px-10 py-3 my-3 ml-24 text-lg text-white duration-500 rounded-lg bg-gradient-to-b from-yellow-500 to-amber-950 hover:scale-105">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
