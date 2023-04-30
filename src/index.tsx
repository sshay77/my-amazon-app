import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';

import './index.css';

import { Amplify } from 'aws-amplify';
import config from './aws-exports';
Amplify.configure(config);


const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App signOut={_ =>console.log(_)}/>
    </Provider>
  </React.StrictMode>
);

