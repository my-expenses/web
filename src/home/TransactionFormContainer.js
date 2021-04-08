import TransactionForm from "./TransactionForm";
import {useEffect, useState} from "react";
import api from "../gateways/api";
import qs from "qs";
import {useDispatch} from "react-redux";
import {errorAction, successAction} from "../actions/MessageActions";

const TransactionFormContainer = ({categories, setNewTransaction}) => {
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
        setNewTransaction(res.data.transaction)
      })
      .catch(err => dispatch(errorAction(err.response.data.message)))
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

        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default TransactionFormContainer;