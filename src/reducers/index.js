import errorReducer from "./errorReducer";
import monthReducer from "./monthReducer";
import {combineReducers} from 'redux';
import categoriesReducer from "./categoriesReducer";
import transactionsReducer from "./transactionsReducer";

const allReducers = combineReducers({
  snackbar: errorReducer,
  selectedMonth: monthReducer,
  categories: categoriesReducer,
  transactionsData: transactionsReducer,
})

export default allReducers