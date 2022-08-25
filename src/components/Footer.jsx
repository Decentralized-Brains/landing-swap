import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-gray-800 mt-40">
      <div className="container max-w-[1260px] mx-auto px-6 grid xl:grid-cols-6 gap-12 py-20">
        <div className="col-span-3">
          <h3 className="text-white font-bold">Footer Header</h3>
          <p className="text-gray-400 pt-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati
            voluptate velit error modi non corrupti asperiores suscipit
            recusandae facere ut. Id, mollitia quam pariatur ea dolore tempora
            asperiores, ipsum beatae ab eos tenetur
          </p>
        </div>
        <div>
          <h3 className="text-white font-bold">Footer Header 2</h3>
          <ul className="text-gray-400">
            <li className="my-2">
              <a className="font-semibold hover:text-gray-300" href="#">
                Home
              </a>
            </li>
            <li className="my-2">
              <a className="font-semibold hover:text-gray-300" href="#">
                About
              </a>
            </li>
            <li className="my-2">
              <a className="font-semibold hover:text-gray-300" href="#">
                Contact
              </a>
            </li>
            <li className="my-2">
              <a className="font-semibold hover:text-gray-300" href="#">
                Links
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-bold">Footer Header 2</h3>
          <ul className="text-gray-400">
            <li className="my-2">
              <a className="font-semibold hover:text-gray-300" href="#">
                Home
              </a>
            </li>
            <li className="my-2">
              <a className="font-semibold hover:text-gray-300" href="#">
                About
              </a>
            </li>
            <li className="my-2">
              <a className="font-semibold hover:text-gray-300" href="#">
                Contact
              </a>
            </li>
            <li className="my-2">
              <a className="font-semibold hover:text-gray-300" href="#">
                Links
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
