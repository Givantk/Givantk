import { createBottomTabNavigator } from "react-navigation";

//icons to be viewed in the navigator

import Icon from "react-native-vector-icons/Ionicons";

import React from "react";

//Importing screens to be included in the BottomTabNavigator

import AccountScreen from "../screens/TabScreens/AccountScreen/AccountScreen.js";

import FeaturedScreen from "../screens/TabScreens/FeaturedScreen/FeaturedScreen.js";

import MyServicesScreen from "../screens/TabScreens/MyServicesScreen/MyServicesScreen.js";

import NewServiceScreen from "../screens/TabScreens/NewServiceScreen/NewServiceScreen.js";

import NotificationsScreen from "../screens/TabScreens/NotificationsScreen/NotificationsScreen.js";

const BottomTabNavigator = createBottomTabNavigator(
  {
    Featured: {
      screen: FeaturedScreen,
      navigationOptions: {
        tabBarLabel: "Featured",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-star" size={25} color={tintColor} />
        )
      }
    },
    MyServices: {
      screen: MyServicesScreen,
      navigationOptions: {
        tabBarLabel: "My services",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-basket" size={25} color={tintColor} />
        )
      }
    },
    NewService: {
      screen: NewServiceScreen,
      navigationOptions: {
        tabBarLabel: "New service",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-add-circle" size={25} color={tintColor} />
        )
      }
    },
    Notifications: {
      screen: NotificationsScreen,
      navigationOptions: {
        tabBarLabel: "Notifications",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-notifications-outline" size={25} color={tintColor} />
        )
      }
    },
    Account: {
      screen: AccountScreen,
      navigationOptions: {
        tabBarLabel: "Account",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-person" size={25} color={tintColor} />
        )
      }
    }
  },
  {
    initialRouteName: "Featured",
    order: ["Featured", "MyServices", "NewService", "Notifications", "Account"],
    tabBarOptions: {
      activeTintColor: "red",
      inactiveTintColor: "grey"
    }
  }
);

export default BottomTabNavigator;
