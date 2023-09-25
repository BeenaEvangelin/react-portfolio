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
            className="text-blue-600 bg-white rounded-3xl "
          />
        </>
      ),
      href: "https://www.facebook.com",
    },
    {
      id: 2,
      child: (
        <>
          <BsTwitter size={30} className="text-blue-400 " />
        </>
      ),
      href: "https://twitter.com/",
    },
    {
      id: 3,
      child: (
        <>
          <BsInstagram
            size={30}
            className="text-white rounded-sm bg-gradient-to-t from-amber-600 via-red-600 to-violet-700"
          />
        </>
      ),
      href: "https://www.instagram.com/",
    },
  ];
  return (
    <div name="OTHERS" className="text-white bg-gray-900 ">
      <div className="flex flex-row ml-24 text-center">
        {touch.map(({ id, child, href }) => (
          <ul key={id} className={"flex flex-row ml-10"}>
            <a href={href} className={"mt-4"}>
              {child}
            </a>
          </ul>
        ))}
        <span className="flex pb-4 mt-4 text-center lg:ml-56">
          <LiaCopyrightSolid size={25} />
          Copyright 2023. All rights reserved. Developed by Beena Evangelin
          Gracia.
        </span>
      </div>
    </div>
  );
};

export default Footer;
