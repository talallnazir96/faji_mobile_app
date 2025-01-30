import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {ROUTES} from '../utils/constants';

import ChatHomeScreen from '../screens/Chat/ChatHomeScreen';
import ChatScreen from '../screens/Chat/ChatScreen';
import UserChatScreen from '../screens/Chat/UserChatScreen';
const Stack = createNativeStackNavigator();

export default function ChatNavigator() {
  return (
    <Stack.Navigator
      initialRouteName={ROUTES.CHAT_HOME_SCREEN}
      screenOptions={{
        headerShown: false,
        presentation: 'transparentModal',
      }}>
      <Stack.Screen name={ROUTES.CHAT_HOME_SCREEN} component={ChatHomeScreen} />
      <Stack.Screen name={ROUTES.CHAT_SCREEN} component={ChatScreen} />
      <Stack.Screen name={ROUTES.USER_CHAT_SCREEN} component={UserChatScreen} />
    </Stack.Navigator>
  );
}
