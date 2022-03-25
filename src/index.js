import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '../src/App/Layout/App';
import 'flowbite';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configStore } from './App/Store/configStore';

const store = configStore()


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);



