import { createContext, useState } from "react";
const SmartContract = createContext();

export function ContractProvidor({ children }) {
  const [address, setAddress] = useState("");
  const [contract, setContract] = useState({});

  return (
    <SmartContract.Provider
      value={{ address, setAddress, contract, setContract }}
    >
      {children}
    </SmartContract.Provider>
  );
}

export default SmartContract;
