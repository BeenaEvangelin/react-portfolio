import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import logo4 from "../assets/logo4.png";
import { Link } from "react-scroll";
const NavBar = () => {
  const links = [
    { id: 1, link: "HOME" },
    { id: 2, link: "ABOUT" },
    { id: 3, link: "PORTFOLIO" },
    { id: 4, link: "SKILLS" },
    { id: 5, link: "CONTACT" },
    { id: 6, link: "OTHERS" },
  ];
  const [nav, setNav] = useState(false);
  return (
    <div className=" fixed flex items-center justify-between w-full  px-5 text-blue-300 bg-black ">
      <img src={logo4} alt="logo4" className=" h-20" />
      <div className="">
        <ul className="hidden md:flex  items-center mr-80 px-20">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className=" px-6 font-bold duration-200 cursor-pointer text-amber-400 hover:scale-105 hover:text-amber-500 text-2xl"
            >
              <Link to={link} smooth duration={500}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div
        onClick={() => setNav(!nav)}
        className="z-10 pr-5 cursor-pointer text-amber-400 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-screen  text-amber-400 bg-gradient-to-b from-black to-gray-900">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="py-6 text-4xl cursor-pointer hover:scale-125 duration-500 "
            >
              <Link
                onClick={() => setNav(false)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
