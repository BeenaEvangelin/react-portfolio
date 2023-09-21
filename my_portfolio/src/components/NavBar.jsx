import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { SiAerlingus } from "react-icons/si";
const NavBar = () => {
  const links = [
    { id: 1, link: "HOME" },
    { id: 2, link: "ABOUT" },
    { id: 3, link: "PORTFOLIO" },
    { id: 4, link: "CONTACT" },
  ];
  const [nav, setNav] = useState(false);
  return (
    <div className="flex items-center justify-between w-full h-20 px-5 text-blue-300 bg-black ">
      {/* <h1 className="ml-2 text-8xl font-myName"> */}
      <SiAerlingus className="ml-2 text-8xl" />
      {/* </h1> */}

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 font-bold duration-200 cursor-pointer text-yellow-50 hover:scale-105"
          >
            {link}
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
              {link}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
