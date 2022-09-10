import React from "react";

const Roadmap = () => {
  return (
    <div>
      <h2 className="text-indigo-500 text-center mb-8 pt-6">
        How Does Cloud Mining Works?
      </h2>

      <div className="my-20 flex flex-col xl:flex-row gap-5 justify-center ">
        {/* card */}
        <div className="p-4 text-center">
          <div className="p-6 rounded-full bg-slate-800 w-[110px] h-[110px] mb-4 mx-auto">
            <img
              src="http://www.zeus-mining.com/assets/front/images/Signup.png"
              alt=""
            />
          </div>
          <h3 className="text-lg">You Register on Zeus-Mining</h3>
          <p className="mt-1 max-w-[300px]">
            Register using your bitcoin wallet address, It takes only 1 minute.
          </p>
        </div>

        <div className="p-4 text-center">
          <div className="p-6 rounded-full bg-slate-800 w-[110px] h-[110px] mb-4 mx-auto">
            <img
              src="http://www.zeus-mining.com/assets/front/images/Add-Bitcoin-Wallet-Address.png"
              alt=""
            />
          </div>
          <h3 className="text-lg">Choose Hashpower and Upgrade</h3>
          <p className="mt-1 max-w-[300px]">
            Upgrade free mining plans to premium, more power, more bitcoins.
          </p>
        </div>

        <div className="p-4 text-center">
          <div className="p-6 rounded-full bg-slate-800 w-[110px] h-[110px] mb-4 mx-auto">
            <img
              src="http://www.zeus-mining.com/assets/front/images/Start-Mining.png"
              alt=""
            />
          </div>
          <h3 className="text-lg">The Mining Process Begins</h3>
          <p className="mt-1 max-w-[300px]">
            We are super transparent, You will see live bitcoin mining.
          </p>
        </div>

        <div className="p-4 text-center">
          <div className="p-6 rounded-full bg-slate-800 w-[110px] h-[110px] mb-4 mx-auto">
            <img
              src="http://www.zeus-mining.com/assets/front/images/Upgrade-Your-Plan.png"
              alt=""
            />
          </div>
          <h3 className="text-lg">Receive Daily Your Mined Bitcoins</h3>
          <p className="mt-1 max-w-[300px]">
            Withdraw your bitcoin at any time, No minimum payout for premium
            users.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
