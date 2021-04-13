import PropTypes from 'prop-types';
import {Card, CardActions, CardHeader, Tooltip} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import styles from "./TransactionCardStyling";
import Chip from "@material-ui/core/Chip";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import moment from 'moment';
import {Pagination} from "@material-ui/lab";

const TransactionCard = props => {
  const classes = styles()

  return (
    <div>
      <Grid container spacing={2}>
        {!props.categoriesState.loading && props.transactionsData.transactions.map(data => {
          return (
            <Grid item key={data.ID} xs={12} lg={6}>
              <Card className={classes.card}>
                <CardHeader
                  avatar={
                    <Tooltip title={data.amount} arrow>
                      <Avatar className={(data.type) ? classes.incomeAvatar : classes.expenseAvatar}>
                        {data.amount}
                      </Avatar>
                    </Tooltip>
                  }

                  title={data.title}
                  subheader={new moment(data.date).format("llll")}
                  titleTypographyProps={{variant: "h6"}}
                  subheaderTypographyProps={{variant: "subtitle1"}}
                  action={
                    <Chip
                      label={(data.categoryID === null) ? "-" : props.categoriesState.categories.find(category => category.ID === data.categoryID).title}
                      color="primary"
                      className={classes.chipText}
                    />
                  }
                />

                <CardActions>
                  <Button size="small" className={classes.deleteButton} color="secondary"
                          onClick={() => props.deleteTransaction(data.ID)}>Delete</Button>
                </CardActions>
              </Card>
            </Grid>
          )
        })}

        <Grid container justify="center">
          <Pagination count={props.transactionsData.totalPages} page={props.page} onChange={(e, value) => props.setPage(value)}/>
        </Grid>
      </Grid>

    </div>
  );
};

TransactionCard.propTypes = {
  page: PropTypes.number,
  setPage: PropTypes.func,
  transactionsData: PropTypes.object,

  deleteTransaction: PropTypes.func,
}

export default TransactionCard;