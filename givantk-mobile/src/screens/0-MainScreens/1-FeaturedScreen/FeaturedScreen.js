import { connect } from 'react-redux';
import { Icon } from 'native-base';
import { View, FlatList, TouchableWithoutFeedback } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';

import { colors } from '../../../assets/styles/base';
import * as ServiceActions from '../../../store/actions/serviceActions';
import DefaultTextInput from '../../../components/commons/UI/DefaultTextInput/DefaultTextInput';
import Loading from '../../../components/commons/UI/Loading/Loading';
import ServiceCard from '../../../components/commons/Service-Related-Components/ServiceCard/ServiceCard';
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

  componentDidMount() {
    const { getAllServices } = this.props;
    getAllServices();
  }

  navigateToSearchScreen = () => {
    const { navigation } = this.props;
    navigation.navigate('SearchResults');
  };

  renderItem = (service) => {
    const { navigation } = this.props;

    return <ServiceCard service={service.item} navigation={navigation} />;
  };

  render() {
    const { allServices, getAllServicesLoading } = this.props;

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

        {getAllServicesLoading && <Loading />}

        {allServices && (
          <FlatList
            data={allServices}
            keyExtractor={(item) => item._id}
            showsVerticalScrollIndicator={false}
            renderItem={this.renderItem}
          />
        )}
      </View>
    );
  }
}

FeaturedScreen.propTypes = {
  navigation: PropTypes.shape({}),
  allServices: PropTypes.arrayOf(PropTypes.shape({})),
  getAllServices: PropTypes.func,
  getAllServicesLoading: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  errors: state.errors,
  allServices: state.service.allServices,
  getAllServicesLoading: state.service.getAllServicesLoading,
});

const mapDispatchToProps = {
  getAllServices: ServiceActions.getAllServices,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FeaturedScreen);
