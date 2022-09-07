import chart from "../assets/img/Chart.png";

const Graph = () => {
  return (
    <div className="my-8 xl:my-28">
      <h2 className="text-indigo-500 text-center mb-8 pt-12">
        Advance Cloud Mining Technology
      </h2>
      <div className="md:grid grid-cols-2 gap-12 py-12">
        <div className="flex flex-col justify-center">
          <p className="text-indigo-800">
            The Discount business is a group of blockchain experts who also
            operate a platform for cloud mining cryptocurrencies online.
          </p>
          <br />
          <p className="text-indigo-800">
            The token will be purchase on an exchanger, it will then be bought
            into trust wallet , which will be connected to the platform where it
            will be mined or farmed.
          </p>
          <br />
          <p className="text-indigo-800">
            After the 14 days both the amount used to mine and the profit will
            go to the trust wallet.During the withdrawal to trust wallet 40 % of
            the total of the token to withdraw goes to another wallet (burn)
            address Or you pay 30% of the total value of the token to the admin
            wallet
          </p>
          <br />
          <p className="text-indigo-800">
            This choice will be made at the beginning of the plan when buying.
            If skipped at the beginning the two(2) options should pop up at the
            withdrawal stage.
          </p>
          <br />
          <p className="text-indigo-800">
            This will be the end of the first cycle. This same process will
            while loop 10 more times.
          </p>
        </div>
        <div>
          <img className="mt-10 xl:mt-6" src={chart} alt="" />
          <p className="text-center py-12 font-semibold text-gray-500">
            Distribution of Tokens
          </p>
        </div>
      </div>
    </div>
  );
};

export default Graph;
