import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';
import { AirbnbRating } from 'react-native-ratings';
import getUserImage from '../../../../assets/utils/getUserImage';
import styles from './RatingCardStyles';

class RatingCard extends React.PureComponent {
  onPressCard = () => {
    const { service, navigation } = this.props;

    navigation.navigate('Service', {
      service,
    });
  };

  onPressAvatar = (id) => {
    if(id===null) return
    const { navigation } = this.props;
    navigation.replace('Profile', {
      userId: id,
    });
  };

  render() {
    const { service } = this.props;

    return (
      <TouchableWithoutFeedback onPress={this.onPressCard}>
        <View style={styles.serviceCard}>
          <View style={styles.header}>
            <View>
              {service.askedByUser ? (
                <TouchableWithoutFeedback
                  onPress={() => this.onPressAvatar(service.helper._id)}
                >
                  <Image
                    source={{
                      uri: service.asker && getUserImage(service.helper.avatar),
                    }}
                    style={styles.userImage}
                  />
                </TouchableWithoutFeedback>
              ) : (
                <TouchableWithoutFeedback
                  onPress={() => this.onPressAvatar(service.reveal_asker===false?null:service.asker._id)}
                >
                  <Image
                    source={{
                      uri: service.asker && getUserImage(service.reveal_asker===false?null:service.asker.avatar),
                    }}
                    style={styles.userImage}
                  />
                </TouchableWithoutFeedback>
              )}
            </View>

            <TouchableWithoutFeedback
              onPress={
                service.askedByUser
                  ? () => this.onPressAvatar(service.helper._id)
                  : () => this.onPressAvatar(service.reveal_asker===false?null:service.asker._id)
              }
            >
              <View>
                {service.askedByUser ? (
                  <Text style={styles.reviewer}>
                    {`Helper: ${service.helper.first_name}`}
                  </Text>
                ) : (
                  <Text style={styles.reviewer}>
                    {`Asker: ${service.reveal_asker===false?'Anonymous':service.asker.first_name} `}
                  </Text>
                )}
              </View>
            </TouchableWithoutFeedback>
          </View>

          <View style={styles.headerCenter}>
            {service.askedByUser ? (
              <Text style={styles.reviewHeader}>{`\r\n Reviewed ${
                service.asker.first_name
              } in the service:\n "${service.name}"`}</Text>
            ) : (
              <Text style={styles.reviewHeader}>{`\r\n Reviewed ${
                service.helper.first_name
              } in the service:\n "${service.name}" `}</Text>
            )}
          </View>

          <View style={styles.content}>
            {service.askedByUser ? (
              <AirbnbRating
                isDisabled
                size={30}
                defaultRating={service.asker_is_rated.chosen_rating}
              />
            ) : (
              <AirbnbRating
                isDisabled
                size={30}
                defaultRating={service.helper_is_rated.chosen_rating}
              />
            )}
            {service.askedByUser ? (
              service.asker_is_rated.written_review ? (
                <Text style={styles.writtenReview}>{` "${
                  service.asker_is_rated.written_review
                }"`}</Text>
              ) : null
            ) : service.helper_is_rated.written_review ? (
              <Text style={styles.writtenReview}>{` "${
                service.helper_is_rated.written_review
              }"`}</Text>
            ) : null}
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default RatingCard;

RatingCard.defaultProps = {
  service: {},
};

RatingCard.propTypes = {
  navigation: PropTypes.shape({}),
  service: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    asker: PropTypes.shape({}),
  }),
};
