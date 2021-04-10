import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { PersistGate } from 'redux-persist/integration/react'

import {Provider} from "react-redux";
import exportedStore from "./store";

ReactDOM.render(
  <Provider store={exportedStore.store}>
    <PersistGate loading={null} persistor={exportedStore.persisted}>
      <App/>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

