export const startedFetchingTransactions = () => {
  return {
    type: "STARTED_FETCH",
  }
}

export const fetchedTransactions = transactionsData => {
  return {
    type: "FETCHED_TRANSACTIONS",
    transactions: transactionsData.transactions,
    totalTransactions: transactionsData.totalTransactions,
  }
}

export const addedTransaction = transaction => {
  return {
    type: "ADDED_TRANSACTION",
    addedTransaction: transaction,
  }
}

export const updatedTransaction = transaction => {
  return {
    type: "UPDATED_TRANSACTION",
    updatedTransaction: transaction,
  }
}

export const removedTransaction = transactionID => {
  return {
    type: "DELETE_TRANSACTION",
    deletedTransactionID: transactionID,
  }
}