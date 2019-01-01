import { Icon } from 'native-base';
import { View, FlatList, TouchableWithoutFeedback } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';

import { colors } from '../../../assets/styles/base';
import DefaultTextInput from '../../../components/commons/UI/DefaultTextInput/DefaultTextInput';
import ServiceCard from '../../../components/commons/Service-Related-Components/ServiceCard/ServiceCard';
import services from '../../../assets/data/fakeServices';
import styles from './FeaturedScreenStyles';

export default class FeaturedScreen extends React.Component {
  static navigationOptions = () => ({
    tabBarLabel: 'Featured',
    tabBarIcon: ({ tintColor }) => (
      <Icon
        type="Ionicons"
        name="ios-home"
        style={[styles.tabIcon, { color: tintColor }]}
      />
    ),
  });

  navigateToServiceScreen = () => {
    const { navigation } = this.props;
    navigation.navigate('Service');
  };

  navigateToSearchScreen = () => {
    const { navigation } = this.props;
    navigation.navigate('SearchResults');
  };

  renderItem = (service) => (
    <ServiceCard
      service={service.item}
      navigateToServiceScreen={this.navigateToServiceScreen}
    />
  );

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.searchContainer}>
          <DefaultTextInput
            placeholder="Find a service"
            placeholderTextColor={colors.gray02}
            style={styles.searchInput}
          />
          <TouchableWithoutFeedback onPress={this.navigateToSearchScreen}>
            <Icon type="Feather" name="search" style={styles.searchIcon} />
          </TouchableWithoutFeedback>
        </View>

        <FlatList
          data={services}
          keyExtractor={(item) => item._id}
          showsVerticalScrollIndicator={false}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

FeaturedScreen.propTypes = {
  navigation: PropTypes.shape({}),
};
