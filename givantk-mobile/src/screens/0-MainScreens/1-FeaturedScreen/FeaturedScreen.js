import { connect } from 'react-redux';
import { Icon } from 'native-base';
import { View, TouchableWithoutFeedback } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';

import { colors } from '../../../assets/styles/base';
import DefaultTextInput from '../../../components/commons/UI/DefaultTextInput/DefaultTextInput';
import ServicesList from '../../../components/commons/Service-Related-Components/ServicesList/ServicesList';
import styles from './FeaturedScreenStyles';
import * as ServiceActions from '../../../store/actions/serviceActions';

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

  constructor(props) {
    super(props);
    this.state = {
      searchWord: ''
    }
  }

  onChangeText = (text) => { // can't update the state
    this.setState({searchWord: text}, () => {
      console.log('state updated:' + this.state.searchWord);
    });
  }
  
  navigateToSearchScreen = () => {
    const { navigation, getSearchedServices } = this.props;
    getSearchedServices('laptop'); // need to change this to be variable from the state not fixed value
    navigation.navigate('SearchResults');
  };

  render() {
    const { navigation, getAllServicesLoading } = this.props;
    let { allServices } = this.props;
    allServices = allServices.filter((s) => s.state !== 'archived');

    return (
      <View style={styles.container}>
        <View style={styles.searchContainer}>
          <DefaultTextInput
            placeholder="Find a service"
            placeholderTextColor={colors.gray02}
            style={styles.searchInput}
            onChangeText={this.onChangeText}
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
  getSearchedServices: PropTypes.func,
};

const mapStateToProps = (state) => ({
  errors: state.errors,
  allServices: state.service.allServices,
  getAllServicesLoading: state.service.getAllServicesLoading,
});

const mapDispatchToProps={
  getSearchedServices: ServiceActions.getSearchedServices
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FeaturedScreen);
