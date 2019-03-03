import { View, Text, Image } from 'react-native';
import React, { Component } from 'react';
import MainButton from '../../../components/commons/UI/MainButton/MainButton';
import styles from './PaymentInfoScreenStyles';
import { moneyScoreLogo } from '../../../assets/constants/index';
import { Akira as TextInput } from 'react-native-textinput-effects';
import AvoidKeyboard from '../../../components/commons/UI/AvoidKeyboard/AvoidKeyboard';

export default class PaymentInfoScreen extends Component {
  static navigationOptions = () => ({
    headerTitle: 'Payment Info',
  });

  state = {
    amount: 0,
    warning: '',
  };

  onChangeValue = (text) => {
    console.log(text);
    this.setState({
      amount: text,
    });
  };

  onButtonClicked = (amount) => {
    if (amount < 0 || isNaN(amount)) {
      this.setState({
        warning: 'Kindly, enter a valid English number.',
      });
    } else {
      this.setState({
        warning: '',
      });
    }
  };

  render() {
    const { onButtonClicked, onChangeValue, state } = this;
    const { warning, amount } = state;

    return (
      <View style={styles.wrapper}>
        <AvoidKeyboard bottomPadding={120}>
          <Image style={styles.image} source={{ uri: moneyScoreLogo }} />

          <Text style={styles.text}>Charge your Money score </Text>

          <TextInput
            style={{ alignSelf: 'stretch' }}
            label={'Amount'}
            borderColor={'#a5d1cc'}
            inputPadding={16}
            labelHeight={24}
            labelStyle={styles.textInput}
            onChangeText={onChangeValue}
          />
          <View style={{alignItems:'center'}}>
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

PaymentInfoScreen.propTypes = {};
