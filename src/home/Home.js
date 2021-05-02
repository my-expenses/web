import {DatePicker, MuiPickersUtilsProvider} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import CategoriesChipsContainer from "./categories_chips/CategoriesChipsContainer";
import TransactionsContainer from "./transactions/TransactionsContainer";

const Home = (props) => {
  return (
    <div>
      <Container>
        <Grid container spacing={3}>
          <Grid item>
            <CategoriesChipsContainer />
          </Grid>
        </Grid>
        <Grid container direction="row" spacing={3}>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <DatePicker
                orientation="portrait"
                autoOk
                disableFuture
                variant="static"
                openTo="month"
                views={["year", "month"]}
                value={props.month}
                onChange={val => props.handleMonthChange(val)}
              />
            </MuiPickersUtilsProvider>
          </Grid>
          <Grid item xs={12} sm={6} md={8} lg={9}>
            <TransactionsContainer />
          </Grid>
        </Grid>

      </Container>

    </div>
  );
};


export default Home;