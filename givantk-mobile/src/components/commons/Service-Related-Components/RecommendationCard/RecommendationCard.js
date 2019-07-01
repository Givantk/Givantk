import { connect } from 'react-redux';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import React from 'react';
import MainButton from '../../../commons/UI/MainButton/MainButton';
import getUserImage from '../../../../assets/utils/getUserImage';
import Loading from '../../UI/Loading/Loading';
import styles from './RecommendationCardStyles';
import PropTypes from 'prop-types';

class RecommendationCard extends React.PureComponent {
  state = {
    invited: false,
  };

  onPressCard = () => {};

  onPressHelperAvatar = () => {};

  render() {
    const { profile } = this.props;
    return (
      <TouchableWithoutFeedback onPress={this.onPressCard}>
        <View style={styles.recommenationCard}>
          <View style={styles.header}>
            <TouchableWithoutFeedback onPress={this.onPressAskerAvatar}>
              <View>
                <Image
                  source={{
                    uri: getUserImage(null),
                  }}
                  style={styles.userImage}
                />
              </View>
            </TouchableWithoutFeedback>
            <View style={styles.headerRight}>
              <TouchableWithoutFeedback onPress={this.onPressHelperAvatar}>
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
            <Text style={{textAlign:"center",textAlignVertical:'center'}}>{profile.description}</Text>
          </View>

          <View style={{ alignItems: 'center' }}>
            <MainButton>Invite</MainButton>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

RecommendationCard.propTypes = {
  navigation: PropTypes.shape({}),
  profile: PropTypes.shape({}),
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(RecommendationCard);
