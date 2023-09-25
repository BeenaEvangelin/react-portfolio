import React from "react";

const About = () => {
  return (
    <div
      name="ABOUT"
      className="w-full h-screen text-stone-400 bg-gradient-to-b from-gray-900  to-black"
    >
      <div className="flex flex-col justify-start w-full h-full max-w-screen-lg mx-auto p-7">
        <div className="mt-16 pb-8 md:mt-44">
          <h2 className="ml-1 text-3xl font-semibold text-amber-500 font-myName">
            ABOUT
          </h2>
        </div>
        <div className="text-2xl text-stone-400">
          <p>
            Creative, self-starting, and ambitious Front-End Developer with 3
            month of self learned experience in web development. I build
            interactive user experiences (UX) using HTML, CSS, JavaScript, and
            library like React.
          </p>
          <br />
          <p>
            I have buit a 3-Dimension T-Shirt design web application using Three
            JS and couple of e-commerce web applications using the above
            mentioned languages and library. I thrive in a collaborative
            environment and very much keen in learning about Tech.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
