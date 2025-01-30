import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Image, Platform, View } from 'react-native';
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
        tabBarStyle: {
          height: 88,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'rgba(7, 7, 7, 0.8)',
          position: 'absolute',
          bottom: 20,
          width: '90%',
          borderRadius: 45,
          borderTopWidth: 0,
          marginHorizontal: 20,
          paddingHorizontal: 10,
        },
        tabBarShowLabel: false,
      }}
    >
      {/** Reusable Tab.Screen setup **/}
      {[
        { name: 'Home', screen: HomeScreen, icon: require('../assets/tabbar-home.png') },
        { name: 'Favorite', screen: FavoriteScreen, icon: require('../assets/tabbar-heart.png') },
        { name: 'Ticket', screen: TicketScreen, icon: require('../assets/tabbar-tct.png') },
        { name: 'Profile', screen: ProfileScreen, icon: require('../assets/tabbar-profile.png') },
      ].map((item, index) => (
        <Tab.Screen
          key={index}
          name={item.name}
          component={item.screen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  backgroundColor: focused ? colors.primary : 'transparent',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 100,
                  height: 55,
                  width: 55,
                  marginTop: 50,
                }}
              >
                <Image
                  source={item.icon}
                  style={{
                    width: 25,
                    height: 25,
                    resizeMode: 'contain',
                    tintColor: focused ? '#000000' : '#FFFFFF',
                  }}
                />
              </View>
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
}
