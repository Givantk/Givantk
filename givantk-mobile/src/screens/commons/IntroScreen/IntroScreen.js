import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet, View, Text, Image } from 'react-native';
import { LinearGradient } from 'expo';
import AppIntroSlider from 'react-native-app-intro-slider';
import { connect } from 'react-redux';
import * as IntroActions from '../../../store/actions/introActions';

 
const styles = StyleSheet.create({
  mainContent: {
    flex: 1,

  },
  image: {
    width: 320,
    height: 320,
  },
  text: {
    color: 'rgba(255, 255, 255, 0.8)',
    backgroundColor: 'transparent',
    textAlign: 'center',
    paddingHorizontal: 18,
  },
  title: {
    fontSize: 22,
    color: 'white',
    backgroundColor: 'transparent',
    textAlign: 'center',
    marginBottom: 16,
  }
});
 
const slides = [
  {
    key: 'Givantk',
    title: 'What is Givantk?',
    text: 'Givantk is a services app, where you can ask for services or help others in services, the beta version of the app currently supports free services only ',
    icon: 'google',
    colors: ['#63E2FF', '#B066FE'],
  },
  {
    key: 'GetStarted',
    title: 'How to get started?',
    text: 'Just create your profile, then you can view all the services on the app, and you can apply to help in any of them. If you want to ask for new service, it is very easy. Just click on request service tab   ',
    icon: 'google',
    colors: ['#A3A1FF', '#3A3897'],
  },
  {
    key: 'points',
    title: 'What is Givantk Points?',
    text: 'When you help others in their services you get points called Givantk Points. In future you can exchange this points with discounts or prizes from large stores.When you create your profile you will have 100 points, and you can use them to ask for services. ',
    icon: 'google',
    colors: ['#29ABE2', '#4F00BC'],
  },
];
 
 class IntroScreen extends React.Component {


    onDone=()=>{

        const {navigation,passIntro}=this.props;
        if (navigation.state.params) {

            const { currentUser} = navigation.state.params;
            //send to backend
            passIntro(currentUser);
        }

        navigation.navigate('Featured');


    }

   
  _renderItem = props => (
    <LinearGradient
      style={[styles.mainContent, {
        paddingTop: props.topSpacer,
        paddingBottom: props.bottomSpacer,
        width: props.width,
        height: props.height,
      }]}
      colors={props.colors}
      start={{x: 0, y: .1}} end={{x: .1, y: 1}}
    >
      <MaterialCommunityIcons style={{ backgroundColor: 'transparent',alignSelf: 'center',marginTop:140, }} name={props.icon} size={200} color="white" />
      <View style={{marginTop:10}}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.text}>{props.text}</Text>
      </View>
    </LinearGradient>
  );
 
  render() {
    return (
      <AppIntroSlider
        slides={slides}
        renderItem={this._renderItem}
        bottomButton
        showSkipButton
        onDone={this.onDone}
      />
    );
  }
}


  
  const mapDispatchToProps = {
    passIntro: IntroActions.passIntro
  };
  
  export default connect(
    null,
    mapDispatchToProps
  )(IntroScreen);
  