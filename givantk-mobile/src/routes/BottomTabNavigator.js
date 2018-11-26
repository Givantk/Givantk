import { createBottomTabNavigator } from "react-navigation";
import React from "react";

//icons
import Icon from "react-native-vector-icons/Ionicons";

//screens
import FeaturedScreen from "../screens/0-MainScreens/1-FeaturedScreen/FeaturedScreen";
import AddServiceScreen from "../screens/0-MainScreens/2-AddServiceScreen/AddServiceScreen";
import MyServicesScreen from "../screens/0-MainScreens/3-MyServicesScreen/MyServicesScreen";

import { colors } from "../../assets/styles/base";

const BottomTabNavigator = createBottomTabNavigator(
  {
    Featured: {
      screen: FeaturedScreen,
      navigationOptions: {
        tabBarLabel: "Featured",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-star" size={30} style={{ color: tintColor }} />
        )
      }
    },
    AddService: {
      screen: AddServiceScreen,
      navigationOptions: {
        tabBarLabel: "My services",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-basket" size={30} style={{ color: tintColor }} />
        )
      }
    },
    MyServices: {
      screen: MyServicesScreen,
      navigationOptions: {
        tabBarLabel: "New service",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-add-circle" size={30} style={{ color: tintColor }} />
        )
      }
    }
    // Notifications: {
    //   screen: NotificationsScreen,
    //   navigationOptions: {
    //     tabBarLabel: "Notifications",
    //     tabBarIcon: ({ tintColor }) => (
    //       <Icon
    //         name="ios-notifications-outline"
    //         size={30}
    //         style={{ color: tintColor }}
    //       />
    //     )
    //   }
    // },
    // Account: {
    //   screen: AccountScreen,
    //   navigationOptions: {
    //     tabBarLabel: "Account",
    //     tabBarIcon: ({ tintColor }) => (
    //       <Icon name="ios-person" size={30} style={{ color: tintColor }} />
    //     )
    //   }
    // }
  },
  {
    initialRouteName: "Featured",
    order: ["Featured", "AddService", "MyServices"],
    tabBarOptions: {
      activeTintColor: colors.primary,
      inactiveTintColor: colors.black
    }
  }
);

export default BottomTabNavigator;
