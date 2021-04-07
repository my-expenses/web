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
            newTransaction={newTransaction}
          />
        </Grid>
      </Grid>
    </div>
  );
};

Transactions.propTypes = {};

export default Transactions;