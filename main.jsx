import React from 'react';
import { createRoot } from 'react-dom/client';
import PackingList from '/components/PackingList';
import '/styles/katsuko.css';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PackingList />
  </React.StrictMode>
);
