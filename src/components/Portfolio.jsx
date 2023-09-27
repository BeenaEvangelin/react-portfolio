import React from "react";
import ecommerceorganic from "../assets/portfolio/ecommerceorganic.jpg";
import reactecommerce from "../assets/portfolio/reactecommerce.jpg";
import tshirtdesign from "../assets/portfolio/tshirtdesign.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: ecommerceorganic,
      code: "https://github.com/BeenaEvangelin/fruitastic-app",
      demo: "https://fruitastic-app.vercel.app/",
    },
    {
      id: 2,
      src: reactecommerce,
      code: "https://github.com/BeenaEvangelin/react-e-commerce-app",
      demo: "https://e-commerce-react-app-pied.vercel.app/",
    },
    {
      id: 3,
      src: tshirtdesign,
      code: "https://github.com/BeenaEvangelin/react-3Ddesign-app",
    },
  ];

  return (
    <div
      name="PORTFOLIO"
      className="w-full text-blue-300 bg-gradient-to-b from-black to-gray-900 md:h-screen"
    >
      <div className="flex flex-col justify-center w-full h-full max-w-screen-lg p-4 mx-auto">
        <div className="pb-8 mt-20 lg:mt-0">
          <h2 className="inline ml-1 text-3xl font-semibold text-amber-500 font-myName">
            PORTFOLIO
          </h2>
          <p className="mt-5 text-2xl text-stone-400">Check my work here</p>
        </div>
        <div className="grid gap-8 px-12 sm:grid-cols-2 md:grid-cols-3 sm:px-0">
          {portfolios.map(({ id, src, code, demo }) => (
            <div key={id} className="rounded-lg shadow-lg shadow-gray-600 ">
              <img
                src={src}
                alt=""
                className="duration-500 rounded-md hover:scale-105"
              />
              <div className="flex items-center justify-center rounded-lg">
                <a
                  className="w-1/2 px-6 py-3 m-4 text-white duration-200 rounded-lg bg-gradient-to-r from-fuchsia-950 to-indigo-950"
                  href={demo}
                >
                  Demo
                </a>
                <a
                  className="w-1/2 px-6 py-3 m-4 text-white duration-200 rounded-lg bg-gradient-to-r from-indigo-950 to-fuchsia-950"
                  href={code}
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
