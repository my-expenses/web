import TransactionCard from "./TransactionCard";
import api from "../gateways/api";
import {useDispatch, useSelector} from "react-redux";
import {errorAction, successAction} from "../actions/MessageActions";
import {removedTransaction} from "../actions/TransactionActions";

const TransactionCardContainer = (props) => {
  const dispatch = useDispatch()
  const categoriesState = useSelector(state => state.categories)
  const transactionsData = useSelector(state => state.transactionsData)

  const deleteTransaction = (transactionID) => {
    api.delete(`/auth/transactions/${transactionID}`)
      .then(() => {
        dispatch(successAction("Transaction deleted"))
        dispatch(removedTransaction(transactionID))
      })
      .catch(err => dispatch(errorAction(err.response.data.message)))
  }

  return (
    <div>
      <TransactionCard
        categoriesState={categoriesState}
        page={props.page}
        setPage={props.setPage}
        transactionsData={transactionsData}

        deleteTransaction={deleteTransaction}
      />
    </div>
  );
};

export default TransactionCardContainer;