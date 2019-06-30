import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as ServiceActions from '../../../store/actions/serviceActions';

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

    }
    else{
        console.log('params not sent ')
    }
    
  }

  render() {
    const { getRecommendedHelpersLoading, recommendedHelpers,errors } = this.props;

    return (
      <View>
        {getRecommendedHelpersLoading||errors ? (
          <Text>Loading</Text>
        ) : (
          <Text>{recommendedHelpers}</Text>
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
