import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { ROUTES } from '../utils/constants';
import QrScreen from '../screens/QrScreen/QrScreen';

const Stack = createNativeStackNavigator();

export default function QrCodeNavigation() {
    return (
        <Stack.Navigator
            initialRouteName={ROUTES.QR_CODE_SCANNER}
            screenOptions={{
                headerShown: false,
                presentation: 'transparentModal',
            }}>
            <Stack.Screen name={ROUTES.QR_CODE_SCANNER} component={QrScreen} />
        </Stack.Navigator>
    );
}