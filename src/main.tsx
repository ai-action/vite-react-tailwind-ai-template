import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';

import Chat from './components/Chat';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Chat />
  </React.StrictMode>,
);
