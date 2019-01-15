import { Text, View, Image, TouchableWithoutFeedback } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';

import { Icon } from 'native-base';
import { colors } from '../../../assets/styles/base';
import profile from '../../../assets/data/fakeProfile';
import ServicesIAppliedFor from '../../../components/0-MainScreensComponents/3-MyServicesScreenComponents/ServicesIAppliedFor/ServicesIAppliedFor';
import ServicesIAskedFor from '../../../components/0-MainScreensComponents/3-MyServicesScreenComponents/ServicesIAskedFor/ServicesIAskedFor';
import SnakeNavigator from '../../../components/commons/UI/SnakeNavigator/SnakeNavigator';
import styles from './ProfileScreenStyles';
import AvoidKeyboard from '../../../components/commons/UI/AvoidKeyboard/AvoidKeyboard';

export default class ProfileScreen extends React.Component {
  static navigationOptions = () => ({
    headerTitle: 'Profile Screen',
    headerStyle: {
      backgroundColor: colors.primary,
    },
    headerTitleStyle: {
      color: colors.white,
    },
  });

  SnakeNavigatorContent = [
    {
      name: `${profile.firstName} asked for`,
      component: ServicesIAskedFor,
    },
    { name: `${profile.firstName} helped in`, component: ServicesIAppliedFor },
  ];

  render() {
    const { navigation } = this.props;

    return (
      <View style={styles.container}>
        <AvoidKeyboard>
          {/* Imagne and name */}

          <View style={styles.imageContainer}>
            <Image source={{ uri: profile.avatar }} style={styles.image} />
            <Text style={styles.userName}>
              {profile.firstName} {profile.lastName}
            </Text>
          </View>
          {/* Description */}

          <View style={styles.userDescriptionContainer}>
            <Text style={styles.userDescription}>{profile.description}</Text>
          </View>

          {/* Send a message */}

          <TouchableWithoutFeedback onPress={() => navigation.navigate('Chat')}>
            <View style={styles.sendMessageContainer}>
              <Text style={styles.sendMessageText}>Send a Message</Text>
              <Icon
                type="FontAwesome"
                name="envelope"
                style={styles.sendMessageIcon}
              />
            </View>
          </TouchableWithoutFeedback>

          {/* Services */}
          <SnakeNavigator
            content={this.SnakeNavigatorContent}
            navigation={navigation}
            snakeWidth="65%"
          />
        </AvoidKeyboard>
      </View>
    );
  }
}

ProfileScreen.propTypes = {
  navigation: PropTypes.shape({}),
};
