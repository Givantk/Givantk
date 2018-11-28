import { createStackNavigator } from "react-navigation";
import { Text, TouchableHighlight } from "react-native";
import React from "react";

import { colors } from "../assets/styles/base";
import AddProposalScreen from "../screens/commons/ServiceScreen/AddProposalScreen/AddProposalScreen";
import BottomTabNavigator from "./BottomTabNavigator";
import ChatScreen from "../screens/commons/ChatScreen/ChatScreen";
import InviteFriendsScreen from "../screens/5-AccountInnerScreens/InviteFriendsScreen/InviteFriendsScreen";
import LoginScreen from "../screens/RegistrationScreens/LoginScreen/LoginScreen";
import MessagesListScreen from "../screens/5-AccountInnerScreens/MessagesListScreen/MessagesListScreen";
import NotificationsScreen from "../screens/0-MainScreens/4-NotificationsScreen/NotificationsScreen";
import PaymentInfoScreen from "../screens/5-AccountInnerScreens/PaymentInfoScreen/PaymentInfoScreen";
import PersonalInfoScreen from "../screens/5-AccountInnerScreens/PersonalInfoScreen/PersonalInfoScreen";
import ProfileScreen from "../screens/5-AccountInnerScreens/ProfileScreen/ProfileScreen";
import SearchResultsScreen from "../screens/1-FeaturedInnerScreens/SearchResultsScreen/SearchResultsScreen";
import ServiceScreen from "../screens/commons/ServiceScreen/ServiceScreen";
import SignupScreen from "../screens/RegistrationScreens/SignupScreen/SignupScreen";
import VerifyIdentityScreen from "../screens/5-AccountInnerScreens/VerifyIdentityScreen/VerifyIdentityScreen";

const MainNavigator = createStackNavigator(
  {
    Tab: BottomTabNavigator,
    Notifications: NotificationsScreen,
    Login: LoginScreen,
    Signup: SignupScreen,
    Profile: ProfileScreen,
    Service: ServiceScreen,
    PersonalInfo: PersonalInfoScreen,
    PaymentInfo: PaymentInfoScreen,
    InviteFriends: InviteFriendsScreen,
    Chat: ChatScreen,
    SearchResults: SearchResultsScreen,
    AddProposal: AddProposalScreen,
    VerifyIdentity: VerifyIdentityScreen,
    MessagesList: MessagesListScreen
  },
  {
    initialRouteName: "Login",

    //We need to configure the header options only for the 'tab' screens only here
    navigationOptions: ({ navigation }) => {
      let screen = navigation.state.routeName;

      let headerTitle = "";
      let headerRight = (
        <TouchableHighlight
          onPress={() => navigation.navigate("Notifications")}
        >
          <Text>Notifications</Text>
        </TouchableHighlight>
      );

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
            headerTitle = "";
            break;

          case "AddService":
            headerTitle = "";
            break;

          case "MyServices":
            headerTitle = "";
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
