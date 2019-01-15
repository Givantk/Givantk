import { Icon } from 'native-base';
import { Text, View, Image, TouchableWithoutFeedback } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';

import accountListItems from '../../../components/0-MainScreensComponents/5-AccountScreenComponents/data/AccountListItems';
import CardList from '../../../components/commons/UI/CardList/CardList';
import profile from '../../../assets/data/fakeProfile';
import styles from './AccountScreenStyles';

export default class AccountScreen extends React.Component {
  static navigationOptions = () => ({
    tabBarLabel: 'Account',
    tabBarIcon: ({ tintColor }) => (
      <Icon
        type="Ionicons"
        name="md-person"
        style={{ color: tintColor, fontSize: 40 }}
      />
    ),
  });

  onPressSignOut = () => {
    alert('Sign out pressed');
  };

  render() {
    const { navigation } = this.props;

    return (
      <View style={styles.container}>
        {/* Upper Row */}

        <View style={styles.upperRow}>
          <TouchableWithoutFeedback onPress={this.onPressSignOut}>
            <View>
              <Text style={styles.upperRowText}>Sign out</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate('MessagesList')}
          >
            <Icon
              type="FontAwesome"
              name="envelope"
              style={styles.upperRowRightIcon}
            />
          </TouchableWithoutFeedback>
        </View>

        {/* Imagne and name */}

        <TouchableWithoutFeedback
          onPress={() => navigation.navigate('Profile')}
        >
          <View style={styles.imageContainer}>
            <Image source={{ uri: profile.avatar }} style={styles.image} />
            <Text style={styles.userName}>
              {profile.firstName} {profile.lastName}
            </Text>
          </View>
        </TouchableWithoutFeedback>

        {/* List */}

        <CardList items={accountListItems(navigation)} />
      </View>
    );
  }
}

AccountScreen.propTypes = {
  navigation: PropTypes.shape({}),
};
