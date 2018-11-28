import { createBottomTabNavigator } from "react-navigation";
import React from "react";

//icons
import Icon from "react-native-vector-icons/Ionicons";

//screens
import FeaturedScreen from "../screens/0-MainScreens/1-FeaturedScreen/FeaturedScreen";
import AddServiceScreen from "../screens/0-MainScreens/2-AddServiceScreen/AddServiceScreen";
import MyServicesScreen from "../screens/0-MainScreens/3-MyServicesScreen/MyServicesScreen";

import { colors } from "../assets/styles/base";
import AccountScreen from "../screens/0-MainScreens/5-AccountScreen/AccountScreen";

const BottomTabNavigator = createBottomTabNavigator(
  {
    Featured: FeaturedScreen,
    AddService: AddServiceScreen,
    MyServices: MyServicesScreen,
    Account: AccountScreen
  },
  {
    initialRouteName: "Featured",
    order: ["Featured", "AddService", "MyServices", "Account"],
    tabBarOptions: {
      activeTintColor: colors.primary,
      inactiveTintColor: colors.black
    }
  }
);

export default BottomTabNavigator;
