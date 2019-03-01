import { Badge } from 'react-native-ui-lib';
import { createStackNavigator } from 'react-navigation';
import { Icon } from 'native-base';
import { View, TouchableWithoutFeedback } from 'react-native';
import React from 'react';

import { colors, headerHeight } from '../assets/styles/base';
import * as actionTypes from '../store/actions/actionTypes';
import BottomTabNavigator from './BottomTabNavigator';
import getNotificationsNumber from './helpers/getNotificationsNumber';
import screens from '../screens';
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
    PaymentInfo: screens.PaymentInfoScreen,
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
  },
  {
    initialRouteName: 'Login',

    // We need to configure the header options only for the 'tab' screens only here
    navigationOptions: ({ navigation }) => {
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

      const notificationsNumber = getNotificationsNumber();

      const headerRight = (
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate('Notifications')}
        >
          <View style={{ width: 39 }}>
            <Icon
              type="Ionicons"
              name="md-notifications"
              style={{ color: colors.white, fontSize: 33 }}
            />
            {notificationsNumber ? (
              <View style={{ position: 'absolute' }}>
                <Badge
                  backgroundColor={colors.secondary.toString()}
                  label={notificationsNumber.toString()}
                />
              </View>
            ) : null}
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
            headerTitle = 'Add Service';
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
