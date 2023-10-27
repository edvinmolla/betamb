import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import AccountScreen from "../screens/AccountScreen";
import CartScreen from "../screens/CartScreen";
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();

const screenOptions = {
  tabBarShowLabel: true,
  tabBarHideOnKeyboard: true,
  headersShown: false,
  tabBarLabelStyle: {
    fontSize: 14,
    fontWeight: '600',
  },
  tabBarStyle: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
}

const BottomTabNavigation = () => {
  return (


    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name="Home" component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather name="home" size={22} color={focused ? "black" : "gray"} />
          ),
          tabBarLabelStyle: {
            color: ({ focused }) => (focused ? "black" : "gray"), // Conditionally set label color
          },
        }}
      />
      <Tab.Screen name="Quick Order" component={QuickOrderScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons name="run-fast" size={22} color={focused ? "black" : "gray"} />
          ),
          tabBarLabelStyle: {
            color: ({ focused }) => (focused ? "black" : "gray"), // Conditionally set label color
          },
        }}
      />
      <Tab.Screen name="Cart" component={CartScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather name="shopping-cart" size={22} color={focused ? "black" : "gray"} />
          ),
          tabBarLabelStyle: {
            color: ({ focused }) => (focused ? "black" : "gray"), // Conditionally set label color
          },

        }}
      />
      <Tab.Screen name="Account" component={AccountScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather name="user" size={22} color={focused ? "black" : "gray"} />
          ),
          tabBarLabelStyle: {
            color: ({ focused }) => (focused ? "black" : "gray"), // Conditionally set label color
          },
        }}
      />
    </Tab.Navigator>

  )
}

export default BottomTabNavigation;