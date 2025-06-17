import React, { useState } from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  let Links = [
    { name: "New arrivals", link: "/" },
    { name: "Men", link: "/" },
    { name: "Women", link: "/" },
    { name: "Kids", link: "/" },
    { name: "Collection", link: "/" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <nav className=" w-full border-b border-[#B4B4B3]  ">
      <div className="flex bg-white items-center justify-between  md:px-[60px] px-[30px] ">
        <div className="flex h-[71.21px] items-center md:border-r md:border-[#B4B4B3] px-5">
          <img src={logo} alt="logo" className="md:h-[28.79px] h-[21.59px]" />
        </div>

        <ul
          className={`md:flex md:items-center md:justify-center md:pb-0 pb-10 md:static absolute left-0 max-md:bg-green-950  text-3xl md:text-2xl max-md:text-white  md:z-[auto] z-[-1] md:w-[auto] w-full md:pl-0 pl-10 transition-all duration-500 ease-in gap-[32px] ${
            open ? "top-18 opacity-100" : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li className="hover:underline md:pt-0 pt-5">
              <a href={link.link}>{link.name}</a>
            </li>
          ))}
        </ul>
        <div className="flex h-[70px] items-center text-3xl cursor-pointer max-md:gap-[3px]">
          <div className="flex h-[70px] items-center md:border-x md:border-[#B4B4B3] px-2 md:px-5">
            <span className="text-[#B4B4B3] ">
              <ion-icon name="search-outline"></ion-icon>
            </span>
          </div>
          <div className=" max-md:hidden flex h-[70px] items-center md:border-r md:border-[#B4B4B3] px-5">
            <span className="text-[#B4B4B3]">
              <ion-icon name="heart-outline"></ion-icon>
            </span>
          </div>
          <div className="flex h-[70px] items-center md:border-r md:border-[#B4B4B3] px-2 md:px-5">
            <span className="text-[#B4B4B3]">
              <ion-icon name="bag-outline"></ion-icon>
            </span>
          </div>
          <div
            onClick={() => setOpen(!open)}
            className="text-5xl text-[#B4B4B3] cursor-pointer md:hidden"
          >
            <ion-icon name={open ? "close" : "menu"}></ion-icon>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
