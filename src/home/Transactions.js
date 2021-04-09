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
            setNewTransaction={setNewTransaction}
          />
        </Grid>
        <Grid item xs={12}>
          <TransactionCardContainer
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