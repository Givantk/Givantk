import { connect } from 'react-redux';
import { Icon } from 'native-base';
import { View, TouchableWithoutFeedback } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';

import { colors } from '../../../assets/styles/base';
import DefaultTextInput from '../../../components/commons/UI/DefaultTextInput/DefaultTextInput';
import ServicesList from '../../../components/commons/Service-Related-Components/ServicesList/ServicesList';
import styles from './FeaturedScreenStyles';

class FeaturedScreen extends React.Component {
  static navigationOptions = () => ({
    tabBarLabel: 'Featured',
    tabBarIcon: ({ tintColor }) => (
      <Icon
        type="Ionicons"
        name="ios-home"
        style={{ color: tintColor, fontSize: 35 }}
      />
    ),
  });

  navigateToSearchScreen = () => {
    const { navigation } = this.props;
    navigation.navigate('SearchResults');
  };

  render() {
    const { navigation, getAllServicesLoading } = this.props;
    let { allServices } = this.props;
    const { errors } = this.props;
    allServices = allServices.filter((s) => s.state !== 'archived');

    console.log(errors);

    return (
      <View style={styles.container}>
        <View style={styles.searchContainer}>
          <DefaultTextInput
            placeholder="Find a service"
            placeholderTextColor={colors.gray02}
            style={styles.searchInput}
            onChangeText={() => {}}
          />
          <TouchableWithoutFeedback onPress={this.navigateToSearchScreen}>
            <Icon type="Feather" name="search" style={styles.searchIcon} />
          </TouchableWithoutFeedback>
        </View>

        {allServices && (
          <ServicesList
            services={allServices}
            loading={getAllServicesLoading}
            navigation={navigation}
          />
        )}
      </View>
    );
  }
}

FeaturedScreen.propTypes = {
  navigation: PropTypes.shape({}),
  allServices: PropTypes.arrayOf(PropTypes.shape({})),
  getAllServicesLoading: PropTypes.bool,
  errors: PropTypes.shape({}),
};

const mapStateToProps = (state) => ({
  errors: state.errors,
  allServices: state.service.allServices,
  getAllServicesLoading: state.service.getAllServicesLoading,
});

export default connect(
  mapStateToProps,
  null,
)(FeaturedScreen);
