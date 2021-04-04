import TransactionForm from "./TransactionForm";
import {useEffect, useState} from "react";

const TransactionFormContainer = ({categories}) => {
  const uncategorized = {
    ID: -1,
    title: "Uncategorized"
  }
  const [title, setTitle] = useState("")
  const [amount, setAmount] = useState("0")
  const [category, setCategory] = useState(uncategorized)
  const [type, setType] = useState(0)  // 0 for expenses, 1 for income
  const [date, setDate] = useState(new Date())

  useEffect(() => {
    let foundSelectedCategory = false
    categories.forEach(availableCategory => {
      if (availableCategory.ID === category.ID)
        foundSelectedCategory = true
    })
    if (!foundSelectedCategory)
      setCategory(uncategorized)
  }, [categories])

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
      />
    </div>
  );
};

export default TransactionFormContainer;