import PropTypes from 'prop-types';
import Grid from "@material-ui/core/Grid";
import {Card, CardHeader} from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
import styles from "./GroupedTransactionsStyling";
import CloseIcon from '@material-ui/icons/Close';

const GroupedTransactions = props => {
  const classes = styles()

  return (
    <div>
      <Grid container spacing={2}>
        {!props.categoriesState.loading && props.groupedTransactions.map(data => {
          // find the proper category or assign it to uncategorized
          let category = props.categoriesState.categories.find(category => category.ID === data.categoryID) ||
            {title: "Uncategorized"}
          let avatar = (data.categoryID === null) ? <CloseIcon /> : category.title.toUpperCase().substr(0, 2)
          return (
            <Grid item key={data.categoryID} xs={12} lg={6}>
              <Card className={classes.card}>
                <CardHeader
                  avatar={<Avatar className={(data.total > 0) ? classes.incomeAvatar : classes.expenseAvatar}>
                    {avatar}
                  </Avatar>}
                  title={category.title}
                  titleTypographyProps={{variant: "h6"}}
                  subheader={(data.total > 0) ? "Amount gained from this category" : "Amount spent from this category"}
                  subheaderTypographyProps={{variant: "subtitle1"}}
                  action={
                    <Chip
                      label={data.total}
                      color="primary"
                      className={classes.chipText}
                    />
                  }
                />
              </Card>
            </Grid>
          )
        })}
      </Grid>
    </div>
  );
};

GroupedTransactions.propTypes = {
  categoriesState: PropTypes.object,
  groupedTransactions: PropTypes.array,
};

export default GroupedTransactions;