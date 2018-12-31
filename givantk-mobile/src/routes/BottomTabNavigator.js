import { createMaterialTopTabNavigator } from 'react-navigation';

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
      activeTintColor: colors.white,
      inactiveTintColor: colors.white,
      activeBackgroundColor: colors.primary.darken(0.2),
      style: {
        backgroundColor: colors.primary,
        height: bottomTabHeight,
        borderTopWidth: 0.5,
        borderTopColor: colors.gray01,
      },
      labelStyle: {
        fontSize: fontSizes.xs,
        fontFamily: fontTypes.mainBold,
        width: '100%',
      },
      iconStyle: {
        width: 35,
        height: 30,
      },
      indicatorStyle: {
        backgroundColor: colors.secondary,
      },
    },
  },
);

export default BottomTabNavigator;
