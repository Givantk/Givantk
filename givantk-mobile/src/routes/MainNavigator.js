import { createStackNavigator } from "react-navigation";

import { colors } from "../assets/styles/base";
import AccountScreen from "../screens/0-MainScreens/5-AccountScreen/AccountScreen";
import BottomTabNavigator from "./BottomTabNavigator";
import LoginScreen from "../screens/RegistrationScreens/LoginScreen/LoginScreen";
import NotificationsScreen from "../screens/0-MainScreens/4-NotificationsScreen/NotificationsScreen";
import ProfileScreen from "../screens/5-AccountInnerScreens/ProfileScreen/ProfileScreen";
import SignupScreen from "../screens/RegistrationScreens/SignupScreen/SignupScreen";

const MainNavigator = createStackNavigator(
  {
    Tab: BottomTabNavigator,
    Notifications: NotificationsScreen,
    Account: AccountScreen,
    Login: LoginScreen,
    Signup: SignupScreen,
    Profile: ProfileScreen
  },
  {
    initialRouteName: "Login",

    //We need to configure the header options for the 'tab' screens only here
    navigationOptions: ({ navigation }) => {
      let screen = navigation.state.routeName;

      let headerTitle = "";
      let headerRight = "";
      let headerLeft = "";
      let headerStyle = {
        backgroundColor: colors.primary
      };
      let headerTitleStyle = {
        color: colors.white
      };

      if (screen === "Tab") {
        const { routes, index } = navigation.state;
        let tabScreen = routes[index].routeName;

        // Navigation options for each tab screen with respect to stack navigation
        switch (tabScreen) {
          case "Featured":
            headerTitle = "Featured page";
            headerTransparent = true;
            break;

          case "AddService":
            headerTitle = "Add service";
            break;

          case "MyServices":
            headerTitle = "My services";
            break;
        }

        return {
          headerStyle,
          headerTitle,
          headerTitleStyle,
          headerRight,
          headerLeft
        };
      }
    } //end of navigationOptions
  }
);

export default MainNavigator;
