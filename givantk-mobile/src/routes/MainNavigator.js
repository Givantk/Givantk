import { createStackNavigator } from "react-navigation";

import { colors } from "../../assets/styles/base";
import BottomTabNavigator from "./BottomTabNavigator";
import LoginScreen from "../screens/RegistrationScreens/LoginScreen/LoginScreen";
import ProfileScreen from "../screens/5-AccountTabInnerScreens/ProfileScreen/ProfileScreen";
import SignupScreen from "../screens/RegistrationScreens/SignupScreen/SignupScreen";

const MainNavigator = createStackNavigator(
  {
    Tab: BottomTabNavigator,
    Login: LoginScreen,
    Signup: SignupScreen,
    Profile: ProfileScreen
  },
  {
    initialRouteName: "Login",

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
            break;

          case "MyServices":
            headerTitle = "My services";
            break;

          case "NewService":
            headerTitle = "New service";
            break;

          case "Notifications":
            headerTitle = "Notifications";
            break;

          case "Account":
            headerTitle = "Account";
            break;
        }
      } //end of tab screens conditions

      //other non tab screens
      if (screen === "Login") {
        headerTitle = "Login";
      }

      if (screen === "Signup") {
        headerTitle = "Signup";
      }

      if (screen === "Profile") {
        headerTitle = "Profile";
      }

      return {
        headerStyle,
        headerTitle,
        headerTitleStyle,
        headerRight,
        headerLeft
      };
    } //end of navigationOptions
  }
);

export default MainNavigator;
