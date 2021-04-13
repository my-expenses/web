const initialState = {
  transactions: [],
  totalTransactions: 0,
  totalPages: 0,
  loading: false,
}

const transactionsReducer = (state = initialState, action) => {
  switch(action.type) {
    case "STARTED_FETCH":
      return {
        ...state,
        loading: true,
      }
    case "FETCHED_TRANSACTIONS":
      return {
        transactions: action.transactions,
        totalTransactions: action.totalTransactions,
        totalPages: Math.ceil(action.totalTransactions / 10),
        loading: false
      }
    case "ADDED_TRANSACTION":
      return {
        ...state,
        transactions: [...state.transactions, action.addedTransaction]
      }
    case "UPDATED_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.map(transaction => {
          if (transaction.ID === action.updatedTransaction.ID)
            return action.updatedTransaction
          return transaction
        })
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