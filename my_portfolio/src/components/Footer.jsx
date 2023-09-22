import React from "react";
import { LiaCopyrightSolid } from "react-icons/lia";

const Footer = () => {
  return (
    <div className=" bg-gray-900 text-white text-center m-auto">
      <span className="flex text-center sm:px-12 text-lg pb-6 py-5 lg:px-96 lg:ml-10">
        <LiaCopyrightSolid size={25} />
        Copyright 2023. All rights reserved. Developed by Beena Evangelin
        Gracia.
      </span>
    </div>
  );
};

export default Footer;
