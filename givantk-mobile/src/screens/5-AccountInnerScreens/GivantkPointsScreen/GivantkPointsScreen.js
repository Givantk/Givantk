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
    randomPointsNumber: null,
    text: '',
    clickedOnce: false,
  };

  onButtonClicked = () => {
    const { clickedOnce } = this.state;
    const {currentUserProfile} =this.props;

    console.log(clickedOnce)
    //set the randomPointsNumber in state to a random number between 1 and 10
    currentUserProfile.givantk_points === 0
      ? !clickedOnce
        ? this.setState(
            {
              randomPointsNumber: Math.floor(Math.random() * 10) + 1,
              clickedOnce: true,
            },
            () => {
              this.setState((prevState) => ({
                text:
                  'Congratulations \n you successfully added ' +
                  prevState.randomPointsNumber +
                  ' points to your account',
              }));
            },
          )
        : this.setState((prevState) => ({
            text:
              'You have already added ' +
              prevState.randomPointsNumber +
              '\n points to your account',
          }))
      : this.setState({
          text:
            'You already have ' +
            currentUserProfile.givantk_points +
            ' points in your account.',
        });
  };

  render() {
    const { onButtonClicked, state } = this;
    const { text } = state;

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
        <Text style={styles.title}>Get Free Givantk Points</Text>
        <Image style={styles.image} source={{ uri: givantkPointsLogo }} />
        <View style={{ alignItems: 'center' }}>
          <MainButton onPress={onButtonClicked}>
            Get Random Number of Points
          </MainButton>
          <Text style={styles.text}>{text}</Text>
        </View>
      </View>
    );
  }
}

GivantkPointsScreen.propTypes = {
  navigation: PropTypes.shape({}),
  getCurrentProfileLoading: PropTypes.bool,
  currentUserHasProfile: PropTypes.bool,
  currentUserProfile: PropTypes.shape({}),
};

const mapStateToProps = (state) => ({
  getCurrentProfileLoading: state.profile.getCurrentProfileLoading,
  currentUserHasProfile: state.profile.currentUserHasProfile,
  currentUserProfile: state.profile.currentUserProfile,
});



export default connect(
  mapStateToProps,
  null,
)(GivantkPointsScreen);
