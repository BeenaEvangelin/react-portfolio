import React from "react";

const Contact = () => {
  return (
    <div
      name="CONTACT"
      className="w-full h-screen bg-gradient-to-b from-black via-black to-gray-900 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <h2 className="text-4xl font-bold inline border-b-4 border-gray-500">
            CONTACT ME
          </h2>
          <p className="py-4">
            Submit the form below to discuss any job opportunities
          </p>
        </div>
        <div className=" flex justify-center items-center">
          <form
            action="https://getform.io/f/29039527-e1ca-42a1-ba33-a31ca01310e1"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <div className="mx-32">
              <div className="py-2 px-2 text-white">
                <label>Name: </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="my-1 p-2 bg-transparent border-2 rounded-lg focus:outline-none  w-72"
                />
              </div>
              <div className="py-2 px-2 text-white">
                <label>Email: </label>
                <input
                  type="text"
                  name="email"
                  placeholder="Enter your email"
                  className="my-1 p-2 bg-transparent border-2 rounded-lg focus:outline-none  w-72"
                />
              </div>
              <div className="py-2 px-2 text-white">
                <label>Your Message: </label>
                <textarea
                  name="message"
                  rows="10"
                  placeholder="Enter your message"
                  className="my-1 p-2 bg-transparent border-2 rounded-lg text-white focus:outline-none w-72"
                ></textarea>
              </div>
            </div>

            <button className="text-white  px-5 py-3 my-8 mx-auto flex bg-gradient-to-b from-yellow-500 to-amber-950  rounded-lg hover:scale-105 duration-500 ml-52">
              Let's discuss...
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;