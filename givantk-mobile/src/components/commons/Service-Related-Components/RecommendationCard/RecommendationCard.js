import { connect } from 'react-redux';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';

import getUserImage from '../../../../assets/utils/getUserImage';
import Loading from '../../UI/Loading/Loading';
import styles from '../ServiceCard/ServiceCardStyles';

class RecommendationCard extends React.PureComponent {
  state = {
    invited: false,
  };

  onPressCard = () => {};

  onPressHelperAvatar = () => {};

  render() {
      const {profile}=this.props;
    return (
      <TouchableWithoutFeedback onPress={this.onPressCard}>
        <View style={styles.serviceCard}>
          <View style={styles.header}>
            <TouchableWithoutFeedback onPress={this.onPressAskerAvatar}>
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
              <TouchableWithoutFeedback onPress={this.onPressHelperAvatar}>
                <View>
                  <Text style={styles.userName}>
                    {`${profile.first_name} ${profile.last_name}`}
                  </Text>
                </View>
              </TouchableWithoutFeedback>
              <Text style={styles.serviceTitle}>{profile.description}</Text>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

ServiceCard.defaultProps = {};

ServiceCard.propTypes = {
  navigation: PropTypes.shape({}),
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(RecommendationCard);
