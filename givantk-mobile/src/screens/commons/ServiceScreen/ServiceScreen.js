import { connect } from 'react-redux';
import { Icon } from 'native-base';
import PropTypes from 'prop-types';

import {
  View,
  Text,
  Button,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import React, { Component } from 'react';

import styles from './ServiceScreenStyles';

class ServiceScreen extends Component {
  static navigationOptions = () => ({
    headerTitle: 'Service',
  });

  state = {
    loggedInUser: {
      ownService: false,
      appliedBefore: false,
    },
  };

  componentDidMount() {
    const { currentUser, navigation } = this.props;
    const service = navigation.getParam('service', null);

    if (currentUser._id === service.asker._id) {
      this.setState((prevState) => ({
        loggedInUser: { ...prevState.loggedInUser, ownService: true },
      }));
    }
    if (
      service.applicants.filter(
        (applicant) => applicant.user !== currentUser._id,
      ).length < service.applicants.length
    ) {
      this.setState((prevState) => ({
        loggedInUser: { ...prevState.loggedInUser, appliedBefore: true },
      }));
    }
  }

  navigateToAskerProfile = () => {
    const { navigation } = this.props;
    navigation.navigate('Profile');
  };

  onPressOfferHelp = () => {
    const { navigation } = this.props;

    // Get service from passed params
    const service = navigation.getParam('service', null);

    // Pass service to AddProposal Screen
    navigation.navigate('AddProposal', {
      service,
    });
  };

  render() {
    const { navigation } = this.props;
    const service = navigation.getParam('service', null);

    const { loggedInUser } = this.state;

    return (
      <ScrollView>
        <View style={styles.wrapper}>
          <TouchableWithoutFeedback onPress={this.navigateToAskerProfile}>
            <View style={styles.header}>
              {/* <Image
                source={{
                  uri: service.asker.imageURL,
                }}
                style={styles.userImage}
              /> */}
              <View style={styles.headerRight}>
                <Text style={styles.userName}>
                  {`${service.asker.first_name} ${service.asker.last_name}`}
                </Text>
              </View>
            </View>
          </TouchableWithoutFeedback>

          <Text style={styles.serviceTitle}>{service.name}</Text>

          {loggedInUser.ownService || loggedInUser.appliedBefore || (
            <View style={styles.addProposalButton}>
              <Button title="Offer help" onPress={this.onPressOfferHelp} />
            </View>
          )}

          <View style={styles.content}>
            <Text style={styles.descriptionText}>
              {service.brief_description || service.description}
            </Text>
          </View>

          {loggedInUser.appliedBefore && (
            <Text style={styles.disclaimer}>
              {'You successfully applied for this service 💪🏻'}
            </Text>
          )}

          <View style={styles.footer}>
            <Text style={styles.cost}>{service.cost}</Text>
            <View style={styles.footerLeft}>
              <Icon type="EvilIcons" name="envelope" style={styles.shareIcon} />
              <Icon type="Feather" name="star" style={styles.favoriteIcon} />
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

ServiceScreen.propTypes = {
  navigation: PropTypes.shape({}),
  currentUser: PropTypes.shape({}),
};

const mapStateToProps = (state) => ({
  currentUser: state.auth.user,
});

export default connect(
  mapStateToProps,
  null,
)(ServiceScreen);
