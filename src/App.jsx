import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import BalanceSection from "./components/BalanceSection";
import ListGroup from "./components/ListGroup";
import { TransactionProvider } from "./context/TransactionContext";

const App = () => {
  return (
    <TransactionProvider>
      <Navbar />
      <div className="container px-3 py-5">
        <BalanceSection />
        <Form />
        <ListGroup />
      </div>
    </TransactionProvider>
  );
};

export default App;
