import { Icon } from 'native-base';
import { Text, View, Image, TouchableWithoutFeedback } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';

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

  listItems = () => {
    const { navigation } = this.props;
    return [
      {
        title: 'View Profile',
        iconName: 'ios-happy',
        iconType: 'Ionicons',
        onPress: () => navigation.navigate('Profile'),
      },
      {
        title: 'Payment Info',
        iconName: 'money',
        iconType: 'FontAwesome',
        onPress: () => navigation.navigate('PaymentInfo'),
      },
      {
        title: 'Personal Info',
        iconName: 'magnifying-glass',
        iconType: 'Foundation',
        onPress: () => navigation.navigate('PersonalInfo'),
      },
      {
        title: 'Invite Friends',
        iconName: 'ios-people',
        iconType: 'Ionicons',
        onPress: () => navigation.navigate('InviteFriends'),
      },
      {
        title: 'Verify Identity',
        iconName: 'verified-user',
        iconType: 'MaterialIcons',
        onPress: () => navigation.navigate('VerifyIdentity'),
      },
    ];
  };

  render() {
    const { navigation } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.upperRow}>
          <View>
            <Text style={styles.upperRowLeftText}>Sign out</Text>
          </View>
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

        <CardList items={this.listItems()} />
      </View>
    );
  }
}

AccountScreen.propTypes = {
  navigation: PropTypes.shape({}),
};
