import React from "react";
import img from "../images/favicon-32x32.png";
import { Spiral as Hamburger } from "hamburger-react";
import { useState } from "react";

const Nav = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div class="flex mt-7 w-screen justify-between items-center">
      <h3>
        <img src={img} alt="" class="h-8 ml-16" />
      </h3>
      <nav className="hidden md:block">
        <ul class="flex items-center justify-center pl-24 pr-24 lg:pr-48 text-white bg-slate-300/50 tracking-wide">
          <li class="mr-4 border-white border-b-2 py-4">
            <a href="">
              <span class="font-bold">00</span> HOME
            </a>
          </li>
          <li class="mr-4 py-4">
            <a href="">
              <span class="font-bold">01</span> DESTINATION
            </a>
          </li>
          <li class="mr-4 py-4">
            <a href="">
              <span class="font-bold">02</span> CREW
            </a>
          </li>
          <li class="mr-4 py-4">
            <a href="">
              <span class="font-bold">03</span> TECHNOLOGY
            </a>
          </li>
        </ul>
      </nav>
      <div class="md:hidden mr-16">
        <Hamburger
          size={30}
          direction="right"
          toggled={isOpen}
          toggle={setOpen}
          hideOutline={false}
          label="Show menu"
          easing="ease-in"
        />
      </div>
    </div>
  );
};

export default Nav;
