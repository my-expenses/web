import TransactionCard from "./TransactionCard";
import {useEffect} from "react";
import api from "../gateways/api";
import {useDispatch, useSelector} from "react-redux";
import {errorAction, successAction} from "../actions/MessageActions";

const TransactionCardContainer = (props) => {
  const dispatch = useDispatch()
  const setTransactions = props.setTransactions
  const categories = useSelector(state => state.categories)

  useEffect(() => {
    if (props.newTransaction !== null)
      setTransactions(prevState => [...prevState, props.newTransaction])
  }, [props.newTransaction, setTransactions])


  const deleteTransaction = (transactionID) => {
    api.delete(`/auth/transactions/${transactionID}`)
      .then(res => {
        dispatch(successAction("Transaction deleted"))
        setTransactions(prevState => prevState.filter(transaction => transaction.ID !== transactionID))
      })
      .catch(err => dispatch(errorAction(err.response.data.message)))
  }

  return (
    <div>
      <TransactionCard
        categories={categories}
        transactions={props.transactions}
        totalTransactions={props.totalTransactions}
        page={props.page}
        setPage={props.setPage}
        totalPages={props.totalPages}

        deleteTransaction={deleteTransaction}
      />
    </div>
  );
};

export default TransactionCardContainer;