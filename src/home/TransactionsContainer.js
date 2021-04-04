import Transactions from "./Transactions";

const TransactionsContainer = (props) => {
  return (
    <div>
      <Transactions
        categories={props.categories}
      />
    </div>
  );
};

export default TransactionsContainer;