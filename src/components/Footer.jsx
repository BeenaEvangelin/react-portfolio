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
      href: "https://www.facebook.com",
    },
    {
      id: 2,
      child: (
        <>
          <BsTwitter size={30} className=" text-blue-400 " />
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
            className="rounded-sm text-white bg-gradient-to-t from-amber-600  via-red-600 to-violet-700"
          />
        </>
      ),
      href: "https://www.instagram.com/",
    },
  ];
  return (
    <div name="OTHERS" className=" bg-gray-900  text-white">
      <div className="flex flex-row text-center">
        {touch.map(({ id, child, href }) => (
          <ul key={id} className={"flex flex-row ml-10"}>
            <a href={href} className={"mx-4  mt-4"}>
              {child}
            </a>
          </ul>
        ))}
        <span className="flex text-center  mt-4 pb-4 lg:ml-56">
          <LiaCopyrightSolid size={25} />
          Copyright 2023. All rights reserved. Developed by Beena Evangelin
          Gracia.
        </span>
      </div>
    </div>
  );
};

export default Footer;
