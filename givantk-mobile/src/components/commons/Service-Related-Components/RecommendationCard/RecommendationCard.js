import { connect } from 'react-redux';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import React from 'react';
import MainButton from '../../../commons/UI/MainButton/MainButton';
import getUserImage from '../../../../assets/utils/getUserImage';
import styles from './RecommendationCardStyles';
import PropTypes from 'prop-types';
import Loading from '../../UI/Loading/Loading';

class RecommendationCard extends React.PureComponent {
  state = {
    invited: false,
  };

  componentDidMount = () => {
    const { profile, navigation } = this.props;
    const { serviceId } = navigation.state.params;
    if (profile.invitedIn) {
      if (profile.invitedIn[serviceId] === true) {
        this.setState({
          invited: true,
        });
      }
    }
  };

  onPressHelper = (id) => {
    this.props.navigation.navigate('Profile', {
      userId: id,
    });
  };

  render() {
    const { profile, onInvite, invitationLoading } = this.props;
    const { invited } = this.state;
    return (
      <TouchableWithoutFeedback
        onPress={() => this.onPressHelper(profile.user)}
      >
        <View style={styles.recommenationCard}>
          <View style={styles.header}>
            <TouchableWithoutFeedback
              onPress={() => this.onPressHelper(profile.user)}
            >
              <View>
                <Image
                  source={{
                    uri: getUserImage(profile.avatar),
                  }}
                  style={styles.userImage}
                />
              </View>
            </TouchableWithoutFeedback>
            <View style={styles.headerRight}>
              <TouchableWithoutFeedback
                onPress={() => this.onPressHelper(profile.user)}
              >
                <View>
                  <Text style={styles.userName}>
                    {`${profile.first_name} ${profile.last_name}`}
                  </Text>
                </View>
              </TouchableWithoutFeedback>
              <View style={{ marginTop: 10 }}>
                <Text style={styles.userName}>
                  Skills:{' '}
                  <Text style={styles.criteria}>
                    {profile.recommenderInfo.skills.join(', ')}
                  </Text>
                </Text>
                <Text style={styles.userName}>
                  Location:{' '}
                  <Text style={styles.criteria}>
                    {profile.recommenderInfo.location}
                  </Text>
                </Text>
                <Text style={styles.userName}>
                  Job:{' '}
                  <Text style={styles.criteria}>
                    {profile.recommenderInfo.job}
                  </Text>
                </Text>
              </View>
            </View>
          </View>
          <View style={{ marginLeft: 20, marginTop: 10 }} />
          <View style={styles.content}>
            <Text style={{ textAlign: 'center', textAlignVertical: 'center' }}>
              {profile.description}
            </Text>
          </View>

          <View style={{ alignItems: 'center' }}>
            {invitationLoading && invited ? (
              <Loading />
            ) : invited ? (
              <Text style={styles.invitedText}>
                User is invited successfully
              </Text>
            ) : (
              <MainButton
                onPress={() => {
                  this.setState({ invited: true });
                  onInvite(profile._id);
                }}
              >
                Invite
              </MainButton>
            )}
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

RecommendationCard.propTypes = {
  navigation: PropTypes.shape({}),
  profile: PropTypes.shape({}),
  onInvite: PropTypes.func,
};

const mapStateToProps = (state) => ({
  invitationLoading: state.service.invitationLoading,
});

export default connect(mapStateToProps)(RecommendationCard);
