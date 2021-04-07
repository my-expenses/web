import TransactionCard from "./TransactionCard";
import {useEffect, useState} from "react";
import api from "../gateways/api";

const TransactionCardContainer = (props) => {
  const [page, setPage] = useState(1)
  const itemsPerPage = 10

  const [transactions, setTransactions] = useState([])
  const [totalTransactions, setTotalTransactions] = useState(0)
  const [totalPages, setTotalPages] = useState(0)

  useEffect(() => {
    api.get("/auth/transactions", {
      params: {
        page: page,
        itemsPerPage: itemsPerPage,
        sortBy: ["created_at"],
        sortDesc: ["true"]
      }
    }).then(res => {
      setTransactions(res.data.transactions)
      setTotalTransactions(res.data.numberOfRecords)
      setTotalPages(Math.ceil(totalTransactions / itemsPerPage))
    })
  }, [page])


  useEffect(() => {
    if (props.newTransaction !== null)
      setTransactions(prevState => [...prevState, props.newTransaction])
  }, [props.newTransaction])


  const deleteTransaction = (transactionID) => {
    api.delete(`/auth/transactions/${transactionID}`)
      .then(res => {
        setTransactions(prevState => prevState.filter(transaction => transaction.ID !== transactionID))
      })
      .catch(err => console.log(err))
  }

  return (
    <div>
      <TransactionCard
        transactions={transactions}
        totalTransactions={totalTransactions}
        page={page}
        setPage={setPage}
        totalPages={totalPages}

        deleteTransaction={deleteTransaction}
      />
    </div>
  );
};

export default TransactionCardContainer;