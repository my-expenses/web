import TransactionForm from "./TransactionForm";
import {useEffect, useState} from "react";
import api from "../gateways/api";
import qs from "qs";
import {useDispatch, useSelector} from "react-redux";
import {errorAction, successAction} from "../actions/MessageActions";
import {addedTransaction} from "../actions/TransactionActions";

const TransactionFormContainer = () => {
  const uncategorized = {
    ID: 0,
    title: "Uncategorized"
  }
  const [title, setTitle] = useState("")
  const [amount, setAmount] = useState("0")
  const [category, setCategory] = useState(uncategorized)
  const [type, setType] = useState(0)  // 0 for expenses, 1 for income
  const [date, setDate] = useState(new Date())
  const dispatch = useDispatch()
  const selectedMonth = useSelector(state => state.selectedMonth)
  const maxDate = useSelector(state => {
    if (state.selectedMonth.getMonth() === new Date().getMonth())
      return "day"
    return "month"
  })
  const categories = useSelector(state => state.categories)

  useEffect(() => {
    if (selectedMonth.getMonth() !== new Date().getMonth())
      setDate(new Date(selectedMonth.getFullYear(), selectedMonth.getMonth(), 1))
    else
      setDate(new Date())
  }, [selectedMonth])

  useEffect(() => {
    let foundSelectedCategory = false
    categories.forEach(availableCategory => {
      if (availableCategory.ID === category.ID)
        foundSelectedCategory = true
    })
    if (!foundSelectedCategory)
      setCategory(uncategorized)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categories])

  const handleSubmit = () => {
    api.post("/auth/transactions", qs.stringify({
      transactionTitle: title,
      amount: amount,
      categoryID: category.ID,
      type: type,
      date: date.toISOString(),
    }))
      .then(res => {
        dispatch(successAction("Transaction created"))
        dispatch(addedTransaction(res.data.transaction))
        clearForm()
      })
      .catch(err => dispatch(errorAction(err.response.data.message)))
  }

  const clearForm = () => {
    setTitle("")
    setAmount("0")
    setCategory(uncategorized)
    setType(0)
  }

  return (
    <div>
      <TransactionForm
        title={title}
        setTitle={setTitle}
        amount={amount}
        setAmount={setAmount}
        category={category}
        setCategory={setCategory}
        type={type}
        setType={setType}
        date={date}
        setDate={setDate}
        categories={categories}
        selectedMonth={selectedMonth}
        maxDate={maxDate}

        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default TransactionFormContainer;