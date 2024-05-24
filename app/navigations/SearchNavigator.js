import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {ROUTES} from '../utils/constants';

import FilterScreen from '../screens/Search/FilterScreen';
import SearchScreen from '../screens/Search/SearchScreen';
const Stack = createNativeStackNavigator();

export default function SearchNavigator() {
  return (
    <Stack.Navigator
      initialRouteName={ROUTES.SEARCH_SCREEN}
      screenOptions={{
        headerShown: false,
        presentation: 'transparentModal',
      }}>
      <Stack.Screen name={ROUTES.SEARCH_SCREEN} component={SearchScreen} />
      <Stack.Screen name={ROUTES.FILTER_SCREEN} component={FilterScreen} />
    </Stack.Navigator>
  );
}
