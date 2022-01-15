import React from "react";
import img from "../images/favicon-32x32.png";

const Nav = () => {
  return (
    <div class="flex mt-7 w-screen justify-between items-center">
      <h3>
        <img src={img} alt="" class="h-12 ml-16" />
      </h3>
      <nav>
        <ul class="flex items-center justify-center pl-24 pr-48 text-white bg-slate-300/50 tracking-wide">
          <li class="mr-4 border-white border-b-2 py-5"><a href=""><span class="font-bold pb-5">00</span> HOME</a></li>
          <li class="mr-4 py-5"><a href=""><span class="font-bold">01</span> DESTINATION</a></li>
          <li class="mr-4 py-5"><a href=""><span class="font-bold">02</span> CREW</a></li>
          <li class="mr-4 py-5"><a href=""><span class="font-bold">03</span> TECHNOLOGY</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
