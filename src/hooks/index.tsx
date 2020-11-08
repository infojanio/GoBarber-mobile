import React from 'react';

import { AuthProvider } from './auth';

// Criação do AppProvider, funciona como um provider global, engloba todos os providers
const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>{children}</AuthProvider>
);

export default AppProvider;

/*
const AppContext: React.FC = ({ children }) => (
  <AuthProvider>{children}</AuthProvider>
);

export default AppContext;
*/
