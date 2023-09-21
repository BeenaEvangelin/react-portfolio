import React from "react";
import {
  BsGithub,
  BsTwitter,
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsFillPersonLinesFill,
} from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";
import { SiIndeed } from "react-icons/si";

const Socials = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <BsLinkedin size={30} />
        </>
      ),
      href: "https://linkedin.com",
      style: "rounded-tr-lg",
    },
    {
      id: 2,
      child: (
        <>
          Github <BsGithub size={30} />
        </>
      ),
      href: "https://github.com/BeenaEvangelin",
    },
    {
      id: 3,
      child: (
        <>
          Mail <BiLogoGmail size={30} />
        </>
      ),
      href: "mailto:graciaevangelin99@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "/JOB CV.pdf",
      download: true,
    },
    {
      id: 5,
      child: (
        <>
          Indeed <SiIndeed size={30} />
        </>
      ),
      href: "https://indeed.com",
    },
    {
      id: 6,
      child: (
        <>
          Facebook <BsFacebook size={30} />
        </>
      ),
      href: "https://indeed.com",
    },
    {
      id: 7,
      child: (
        <>
          Twitter <BsTwitter size={30} />
        </>
      ),
      href: "https://indeed.com",
    },
    {
      id: 8,
      child: (
        <>
          Instagram <BsInstagram size={30} />
        </>
      ),
      href: "https://indeed.com",
      style: "rounded-br-lg",
    },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[20%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, download, style }) => (
          <li
            key={id}
            className={
              "flex items-center justify-between w-40 px-4 bg-gray-800 h-14 ml-[-100px] hover:ml-[-10px] hover:rounded-lg duration-500" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex items-center justify-between w-full text-white"
              download={download}
              target="_blank" //helps to open in new tab
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Socials;
