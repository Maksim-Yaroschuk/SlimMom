import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './fonts/GothamPro-Bold.ttf';
import './fonts/GothamPro-Light.ttf';
import './index.css';
import { ThemeProvider } from 'styled-components';
import { theme } from './components/Theme/Theme';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/slimMom-1">
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
