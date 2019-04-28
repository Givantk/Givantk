import { connect } from 'react-redux';
import { LinearGradient } from 'expo';
import { View, Text } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import React from 'react';

import * as IntroActions from '../../../store/actions/introActions';
import styles from './IntroScreenStyles';

class IntroScreen extends React.Component {
  static navigationOptions = () => ({
    headerTitle: 'Welcome to Givantk',
  });

  slides = [
    {
      key: 'Givantk',
      title: 'Welcome to Givantk',
      text:
        'Givantk is a services app, where you can ask for services or help others in services, the beta version of the app currently supports free services only. ',
      icon: 'google',
      colors: ['#63E2FF', '#B066FE'],
    },
    {
      key: 'Create profile',
      title: 'Create your profile in few seconds',
      text:
        'Just create your profile in few seconds by adding your info and skills, then you can ask or apply for any service you want on the app.',
      icon: 'account',
      colors: ['#A3A1FF', '#3A3897'],
    },
    {
      key: 'points',
      title: 'Get excited with Givantk Points',
      text:
        'When you create your profile, you get 100 Givantk Points, you can use them to ask for free services.To get more points you have to help others.\n \n Points can be exchanged in future with discounts in large stores. ',
      icon: 'fire',
      colors: ['#29ABE2', '#4F00BC'],
    },
    {
      key: 'account-heart',
      title: `We love you dear ${
        this.props.navigation.state.params.currentUser.first_name
      }`,
      text:
        'We love every member of our community, and we will always work hard to make sure our app is likable by you :D',
      icon: 'account-heart',
      colors: ['#29ABE2', '#4F00BC'],
    },
  ];

  onDone = () => {
    const { navigation, passIntro, editSavedPassedIntroValue } = this.props;
    if (navigation.state.params) {
      const { currentUser } = navigation.state.params;
      // send to backend
      passIntro(currentUser);
    }

    navigation.replace('Tab');
  };

  _renderItem = (props) => (
    <LinearGradient
      style={[
        styles.mainContent,
        {
          paddingTop: props.topSpacer,
          paddingBottom: props.bottomSpacer,
          width: props.width,
          height: props.height,
        },
      ]}
      colors={props.colors}
      start={{ x: 0, y: 0.1 }}
      end={{ x: 0.1, y: 1 }}
    >
      <MaterialCommunityIcons
        style={{
          backgroundColor: 'transparent',
          alignSelf: 'center',
          marginTop: 120,
        }}
        name={props.icon}
        size={200}
        color="white"
      />

      <View style={{ marginTop: 10 }}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.text}>{props.text}</Text>
      </View>
    </LinearGradient>
  );

  render() {
    return (
      <AppIntroSlider
        slides={this.slides}
        renderItem={this._renderItem}
        bottomButton
        showSkipButton
        onDone={this.onDone}
      />
    );
  }
}

const mapDispatchToProps = {
  passIntro: IntroActions.passIntro,
};

const mapStateToProps = (state) => ({
  passedIntro: state.Intro.passedIntro,
});

export default connect(
  null,
  mapDispatchToProps,
)(IntroScreen);
