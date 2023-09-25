import React from "react";
import myImage from "../assets/myImage.jpg";
import { RiArrowRightSLine } from "react-icons/ri";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="HOME"
      className="w-full h-screen bg-gradient-to-b from-black via-black to-gray-900"
    >
      <div className="flex flex-row items-center justify-center ml-4 h-full max-w-screen-lg px-1 mx-auto  lg:ml-36">
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="ml-1 text-5xl text-stone-400 font-myName md:text-6xl mt-8">
            Hey, I'm Beena Evangelin
          </h1>
          <h3 className="max-w-lg py-5 ml-1 md:text-3xl text-amber-200 font-myBio text-lg">
            I'm a <strong>self taught frontend software developer </strong>
            from Chennai India. Crafting visually pleasing
            <strong>
              {" "}
              user interfaces (UI) with smooth user experience (UX) is my
              passion.
            </strong>
          </h3>
          <div>
            <Link
              to="PORTFOLIO"
              smooth
              duration={500}
              className="flex px-5 py-4 my-2 text-2xl text-stone-300 cursor-pointer group w-fit items-centre bg-gradient-to-r from-amber-500 to-amber-900 rounded-2xl"
            >
              Portfolio
              <span className="duration-500 group-hover:rotate-90">
                <RiArrowRightSLine size={35} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <img
          src={myImage}
          alt="my profile pic"
          className="w-1/4 mx-auto rounded-2xl"
        />
      </div>
    </div>
  );
};

export default Home;
