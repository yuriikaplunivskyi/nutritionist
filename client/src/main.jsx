import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter  as Router, RouterProvider } from 'react-router-dom';
import Loader from './components/loader/Loader.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider fallbackElement={<Loader/>}>
      <Router >
          <App />
      </Router>
    </RouterProvider>
  </React.StrictMode>,
);

