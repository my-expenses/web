import Transactions from "./Transactions";
import {useEffect, useState} from "react";
import api from "../gateways/api";
import {useSelector} from "react-redux";

const TransactionsContainer = (props) => {
  const [page, setPage] = useState(1)
  const itemsPerPage = 10

  const [transactions, setTransactions] = useState([])
  const [totalTransactions, setTotalTransactions] = useState(0)
  const [totalPages, setTotalPages] = useState(0)

  const selectedMonth = useSelector(state => state.selectedMonth)
  const [selectedTab, setSelectedTab] = useState("0")
  const categories = useSelector(state => state.categories)

  useEffect(() => {
    api.get("/auth/transactions", {
      params: {
        page: page,
        itemsPerPage: itemsPerPage,
        sortBy: ["created_at"],
        sortDesc: ["true"],
        month: new Date(selectedMonth).toISOString(),
      }
    }).then(res => {
      setTransactions(res.data.transactions)
      setTotalTransactions(res.data.numberOfRecords)
      setTotalPages(Math.ceil(res.data.numberOfRecords / itemsPerPage))
    })
  }, [page, selectedMonth, categories])

  return (
    <div>
      <Transactions
        transactions={transactions}
        totalTransactions={totalTransactions}
        totalPages={totalPages}

        page={page}
        setPage={setPage}

        setTransactions={setTransactions}

        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      />
    </div>
  );
};

export default TransactionsContainer;