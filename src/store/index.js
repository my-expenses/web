import {createStore} from "redux";
import allReducers from "../reducers";
import {persistStore} from "redux-persist";

const store = createStore(allReducers)
const persisted = persistStore(store)

const exportedStore = {store, persisted}
export default exportedStore
