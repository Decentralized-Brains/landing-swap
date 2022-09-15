import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu, AiFillSetting } from "react-icons/ai";

import logo from "../assets/img/Logo.png";
import { NavLinks } from "./Navlinks";
import Meta from "../assets/img/Meta.png";
// import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [account, setAccount] = useState("");

  // CONNET WALLET
  const connectWallet = async () => {
    if (!account) {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setAccount(accounts[0]);
      } catch (err) {
        console.log("Could't connect!");
      }
    }
  };

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY >= 10 ? setShadow(true) : setShadow(false);
    });
  }, []);

  return (
    <div
      className={
        shadow
          ? "fixed w-full h-[90px] duration-300 z-[100] shadow-lg bg-[#fafeff] backdrop-blur-xl"
          : "fixed w-full h-[90px] duration-300 z-[100]"
      }
    >
      <div className="container mx-auto flex w-full h-full justify-between items-center px-2 2xl:px-16">
        <a
          href="/#"
          className="hidden md:flex items-center justify-center gap-3 -mt-2"
        >
          <img src={logo} className="w-[150px] " alt="" />
        </a>
        <div className="flex items-center justify-center">
          <ul className="hidden md:flex md:gap-x-3 lg:gap-x-6 mt-5">
            {NavLinks.map((data) => (
              <a href={data.url} key={data.id}>
                <li className="c-link ml-0 mb-6 w-fit text-gray-700 hover:border-b border-gray-700 hover:text-cyan-600 duration-300">
                  {data.text}
                </li>
              </a>
            ))}
            <li className="c-link ml-0 mb-6 w-fit text-gray-700 hover:border-b border-gray-700 hover:text-cyan-600 duration-300">
              <a
                href="https://dorac.app/whitepaper/626c73845d4eb45942f0e7dd"
                target="_blank"
              >
                Whitepaper
              </a>
            </li>
          </ul>
          <div
            onClick={handleNav}
            className="md:hidden text-black dark:text-white cursor-pointer"
          >
            <AiOutlineMenu size={25} />
          </div>
        </div>
        <div className="flex">
          <div className="flex items-center justify-center gap-2 md:gap-4">
            <div className="w-10 h-10 rounded-full bg-black/20 dark:bg-white/20 p-2 cursor-pointer">
              <img src={Meta} alt="" className="" />
            </div>
            <span className="font-bold md:min-w-[130px]">40.12 BUSD</span>
          </div>

          <div className="p-4 text-2xl cursor-pointer">
            <AiFillSetting />
          </div>

          <button
            className="py-2 px-6 mt-2 gradient-bg text-white rounded-lg disabled:opacity-70"
            onClick={connectWallet}
            disabled={account ? true : false}
          >
            {account
              ? account.slice(0, 4) +
                "..." +
                account.slice(account.length - 4, account.length)
              : "Connect Wallet"}
          </button>
        </div>
      </div>

      <div
        onClick={handleNav}
        className={
          nav ? "fixed left-0 top-0 w-full h-screen bg-black/70 md:hidden" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed h-screen bg-[#f0f7f8] left-0 top-0 w-[80%] p-10 ease-in duration-300"
              : "fixed h-screen left-[-100%] w-[70%] p-10 top-0 ease-in duration-300"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <a
                href="/#"
                className="flex items-center justify-center gap-3 -mt-2"
              >
                <img src={logo} className="w-[45px] " alt="" />
                <span className="font-bold text-2xl">Logo</span>
              </a>
              <div onClick={handleNav} className="c-button">
                <AiOutlineClose />
              </div>
            </div>
            <br />
            <hr />
          </div>

          <div className="h-[70%] py-4 flex flex-col justify-between">
            <ul>
              {NavLinks.map((data) => (
                <a href={data.url} key={data.id}>
                  <li className="c-link ml-0 mb-6 w-fit text-gray-700 hover:border-b hover:text-cyan-500 duration-300">
                    {data.text}
                  </li>
                </a>
              ))}
              <li className="c-link ml-0 mb-6 w-fit text-gray-700 hover:border-b hover:text-cyan-500 duration-300">
                <a
                  href="https://dorac.app/whitepaper/626c73845d4eb45942f0e7dd"
                  target="_blank"
                >
                  Whitepaper
                </a>
              </li>
              <li>
                <a href="#">
                  <button className="py-2 px-6 gradient-bg text-white rounded-lg hover:bg-violet-700 duration-300 -mt-2">
                    Connect Wallet
                  </button>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
