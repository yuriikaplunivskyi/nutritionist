import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter  as Router } from 'react-router-dom';
import Loader from './components/loader/Loader.jsx';
import ScrollToAnchor from './hooks/ScrollToAnchor.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Router fallbackElement={<Loader/>}>
          <ScrollToAnchor/>
          <App />
      </Router>
  </React.StrictMode>,
);

