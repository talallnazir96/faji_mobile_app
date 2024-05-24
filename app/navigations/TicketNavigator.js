import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {ROUTES} from '../utils/constants';

import OrganizeEventScreen from '../screens/Event/OrganizeEventScreen';
const Stack = createNativeStackNavigator();

export default function TicketNavigator() {
  return (
    <Stack.Navigator
      initialRouteName={ROUTES.ORGANIZE_EVENT}
      screenOptions={{
        headerShown: false,
        presentation: 'transparentModal',
      }}>
      <Stack.Screen
        name={ROUTES.ORGANIZE_EVENT}
        component={OrganizeEventScreen}
      />
    </Stack.Navigator>
  );
}
