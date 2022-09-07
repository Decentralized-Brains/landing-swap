import { AiFillSetting } from "react-icons/ai";
import { GrRefresh } from "react-icons/gr";
import { RiArrowRightSLine } from "react-icons/ri";
import T from "../assets/img/T.png";
import Bit from "../assets/img/Bit.png";

const Hero = () => {
  return (
    <div className="w-full h-screen grid place-items-center">
      <div className="grid xl:grid-cols-9 gap-6 xl:gap-20">
        <div className="xl:col-span-6 flex items-center p-4">
          <div className="h-fit mt-20 xl:mt-0">
            <h1>Register, Mine and Profit</h1>
            <p className="mt-6 mb-6 text-indigo-700">
              We offer a mining ecosystem which will make you rich in no time.
              Start mining today!
            </p>
            <a
              href="#"
              className="gradient-bg py-2 px-10 rounded-full text-white"
            >
              Start Mining
            </a>
          </div>
        </div>
        {/* swap card */}
        <div className="max-w-[400px] min-w-[350px] border border-black rounded-3xl p-4">
          <div className="flex pt-2 pb-4 border-b border-gray-400">
            <div className="text-center w-full">
              <h3 className="font-bold text-xl">Swap</h3>
              <p className="text-gray-500">Lorem ipsum dolor sit amet</p>
            </div>
            <div className="flex gap-2 text-xl items-center">
              <button className="cursor-pointer hover:text-gray-600">
                <AiFillSetting />
              </button>
              <button className="cursor-pointer hover:text-gray-600">
                <GrRefresh />
              </button>
            </div>
          </div>
          <div>
            <div className="my-8">
              <span className="text-gray-500">From</span>
              <div className="flex justify-between border border-black rounded-full p-[3px] mt-2">
                <div className="flex items-center gap-2 bg-white p-2 rounded-full">
                  <img src={T} alt="" />
                  <span>USDT</span>
                  <span className="text-xl font-bold">
                    <RiArrowRightSLine />
                  </span>
                </div>
                <input
                  className="w-28 bg-transparent focus:outline-none"
                  type="number"
                  placeholder="0.0"
                />
              </div>
            </div>

            <div className="my-8">
              <span className="text-gray-500">To</span>
              <div className="flex justify-between border border-black rounded-full p-[3px] mt-2">
                <div className="flex items-center gap-2 bg-white p-2 rounded-full">
                  <img src={Bit} alt="" />
                  <span>BTC</span>
                  <span className="text-xl font-bold">
                    <RiArrowRightSLine />
                  </span>
                </div>
                <input
                  className="w-28 bg-transparent focus:outline-none"
                  type="number"
                  placeholder="0.0"
                />
              </div>
              <div className="flex justify-between text-sm p-2 text-gray-500">
                <span>Slippage Tolerence</span>
                <span>0.5%</span>
              </div>
            </div>

            <button className="gradient-bg rounded-full p-2 font-bold text-white text-lg">
              Convert
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
