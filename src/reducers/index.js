import errorReducer from "./errorReducer";
import monthReducer from "./monthReducer";
import categoriesReducer from "./categoriesReducer";
import transactionsReducer from "./transactionsReducer";
import userReducer from "./userReducer";
import storage from 'redux-persist/lib/storage'
import {persistCombineReducers} from "redux-persist"; // defaults to localStorage for web

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["userData"]
}

const allReducers = persistCombineReducers(persistConfig, {
  snackbar: errorReducer,
  selectedMonth: monthReducer,
  categories: categoriesReducer,
  transactionsData: transactionsReducer,
  userData: userReducer,
})

export default allReducers