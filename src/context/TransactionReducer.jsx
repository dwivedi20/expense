const TransactionReducer = (state, action) => {
  if (action.type === "DELETE_TODO") {
    return {
      ...state,
      transactions: state.transactions.filter(
        (item) => item.id !== action.payload
      ),
    };
  } else if (action.type === "SAVE_TODO") {
    return {
      ...state,
      transactions: [action.payload, ...state.transactions],
    };
  }  
      else if (action.type === "EDIT_TODO") {
    return {
      ...state,
      edit: { transaction: action.payload, isEdit: true },
    };
  } 
    else if (action.type === "UPDATE_TODO") {
    return {
      ...state,
      transactions: state.transactions.map((item) =>
        item.id === action.payload.id ? action.payload : item
      ),
      edit: { transaction: {}, isEdit: false },
    };
  }
};

export default TransactionReducer;
