import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { AuthProvider } from './context/AuthContext';
import { MyListProvider } from './context/MyListContext';
import ScrollToTop from './helpers/ScrollToTop';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <MyListProvider>
          <ScrollToTop />
          <App />
        </MyListProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
