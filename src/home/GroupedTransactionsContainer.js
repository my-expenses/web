import {useSelector} from "react-redux";
import GroupedTransactions from "./GroupedTransactions";
import {useEffect, useState} from "react";
import api from "../gateways/api";

const GroupedTransactionsContainer = () => {
  const categoriesState = useSelector(state => state.categories)
  const [groupedTransactions, setGroupedTransactions] = useState([])
  const selectedMonth = useSelector(state => state.selectedMonth)

  useEffect(() => {
    api.get("/auth/grouped-transactions", {
      params: {
        month: selectedMonth
      }
    }).then(res => {
      setGroupedTransactions(res.data.groupedTransactions)
    })
  }, [selectedMonth, categoriesState])

  return (
    <div>
      <GroupedTransactions
        categoriesState={categoriesState}
        groupedTransactions={groupedTransactions}
      />
    </div>
  );
};

export default GroupedTransactionsContainer;