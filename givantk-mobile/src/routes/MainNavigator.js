import { createStackNavigator } from "react-navigation";
import { Icon } from "native-base";
import { View, TouchableWithoutFeedback } from "react-native";
import React from "react";

import { colors } from "../assets/styles/base";
import BottomTabNavigator from "./BottomTabNavigator";
import screens from "../screens";

const MainNavigator = createStackNavigator(
  {
    Tab: BottomTabNavigator,
    Notifications: screens.NotificationsScreen,
    Login: screens.LoginScreen,
    Signup: screens.SignupScreen,
    Profile: screens.ProfileScreen,
    Service: screens.ServiceScreen,
    PersonalInfo: screens.PersonalInfoScreen,
    PaymentInfo: screens.PaymentInfoScreen,
    InviteFriends: screens.InviteFriendsScreen,
    Chat: screens.ChatScreen,
    SearchResults: screens.SearchResultsScreen,
    AddProposal: screens.AddProposalScreen,
    VerifyIdentity: screens.VerifyIdentityScreen,
    MessagesList: screens.MessagesListScreen
  },
  {
    initialRouteName: "Tab",

    //We need to configure the header options only for the 'tab' screens only here
    navigationOptions: ({ navigation }) => {
      let screen = navigation.state.routeName;

      let headerTitle = "";
      let headerRight = (
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate("Notifications")}
        >
          <View style={{ width: 39 }}>
            <Icon
              type="Ionicons"
              name="md-notifications"
              style={{ color: colors.white, fontSize: 33 }}
            />
          </View>
        </TouchableWithoutFeedback>
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
            headerTitle = "Featured";
            break;

          case "AddService":
            headerTitle = "Add Service";
            break;

          case "MyServices":
            headerTitle = "My Services";
            break;

          case "Account":
            headerTitle = "Account";
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
