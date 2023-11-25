import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function Transaction({ tranasction }) {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = tranasction.amount < 0 ? "-" : "+";
  return (
    <li className={tranasction.amount < 0 ? "minus" : "plus"}>
      {tranasction.text}{" "}
      <span>
        {sign}${Math.abs(tranasction.amount)}
      </span>{" "}
      <button
        onClick={() => deleteTransaction(tranasction.id)}
        className="delete-btn"
      >
        x
      </button>
    </li>
  );
}

export default Transaction;
