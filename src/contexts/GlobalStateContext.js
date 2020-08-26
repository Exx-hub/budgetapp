import React, { useReducer, useEffect } from "react";

const reducer = (currState, action) => {
  switch (action.type) {
    default:
      return currState;
    case "ADD_INCOME":
      return {
        ...currState,
        incomeHistory: [...currState.incomeHistory, action.payload],
      };
    case "ADD_EXPENSE":
      return {
        ...currState,
        expenseHistory: [...currState.expenseHistory, action.payload],
      };
    case "DELETE_ITEM":
      return {
        ...currState,
        incomeHistory: currState.incomeHistory.filter(
          (item) => item.id !== action.payload
        ),
        expenseHistory: currState.expenseHistory.filter(
          (item) => item.id !== action.payload
        ),
      };
  }
};

export const GlobalStateContext = React.createContext();

function GlobalStateContextProvider({ children }) {
  const initialState = JSON.parse(localStorage.getItem("transactions")) || {
    incomeHistory: [],
    expenseHistory: [],
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(state));
  }, [state]);

  return (
    <GlobalStateContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalStateContext.Provider>
  );
}

export default GlobalStateContextProvider;
