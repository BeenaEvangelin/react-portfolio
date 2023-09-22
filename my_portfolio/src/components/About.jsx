import React from "react";

const About = () => {
  return (
    <div
      name="ABOUT"
      className="w-full h-screen text-violet-200 bg-gradient-to-b from-gray-900 to-black"
    >
      <div className="flex flex-col justify-start w-full h-full max-w-screen-lg mx-auto p-7">
        <div className="pb-8">
          <h2 className="inline text-4xl font-semibold duration-700 hover:text-5xl px-7 py-7">
            ABOUT
          </h2>
        </div>
        <div className="mt-20 text-2xl">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            blanditiis molestias iusto totam itaque harum veritatis mollitia
            quia nisi, culpa hic laborum eveniet optio rem dolorum? Facere ullam
            iusto quasi blanditiis cupiditate aliquam velit, sequi, temporibus
            molestiae, voluptatum praesentium. Alias cum labore quisquam natus
            officia minus tempore fuga iste nostrum.
          </p>
          <br />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab
            accusantium accusamus voluptate. Explicabo, sequi consectetur harum
            perspiciatis aut dignissimos, ullam possimus labore nisi aliquid
            culpa exercitationem at sint ex delectus sit aspernatur numquam
            consequuntur nihil natus magnam, autem vero. Quo iure perferendis
            illo vel harum, corporis deleniti! Cum, incidunt corporis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
