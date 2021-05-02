import PropTypes from 'prop-types';
import {Card, CardActions, CardHeader, Tooltip} from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import moment from "moment";
import Chip from "@material-ui/core/Chip";
import Button from "@material-ui/core/Button";
import styles from "./TransactionCardStyling";

const TransactionCardUi = (props) => {
  const classes = styles()
  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Tooltip title={props.transaction.amount} arrow>
            <Avatar className={(props.transaction.type) ? classes.incomeAvatar : classes.expenseAvatar}>
              {props.transaction.amount}
            </Avatar>
          </Tooltip>
        }

        title={props.transaction.title}
        subheader={new moment(props.transaction.date).format("llll")}
        titleTypographyProps={{variant: "h6"}}
        subheaderTypographyProps={{variant: "subtitle1"}}
        action={
          <Chip
            label={props.categoryTitle}
            color="primary"
            className={classes.chipText}
          />
        }
      />

      <CardActions disableSpacing>
        <Button size="small" disabled={props.displayOnly}
                onClick={() => props.handleClickOpen(props.transaction)}>Edit</Button>
        <Button size="small" disabled={props.displayOnly} className={classes.deleteButton} color="secondary"
                onClick={() => props.deleteTransaction(props.transaction.ID)}>Delete</Button>
      </CardActions>
    </Card>
  );
};

TransactionCardUi.propTypes = {
  transaction: PropTypes.object,
  categoryTitle: PropTypes.string,
  handleClickOpen: PropTypes.func,
  deleteTransaction: PropTypes.func,
  displayOnly: PropTypes.bool,
}

export default TransactionCardUi;