import { createContext, useState } from "react";
import { ethers } from "ethers";
const SmartContract = createContext();
import { ABI } from "../utils/ABI";

export const ContractProvidor = ({ children }) => {
  const [address, setAddress] = useState("");

  const DeployAddress = "0x0A213FFa59ef3E1D8fCaE6Ba99b4fcaE2eb56f0A";

  const providor = new ethers.providers.Web3Provider(window.ethereum);
  const contract = new ethers.Contract(
    DeployAddress,
    ABI,
    providor.getSigner()
  );

  const addOrder = (value) => {
    contract.addOrder(value);
  };

  let value = {
    address,
    setAddress,
    addOrder,
  };
  return (
    <SmartContract.Provider value={value}>{children}</SmartContract.Provider>
  );
};

export default SmartContract;
