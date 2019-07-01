import { connect } from 'react-redux';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';
import MainButton from '../../../commons/UI/MainButton/MainButton';
import getUserImage from '../../../../assets/utils/getUserImage';
import Loading from '../../UI/Loading/Loading';
import styles from './RecommendationCardStyles';
import { headerHeight } from '../../../../assets/styles/base';

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
                    {/* {`${profile.first_name} ${profile.last_name}`} */}
                    Mohamed Mohamed Salah
                  </Text>
                 
                </View>
              </TouchableWithoutFeedback>
              <View style={{marginTop:10}}>
              <Text style={styles.userName}>Skills: <Text style={styles.criteria}>Reading,Writing</Text></Text>
              <Text style={styles.userName}>Location: <Text style={styles.criteria}>Imbaba</Text></Text>
              <Text style={styles.userName}>Job: <Text style={styles.criteria}>hamada</Text></Text>
              </View>
            </View>
          </View>
          <View style={{ marginLeft: 20, marginTop: 10 }} />
          <View style={styles.content}>
            <Text>هائم فى ملكوت الله</Text>
          </View>

          <View style={{ alignItems: 'center' }}>
            <MainButton>Invite</MainButton>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

RecommendationCard.defaultProps = {};

RecommendationCard.propTypes = {
  navigation: PropTypes.shape({}),
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(RecommendationCard);
