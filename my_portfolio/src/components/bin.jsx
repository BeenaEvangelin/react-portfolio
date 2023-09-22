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
  ];
  const [nav, setNav] = useState(false);
  return (
    <div className="flex items-center justify-between w-full h-20 px-5 text-blue-300 bg-black ">
      <img src={logo4} alt="logo4" className="w-32" />

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 font-bold duration-200 cursor-pointer text-yellow-50 hover:scale-105 hover:underline"
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className="z-10 pr-5 cursor-pointer text-yellow-50 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-screen bg-gray-800 text-yellow-50 bg-gradient-to-b from-black to">
          {links.map(({ id, link }) => (
            <li key={id} className="py-6 text-4xl cursor-pointer">
              <Link to={link} smooth duration={500}>
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
