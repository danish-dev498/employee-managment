import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import LoginPage from './pages/Login';
import EmployeeDataTable from './features/employees/components/EmployeeDataTable';
import { Provider } from 'react-redux';
import { store } from './config/store';
import Width from './components/Width';
import LocalStorage from './components/LocalStorage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
