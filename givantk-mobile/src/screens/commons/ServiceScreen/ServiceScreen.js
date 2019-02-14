import { connect } from 'react-redux';
import { Icon } from 'native-base';
import PropTypes from 'prop-types';

import {
  View,
  Text,
  Image,
  Button,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import React, { Component } from 'react';

import styles from './ServiceScreenStyles';
import Loading from '../../../components/commons/UI/Loading/Loading';
import fakeProfile from '../../../assets/data/fakeProfile';

class ServiceScreen extends Component {
  static navigationOptions = () => ({
    headerTitle: 'Service',
  });

  state = {
    service: null,
    loggedInUser: {
      ownService: false,
      appliedBefore: false,
    },
  };

  componentDidMount() {
    const { navigation } = this.props;

    const { service } = navigation.state.params;

    this.setService(service);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (!nextProps.allServices || !prevState.service || !nextProps.currentUser)
      return {};

    const { currentUser } = nextProps;

    // Updating service in local state through allServices passed through Redux store
    const currentService = nextProps.allServices.find(
      (s) => s._id === prevState.service._id,
    );

    const ownService = currentUser._id === currentService.asker._id;

    const appliedBefore =
      currentService.applications.filter(
        (applicant) => applicant.user !== currentUser._id,
      ).length < currentService.applications.length;

    return {
      service: currentService,
      loggedInUser: {
        ownService,
        appliedBefore,
      },
    };
  }

  setService = (service) => {
    const { currentUser } = this.props;

    const ownService = currentUser._id === service.asker._id;

    const appliedBefore =
      service.applications.filter(
        (applicant) => applicant.user !== currentUser._id,
      ).length < service.applications.length;

    this.setState(() => ({
      service,
      loggedInUser: {
        ownService,
        appliedBefore,
      },
    }));
  };

  onPressOnAsker = () => {
    const { navigation } = this.props;
    const { service } = this.state;
    navigation.navigate('Profile', {
      userId: service.asker._id,
    });
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
    const { service, loggedInUser } = this.state;

    if (!service) return <Loading />;

    console.log(service);

    return (
      <ScrollView>
        <View style={styles.wrapper}>
          <TouchableWithoutFeedback onPress={this.onPressOnAsker}>
            <View style={styles.header}>
              <Image
                source={{
                  uri: fakeProfile.avatar,
                }}
                style={styles.userImage}
              />
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
  allServices: state.service.allServices,
});

export default connect(
  mapStateToProps,
  null,
)(ServiceScreen);
