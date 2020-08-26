import React, { useContext } from "react";

import { GlobalStateContext } from "../contexts/GlobalStateContext";

function TransactionList() {
  const { state, dispatch } = useContext(GlobalStateContext);

  const handleDelete = (id) => {
    dispatch({ type: "DELETE_ITEM", payload: id });
  };

  return (
    <div className="list">
      <div className="income-history">
        <h2>Income History</h2>
        {state.incomeHistory.map((item) => (
          <div className="income-item" key={item.id}>
            <button onClick={() => handleDelete(item.id)}>del</button>
            <p>{item.text}</p>
            <p>{item.amount}</p>
          </div>
        ))}
      </div>
      <div className="expense-history">
        <h2>Expense History</h2>
        {state.expenseHistory.map((item) => (
          <div className="expense-item" key={item.id}>
            <button onClick={() => handleDelete(item.id)}>del</button>
            <p>{item.text}</p>
            <p>{item.amount}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TransactionList;
