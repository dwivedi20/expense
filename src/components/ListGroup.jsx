import React, { useContext } from "react";
import ListItem from "./ListItem";
import TransactionContext from "../context/TransactionContext";

const ListGroup = () => {
  const { transactions } = useContext(TransactionContext);

  return (
    <div className="my-3">
      <h3 className="text-light">All Transactions : </h3>
      <ul className="my-3 list-group">
        {transactions.map((transaction) => (
          <ListItem key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </div>
  );
};

export default ListGroup;
