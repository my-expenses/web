import errorReducer from "./errorReducer";
import monthReducer from "./monthReducer";
import {combineReducers} from 'redux';
import categoriesReducer from "./categoriesReducer";

const allReducers = combineReducers({
  snackbar: errorReducer,
  selectedMonth: monthReducer,
  categories: categoriesReducer,
})

export default allReducers