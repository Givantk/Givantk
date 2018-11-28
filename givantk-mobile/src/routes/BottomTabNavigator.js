import { createBottomTabNavigator } from "react-navigation";

import { colors } from "../assets/styles/base";
import screens from "../screens";

const BottomTabNavigator = createBottomTabNavigator(
  {
    Featured: screens.FeaturedScreen,
    AddService: screens.AddServiceScreen,
    MyServices: screens.MyServicesScreen,
    Account: screens.AccountScreen
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
