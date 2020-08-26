import React, { useState, useContext } from "react";

import { v4 as uuidv4 } from "uuid";

import { GlobalStateContext } from "../contexts/GlobalStateContext";

function Form() {
  const { state, dispatch } = useContext(GlobalStateContext);
  console.log(state);

  const handleIncome = (e) => {
    e.preventDefault();
    if (incomeInput.text && incomeInput.amount) {
      dispatch({
        type: "ADD_INCOME",
        payload: { ...incomeInput, id: uuidv4() },
      });
      setIncomeInput({ text: "", amount: "" });
    }
  };

  const handleExpense = (e) => {
    e.preventDefault();
    if (expenseInput.text && expenseInput.amount) {
      dispatch({
        type: "ADD_EXPENSE",
        payload: { ...expenseInput, id: uuidv4() },
      });
      setExpenseInput({ text: "", amount: "" });
    }
  };

  const [incomeInput, setIncomeInput] = useState({ text: "", amount: "" });
  const [expenseInput, setExpenseInput] = useState({ text: "", amount: "" });

  const onChangeIncome = (e) => {
    setIncomeInput({ ...incomeInput, [e.target.name]: e.target.value });
  };
  const onChangeExpense = (e) => {
    setExpenseInput({ ...expenseInput, [e.target.name]: e.target.value });
  };
  return (
    <div className="form">
      <form onSubmit={handleIncome}>
        <input
          type="text"
          name="text"
          placeholder="enter income item..."
          value={incomeInput.text}
          onChange={onChangeIncome}
        />
        <input
          type="number"
          name="amount"
          placeholder="eg. 123"
          value={incomeInput.amount}
          onChange={onChangeIncome}
        />
        <button className="income-btn" type="submit">
          submit
        </button>
      </form>
      <form onSubmit={handleExpense}>
        <input
          type="text"
          name="text"
          placeholder="enter expense..."
          value={expenseInput.text}
          onChange={onChangeExpense}
        />
        <input
          type="number"
          name="amount"
          placeholder="eg. 123"
          value={expenseInput.amount}
          onChange={onChangeExpense}
        />
        <button className="expense-btn" type="submit">
          submit
        </button>
      </form>
    </div>
  );
}

export default Form;
