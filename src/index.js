import 'babel-polyfill';
import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App';
import { AppContextProvider } from './Context/AppContext';
import reportWebVitals from './reportWebVitals';
import Theme from './Theme/Theme.config';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   
      <HashRouter>
        <ChakraProvider theme={Theme}>
        <AppContextProvider >
          <App />
          </AppContextProvider>
        </ChakraProvider>
      </HashRouter>
   

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
