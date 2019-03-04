import { View, Text, Button } from 'react-native';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { colors } from '../../../assets/styles/base';
import styles from './MessagesListScreenStyles';

import MessagesListItem from '../../../components/5-AccountInnerScreensComponents/MessagesListComponents/MessagesListItem';

export default class MessagesListScreen extends Component {
  static navigationOptions = () => ({
    headerTitle: 'Messages List Screen',
    headerStyle: {
      backgroundColor: colors.primary,
    },
    headerTitleStyle: {
      color: colors.white,
    },
  });

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.wrapper}>
        <MessagesListItem />
        <MessagesListItem />
        <MessagesListItem />
        {/* 
        <Text>Messages List Screen</Text>
        <Button title="Chat" onPress={() => navigation.navigate('Chat')} />*/}
      </View>
    );
  }
}

MessagesListScreen.propTypes = {
  navigation: PropTypes.shape(),
};
