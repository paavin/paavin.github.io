import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { CssBaseline } from '@mui/material';
import Blog from './blog/Blog';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <CssBaseline />
      <Blog />
  </React.StrictMode>,
);
