import {Paper} from "@material-ui/core";
import TransactionFormContainer from "./TransactionFormContainer";

const Transactions = props => {
  return (
    <div>
        <Paper>
          <TransactionFormContainer
            categories={props.categories}
          />
        </Paper>
    </div>
  );
};

Transactions.propTypes = {

};

export default Transactions;