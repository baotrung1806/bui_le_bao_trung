import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './main.css';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter basename="/bui_le_bao_trung">
    <StrictMode>
      <App />
    </StrictMode>
  </BrowserRouter>
);
