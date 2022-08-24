import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-screen grid place-items-center">
      <div>
        <h1>Lorem ipsum dolor sit amet consectetur</h1>
        <p className="mt-6">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque
          expedita commodi numquam deserunt. Et quidem optio possimus distinctio
          necessitatibus deserunt?
        </p>
        <a href="#" className="text-sky-600 mt-4">
          Learm More
        </a>
      </div>
      <div>
        <div className="min-w-[350px] border rounded-xl p-4">
          <div>
            <div>
              <h3>Swap</h3>
              <p>Lorem ipsum dolor sit amet</p>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
