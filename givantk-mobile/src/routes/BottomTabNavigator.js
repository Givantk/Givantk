import { createMaterialTopTabNavigator } from 'react-navigation-tabs';


import {
  colors,
  fontSizes,
  fontTypes,
  bottomTabHeight,
} from '../assets/styles/base';
import screens from '../screens';

const BottomTabNavigator = createMaterialTopTabNavigator(
  {
    Featured: screens.FeaturedScreen,
    AddService: screens.AddServiceScreen,
    MyServices: screens.MyServicesScreen,
    Account: screens.AccountScreen,
  },
  {
    initialRouteName: 'Featured',
    order: ['Featured', 'AddService', 'MyServices', 'Account'],
    tabBarPosition: 'bottom',
    swipeEnabled: true,
    animationEnabled: false,
    tabBarOptions: {
      showIcon: true,
      upperCaseLabel: false,
      activeTintColor: colors.white,
      inactiveTintColor: colors.white,
      activeBackgroundColor: colors.primary.darken(0.2),
      style: {
        backgroundColor: colors.primary,
        height: bottomTabHeight,
        borderTopWidth: 0.5,
        borderTopColor: colors.secondary,
      },
      labelStyle: {
        fontSize: fontSizes.xxs,
        fontFamily: fontTypes.mainBold,
        width: '100%',
        right:'6%',
      },
      iconStyle: {
        width: 30,
        height: 30,
      },
      indicatorStyle: {
        backgroundColor: colors.secondary,
        bottom: '22%',
        width: 60,
        left: '6%',
      },
    },
  },
);

export default BottomTabNavigator;
