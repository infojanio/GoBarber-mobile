import React from 'react';

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

import { useAuth } from '../hooks/auth';

const Routes: React.FC = () => {
  const { user } = useAuth(); // pega um usuário autenticado

  // se tiver usuário autenticado mostra AppRoutes senão AuthRoutes
  return user ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;

/*
import React from 'react';
import { View, ActivityIndicator } from 'react-native';

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';
import { useAuth } from '../hooks/auth';

const Routes: React.FC = () => {
  const { user, loading } = useAuth(); // pega um usuário autenticado

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#999" />
      </View>
    );
  }

  // se tiver usuário autenticado mostra AppRoutes senão AuthRoutes
  return user ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
*/
