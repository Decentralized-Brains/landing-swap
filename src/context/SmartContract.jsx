import { createContext, useState, useEffect } from "react";
const SmartContract = createContext();

export function ContractProvidor({ children }) {
  const [address, setAddress] = useState("");
  const [contract, setContract] = useState({});
  const [allOrder, setAllOrder] = useState([]);

  const getAllOrderHandler = async () => {
    if (address && contract) {
      const result = await contract.getAllOrder();
      setAllOrder(result);
    }
  };

  useEffect(() => {
    getAllOrderHandler();
  }, [allOrder]);

  let values = {
    address,
    setAddress,
    contract,
    setContract,
    allOrder,
    getAllOrderHandler,
  };

  return (
    <SmartContract.Provider value={values}>{children}</SmartContract.Provider>
  );
}

export default SmartContract;
