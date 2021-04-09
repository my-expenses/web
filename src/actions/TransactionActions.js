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

export const removedTransaction = transactionID => {
  return {
    type: "DELETE_TRANSACTION",
    deletedTransactionID: transactionID,
  }
}