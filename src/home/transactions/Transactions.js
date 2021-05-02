import TransactionFormContainer from "../transactionForm/TransactionFormContainer";
import TransactionsCardsContainer from "../transactions_cards/TransactionsCardsContainer";
import Grid from "@material-ui/core/Grid";
import {Tab} from "@material-ui/core";
import {TabContext, TabList, TabPanel} from "@material-ui/lab";
import GroupedTransactionsContainer from "../grouped_transactions/GroupedTransactionsContainer";

const Transactions = props => {
  return (
    <div>
      <Grid container spacing={2}>
        <TabContext value={props.selectedTab}>
          <TabList onChange={(e, newValue) => props.setSelectedTab(newValue)}>
            <Tab label="Transactions" value="0"/>
            <Tab label="Categories" value="1"/>
          </TabList>

          <TabPanel value="0">
            <Grid item xs={12}>
              <TransactionFormContainer />
            </Grid>
            <Grid item xs={12}>
              <TransactionsCardsContainer
                page={props.page}
                setPage={props.setPage}
              />
            </Grid>
          </TabPanel>
          <TabPanel value="1">
            <GroupedTransactionsContainer />
          </TabPanel>
        </TabContext>

      </Grid>
    </div>
  );
};

Transactions.propTypes = {};

export default Transactions;