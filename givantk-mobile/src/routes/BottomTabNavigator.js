import { createBottomTabNavigator } from "react-navigation";

//icons
import Icon from "react-native-vector-icons/Ionicons";
import React from "react";

//screens
import AccountScreen from "../screens/0-TabScreens/AccountScreen/AccountScreen.js";
import FeaturedScreen from "../screens/0-TabScreens/FeaturedScreen/FeaturedScreen.js";
import MyServicesScreen from "../screens/0-TabScreens/MyServicesScreen/MyServicesScreen.js";
import NewServiceScreen from "../screens/0-TabScreens/NewServiceScreen/NewServiceScreen.js";
import NotificationsScreen from "../screens/0-TabScreens/NotificationsScreen/NotificationsScreen.js";
import { colors } from "../../assets/styles/base";

const BottomTabNavigator = createBottomTabNavigator(
  {
    Featured: {
      screen: FeaturedScreen,
      navigationOptions: {
        tabBarLabel: "Featured",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-star" size={30} color={tintColor} />
        )
      }
    },
    MyServices: {
      screen: MyServicesScreen,
      navigationOptions: {
        tabBarLabel: "My services",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-basket" size={30} color={tintColor} />
        )
      }
    },
    NewService: {
      screen: NewServiceScreen,
      navigationOptions: {
        tabBarLabel: "New service",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-add-circle" size={30} color={tintColor} />
        )
      }
    },
    Notifications: {
      screen: NotificationsScreen,
      navigationOptions: {
        tabBarLabel: "Notifications",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-notifications-outline" size={30} color={tintColor} />
        )
      }
    },
    Account: {
      screen: AccountScreen,
      navigationOptions: {
        tabBarLabel: "Account",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-person" size={30} color={tintColor} />
        )
      }
    }
  },
  {
    initialRouteName: "Featured",
    order: ["Featured", "MyServices", "NewService", "Notifications", "Account"],
    tabBarOptions: {
      activeTintColor: colors.primary,
      inactiveTintColor: colors.black
    }
  }
);

export default BottomTabNavigator;
