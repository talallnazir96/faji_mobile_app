import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {ROUTES} from '../utils/constants';

import HistoryScreen from '../screens/History/HistoryScreen';
import AccountSetting from '../screens/Profile/AccountSetting';
import SupportScreen from '../screens/Support/SupportScreen';
import TermsScreen from '../screens/TermsAndConditions/TermsScreen';
const Stack = createNativeStackNavigator();

export default function SettingNavigator() {
  return (
    <Stack.Navigator
      // initialRouteName={ROUTES.SEARCH_SCREEN}
      screenOptions={{
        headerShown: false,
        presentation: 'transparentModal',
      }}>
      <Stack.Screen name={ROUTES.TERMS} component={TermsScreen} />
      <Stack.Screen name={ROUTES.ACCOUNT_SETTINGS} component={AccountSetting} />

      <Stack.Screen name={ROUTES.SUPPORT} component={SupportScreen} />
      <Stack.Screen name={ROUTES.HISTORY} component={HistoryScreen} />
    </Stack.Navigator>
  );
}
