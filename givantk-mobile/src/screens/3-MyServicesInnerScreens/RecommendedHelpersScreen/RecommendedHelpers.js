import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as ServiceActions from '../../../store/actions/serviceActions';
import RecommendationList from '../../../components/commons/Service-Related-Components/RecommendationList/RecommendationList';
import Loading from '../../../components/commons/UI/Loading/Loading';

class RecommendedHelpers extends Component {
  static navigationOptions = () => ({
    headerTitle: 'Recommended Helpers',
  });

  state = {};

  componentDidMount() {
    const { navigation, getRecommendedHelpers } = this.props;
    if (navigation.state.params) {
      const { serviceId } = navigation.state.params;
      getRecommendedHelpers(serviceId);
    } else {
      console.log('params not sent ');
    }
  }

  render() {
    const {
      getRecommendedHelpersLoading,
      recommendedHelpers,
      errors,
      navigation,
    } = this.props;

    return (
      <View style={{ flex: 1 }}>
        {getRecommendedHelpersLoading ? (
          <Loading />
        ) : (
          <RecommendationList profiles={recommendedHelpers} navigation={navigation} />
        )}
      </View>
    );
  }
}

RecommendedHelpers.propTypes = {
  navigation: PropTypes.shape({}),
};

const mapStateToProps = (state) => ({
  recommendedHelpers: state.service.recommendedHelpers,
  getRecommendedHelpersLoading: state.service.getRecommendedHelpersLoading,
  errors: state.errors,
});

const mapDispatchToProps = {
  getRecommendedHelpers: ServiceActions.getRecommendedHelpers,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecommendedHelpers);
