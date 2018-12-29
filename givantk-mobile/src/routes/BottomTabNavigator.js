import { createBottomTabNavigator } from 'react-navigation';

import { colors, fontSizes, fontTypes } from '../assets/styles/base';
import screens from '../screens';

const BottomTabNavigator = createBottomTabNavigator(
  {
    Featured: screens.FeaturedScreen,
    AddService: screens.AddServiceScreen,
    MyServices: screens.MyServicesScreen,
    Account: screens.AccountScreen,
  },
  {
    initialRouteName: 'MyServices',
    order: ['Featured', 'AddService', 'MyServices', 'Account'],
    tabBarOptions: {
      activeTintColor: colors.gray01,
      inactiveTintColor: colors.white,
      activeBackgroundColor: colors.primary.darken(0.2),
      style: {
        backgroundColor: colors.primary,
        height: 65,
      },
      labelStyle: {
        fontSize: fontSizes.xs,
        fontFamily: fontTypes.mainBold,
      },
    },
  },
);

export default BottomTabNavigator;
