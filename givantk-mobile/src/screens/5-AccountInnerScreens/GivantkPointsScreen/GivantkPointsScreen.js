import { View, Text, Image } from 'react-native';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MainButton from '../../../components/commons/UI/MainButton/MainButton';
import styles from './GivantkPointsScreenStyles';
import { givantkPointsLogo } from '../../../assets/constants/index';
import Loading from '../../../components/commons/UI/Loading/Loading';
import NoProfileDisclaimer from '../../../components/commons/NoProfileDisclaimer/NoProfileDisclaimer';

class GivantkPointsScreen extends Component {
  static navigationOptions = () => ({
    headerTitle: 'Get Givantk Points',
  });

  state = {
    warning: '',
  };

  onButtonClicked = () => {};

  render() {
    const { onButtonClicked, state } = this;
    const { warning} = state;

    const {
      getCurrentProfileLoading,
      currentUserHasProfile,
      navigation,
    } = this.props;

    if (getCurrentProfileLoading) return <Loading />;

    if (!currentUserHasProfile)
      return <NoProfileDisclaimer navigation={navigation} />;

    return (
      <View style={styles.wrapper}>
        <Text style={styles.text}>Get free Givantk points</Text>
          <Image style={styles.image} source={{ uri: givantkPointsLogo }} />
          <View style={{ alignItems: 'center' }}>
            <MainButton onPress={onButtonClicked}>
              Get Random Number of Points
            </MainButton>
          </View>
          <Text style={styles.warning}>{warning}</Text>
      </View>
    );
  }
}

GivantkPointsScreen.propTypes = {
  navigation: PropTypes.shape({}),
  getCurrentProfileLoading: PropTypes.bool,
  currentUserHasProfile: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  getCurrentProfileLoading: state.profile.getCurrentProfileLoading,
  currentUserHasProfile: state.profile.currentUserHasProfile,
});

export default connect(
  mapStateToProps,
  null,
)(GivantkPointsScreen);
