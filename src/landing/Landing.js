import PropTypes from "prop-types"
import styles from "./styling";
import categoriesStyles from "../home/styling"
import Grid from "@material-ui/core/Grid";
import {CssBaseline, Paper} from "@material-ui/core";
import TransactionCardUi from "../home/transactions_cards/TransactionCardUI";
import CategoryChipUi from "../home/categories_chips/CategoryChipUI";

const Landing = (props) => {
  const classes = styles();
  const categoriesClasses = categoriesStyles()
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={12} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={0} square>

        <Paper component="ul" className={categoriesClasses.root}>
        {props.categories.map((data) => {
          return (
            <li key={data.ID}>
              <CategoryChipUi
                category={data}
                displayOnly={true}
              />
            </li>
          );
        })}
        </Paper>

        <Grid container spacing={2}>
          {props.transactions.map(data => {
            return(
              <Grid item key={data.ID} xs={12}>
                <TransactionCardUi
                  transaction={data}
                  categoryTitle={data.categoryTitle}
                  displayOnly={true}
                />
              </Grid>
            )
          })}
        </Grid>
      </Grid>
    </Grid>
  );
};

Landing.propTypes = {
  transactions: PropTypes.array,
  categories: PropTypes.array,
}

export default Landing;