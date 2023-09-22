import React from "react";
import ecommerceorganic from "../assets/portfolio/ecommerceorganic.jpg";
import reactecommerce from "../assets/portfolio/reactecommerce.jpg";
import tshirtdesign from "../assets/portfolio/tshirtdesign.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: ecommerceorganic,
    },
    {
      id: 2,
      src: reactecommerce,
    },
    {
      id: 3,
      src: tshirtdesign,
    },
  ];
  return (
    <div
      name="PORTFOLIO"
      className="w-full text-blue-300 bg-gradient-to-b from-black to-gray-900 md:h-screen"
    >
      <div className="flex flex-col justify-center w-full h-full max-w-screen-lg p-4 mx-auto">
        <div className="pb-8">
          <h2 className="inline text-4xl font-semibold duration-700 hover:text-5xl px-7 py-7">
            PORTFOLIO
          </h2>
          <p className="py-6">Check my work here</p>
        </div>
        <div className="grid gap-8 px-12 sm:grid-cols-2 md:grid-cols-3 sm:px-0">
          {portfolios.map(({ id, src }) => (
            <div key={id} className="rounded-lg shadow-lg shadow-gray-600">
              <img
                src={src}
                alt=""
                className="duration-500 rounded-md hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 rounded-lg bg-gradient-to-r from-teal-700 to-blue-700">
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 rounded-lg bg-gradient-to-r from-rose-600 to-pink-500">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
