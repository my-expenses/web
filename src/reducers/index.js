import errorReducer from "./errorReducer";
import monthReducer from "./monthReducer";
import {combineReducers} from 'redux';

const allReducers = combineReducers({
  snackbar: errorReducer,
  selectedMonth: monthReducer,
})

export default allReducers