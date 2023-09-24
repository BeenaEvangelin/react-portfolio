import React from "react";
import { LiaCopyrightSolid } from "react-icons/lia";
import { BsTwitter, BsFacebook, BsInstagram } from "react-icons/bs";

const Footer = () => {
  const touch = [
    {
      id: 1,
      child: (
        <>
          <BsFacebook
            size={30}
            className="bg-white rounded-3xl text-blue-600 "
          />
        </>
      ),
      href: "https://indeed.com",
      style: "ml-80",
    },
    {
      id: 2,
      child: (
        <>
          <BsTwitter size={30} className=" text-blue-400 " />
        </>
      ),
      href: "https://indeed.com",
    },
    {
      id: 3,
      child: (
        <>
          <BsInstagram
            size={30}
            className="rounded-sm text-white bg-gradient-to-t from-amber-600  via-red-600 to-violet-700"
          />
        </>
      ),
      href: "https://indeed.com",
    },
  ];
  return (
    <div className=" bg-gray-900 text-white">
      <div className="flex flex-row ml-96">
        {touch.map(({ id, child, href, style }) => (
          <ul key={id} className={"flex " + " " + style}>
            <a
              href={href}
              className={
                "px-3 flex items-center justify-between w-full text-stone-300"
              }
            >
              {child}
            </a>
          </ul>
        ))}
      </div>

      <span className="flex text-center sm:px-12 text-lg pb-6 py-5 lg:px-96 lg:ml-10">
        <LiaCopyrightSolid size={25} />
        Copyright 2023. All rights reserved. Developed by Beena Evangelin
        Gracia.
      </span>
    </div>
  );
};

export default Footer;
