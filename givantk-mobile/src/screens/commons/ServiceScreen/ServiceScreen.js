import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { AirbnbRating } from 'react-native-ratings';
import { dimensions } from '../../../assets/styles/base';
import AvoidKeyboard from '../../../components/commons/UI/AvoidKeyboard/AvoidKeyboard';

import {
  View,
  Text,
  Image,
  Button,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import { Textarea } from 'native-base';
import React, { Component } from 'react';
import { Icon } from 'native-base';
import styles from './ServiceScreenStyles';
import Loading from '../../../components/commons/UI/Loading/Loading';
import Proposal from './Proposal/Proposal';
import * as ServiceActions from '../../../store/actions/serviceActions';
import QuickNotification from '../../../components/commons/UI/QuickNotification/QuickNotification';
import Announcement from '../../../components/commons/UI/Announcement/Announcement';
import getUserImage from '../../../assets/utils/getUserImage';
import { colors, fontTypes } from '../../../assets/styles/base';
import MainButton from '../../../components/commons/UI/MainButton/MainButton';
import quickModal from '../../../components/commons/UI/QuickModal/QuickModal';

class ServiceScreen extends Component {
  static navigationOptions = () => ({
    headerTitle: 'Service',
  });

  state = {
    service: null,
    loggedInUser: {
      ownService: false,
      appliedBefore: false,
      serviceHelper: false,
    },
    chosenRating: 0,
    rated: false,
    writtenReview="",
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
    const serviceHelper = currentUser._id === currentService.helper;

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
        serviceHelper,
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

    quickModal('This helper will be assigned to your Service', () =>
      acceptServiceProposal(service._id, proposalId, callback),
    );
  };

  onPressMaskServiceAsDone = () => {
    const { markServiceAsDone, getAllServices } = this.props;
    const { service } = this.state;

    const callback = () => {
      getAllServices();
      QuickNotification('Service successfully marked as done');
      this.setState({
        appearRating: true,
      });
    };

    markServiceAsDone(service._id, callback);
  };

  onPressArchiveService = () => {
    const { archiveService, getAllServices } = this.props;
    const { service } = this.state;

    const callback = () => {
      getAllServices();
      QuickNotification('Service successfully archived');
    };

    archiveService(service._id, callback);
  };

  onRating = (userToBeRated) => {
    const { addReview } = this.props;
    const { chosenRating, service, writtenReview } = this.state;
    const rating = {
      userToBeRated,
      chosenRating,
      writtenReview,
      serviceId: service._id,
    };
    const callback = () => {
      this.setState({
        rated: true,
      });
    };
    addReview(rating, callback);
  };

  render() {
    const { service, loggedInUser, rated } = this.state;

    const { acceptServiceProposalLoading } = this.props;

    if (!service) return <Loading />;

    return (
      <AvoidKeyboard>
        <ScrollView>
          <View
            style={[
              styles.wrapper,
              service.state === 'archived' && {
                backgroundColor: colors.gray01,
              },
            ]}
          >
            <TouchableWithoutFeedback onPress={this.onPressOnAsker}>
              <View style={styles.header}>
                <Image
                  source={{
                    uri: service.asker && getUserImage(service.asker.avatar),
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

            {service.state === 'done' && (
              <Icon
                style={{
                  alignSelf: 'flex-end',
                  marginRight: 20,
                  color: colors.primary,
                }}
                type="MaterialIcons"
                name="done"
              />
            )}

            <Text style={styles.serviceTitle}>{service.name}</Text>

            {loggedInUser.ownService ||
              loggedInUser.appliedBefore ||
              service.state === 'done' ||
              service.state === 'archived' || (
                <View style={styles.addProposalButton}>
                  <Button title="Offer help" onPress={this.onPressOfferHelp} />
                </View>
              )}

            <View style={styles.content}>
              <Text style={styles.descriptionText}>
                {service.brief_description || service.description}
              </Text>
            </View>

            <Text
              style={{
                color: colors.gray03,
                fontSize: 10,
                fontFamily: fontTypes.mainBold,
                marginLeft: 10,
              }}
            >
              Service State: {service.state}
            </Text>

            {loggedInUser.ownService &&
              !service.helper &&
              (service.state === 'new' ||
                service.state === 'progressing' ||
                service.state === 'pending') && (
                <View style={{ alignSelf: 'flex-end' }}>
                  <MainButton
                    backgroundColor={colors.gray01}
                    small
                    onPress={this.onPressArchiveService}
                  >
                    Archive Service
                  </MainButton>
                </View>
              )}

            {loggedInUser.ownService &&
              service.helper &&
              (service.state === 'new' ||
                service.state === 'progressing' ||
                service.state === 'pending') && (
                <View style={{ alignSelf: 'flex-end' }}>
                  <MainButton
                    backgroundColor={colors.gray01}
                    small
                    onPress={this.onPressMaskServiceAsDone}
                  >
                    Mark Service as finished
                  </MainButton>
                </View>
              )}

            {loggedInUser.appliedBefore && (
              <Text style={styles.disclaimer}>
                {'You successfully applied for this service 💪🏻'}
              </Text>
            )}

            {service.applications.length === 0 && (
              <View>
                <View>
                  <Announcement text="No Proposals Yet" />
                </View>
                <View>
                  {!loggedInUser.ownService &&
                    !service.state === 'done' &&
                    !service.state === 'archived' && (
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
                      <Text style={styles.proposalsHeadingText}>
                        Proposals:
                      </Text>
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

            {/*diplaying rating stars and text for asker and helper if service is finished */}

            {(loggedInUser.ownService || loggedInUser.serviceHelper) &&
            service.state === 'done' ? (
              <View>
                <AirbnbRating
                  isDisabled={rated}
                  size={30}
                  onFinishRating={(position) =>
                    this.setState({
                      chosenRating: position,
                    })
                  }
                />
                <View style={{ alignItems: 'center' }}>
                  {!rated ? (
                    <View style={{ width: dimensions.fullWidth * 0.88 }}>
                      <Textarea
                        placeholder="Please add a review (written review is optional)"
                        style={styles.textarea}
                        onChangeText={(v) =>
                          this.setState({
                            writtenReview: v,
                          })
                        }
                      />
                    </View>
                  ) : null}

                  {!rated ? (
                    <MainButton
                      onPress={() =>
                        loggedInUser.ownService
                          ? this.onRating(loggedInUser.serviceHelper)
                          : this.onRating(loggedInUser.ownService)
                      }
                    >
                      add review
                    </MainButton>
                  ) : null}
                  {rated ? (
                    <Text style={styles.ratingText}>
                      Your rating adds to our community, thank you :D
                    </Text>
                  ) : null}
                </View>
              </View>
            ) : null}
          </View>
        </ScrollView>
      </AvoidKeyboard>
    );
  }
}

ServiceScreen.propTypes = {
  navigation: PropTypes.shape({}),
  currentUser: PropTypes.shape({}),
  acceptServiceProposal: PropTypes.func,
  markServiceAsDone: PropTypes.func,
  archiveService: PropTypes.func,
  getAllServices: PropTypes.func,
  acceptServiceProposalLoading: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  currentUser: state.auth.user,
  allServices: state.service.allServices,
  acceptServiceProposalLoading: state.service.acceptServiceProposalLoading,
  markServiceAsDoneLoading: state.service.markServiceAsDoneLoading,
  archiveServiceLoading: state.service.archiveServiceLoading,
  errors: state.errors,
});

const mapDispatchToProps = {
  acceptServiceProposal: ServiceActions.acceptServiceProposal,
  markServiceAsDone: ServiceActions.markServiceAsDone,
  archiveService: ServiceActions.archiveService,
  getAllServices: ServiceActions.getAllServices,
  addReview: ServiceActions.addReview,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ServiceScreen);
