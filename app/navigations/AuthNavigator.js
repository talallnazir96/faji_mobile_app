import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {
  default as AddPhoneScreen,
  default as EmailScreen,
} from '../screens/Auth/AddPhoneScreen';
import GetStartedScreen from '../screens/Auth/GetStartedScreen';
import LogInScreen from '../screens/Auth/LogInScreen';
import NameScreen from '../screens/Auth/NameScreen';
import NotificationScreen from '../screens/Auth/NotificationScreen';
import OtpVerifyScreen from '../screens/Auth/OtpVerifyScreen';
import PasswordScreen from '../screens/Auth/PasswordScreen';
import PartiesMapView from '../screens/Home/PartiesMapView';
import ViewAllEvents from '../screens/Home/ViewAllEvents';
import {ROUTES} from '../utils/constants';
import BottomTabNavigator from './BottomTabNavigator';
import ChatNavigator from './ChatNavigator';
import EventNavigator from './EventNavigator';
import SearchNavigator from './SearchNavigator';
import SettingNavigator from './SettingNavigator';
import TicketNavigator from './TicketNavigator';

const Stack = createNativeStackNavigator();

export default function AuthNavigator() {
  return (
    <Stack.Navigator
      initialRouteName={ROUTES.GET_STARTED}
      screenOptions={{
        headerShown: false,
        // animationTypeForReplace: 'push',
        // presentation: 'modal',
        presentation: 'fullScreenModal',
        // animationTypeForReplace: 'push',
      }}>
      <Stack.Screen name={ROUTES.GET_STARTED} component={GetStartedScreen} />
      <Stack.Screen name={ROUTES.LOGIN} component={LogInScreen} />
      <Stack.Screen name={ROUTES.EMAIL} component={EmailScreen} />
      <Stack.Screen name={ROUTES.OTP_VERIFY} component={OtpVerifyScreen} />
      <Stack.Screen name={ROUTES.ADD_PHONE} component={AddPhoneScreen} />
      <Stack.Screen name={ROUTES.NAME} component={NameScreen} />
      <Stack.Screen name={ROUTES.PASSWORD} component={PasswordScreen} />
      <Stack.Screen name={ROUTES.NOTIFICATION} component={NotificationScreen} />
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
}
