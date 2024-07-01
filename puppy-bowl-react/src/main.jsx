import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import store from './store';

// Create a root for ReactDOM rendering
const root = createRoot(document.getElementById('root'));

// Render the App component wrapped in Provider for Redux state management
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
