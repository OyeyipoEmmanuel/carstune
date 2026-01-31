import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Remove the CSS loader once React is ready
const appLoader = document.getElementById('app-loader');
if (appLoader) {
  setTimeout(() => {
    appLoader.style.opacity = '0';
    appLoader.style.transition = 'opacity 0.3s';
    setTimeout(() => appLoader.remove(), 300);
  }, 100);
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)