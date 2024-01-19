import { CssBaseline, ThemeProvider } from '@mui/material';
import React from 'react';
import theme from '../themes/default';

const AllTheProviders = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider theme={theme}>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <CssBaseline />
    {children}
  </ThemeProvider>
);

export default AllTheProviders;
