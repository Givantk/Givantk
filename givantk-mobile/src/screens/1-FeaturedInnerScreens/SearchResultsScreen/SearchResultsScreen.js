import { connect } from 'react-redux';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { colors } from '../../../assets/styles/base';
import styles from './SearchResultsScreenStyles';

/*start test */
import ServicesList from '../../../components/commons/Service-Related-Components/ServicesList/ServicesList';
/*end test */

class SearchResultsScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Search Results',
    headerStyle: {
      backgroundColor: colors.primary,
    },
    headerTitleStyle: {
      color: colors.white,
    },
  });

  render() {
    const { navigation, searchedServices, getSearchedServicesLoading } = this.props;
    return (
      <View style={styles.wrapper}>
        {searchedServices && (
          <ServicesList
            services={searchedServices}
            loading={getSearchedServicesLoading}
            navigation={navigation}
          />
        )}
      </View>
    );
  }
}



SearchResultsScreen.propTypes = {
  navigation: PropTypes.shape({}),
  searchedServices: PropTypes.arrayOf(PropTypes.shape({})),
  getSearchedServicesLoading: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  errors: state.errors,
  searchedServices: state.service.searchedServices,
  getSearchedServicesLoading: state.service.getSearchedServicesLoading,
});


export default connect(
  mapStateToProps,
  null,
)(SearchResultsScreen);