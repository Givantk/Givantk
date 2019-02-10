import { Icon } from 'native-base';

import {
  View,
  Text,
  Button,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { colors } from '../../../assets/styles/base';
import styles from './ServiceScreenStyles';

export default class ServiceScreen extends Component {
  static navigationOptions = () => ({
    headerTitle: 'Service',
  });

  navigateToAskerProfile = () => {
    const { navigation } = this.props;
    navigation.navigate('Profile');
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
    const { navigation } = this.props;
    const service = navigation.getParam('service', null);
    return (
      <ScrollView>
        <View style={styles.wrapper}>
          <TouchableWithoutFeedback onPress={this.navigateToAskerProfile}>
            <View style={styles.header}>
              {/* <Image
                source={{
                  uri: service.asker.imageURL,
                }}
                style={styles.userImage}
              /> */}
              <View style={styles.headerRight}>
                <Text style={styles.userName}>
                  {`${service.asker.first_name} ${service.asker.last_name}`}
                </Text>
              </View>
            </View>
          </TouchableWithoutFeedback>

          <Text style={styles.serviceTitle}>{service.name}</Text>

          <View style={styles.addProposalButton}>
            <Button title="Offer help" onPress={this.onPressOfferHelp} />
          </View>

          <View style={styles.content}>
            <Text style={styles.descriptionText}>
              {service.brief_description || service.description}
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
