import React from "react";

const Home = () => {
  return (
    <div class="flex flex-col justify-center items-center mt-20 mb-10 md:my-28 md:block">
      <div class="text-white md:mx-24">
        <h3 class="text-lg md:text-2xl uppercase">So, you want to travel to</h3>
        <div class="flex md:flex-row flex-col justify-center items-center md:justify-between">
          <div>
            <h1 class="text-8xl mb-3 tracking-wider">SPACE</h1>
            <p class="max-w-md">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
          <h1 class="bg-white flex w-48 h-48 rounded-full justify-center items-center text-blue-900 mt-12 md:mt-0">
            EXPLORE
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
