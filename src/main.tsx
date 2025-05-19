
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Global error handler to prevent complete app crashes
window.addEventListener('error', (event) => {
  console.error('Global error caught:', event.error);
  // Prevent the browser from showing the default error dialog
  event.preventDefault();
});

// React error boundary fallback for production
const renderApp = () => {
  try {
    const rootElement = document.getElementById("root");
    if (!rootElement) {
      console.error("Root element not found");
      return;
    }
    createRoot(rootElement).render(<App />);
  } catch (error) {
    console.error("Failed to render app:", error);
    // Display a user-friendly error message
    document.body.innerHTML = `
      <div style="text-align: center; padding: 20px; font-family: sans-serif;">
        <h1>Something went wrong</h1>
        <p>We're sorry, but there was a problem loading the application. Please try refreshing the page.</p>
        <button onclick="window.location.reload()" style="padding: 10px 20px; margin-top: 20px; cursor: pointer;">
          Refresh Page
        </button>
      </div>
    `;
  }
};

renderApp();
