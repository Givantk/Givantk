import { Icon } from 'native-base';

import {
  View,
  Text,
  Button,
  Image,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { colors } from '../../../assets/styles/base';
import services from '../../../assets/data/fakeServices';
import styles from './ServiceScreenStyles';

export default class ServiceScreen extends Component {
  static navigationOptions = () => ({
    headerTitle: 'Service',
    headerStyle: {
      backgroundColor: colors.primary,
    },
    headerTitleStyle: {
      color: colors.white,
    },
  });

  navigateToAskerProfile = () => {
    const { navigation } = this.props;
    navigation.navigate('Profile');
  };

  render() {
    const service = services[0];
    const { navigation } = this.props;
    // const serviceId = navigation.getParam('_id', null);
    // Then request for this service
    return (
      <ScrollView>
        <View style={styles.wrapper}>
          <TouchableWithoutFeedback onPress={this.navigateToAskerProfile}>
            <View style={styles.header}>
              <Image
                source={{
                  uri: service.asker.imageURL,
                }}
                style={styles.userImage}
              />
              <View style={styles.headerRight}>
                <Text style={styles.userName}>{service.asker.name}</Text>
              </View>
            </View>
          </TouchableWithoutFeedback>

          <Text style={styles.serviceTitle}>{service.title}</Text>

          <View style={styles.addProposalButton}>
            <Button
              title="Offer help"
              onPress={() => navigation.navigate('AddProposal')}
            />
          </View>

          <View style={styles.content}>
            <Text style={styles.descriptionText}>
              {service.description
                ? service.description
                : service.briefDescription}
            </Text>
          </View>

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
};
