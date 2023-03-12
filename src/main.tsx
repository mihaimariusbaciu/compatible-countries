import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'urql';

import client from './graphql/client';
import backgroundPng from './assets/bg.png';
import App from './app';

import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <img className="fixed bottom-0 right-0 z-[-1] hidden md:block" src={backgroundPng} />
    <Provider value={client}>
      <App />
    </Provider>
  </React.StrictMode>,
);
