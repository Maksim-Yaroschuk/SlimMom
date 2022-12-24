import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './fonts/GothamPro-Bold.ttf';
import './fonts/GothamPro-Light.ttf';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeContextProvider } from 'components/Context/Context';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeContextProvider>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter basename="/SlimMom">
            <App />
          </BrowserRouter>
        </PersistGate>
      </ThemeContextProvider>
    </Provider>
  </React.StrictMode>
);
