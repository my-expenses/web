import {MenuItem, TextField} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { MuiPickersUtilsProvider, DateTimePicker } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import moment from "moment";
import PropTypes from 'prop-types';
import {Autocomplete} from "@material-ui/lab";
import Button from "@material-ui/core/Button";

const TransactionForm = props => {
  return (
    <div>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            required
            fullWidth
            label="Title"
            variant="outlined"
            value={props.title}
            onChange={(e) => props.setTitle(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            required
            fullWidth
            label="Amount"
            type="number"
            variant="outlined"
            value={props.amount}
            onChange={(e) => props.setAmount(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Autocomplete
            options={[{ID: 0, title: "Uncategorized"}, ...props.categoriesState.categories]}
            disableClearable
            getOptionLabel={(option) => option.title}
            getOptionSelected={(option, value) => option.ID === value.ID }
            renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}
            value={props.category}
            onChange={(event, newValue) => props.setCategory(newValue)}
          />

        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            required
            fullWidth
            select
            label="Type"
            helperText="Select type (Expense or Income)"
            value={props.type}
            onChange={(e) => props.setType(e.target.value)}
          >
            <MenuItem key="expense" value={0}>Expense</MenuItem>
            <MenuItem key="income" value={1}>Income</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} sm={4}>
          <MuiPickersUtilsProvider utils={MomentUtils}>
            <DateTimePicker
              value={props.date}
              fullWidth
              onChange={props.setDate}
              label="Transaction Date"
              minDate={new moment(props.selectedMonth).startOf("month")}
              maxDate={new moment(props.selectedMonth).endOf(props.maxDate)}
            />
          </MuiPickersUtilsProvider>
        </Grid>
        <Grid container>
          <Grid item xs={6}>
            <Button variant="contained" color="primary" fullWidth onClick={() =>props.handleSubmit()}>
              Save
            </Button>
          </Grid>
        </Grid>
      </Grid>

    </div>
  );
};

TransactionForm.propTypes = {
  title: PropTypes.string,
  setTitle: PropTypes.func,
  amount: PropTypes.string,
  setAmount: PropTypes.func,
  category: PropTypes.object,
  setCategory: PropTypes.func,
  type: PropTypes.number,
  setType: PropTypes.func,

  handleSubmit: PropTypes.func
};

export default TransactionForm;