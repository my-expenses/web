import TransactionCard from "./TransactionCard";
import api from "../gateways/api";
import {useDispatch, useSelector} from "react-redux";
import {errorAction, successAction} from "../actions/MessageActions";
import {removedTransaction, updatedTransaction} from "../actions/TransactionActions";
import {useState} from "react";
import qs from "qs";

const TransactionCardContainer = (props) => {
  const dispatch = useDispatch()
  const categoriesState = useSelector(state => state.categories)
  const transactionsData = useSelector(state => state.transactionsData)
  const [openEditDialog, setOpenEditDialog] = useState(false)
  const [transactionToEdit, setTransactionToEdit] = useState({})
  const [loadingEdit, setLoadingEdit] = useState(false)

  const deleteTransaction = (transactionID) => {
    api.delete(`/auth/transactions/${transactionID}`)
      .then(() => {
        dispatch(successAction("Transaction deleted"))
        dispatch(removedTransaction(transactionID))
      })
      .catch(err => dispatch(errorAction(err.response.data.message)))
  }

  const handleClickOpen = (transaction) => {
    setTransactionToEdit(transaction)
    setOpenEditDialog(true)
  }
  const handleClose = () => {
    setOpenEditDialog(false)
  }

  const handleTitleChange = title => {
    setTransactionToEdit(prevState => ({
      ...prevState,
      title: title
    }))
  }
  const handleTypeChange = type => {
    setTransactionToEdit(prevState => ({
      ...prevState,
      type: type
    }))
  }
  const handleAmountChange = amount => {
    setTransactionToEdit(prevState => ({
      ...prevState,
      amount: amount
    }))
  }
  const handleCategoryChange = category => {
    setTransactionToEdit(prevState => ({
      ...prevState,
      category: category,
      categoryID: category.ID,
    }))
  }
  const handleDateChange = date => {
    setTransactionToEdit(prevState => ({
      ...prevState,
      date: date
    }))
  }

  const handleUpdate = () => {
    setLoadingEdit(true)
    api.put(`/auth/transactions/${transactionToEdit.ID}`, qs.stringify({
      transactionTitle: transactionToEdit.title,
      amount: transactionToEdit.amount,
      categoryID: transactionToEdit.categoryID,
      type: transactionToEdit.type,
      date: new Date(transactionToEdit.date).toISOString(),
    })).then(res => {
      setOpenEditDialog(false)
      dispatch(updatedTransaction(res.data.transaction))
      dispatch(successAction("Transaction Updated"))
    }).catch(err => dispatch(errorAction(err.response.data.message)))
      .finally(() => setLoadingEdit(false))
  }


  return (
    <div>
      <TransactionCard
        categoriesState={categoriesState}
        page={props.page}
        setPage={props.setPage}
        transactionsData={transactionsData}

        deleteTransaction={deleteTransaction}
        openEditDialog={openEditDialog}
        handleClose={handleClose}
        handleClickOpen={handleClickOpen}
        transactionToEdit={transactionToEdit}

        handleTitleChange={handleTitleChange}
        handleTypeChange={handleTypeChange}
        handleAmountChange={handleAmountChange}
        handleCategoryChange={handleCategoryChange}
        handleDateChange={handleDateChange}

        handleUpdate={handleUpdate}
        loading={loadingEdit}
      />
    </div>
  );
};

export default TransactionCardContainer;