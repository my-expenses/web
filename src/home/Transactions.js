import TransactionFormContainer from "./TransactionFormContainer";
import TransactionCardContainer from "./TransactionCardContainer";
import Grid from "@material-ui/core/Grid";
import {useState} from "react";

const Transactions = props => {
  const [newTransaction, setNewTransaction] = useState(null)

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TransactionFormContainer
            categories={props.categories}
            setNewTransaction={setNewTransaction}
          />
        </Grid>
        <Grid item xs={12}>
          <TransactionCardContainer
            categories={props.categories}
            transactions={props.transactions}
            totalTransactions={props.totalTransactions}
            totalPages={props.totalPages}
            newTransaction={newTransaction}

            page={props.page}
            setPage={props.setPage}
            setTransactions={props.setTransactions}
          />
        </Grid>
      </Grid>
    </div>
  );
};

Transactions.propTypes = {};

export default Transactions;