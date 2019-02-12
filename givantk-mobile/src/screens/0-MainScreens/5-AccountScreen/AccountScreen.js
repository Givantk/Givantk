import { connect } from 'react-redux';
import { Icon } from 'native-base';
import { Text, View, Image, TouchableWithoutFeedback } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';

import * as AuthActions from '../../../store/actions/authActions';
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
    const { navigation, currentUser } = this.props;

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
            <Image source={{ uri: profile.avatar }} style={styles.image} />
            <Text style={styles.userName}>
              {currentUser.first_name} {currentUser.last_name}
            </Text>
          </View>
        </TouchableWithoutFeedback>

        {/* List */}
        <CardList items={accountListItems(navigation, currentUser._id)} />
      </View>
    );
  }
}

AccountScreen.propTypes = {
  navigation: PropTypes.shape({}),
  currentUser: PropTypes.shape({}),
  logoutUser: PropTypes.func,
};

const mapStateToProps = (state) => ({
  currentUser: state.auth.user,
  errors: state.errors,
});

const mapDispatchToProps = {
  logoutUser: AuthActions.logoutUser,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AccountScreen);
