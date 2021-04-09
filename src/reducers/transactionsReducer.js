const initialState = {
  transactions: [],
  totalTransactions: 0,
  totalPages: 0,
}

const transactionsReducer = (state = initialState, action) => {
  switch(action.type) {
    case "FETCHED_TRANSACTIONS":
      return {
        transactions: action.transactions,
        totalTransactions: action.totalTransactions,
        totalPages: Math.ceil(action.totalTransactions / 10)
      }
    case "ADDED_TRANSACTION":
      return {
        ...state,
        transactions: [...state.transactions, action.addedTransaction]
      }
    case "DELETE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.filter(transaction => transaction.ID !== action.deletedTransactionID)
      }
    default:
      return state
  }
}

export default transactionsReducer