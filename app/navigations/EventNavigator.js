import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import EventProfileScreen from '../screens/Event/EventProfileScreen';
import FestivalScreen from '../screens/Festival/FestivalScreen';
import FestivalTicketScreen from '../screens/Festival/FestivalTicketScreen';
import MapScreen from '../screens/Map/MapScreen';
import BalanceDetail from '../screens/Payment/BalanceDetail';
import PaymentScreen from '../screens/Payment/PaymentScreen';
import WithdrawalReview from '../screens/Withdrawal/WithdrawalReview';
import WithdrawalScreen from '../screens/Withdrawal/WithdrawalScreen';
import {ROUTES} from '../utils/constants';
const Stack = createNativeStackNavigator();

export default function EventNavigator() {
  return (
    <Stack.Navigator
      initialRouteName={ROUTES.EVENT_PROFILE}
      screenOptions={{
        headerShown: false,
        presentation: 'transparentModal',
      }}>
      <Stack.Screen
        name={ROUTES.EVENT_PROFILE}
        component={EventProfileScreen}
      />
      <Stack.Screen name={ROUTES.FESTIVAL} component={FestivalScreen} />
      <Stack.Screen name={ROUTES.MAP} component={MapScreen} />
      <Stack.Screen
        name={ROUTES.FESTIVAL_TICKET}
        component={FestivalTicketScreen}
      />
      <Stack.Screen name={ROUTES.PAYMENT} component={PaymentScreen} />
      <Stack.Screen name={ROUTES.BALANCE_DETAIL} component={BalanceDetail} />
      <Stack.Screen name={ROUTES.WITHDRAWAL} component={WithdrawalScreen} />
      <Stack.Screen
        name={ROUTES.WITHDRAWAL_REVIEW}
        component={WithdrawalReview}
      />
    </Stack.Navigator>
  );
}
