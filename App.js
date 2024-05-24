import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import AppNavigator from './app/navigations/AppNavigator';
export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}
