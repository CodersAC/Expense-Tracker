import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const History = () => {
  const { transactions, deleteTransaction } = useContext(GlobalContext);
  return (
    <div>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <li
            key={transaction.id}
            className={transaction.amount < 0 ? "minus" : "plus"}
          >
            {transaction.title}{" "}
            <span>
              {transaction.amount < 0 ? "-" : "+"}$
              {Math.abs(transaction.amount)}
            </span>
            <button
              onClick={() => deleteTransaction(transaction.id)}
              className="delete-btn"
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
