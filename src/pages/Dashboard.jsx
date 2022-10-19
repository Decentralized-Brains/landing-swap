import Discount from "../assets/img/Logo.png";

import { useState, useEffect, useContext } from "react";
import SmartContract from "../context/SmartContract";
import Table from "../components/Table";
import Loader from "../components/Loader";

const Dashboard = () => {
  const { address, contract, getAllOrderHandler } = useContext(SmartContract);
  const [value, setValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [getBalance, setGetBalance] = useState(0);

  const orderHandler = async () => {
    if (address && contract) {
      if (value === "") return alert("Enter amount please!");
      setIsLoading(true);
      try {
        await contract.addOrder(value);
        alert("Order success!");
        setValue("");
        getAllOrderHandler();
        setIsLoading(false);
      } catch (err) {
        alert("Faild Order!");
        setIsLoading(false);
      }
    } else {
      alert("Please Connect Wallet!");
      setIsLoading(false);
    }
  };

  const getBalanceHandler = async () => {
    if (address && contract) {
      const result = await contract.getAllOrderBalanceByUsers();
      setGetBalance(result.toNumber());
    }
  };

  useEffect(() => {
    getBalanceHandler();
  }, [getAllOrderHandler]);

  return (
    <div>
      <div className="container max-w-[1260px] mx-auto px-6">
        <div className="h-[100px]"></div>
        <div className="flex justify-center">
          <div className="mx-auto flex flex-col items-center">
            <div>
              <img className="w-[260px] -mt-10 -mb-10" src={Discount} alt="" />
            </div>
            <div>
              <div className="rounded-md md:w-[500px] overflow-hidden border flex justify-between border-indigo-600">
                <input
                  className="w-full py-3 px-3 focus:outline-none block"
                  type="number"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  placeholder="Enter amount"
                />
                <button
                  disabled={isLoading}
                  className="bg-indigo-600 min-w-[150px] block disabled:bg-indigo-500 hover:bg-indigo-500 py-3 text-white"
                  onClick={orderHandler}
                >
                  {isLoading ? <Loader /> : "Add Order "}
                </button>
              </div>
            </div>
            <br />
            <br />
            <div>
              <div className="min-w-fit rounded-lg bg-indigo-600 py-4 px-6">
                <h4 className="text-white text-xl">
                  <span className="text-gray-300">Total Balance: </span>
                  {address ? getBalance : "0"}
                </h4>
              </div>
            </div>

            {/* Table */}
            <Table />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
