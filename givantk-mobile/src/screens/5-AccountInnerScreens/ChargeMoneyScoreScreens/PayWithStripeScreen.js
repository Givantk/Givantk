import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import StripeCheckout from '../../../components/commons/Payment-Related-Components/stripeCheckout/stripeCheckout';
import PropTypes from 'prop-types';
import { givantkLogo } from '../../../assets/constants/index';
import * as paymentActions from '../../../store/actions/paymentActions';
import * as ProfileActions from '../../../store/actions/profileActions';
import QuickNotification from '../../../components/commons/UI/QuickNotification/QuickNotification';
import Loading from '../../../components/commons/UI/Loading/Loading';

class PayWithStripeScreen extends React.Component {
  static navigationOptions = () => ({
    headerTitle: 'Pay with stripe',
  });

  onPaymentSuccess = (token) => {
    const { makePayment, navigation, getCurrentUserProfile } = this.props;

    const { amount } = navigation.state.params;

    const payment = {
      amount: amount * 100,
      currency: 'EGP',
      description: 'Charging money score',
      source: token,
    };

    successfulPaymentCallback = () => {
      QuickNotification('Successful payment');
      getCurrentUserProfile();
      navigation.replace('Tab');
    };
    makePayment(payment, successfulPaymentCallback);
  };

  onClose = () => {};

  render() {
    console.log(this.props);
    const { navigation, createPaymentLoading } = this.props;
    if (navigation.state.params) {
      const { amount } = navigation.state.params;

      return (
        <View style={[{ flex: 1 }]}>
          {createPaymentLoading ? (
            <Loading />
          ) : (
            <StripeCheckout
              publicKey="pk_test_XPzVOE0qiPQ7Ezq4zwkDlnS7"
              amount={amount * 100}
              imageUrl={givantkLogo}
              storeName="Charging Account"
              description="Charge your money score"
              currency="EGP"
              allowRememberMe={false}
              prepopulatedEmail="mohamed2m2018@gmail.com"
              onClose={() => this.onClose(navigation)}
              onPaymentSuccess={this.onPaymentSuccess}
            />
          )}
        </View>
      );
    }
  }
}
PayWithStripeScreen.propTypes = {
  navigation: PropTypes.shape({}),
  errors: PropTypes.shape({}),
  currentUserHasProfile: PropTypes.bool,
  getCurrentUserProfile: PropTypes.func,
  makePayment: PropTypes.func,
  createPaymentLoading: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  errors: state.errors,
  currentUserHasProfile: state.profile.currentUserHasProfile,
  createPaymentLoading: state.payment.createPaymentLoading,
});

const mapDispatchToProps = {
  makePayment: paymentActions.makePayment,
  getCurrentUserProfile: ProfileActions.getCurrentUserProfile,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PayWithStripeScreen);
