import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Dashboard from '../pages/Dashboard';
import CreateAppointment from '../pages/CreateAppointment';
import AppointmentCreated from '../pages/AppointmentCreated';
import Profile from '../pages/Profile';

// import { Container } from './styles';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false, // mostra o Header
      cardStyle: { backgroundColor: '#312e38' },
    }}
    // initialRouteName="SignIn" // (inicializa nesta página)
  >
    <App.Screen name="Dashboard" component={Dashboard} />
    <App.Screen name="CreateAppointment" component={CreateAppointment} />
    <App.Screen name="AppointmentCreated" component={AppointmentCreated} />

    <App.Screen name="Profile" component={Profile} />
  </App.Navigator>
);
export default AppRoutes;

/*
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Dashboard from '../pages/Dashboard';

// import { Container } from './styles';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      // headerShown: false,
      cardStyle: { backgroundColor: '#312e38' },
    }}
    // initialRouteName="SignIn" // (inicializa nesta página)
  >
    <App.Screen name="Dashboard" component={Dashboard} />
  </App.Navigator>
);
export default AppRoutes;
*/
