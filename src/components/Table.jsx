import { useEffect, useContext } from "react";
import SmartContract from "../context/SmartContract";
import Time from "react-time-format";

const Table = () => {
  const { address, contract, allOrder, getAllOrderHandler } =
    useContext(SmartContract);

  const getNonce = async () => {
    const nonce = await contract.signer.getTransactionCount();
    return nonce;
  };

  const claimOrderHander = async (OrderId) => {
    if (address && contract) {
      try {
        const nonce = await getNonce();
        await contract.claimOrder(OrderId, {
          nonce: nonce,
          gasLimit: 600000,
        });
      } catch (err) {
        console.log("Erroe: ", err);
      }
    } else {
      alert("Please Connect Wallet!");
    }
  };

  const convertTime = (seconds) => {
    // console.log(seconds);
  };

  useEffect(() => {
    getAllOrderHandler();
    console.log(allOrder);
  }, [address, contract]);

  return (
    <div className="min-w-[500px] mx-auto">
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <br />
            <br />
            <h3 className="mb-2 text-gray-800">Your Orders: </h3>
            <div className="overflow-hidden">
              <table className="min-w-full rounded-lg overflow-hidden">
                <thead className="bg-blue-500 border-b">
                  <tr>
                    <th
                      scope="col"
                      className="text-sm font-semibold text-white px-6 py-4 text-left"
                    >
                      Due Time
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-semibold text-white px-6 py-4 text-left"
                    >
                      Claim
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-semibold text-white px-6 py-4 text-left"
                    >
                      Token Holder
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-semibold text-white px-6 py-4 text-left"
                    >
                      Amount
                    </th>

                    <th
                      scope="col"
                      className="text-sm font-semibold text-white px-6 py-4 text-left"
                    >
                      Action
                    </th>
                  </tr>
                </thead>

                {allOrder?.length > 0 && address && (
                  <tbody>
                    {allOrder.map((order, index) => (
                      <tr key={index} className="bg-gray-100 border-b">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-center">
                          <Time
                            value={order.dueTime.toNumber()}
                            format="hh:mm:ss"
                          />
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center">
                          {order.success.toString() === "false" ? (
                            <span className="font-semibold text-green-600">
                              Not Claimed
                            </span>
                          ) : (
                            <span className="font-semibold text-red-500">
                              Claimed
                            </span>
                          )}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center">
                          {order.tokenHolder.slice(0, 8) +
                            "..." +
                            order.tokenHolder.slice(
                              address.length - 8,
                              order.tokenHolder.length
                            )}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center">
                          {order.amount.toString()}
                        </td>

                        <td>
                          {order.success.toString() === "false" ? (
                            <button
                              className="bg-green-500 active:ring-2 ring-green-700 hover:bg-green-600 rounded-md py-1 font-semibold px-3 text-white text-sm mr-4"
                              onClick={() =>
                                claimOrderHander(order.orderId.toString())
                              }
                            >
                              Claim Order
                            </button>
                          ) : (
                            <button
                              disabled={true}
                              className="bg-green-400 rounded-md py-1 font-semibold px-3 text-white text-sm mr-4"
                            >
                              Claim Order
                            </button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                )}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
