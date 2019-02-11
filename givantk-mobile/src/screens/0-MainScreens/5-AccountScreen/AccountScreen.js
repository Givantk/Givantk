import { connect } from 'react-redux';
import { Icon } from 'native-base';
import { Text, View, Image, TouchableWithoutFeedback } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';

import * as AuthActions from '../../../store/actions/authActions';
import * as ProfileActions from '../../../store/actions/profileActions';
import accountListItems from '../../../components/0-MainScreensComponents/5-AccountScreenComponents/data/AccountListItems';
import CardList from '../../../components/commons/UI/CardList/CardList';
import profile from '../../../assets/data/fakeProfile';
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
    const {
      navigation,
      currentUserProfile,
      currentUserHasProfile,
    } = this.props;

    if (currentUserHasProfile) console.log(currentUserProfile.notifications);

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
  currentUserProfile: PropTypes.shape({}),
  currentUserHasProfile: PropTypes.bool,
  logoutUser: PropTypes.func,
};

const mapStateToProps = (state) => ({
  currentUser: state.auth.user,
  currentUserProfile: state.profile.currentUserProfile,
  currentUserHasProfile: state.profile.currentUserHasProfile,
  errors: state.errors,
});

const mapDispatchToProps = {
  logoutUser: AuthActions.logoutUser,
  getCurrentUserProfile: ProfileActions.getCurrentUserProfile,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AccountScreen);
