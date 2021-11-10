import React from 'react';

import { AppProvider } from './app.provider';

const TestAppProvider = ({ children }) => (
  <AppProvider apiUrl="http://localhost:3000" >
    {children}
  </AppProvider>
);

export default TestAppProvider;