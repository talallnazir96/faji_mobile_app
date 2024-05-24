import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Image, Platform, View} from 'react-native';
import FavoriteScreen from '../screens/Favourite/FavouriteScreen';
import HomeScreen from '../screens/Home/HomeScreen';
import ProfileScreen from '../screens/Profile/ProfileScreen';
import TicketScreen from '../screens/Tickets/TicketScreen';
import colors from '../utils/colors';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        // tabBarActiveTintColor: colors.primary,
        tabBarStyle: {
          height: 88,
          overflow: 'hidden',
          width: '90%',
          alignSelf: 'center',
          backgroundColor: 'rgba(7, 7, 7, 0.8)',
          position: 'absolute',
          bottom: 20,
          left: 20,
          right: 20,
          borderRadius: 45,
          borderTopWidth: 0.1,
          borderTopColor: 'rgba(7, 7, 7, 0.8)',
          paddingTop: Platform.OS == 'ios' ? 30 : 0,
        },
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({focused, color, size}) => (
            <View
              style={{
                backgroundColor: focused ? colors.primary : 'transparent',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 100,
                height: Platform.OS == 'ios' ? 88 : '100%',
                width: '100%',
              }}>
              <Image
                source={require('../assets/tabbar-home.png')}
                style={{
                  width: 23,
                  height: 23,
                  resizeMode: 'contain',
                  tintColor: focused ? '#000000' : '#FFFFFF',
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({focused, color, size}) => (
            <View
              style={{
                backgroundColor: focused ? colors.primary : 'transparent',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 100,
                height: Platform.OS == 'ios' ? 88 : '100%',

                width: '100%',
              }}>
              <Image
                source={require('../assets/tabbar-heart.png')}
                style={{
                  width: 23,
                  height: 23,
                  resizeMode: 'contain',
                  tintColor: focused ? '#000000' : '#FFFFFF',
                }}
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Ticket"
        component={TicketScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({focused, color, size}) => (
            <View
              style={{
                backgroundColor: focused ? colors.primary : 'transparent',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 100,
                height: Platform.OS == 'ios' ? 88 : '100%',

                width: '100%',
              }}>
              <Image
                source={require('../assets/tabbar-tct.png')}
                style={{
                  width: 23,
                  height: 23,
                  resizeMode: 'contain',
                  tintColor: focused ? '#000000' : '#FFFFFF',
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({focused, color, size}) => (
            <View
              style={{
                backgroundColor: focused ? colors.primary : 'transparent',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 100,
                height: Platform.OS == 'ios' ? 88 : '100%',

                width: '100%',
              }}>
              <Image
                source={require('../assets/tabbar-profile.png')}
                style={{
                  width: 23,
                  height: 23,
                  resizeMode: 'contain',
                  tintColor: focused ? '#000000' : '#FFFFFF',
                }}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
