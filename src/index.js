import React from 'react';
import ReactDOM from 'react-dom/client';
import { productsReducer } from './reducers/products';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore } from 'redux'
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

const store = createStore(productsReducer);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

