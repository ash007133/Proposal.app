// ✅ Import Tailwind CSS first
import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// ✅ Ensure root element exists
const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);

// ✅ Render App with React.StrictMode
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
