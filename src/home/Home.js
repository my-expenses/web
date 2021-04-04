import {DatePicker, MuiPickersUtilsProvider} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import CategoriesChipsContainer from "./CategoriesChipsContainer";
import TransactionsContainer from "./TransactionsContainer";

const Home = (props) => {
  return (
    <div>
      <Container>
        <Grid container spacing={3}>
          <Grid item>
            <CategoriesChipsContainer
              categories={props.categories}
              setCategories={props.setCategories}
            />
          </Grid>
        </Grid>
        <Grid container direction="row" spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <DatePicker
                orientation="portrait"
                autoOk
                disableFuture
                variant="static"
                openTo="month"
                views={["year", "month"]}
                value={props.month}
                onChange={val => props.setMonth(val)}
              />
            </MuiPickersUtilsProvider>
          </Grid>
          <Grid item xs={12} sm={6} md={9}>
            <TransactionsContainer
              categories={props.categories}
            />
          </Grid>
        </Grid>

      </Container>

    </div>
  );
};


export default Home;