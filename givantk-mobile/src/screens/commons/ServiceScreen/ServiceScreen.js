import { AirbnbRating } from 'react-native-ratings';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
  View,
  Text,
  Image,
  Button,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import { Textarea, Icon } from 'native-base';
import React, { Component } from 'react';

import AvoidKeyboard from '../../../components/commons/UI/AvoidKeyboard/AvoidKeyboard';
import styles from './ServiceScreenStyles';
import Loading from '../../../components/commons/UI/Loading/Loading';
import Proposal from './Proposal/Proposal';
import * as ServiceActions from '../../../store/actions/serviceActions';
import QuickNotification from '../../../components/commons/UI/QuickNotification/QuickNotification';
import Announcement from '../../../components/commons/UI/Announcement/Announcement';
import getUserImage from '../../../assets/utils/getUserImage';
import { colors, dimensions } from '../../../assets/styles/base';
import MainButton from '../../../components/commons/UI/MainButton/MainButton';
import quickModal from '../../../components/commons/UI/QuickModal/QuickModal';
import getReadableDate from '../../../assets/utils/getReadableDate';
// import CommentsList from '../../../components/commons/Comments-Related-Components/CommentsList';

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
    chosenRating: 3,
    writtenReview: '',
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
    const serviceHelper = currentUser._id === service.helper;

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
        serviceHelper,
      },
    }));
  };

  onPressAskerAvatar = () => {
    const { navigation } = this.props;
    const { service } = this.state;
    if (!service.reveal_asker) return;

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

  onPressMarkServiceAsDone = () => {
    const { markServiceAsDone, getAllServices } = this.props;
    const { service } = this.state;

    const callback = () => {
      getAllServices();
      QuickNotification('Service successfully marked as done');
    };

    quickModal('You will martk this service as finished', () =>
      markServiceAsDone(service._id, callback),
    );
  };

  onPressArchiveService = () => {
    const { archiveService, getAllServices } = this.props;
    const { service } = this.state;

    const callback = () => {
      getAllServices();
      QuickNotification('Service successfully archived');
    };

    quickModal('You will archive this service', () =>
      archiveService(service._id, callback),
    );
  };

  beforeRatingComponents = () => {
    const { loggedInUser, service } = this.state;
    const { addReviewLoading } = this.props;
    return (
      <View>
        <View style={{ alignItems: 'center' }}>
          <Text style={styles.callToActionText}>Tap To Rate</Text>
          <AirbnbRating
            isDisabled={false}
            size={30}
            onFinishRating={(position) =>
              this.setState({
                chosenRating: position,
              })
            }
          />
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

          {!addReviewLoading ? (
            <MainButton
              onPress={() =>
                loggedInUser.ownService
                  ? this.onRating(service.helper)
                  : this.onRating(service.asker._id)
              }
            >
              Add Review
            </MainButton>
          ) : (
            <Loading />
          )}
        </View>
      </View>
    );
  };

  afterRatingComponents = () => {
    const { loggedInUser, service } = this.state;
    const rating = loggedInUser.serviceHelper
      ? service.asker_is_rated.chosen_rating
      : service.helper_is_rated.chosen_rating;

    return (
      <View>
        <AirbnbRating isDisabled size={30} defaultRating={rating} />
        <View style={{ alignItems: 'center' }}>
          <Text style={styles.ratingText}>
            Your review helped us creating a better community {'\n \n'} Thanks
            :D
          </Text>
        </View>
      </View>
    );
  };

  onRating = (userToBeRated) => {
    const { addReview, getAllServices } = this.props;
    const { chosenRating, service, writtenReview } = this.state;
    const rating = {
      userToBeRated,
      chosenRating,
      writtenReview,
      serviceId: service._id,
    };
    const callback = () => {
      getAllServices();
    };
    addReview(rating, callback);
  };

  // onAddComment = (Comment) => {
  //   const { addComment } = this.props;
  //   const { service } = this.state;

  //   const callback = () => {
  //     console.log('comment added successfully');
  //   };

  //   addComment(Comment, service._id, callback);
  // };

  onGetRecommendedHelpers = () => {
    const { navigation } = this.props;
    const { service } = this.state;

    navigation.navigate('RecommendedHelpers', {
      serviceId: service._id,
    });
  };

  render() {
    const { service, loggedInUser } = this.state;

    const {
      acceptServiceProposalLoading,
      // currentUser,
      navigation,
    } = this.props;

    if (!service) return <Loading />;

    const serviceIsArchived = service.state === 'archived';
    const serviceIsDone = service.state === 'done';

    const readableServiceDate = service.date
      ? getReadableDate(new Date(service.date))
      : getReadableDate(new Date());

    return (
      <AvoidKeyboard
        keyboardVerticalOffset={85}
        flex
        persistTaps
        bottomPadding={30}
      >
        <ScrollView keyboardShouldPersistTaps="always">
          <View
            style={[
              styles.wrapper,
              service.state === 'archived' && {
                backgroundColor: colors.gray01,
              },
            ]}
          >
            <TouchableWithoutFeedback onPress={this.onPressAskerAvatar}>
              <View style={styles.header}>
                <Image
                  source={{
                    uri:
                      service.asker &&
                      getUserImage(
                        service.reveal_asker === false
                          ? null
                          : service.asker.avatar,
                      ),
                  }}
                  style={styles.userImage}
                />
                <View style={styles.headerRight}>
                  <Text style={styles.userName}>
                    {service.reveal_asker === false
                      ? 'Anonymous'
                      : `${service.asker.first_name} ${
                          service.asker.last_name
                        }`}
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
              service.state === 'archived' ||
              service.state === 'progressing' || (
                <View style={styles.addProposalButton}>
                  <Button title="Offer help" onPress={this.onPressOfferHelp} />
                </View>
              )}
            <View style={styles.content}>
              <Text style={styles.descriptionText}>
                {service.brief_description || service.description}
              </Text>
            </View>
            <View style={styles.serviceStateWrapper}>
              <Text style={styles.serviceStateText}>
                Service State: {service.state}
              </Text>
              <Text style={styles.dateText}>{readableServiceDate}</Text>
            </View>

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
              !service.helper &&
              (service.state === 'new' ||
                service.state === 'progressing' ||
                service.state === 'pending') && (
                <View style={{ alignSelf: 'flex-end' }}>
                  <MainButton
                    backgroundColor={colors.secondary}
                    small
                    onPress={this.onGetRecommendedHelpers}
                  >
                    Invite Recommended Helpers
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
                    onPress={this.onPressMarkServiceAsDone}
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

            {service.applications.length !== 0 && (
              <View style={styles.proposalsHeadingContainer}>
                <Text style={styles.proposalsHeadingText}>Proposals:</Text>
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
                  serviceHelper={loggedInUser.serviceHelper}
                  hasHelper={!!service.helper}
                  acceptServiceProposalLoading={acceptServiceProposalLoading}
                  disabled={serviceIsArchived || serviceIsDone}
                  navigation={navigation}
                  service={service}
                  ProposalIsChosen
                />
              ) : null,
            )}
            {service.applications.map((application) =>
              !application.chosen ? (
                <View key={application._id}>
                  <Proposal
                    application={application}
                    onPressApplicant={this.onPressApplicant}
                    onPressAcceptProposal={this.onPressAcceptProposal}
                    ownService={loggedInUser.ownService}
                    serviceHelper={loggedInUser.serviceHelper}
                    hasHelper={!!service.helper}
                    acceptServiceProposalLoading={acceptServiceProposalLoading}
                    disabled={serviceIsArchived || serviceIsDone}
                    navigation={navigation}
                    service={service}
                  />
                </View>
              ) : null,
            )}
            {/* diplaying rating stars and text for asker and helper if service is finished */}

            {service.state === 'done'
              ? loggedInUser.ownService
                ? service.rated_by_asker
                  ? this.afterRatingComponents()
                  : this.beforeRatingComponents()
                : loggedInUser.serviceHelper
                ? service.rated_by_helper
                  ? this.afterRatingComponents()
                  : this.beforeRatingComponents()
                : null
              : null}

            {/* disabling comments temporarily */}

            {/* {service.reveal_asker === false &&
            (service.state === 'progressing' || service.state === 'done') &&
            (loggedInUser.serviceHelper || loggedInUser.ownService) ? (
              <CommentsList
                topMargin={20}
                data={service.comments}
                onAddComment={this.onAddComment}
                currentUser={currentUser}
                serviceAskerid={service.asker._id}
                disableInput={service.state === 'done'}
              />
            ) : null} */}
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

  addReview: PropTypes.func,
  // addComment: PropTypes.func,
  acceptServiceProposalLoading: PropTypes.bool,
  addReviewLoading: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  currentUser: state.auth.user,
  allServices: state.service.allServices,
  acceptServiceProposalLoading: state.service.acceptServiceProposalLoading,
  markServiceAsDoneLoading: state.service.markServiceAsDoneLoading,
  archiveServiceLoading: state.service.archiveServiceLoading,
  addReviewLoading: state.service.addReviewLoading,
  addCommentLoading: state.service.addCommentLoading,
  errors: state.errors,
});

const mapDispatchToProps = {
  acceptServiceProposal: ServiceActions.acceptServiceProposal,
  markServiceAsDone: ServiceActions.markServiceAsDone,
  archiveService: ServiceActions.archiveService,
  getAllServices: ServiceActions.getAllServices,
  addReview: ServiceActions.addReview,
  addComment: ServiceActions.addComment,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ServiceScreen);
