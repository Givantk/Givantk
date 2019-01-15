import { Icon } from 'native-base';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';

import ServicesIAppliedFor from '../../../components/0-MainScreensComponents/3-MyServicesScreenComponents/ServicesIAppliedFor/ServicesIAppliedFor';
import ServicesIAskedFor from '../../../components/0-MainScreensComponents/3-MyServicesScreenComponents/ServicesIAskedFor/ServicesIAskedFor';
import SnakeNavigator from '../../../components/commons/UI/SnakeNavigator/SnakeNavigator';
import styles from './MyServicesScreenStyles';

export default class MyServicesScreen extends React.Component {
  static navigationOptions = () => ({
    tabBarLabel: 'My Services',
    tabBarIcon: ({ tintColor }) => (
      <Icon
        type="Entypo"
        name="shopping-bag"
        style={{ color: tintColor, fontSize: 35 }}
      />
    ),
  });

  SnakeNavigatorContent = [
    { name: 'I Asked for', component: ServicesIAskedFor },
    { name: 'I Helped in', component: ServicesIAppliedFor },
  ];

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <SnakeNavigator
          content={this.SnakeNavigatorContent}
          navigation={navigation}
          snakeWidth="65%"
        />
      </View>
    );
  }
}

MyServicesScreen.propTypes = {
  navigation: PropTypes.shape({}),
};
