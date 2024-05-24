import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import SplashScreen from '../screens/Auth/SplashScreen';

import {ROUTES} from '../utils/constants';

import PartiesMapView from '../screens/Home/PartiesMapView';
import ViewAllEvents from '../screens/Home/ViewAllEvents';
import AuthNavigator from './AuthNavigator';
import BottomTabNavigator from './BottomTabNavigator';
import ChatNavigator from './ChatNavigator';
import EventNavigator from './EventNavigator';
import SearchNavigator from './SearchNavigator';
import SettingNavigator from './SettingNavigator';
import TicketNavigator from './TicketNavigator';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={ROUTES.SPLASH_SCREEN}
      screenOptions={{
        headerShown: false,
        // presentation: 'fullScreenModal',
        // animationTypeForReplace: 'push',
      }}>
      <Stack.Screen name={ROUTES.SPLASH_SCREEN} component={SplashScreen} />
      <Stack.Screen name={ROUTES.AUTH} component={AuthNavigator} />
      <Stack.Screen
        name={ROUTES.BOTTOM_TAB_NAVIGATOR}
        component={BottomTabNavigator}
      />
      <Stack.Screen name={ROUTES.EVENT_NAVIGATOR} component={EventNavigator} />
      <Stack.Screen
        name={ROUTES.TICKET_NAVIGATOR}
        component={TicketNavigator}
      />
      <Stack.Screen
        name={ROUTES.SEARCH_NAVIGATOR}
        component={SearchNavigator}
      />
      <Stack.Screen
        name={ROUTES.SETTING_NAVIGATOR}
        component={SettingNavigator}
      />
      <Stack.Screen name={ROUTES.CHAT_NAVIGATOR} component={ChatNavigator} />
      <Stack.Screen
        name={ROUTES.VIEW_ALL_EVENT_SCREEN}
        component={ViewAllEvents}
      />
      <Stack.Screen name={ROUTES.PARTIES_MAP_VIEW} component={PartiesMapView} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
