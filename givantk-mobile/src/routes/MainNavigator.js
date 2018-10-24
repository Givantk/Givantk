import { createStackNavigator } from "react-navigation";

import BottomTabNavigator from "./BottomTabNavigator.js";
import LoginScreen from "../screens/LoginScreen/LoginScreen.js";
import ProfileScreen from "../screens/AccountTabInnerScreens/ProfileScreen/ProfileScreen.js";

const MainNavigator = createStackNavigator(
  {
    TabNavigator: BottomTabNavigator,
    Login: LoginScreen,
    Profile: ProfileScreen
  },
  {
    initialRouteName: "Login",

    navigationOptions: ({ navigation }) => {
      let screen = navigation.state.routeName;
      let headerStyle = {};
      let headerTitle = "";
      let headerRight = "";

      if (screen === "TabNavigator") {
        const { routes, index } = navigation.state;
        let tabScreen = routes[index].routeName;
        // Navigation options for each tab screen with respect to stack navigation
        switch (tabScreen) {
          case "Featured":
            headerTitle = "Featured page";
            headerStyle = {
              backgroundColor: "green"
            };
            break;
          case "MyServices":
            headerTitle = "My services";
            headerStyle = {
              backgroundColor: "green"
            };
            break;
          case "NewService":
            headerTitle = "New service";
            headerStyle = {
              backgroundColor: "green"
            };
            break;
          case "Notifications":
            headerTitle = "Notifications";
            headerStyle = {
              backgroundColor: "green"
            };
            break;
          case "Account":
            headerTitle = "Account";
            headerStyle = {
              backgroundColor: "green"
            };
            break;
        } // end of switch
      } //end of tab screens if condition

      //other non tab screens
      if (screen === "Login") {
        (headerTitle = "Login Page"),
          (headerStyle = {
            backgroundColor: "green"
          });
      }

      if (screen === "Profile") {
        (headerTitle = "Profile Page"),
          (headerStyle = {
            backgroundColor: "green"
          });
      } //end of second parameter

      return {
        headerStyle,
        headerTitle,
        headerRight
      };
    } //end of navigationOptions
  }
);

export default MainNavigator;
