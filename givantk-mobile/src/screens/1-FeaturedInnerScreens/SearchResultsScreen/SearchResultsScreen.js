import { connect } from 'react-redux';
import { View, Text, Button } from 'react-native';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { colors } from '../../../assets/styles/base';
import styles from './SearchResultsScreenStyles';

/*start test */
import ServicesList from '../../../components/commons/Service-Related-Components/ServicesList/ServicesList';
/*end test */

class SearchResultsScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Search Results Screen',
    headerStyle: {
      backgroundColor: colors.primary,
    },
    headerTitleStyle: {
      color: colors.white,
    },
  });

  render() {
    const { navigation, allServices, getAllServicesLoading } = this.props;
    return (
      <View style={styles.wrapper}>
        <Text>Search Results Screen</Text>
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

//SearchResultsScreen.propTypes = {};


SearchResultsScreen.propTypes = {
  navigation: PropTypes.shape({}),
  allServices: PropTypes.arrayOf(PropTypes.shape({})),
  getAllServicesLoading: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  errors: state.errors,
  allServices: state.service.allServices,
  getAllServicesLoading: state.service.getAllServicesLoading,
});

export default connect(
  mapStateToProps,
  null,
)(SearchResultsScreen);