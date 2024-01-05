import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import 'weather-icons/css/weather-icons.css';
import 'prismjs/themes/prism.css';
import '../src/assets/scss/styles.scss';
import { configureStore } from "./store";

import App from './App';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={configureStore({})}>
      <React.Fragment>
        <BrowserRouter basename={import.meta.env.PUBLIC_URL}>
          <App />
        </BrowserRouter>
      </React.Fragment>
    </Provider>
);
