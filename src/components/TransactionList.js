import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Transaction from "./Transaction";

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((tranasction) => (
          <Transaction key={tranasction.id} tranasction={tranasction} />
        ))}
      </ul>
    </>
  );
};

export default TransactionList;
