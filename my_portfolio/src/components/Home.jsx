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
      <div className="flex flex-row items-center justify-center h-full max-w-screen-lg px-3 mx-auto ml-36">
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="ml-1 text-6xl text-cyan-200 font-myName">
            Hey, I'm Beena Evangelin
          </h1>
          <h3 className="max-w-md py-4 ml-1 text-2xl text-cyan-300">
            <strong>A self taught frontend developer </strong>from Chennai
            India.
          </h3>
          <div>
            <Link
              to="PORTFOLIO"
              smooth
              duration={500}
              className="flex px-5 py-4 my-2 text-2xl text-yellow-100 cursor-pointer group w-fit items-centre bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl"
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
