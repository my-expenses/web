import Transactions from "./Transactions";
import {useEffect, useState} from "react";
import api from "../gateways/api";
import {useDispatch, useSelector} from "react-redux";
import {fetchedTransactions, startedFetchingTransactions} from "../actions/TransactionActions";

const TransactionsContainer = () => {
  const [page, setPage] = useState(1)
  const itemsPerPage = 10

  const selectedMonth = useSelector(state => state.selectedMonth)
  const [selectedTab, setSelectedTab] = useState("0")
  const categoriesState = useSelector(state => state.categories)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(startedFetchingTransactions())
    api.get("/auth/transactions", {
      params: {
        page: page,
        itemsPerPage: itemsPerPage,
        sortBy: ["date"],
        sortDesc: ["true"],
        month: new Date(selectedMonth).toISOString(),
      }
    }).then(res => {
      dispatch(fetchedTransactions({
        transactions: res.data.transactions,
        totalTransactions: res.data.numberOfRecords,
      }))
    })
  }, [page, selectedMonth, categoriesState])

  return (
    <div>
      <Transactions
        page={page}
        setPage={setPage}

        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      />
    </div>
  );
};

export default TransactionsContainer;