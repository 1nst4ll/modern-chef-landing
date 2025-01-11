import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { ErrorBoundary } from './components/errors/ErrorBoundary';
import { LanguageProvider } from './contexts/LanguageContext';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <HelmetProvider>
        <LanguageProvider>
          <App />
        </LanguageProvider>
      </HelmetProvider>
    </ErrorBoundary>
  </React.StrictMode>
);