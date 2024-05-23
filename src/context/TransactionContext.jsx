import { createContext, useReducer, useState } from "react";
import TransactionReducer from "./TransactionReducer";

const TransactionContext = createContext();

export const TransactionProvider = ({ children }) => {
  const initialState = {
    transactions: [{ id: 1, text: "Salary", amount: 9999 }],
    edit: {
      transaction: {},
      isEdit: false,
    },
  };

  const [state, dispatch] = useReducer(TransactionReducer, initialState);

  // Save Transaction

  const saveTransaction = (text, amount) => {
    const newTransaction = {
      id: crypto.randomUUID(),
      text,
      amount: parseInt(amount),
    };

    dispatch({
      type: "SAVE_TODO",
      payload: newTransaction,
    });
  };
  

  // Delete Transaction

  const deleteTransaction = (id) => {
    dispatch({
      type: "DELETE_TODO",
      payload: id,
    });
  };

  // Edit Transaction

  const editTransaction = (oldTransaction) => {
    dispatch({
      type: "EDIT_TODO",
      payload: oldTransaction,
    });
  };

  // Update Transaction

  const updateTransaction = (updatedTransaction) => {
    dispatch({
      type: "UPDATE_TODO",
      payload: updatedTransaction,
    });
  };

  return (
    <TransactionContext.Provider
      value={{
        transactions: state.transactions,
        edit: state.edit,
        saveTransaction,
        deleteTransaction,
        editTransaction,
        updateTransaction,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};

export default TransactionContext;
