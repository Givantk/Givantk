import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import StripeCheckout from '../../../components/commons/Payment-Related-Components/stripeCheckout/stripeCheckout';
import PropTypes from 'prop-types';
import { givantkLogo } from '../../../assets/constants/index';
import * as paymentActions from '../../../store/actions/paymentActions';
import QuickNotification from '../../../components/commons/UI/QuickNotification/QuickNotification';

class PayWithStripeScreen extends React.Component {
  static navigationOptions = () => ({
    headerTitle: 'Pay with stripe',
  });


  successfulPaymentCallback=()=>{
    QuickNotification('Successful payment');
  }

  onPaymentSuccess = (token) => {
    const { makePayment, navigation } = this.props;

    const { amount } = navigation.state.params;

    const payment = {
      amount: amount*100,
      currency: 'EGP',
      description: 'Charging money score',
      source: token,
    };

    makePayment(payment,this.successfulPaymentCallback);
  };

  onClose = () => {
    console.log('closed');

    // maybe navigate to other screen here?
  };

  render() {
    const { navigation } = this.props;
    if (navigation.state.params) {
      const { amount } = navigation.state.params;

      return (
        <View style={[{ flex: 1 }]}>
          <StripeCheckout
            publicKey="pk_test_XPzVOE0qiPQ7Ezq4zwkDlnS7"
            amount={amount * 100}
            imageUrl={givantkLogo}
            storeName="Charging Account"
            description="Charge your money score"
            currency="EGP"
            allowRememberMe={false}
            prepopulatedEmail="mohamed2m2018@gmail.com"
            onClose={this.onClose}
            onPaymentSuccess={this.onPaymentSuccess}
          />
        </View>
      );
    }
  }
}
PayWithStripeScreen.propTypes = {
  navigation: PropTypes.shape({}),
};

const mapStateToProps = (state) => ({
  errors: state.errors,
  success: state.profile.success,
});

const mapDispatchToProps = {
  makePayment: paymentActions.makePayment,
};

export default connect(
  null,
  mapDispatchToProps,
)(PayWithStripeScreen);
