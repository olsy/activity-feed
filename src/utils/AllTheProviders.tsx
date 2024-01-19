import { CssBaseline, ThemeProvider } from '@mui/material';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../app/store';
import theme from '../themes/default';

const AllTheProviders = ({ children }: { children: React.ReactNode }) => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      {children}
    </ThemeProvider>
  </Provider>
);

export default AllTheProviders;
