import React from "react";

import "./App.css";
import Header from "./components/Header";
import Balance from "./components/Balance";
import Form from "./components/Form";
import TransactionList from "./components/TransactionList";
import GlobalStateContextProvider from "./contexts/GlobalStateContext";

function App() {
  return (
    <div className="app-container">
      <GlobalStateContextProvider>
        <Header />
        <Balance />
        <Form />
        <TransactionList />
      </GlobalStateContextProvider>
    </div>
  );
}

export default App;
