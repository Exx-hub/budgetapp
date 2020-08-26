import React, { useContext, useEffect, useState } from "react";
import { GlobalStateContext } from "../contexts/GlobalStateContext";

function Balance() {
  const { state } = useContext(GlobalStateContext);

  const [income, setIncome] = useState("");
  const [expense, setExpense] = useState("");

  useEffect(() => {
    let reducedIncome = state.incomeHistory.reduce((acc, cv) => {
      return acc + parseInt(cv.amount);
    }, 0);
    let reducedExpense = state.expenseHistory.reduce((acc, cv) => {
      return acc + parseInt(cv.amount);
    }, 0);

    setIncome(reducedIncome);
    setExpense(reducedExpense);
  }, [state.expenseHistory, state.incomeHistory]);

  return (
    <div className="balance" style={{ color: "white" }}>
      <h1>Your Balance:</h1>
      <h2>{`$ ${income - expense}`}</h2>
      <div className="incexp">
        <div style={{ color: "#2c8210" }}>
          <h2>Income</h2>
          <h2>{`$ ${income}`}</h2>
        </div>
        <div style={{ color: "red" }}>
          <h2>Expense</h2>
          <h2>{`$ ${expense}`}</h2>
        </div>
      </div>
    </div>
  );
}

export default Balance;
