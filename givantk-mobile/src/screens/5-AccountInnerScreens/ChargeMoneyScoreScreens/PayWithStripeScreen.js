import React from 'react';
import { View } from 'react-native';
import StripeCheckout from '../../../components/commons/Payment-Related-Components/stripeCheckout/stripeCheckout';
import PropTypes from 'prop-types';


export default class PayWithStripeScreen extends React.Component {


  onPaymentSuccess = (token) => {
    console.log('I am');
    console.log(token);
  };

  onClose = () => {
    console.log('closed');
    // maybe navigate to other screen here?
  };

 

  render() {
    const {navigation}=this.props;
    if (navigation.state.params) {
      const { amount } = navigation.state.params;

    return (
      <View style={[{ flex: 1 }]}>
        <StripeCheckout
          publicKey="pk_test_XPzVOE0qiPQ7Ezq4zwkDlnS7"
          amount={amount * 100}
          imageUrl="https://i.imgur.com/LWvjCYj.png"
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
  createServiceLoading: state.service.createServiceLoading,
  getCurrentProfileLoading: state.profile.getCurrentProfileLoading,
  currentUserHasProfile: state.profile.currentUserHasProfile,
});
