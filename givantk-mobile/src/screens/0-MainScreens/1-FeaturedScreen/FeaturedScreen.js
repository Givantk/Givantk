import { connect } from 'react-redux';
import { Icon } from 'native-base';
import { View, TouchableWithoutFeedback } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';

import { colors } from '../../../assets/styles/base';
import * as ServiceActions from '../../../store/actions/serviceActions';
import DefaultTextInput from '../../../components/commons/UI/DefaultTextInput/DefaultTextInput';
import ServicesList from '../../../components/commons/Service-Related-Components/ServicesList/ServicesList';
import styles from './FeaturedScreenStyles';

class FeaturedScreen extends React.Component {
  static navigationOptions = () => ({
    tabBarLabel: 'المفضلة',
    tabBarIcon: ({ tintColor }) => (
      <Icon
        type="Ionicons"
        name="ios-home"
        style={{ color: tintColor, fontSize: 35}}
      />
    ),
  });

  constructor(props) {
    super(props);
    this.state = {
      searchWord: '',
    };
  }


  componentDidMount=()=>{
    const {getRecommendedServices}=this.props;
    getRecommendedServices();
  }
  onChangeText = (name, value) => {
    // can't update the state
    this.setState(
      () => ({ [name]: value }),
      () => {
        // console.log('state updated:' + this.state.searchWord);
      },
    );
  };

  navigateToSearchScreen = () => {
    const { searchWord } = this.state;
    const { navigation, getSearchedServices } = this.props;
    if (searchWord) {
      getSearchedServices(searchWord);
      navigation.navigate('SearchResults');
    }
  };

  render() {
    const { navigation, getRecommendedServicesLoading } = this.props;
    let { recommendedServices } = this.props;
    const { getRecommendedServices } = this.props;

    recommendedServices = recommendedServices.filter((s) => s.state !== 'archived');

    return (
      <View style={styles.container}>
        <View style={styles.searchContainer}>
          <DefaultTextInput
            placeholder="ابحث عن خدمة"
            placeholderTextColor={colors.gray02}
            style={styles.searchInput}
            name="searchWord"
            onChangeText={this.onChangeText}
          />
          <TouchableWithoutFeedback onPress={this.navigateToSearchScreen}>
            <Icon type="Feather" name="search" style={styles.searchIcon} />
          </TouchableWithoutFeedback>
        </View>

        {recommendedServices && (
          <ServicesList
            services={recommendedServices}
            loading={getRecommendedServicesLoading}
            navigation={navigation}
            onRefresh={getRecommendedServices}
            canBookmark
          />
        )}
      </View>
    );
  }
}

FeaturedScreen.propTypes = {
  navigation: PropTypes.shape({}),
  recommendedServices: PropTypes.arrayOf(PropTypes.shape({})),
  getRecommendedServicesLoading: PropTypes.bool,
  getRecommendedServices: PropTypes.func,
  getSearchedServices: PropTypes.func,
  errors: PropTypes.shape({}),
};

const mapStateToProps = (state) => ({
  errors: state.errors,
  recommendedServices: state.service.recommendedServices,
  getRecommendedServicesLoading: state.service.getRecommendedServicesLoading,
  passedIntro: state.intro.passedIntro,
});

const mapDispatchToProps = {
  getRecommendedServices: ServiceActions.getRecommendedServices,
  getSearchedServices: ServiceActions.getSearchedServices,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FeaturedScreen);
