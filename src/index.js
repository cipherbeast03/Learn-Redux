import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import store from './store';

import App from './App';

store.subscribe(() => console.log(store.getState()));

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
