import { connect } from 'react-redux';
import { Icon } from 'native-base';
import { Text, View, Image, TouchableWithoutFeedback } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';

import { newUserImage } from '../../../assets/constants';
import * as AuthActions from '../../../store/actions/authActions';
import accountListItems from '../../../components/0-MainScreensComponents/5-AccountScreenComponents/data/AccountListItems';
import CardList from '../../../components/commons/UI/CardList/CardList';
import getUserImage from '../../../assets/utils/getUserImage';
import styles from './AccountScreenStyles';

class AccountScreen extends React.Component {
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
    const { navigation, logoutUser } = this.props;
    navigation.replace('Login');
    logoutUser();
  };

  render() {
    const { navigation, currentUser, currentUserProfile } = this.props;

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

        {/* Image and name */}

        <TouchableWithoutFeedback
          onPress={() =>
            navigation.navigate('Profile', { userId: currentUser._id })
          }
        >
          <View style={styles.imageContainer}>
            <Image
              source={{
                uri: getUserImage(
                  currentUser.avatar || currentUserProfile.avatar,
                ),
              }}
              style={styles.image}
            />

            <Text style={styles.userName}>
              {currentUser.first_name} {currentUser.last_name}
            </Text>

            <Text style={styles.points}>
              Money Score:{' '}
              {currentUserProfile ? currentUserProfile.money_points : '0'}
            </Text>

            <Text style={styles.points}>
              Givantk Points:{' '}
              {currentUserProfile ? currentUserProfile.givantk_points : '0'}
            </Text>
          </View>
        </TouchableWithoutFeedback>

        {/* List */}
        <CardList
          items={accountListItems(
            navigation,
            currentUser._id,
            currentUserProfile,
          )}
        />
      </View>
    );
  }
}

AccountScreen.propTypes = {
  navigation: PropTypes.shape({}),
  currentUser: PropTypes.shape({}),
  currentUserProfile: PropTypes.shape({}),
  logoutUser: PropTypes.func,
};

const mapStateToProps = (state) => ({
  currentUser: state.auth.user,
  currentUserProfile: state.profile.currentUserProfile,
  errors: state.errors,
});

const mapDispatchToProps = {
  logoutUser: AuthActions.logoutUser,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AccountScreen);
