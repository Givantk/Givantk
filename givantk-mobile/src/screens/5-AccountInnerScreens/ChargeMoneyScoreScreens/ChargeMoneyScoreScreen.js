import { View, Text, Image } from 'react-native';
import React, { Component } from 'react';
import { Akira as TextInput } from 'react-native-textinput-effects';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MainButton from '../../../components/commons/UI/MainButton/MainButton';
import styles from './ChargeMoneyScoreScreenStyles';
import { moneyScoreLogo } from '../../../assets/constants/index';
import AvoidKeyboard from '../../../components/commons/UI/AvoidKeyboard/AvoidKeyboard';
import Loading from '../../../components/commons/UI/Loading/Loading';
import NoProfileDisclaimer from '../../../components/commons/NoProfileDisclaimer/NoProfileDisclaimer';

class ChargeMoneyScoreScreen extends Component {
  static navigationOptions = () => ({
    headerTitle: 'Charge my Money score',
  });

  state = {
    amount: 0,
    warning: '',
  };

  onChangeValue = (text) => {
    this.setState({
      amount: text,
    });
  };

  onButtonClicked = (amount) => {
    const { navigation } = this.props;

    if (amount < 0 || isNaN(amount)) {
      this.setState({
        warning: 'Kindly, enter a valid English Number.',
      });
    } else {
      this.setState({
        warning: '',
      });
      navigation.navigate('PayWithStripe', {
        amount,
      });
    }
  };

  render() {
    const { onButtonClicked, onChangeValue, state } = this;
    const { warning, amount } = state;

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
        <AvoidKeyboard bottomPadding={120}>
          <Image style={styles.image} source={{ uri: moneyScoreLogo }} />

          <Text style={styles.text}>Charge your Money score </Text>

          <TextInput
            style={{ alignSelf: 'stretch' }}
            label="Amount"
            borderColor="#a5d1cc"
            inputPadding={16}
            labelHeight={24}
            labelStyle={styles.textInput}
            onChangeText={onChangeValue}
          />
          <View style={{ alignItems: 'center' }}>
            <MainButton onPress={() => onButtonClicked(amount)}>
              Charge
            </MainButton>
          </View>
          <Text style={styles.warning}>{warning}</Text>
        </AvoidKeyboard>
      </View>
    );
  }
}

ChargeMoneyScoreScreen.propTypes = {
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
)(ChargeMoneyScoreScreen);
