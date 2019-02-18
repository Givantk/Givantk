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
import Proposal from './Proposal/Proposal';
import * as ServiceActions from '../../../store/actions/serviceActions';
import QuickNotification from '../../../components/commons/UI/QuickNotification/QuickNotification';
import Announcement from '../../../components/commons/UI/Announcement/Announcement';

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

    if (navigation.state.params) {
      const { service } = navigation.state.params;

      if (service) this.setService(service);
    }
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
        (applicant) =>
          (applicant.user._id || applicant.user) !== currentUser._id,
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
        (applicant) =>
          (applicant.user._id || applicant.user) !== currentUser._id,
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
    const { service } = this.state;

    // Pass service to AddProposal Screen
    navigation.navigate('AddProposal', {
      service,
    });
  };

  onPressApplicant = (applicantId) => {
    const { navigation } = this.props;
    navigation.navigate('Profile', {
      userId: applicantId,
    });
  };

  onPressAcceptProposal = (proposalId) => {
    const { acceptServiceProposal, getAllServices } = this.props;
    const { service } = this.state;

    const callback = () => {
      getAllServices();
      QuickNotification('Successfully assigned helper');
    };

    acceptServiceProposal(service._id, proposalId, callback);
  };

  render() {
    const { service, loggedInUser } = this.state;

    const { acceptServiceProposalLoading } = this.props;

    if (!service) return <Loading />;

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
              <Icon type="Feather" name="star" style={styles.favoriteIcon} />
            </View>
          </View>

          {service.applications.length === 0 && (
            <View>
              <View>
                <Announcement text="No Proposals Yet" />
              </View>
              <View>
                {!loggedInUser.ownService && (
                  <Text style={styles.noProposalsDisclaimer}>
                    Be the first one to apply {'💪'}
                  </Text>
                )}
              </View>
            </View>
          )}

          {service.applications.map((application) =>
            application.chosen ? (
              <Proposal
                application={application}
                key={application._id}
                onPressApplicant={this.onPressApplicant}
                onPressAcceptProposal={this.onPressAcceptProposal}
                ownService={loggedInUser.ownService}
                hasHelper={!!service.helper}
                acceptServiceProposalLoading={acceptServiceProposalLoading}
              />
            ) : null,
          )}
          {service.applications.map((application, i) =>
            !application.chosen ? (
              <View key={application._id}>
                {i === 0 && (
                  <View style={styles.proposalsHeadingContainer}>
                    <Text style={styles.proposalsHeadingText}>Proposals:</Text>
                  </View>
                )}
                <Proposal
                  application={application}
                  onPressApplicant={this.onPressApplicant}
                  onPressAcceptProposal={this.onPressAcceptProposal}
                  ownService={loggedInUser.ownService}
                  hasHelper={!!service.helper}
                  acceptServiceProposalLoading={acceptServiceProposalLoading}
                />
              </View>
            ) : null,
          )}
        </View>
      </ScrollView>
    );
  }
}

ServiceScreen.propTypes = {
  navigation: PropTypes.shape({}),
  currentUser: PropTypes.shape({}),
  acceptServiceProposal: PropTypes.func,
  getAllServices: PropTypes.func,
  acceptServiceProposalLoading: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  currentUser: state.auth.user,
  allServices: state.service.allServices,
  acceptServiceProposalLoading: state.service.acceptServiceProposalLoading,
  errors: state.errors,
});

const mapDispatchToProps = {
  acceptServiceProposal: ServiceActions.acceptServiceProposal,
  getAllServices: ServiceActions.getAllServices,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ServiceScreen);
