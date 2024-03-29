import { createStackNavigator } from 'react-navigation-stack';
import { View, TouchableWithoutFeedback } from 'react-native';
import React from 'react';

import { colors, headerHeight } from '../assets/styles/base';
import * as actionTypes from '../store/actions/actionTypes';
import BottomTabNavigator from './BottomTabNavigator';
import NotificationsIndicator from '../components/0-MainScreensComponents/4-NotificationsScreenComponents/NotificationsIndicator';
import screens from '../screens';
import ServiceNatureInfoScreen from '../screens/commons/InfoScreens/ServiceNatureInfoScreen';
import ServiceTypeInfoScreen from '../screens/commons/InfoScreens/ServiceTypeInfoScreen';
import store from '../store/createStore';

const MainNavigator = createStackNavigator(
  {
    Tab: BottomTabNavigator,
    Notifications: screens.NotificationsScreen,
    Login: screens.LoginScreen,
    Signup: screens.SignupScreen,
    Profile: screens.ProfileScreen,
    Service: screens.ServiceScreen,
    PersonalInfo: screens.PersonalInfoScreen,
    ChargeMoneyScore: screens.ChargeMoneyScoreScreen,
    PayWithStripe: screens.PayWithStripeScreen,
    GivantkPoints: screens.GivantkPointsScreen,
    InviteFriends: screens.InviteFriendsScreen,
    Chat: screens.ChatScreen,
    SearchResults: screens.SearchResultsScreen,
    AddProposal: screens.AddProposalScreen,
    VerifyIdentity: screens.VerifyIdentityScreen,
    MessagesList: screens.MessagesListScreen,
    BookmarkedServices: screens.BookmarkedServicesScreen,
    ProposedForServices: screens.ProposedForServicesScreen,
    ArchivedServices: screens.ArchivedServicesScreen,
    Announcement: screens.AnnouncementScreen,
    MakeProfile: screens.MakeProfileScreen,
    MessagesChat: screens.MessagesChatScreen,
    IntroScreen: screens.IntroScreen,
    RecommendedHelpers: screens.RecommendedHelpersScreen,
    ServiceTypeInfo: ServiceTypeInfoScreen,
    ServiceNatureInfo: ServiceNatureInfoScreen,
    SuggestHelperCriteria: screens.SuggestHelperCriteriaScreen,
  },
  {
    initialRouteName: 'Login',

    // We need to configure the header options only for the 'tab' screens only here
    defaultNavigationOptions: ({ navigation }) => {
      // To clear the errors reducer every time the user navigates
      store.dispatch({ type: actionTypes.SET_ERRORS, payload: {} });

      const screen = navigation.state.routeName;

      let headerTitle = '';

      const headerLeft = '';

      const headerTintColor = 'white';

      const headerStyle = {
        backgroundColor: colors.primary,
        height: headerHeight,
      };

      const headerTitleStyle = {
        color: colors.white,
      };

      const headerRight = (
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate('Notifications')}
        >
          <View>
            <NotificationsIndicator />
          </View>
        </TouchableWithoutFeedback>
      );

      if (screen === 'Tab') {
        const { routes, index } = navigation.state;
        const tabScreen = routes[index].routeName;

        // Navigation options for each tab screen with respect to stack navigation
        switch (tabScreen) {
          case 'Featured':
            headerTitle = 'Featured';
            break;

          case 'AddService':
            headerTitle = 'Request Service';
            break;

          case 'MyServices':
            headerTitle = 'My Services';
            break;

          case 'Account':
            headerTitle = 'Account';
            break;

          default:
        }

        // return this if tab screen
        return {
          headerStyle,
          headerTitle,
          headerTitleStyle,
          headerRight,
          headerLeft,
          headerTintColor,
        };
      }
      // return this if not tab screen
      return { headerStyle, headerTitleStyle, headerTintColor };
    }, // end of navigationOptions
  },
);

export default MainNavigator;
