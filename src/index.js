import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './fonts/GothamPro-Bold.ttf';
import './fonts/GothamPro-Light.ttf';
import './index.css';
import { ThemeProvider } from 'styled-components';
import { theme } from './components/Theme/Theme';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="/SlimMom">
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
