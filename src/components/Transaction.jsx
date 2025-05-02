import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Transaction = () => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 1000000000),
      title,
      amount: +amount,
    };

    addTransaction(newTransaction);
    setTitle("");
    setAmount("");
  };

  return (
    <div>
      <h3>Add Transaction</h3>
      <form onSubmit={handleSubmit}>
        <h5>Title</h5>
        <input
          type="text"
          placeholder="Enter Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <h5>Amount: ( - ) Expenses / ( + ) Income</h5>
        <input
          type="number"
          placeholder="0"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};
