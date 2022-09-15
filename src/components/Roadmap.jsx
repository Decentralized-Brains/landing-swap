import React from "react";

const Roadmap = () => {
  return (
    <div>
      <h2 className="text-indigo-500 text-center mb-8 pt-6">
        How Does Discount Works?
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
          <h3 className="text-lg">Purchase Token on Exchanger</h3>
          <p className="mt-1 max-w-[300px]">
            Purchase Token on exchanger an it will be transferred to trust
            wallet
          </p>
        </div>

        <div className="p-4 text-center">
          <div className="p-6 rounded-full bg-slate-800 w-[110px] h-[110px] mb-4 mx-auto">
            <img
              src="http://www.zeus-mining.com/assets/front/images/Add-Bitcoin-Wallet-Address.png"
              alt=""
            />
          </div>
          <h3 className="text-lg">Withdrawal Option</h3>
          <p className="mt-1 max-w-[300px]">
            During the withdrawal to trust wallet 40 % of the token goes to
            (burn) address Or 30% of the token to the admin wallet.
          </p>
        </div>

        <div className="p-4 text-center">
          <div className="p-6 rounded-full bg-slate-800 w-[110px] h-[110px] mb-4 mx-auto">
            <img
              src="http://www.zeus-mining.com/assets/front/images/Start-Mining.png"
              alt=""
            />
          </div>
          <h3 className="text-lg">Mining Process </h3>
          <p className="mt-1 max-w-[300px]">
            Mining process takes 14 days for a BLOCK to complete.
          </p>
        </div>

        <div className="p-4 text-center">
          <div className="p-6 rounded-full bg-slate-800 w-[110px] h-[110px] mb-4 mx-auto">
            <img
              src="http://www.zeus-mining.com/assets/front/images/Upgrade-Your-Plan.png"
              alt=""
            />
          </div>
          <h3 className="text-lg">Receive your Reward</h3>
          <p className="mt-1 max-w-[300px]">
            Reward will be given to the influencers from 100 BUSD to 10 Million
            BUSD based on reference.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
