import PropTypes from 'prop-types';
import {Card, CardHeader, Dialog, DialogContent, DialogTitle} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import {Pagination, Skeleton} from "@material-ui/lab";
import TransactionForm from "../transactionForm/TransactionForm";
import TransactionCardUi from "./TransactionCardUI";

const TransactionsCards = props => {
  return (
    <div>
      <Grid container spacing={2}>
        {props.transactionsData.loading && <Grid container spacing={2}>
          <Grid item xs={12} lg={6}>
            <Card>
              <CardHeader avatar={
                <Skeleton variant="circle" animation="wave" width={60} height={60}/>
              } title={<Skeleton variant="text"/>} subheader={<Skeleton variant="text"/>}

              />
            </Card>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Card>
              <CardHeader avatar={
                <Skeleton variant="circle" animation="wave" width={60} height={60}/>
              } title={<Skeleton variant="text"/>} subheader={<Skeleton variant="text"/>}

              />
            </Card>
          </Grid>
        </Grid>}


        {!props.categoriesState.loading && props.transactionsData.transactions.map(data => {
          return (
            <Grid item key={data.ID} xs={12} lg={6}>
              <TransactionCardUi
              transaction={data}
              categoryTitle={
                (data.categoryID === null) ? "Uncategorized"
                  : props.categoriesState.categories.find(category => category.ID === data.categoryID).title
              }
              deleteTransaction={props.deleteTransaction}
              handleClickOpen={props.handleClickOpen}
              />
            </Grid>
          )
        })}

        <Grid container justify="center">
          <Pagination count={props.transactionsData.totalPages} page={props.page} onChange={(e, value) => props.setPage(value)}/>
        </Grid>
      </Grid>

      <Dialog open={props.openEditDialog} onClose={() => props.handleClose()} fullWidth maxWidth="lg">
        <DialogTitle>Edit Transaction</DialogTitle>
        <DialogContent>
          <TransactionForm
            title={props.transactionToEdit.title}
            amount={props.transactionToEdit.amount + ""}
            type={(props.transactionToEdit.type) ? 1 : 0}
            categoriesState={props.categoriesState}
            date={props.transactionToEdit.date}

            category={props.categoriesState.categories
              .find(category => category.ID === props.transactionToEdit.categoryID)
            || {ID: 0, title: "Uncategorized"}}

            setTitle={props.handleTitleChange}
            setType={props.handleTypeChange}
            setAmount={props.handleAmountChange}
            setCategory={props.handleCategoryChange}
            setDate={props.handleDateChange}

            handleSubmit={props.handleUpdate}
            loading={props.loading}
          />
        </DialogContent>

      </Dialog>

    </div>
  );
};

TransactionsCards.propTypes = {
  page: PropTypes.number,
  setPage: PropTypes.func,
  transactionsData: PropTypes.object,

  deleteTransaction: PropTypes.func,
  openEditDialog: PropTypes.bool,
  handleClose: PropTypes.func,
  handleClickOpen: PropTypes.func,
  transactionToEdit: PropTypes.object,

  handleTitleChange: PropTypes.func,
  handleTypeChange: PropTypes.func,
  handleAmountChange: PropTypes.func,
  handleCategoryChange: PropTypes.func,
  handleDateChange: PropTypes.func,

  handleUpdate: PropTypes.func,
  loading: PropTypes.bool,
}

export default TransactionsCards;