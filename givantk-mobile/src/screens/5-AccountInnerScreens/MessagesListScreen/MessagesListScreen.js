import { connect } from 'react-redux';
import io from 'socket.io-client';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { colors } from '../../../assets/styles/base';
import styles from './MessagesListScreenStyles';
import * as AuthActions from '../../../store/actions/authActions';
import MessagesListItem from '../../../components/5-AccountInnerScreensComponents/MessagesListComponents/MessagesListItem';

class MessagesListScreen extends Component {
  static navigationOptions = () => ({
    headerTitle: 'Messages List Screen',
    headerStyle: {
      backgroundColor: colors.primary
    },
    headerTitleStyle: {
      color: colors.white
    }
  });

  constructor(props) {
    super(props);
    this.state = {
      chats: this.props.chats
    };
  }

  chatNavigatorHandle = (chatID) => {
    const { navigation } = this.props;
    navigation.navigate('Chat', { chatID: chatID }); //we need a new chat screen
    //console.log('button pressed');
  };

  render() {
    const chats = this.state.chats.map((chat, i) => (
      <TouchableOpacity
          key={i}
          style={styles.customBtn}
          onPress={() => this.chatNavigatorHandle(chat.socketID)}
        >
          <View style={styles.customView}>
            <Text style={styles.customText}>{chat._id}</Text>
          </View>
        </TouchableOpacity>
    ));

    return (
      <View style={styles.wrapper}>
        <Text style={styles.header}>{this.props.currentUser.first_name}'s Messages</Text>
        
        {chats}
        {/* 
        <TouchableOpacity
          style={styles.customBtn}
          onPress={() => this.chatNavigatorHandle('654')}
        >
          <View style={styles.customView}>
            <Text style={styles.customText}>Logged in user 1 and user 2</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.customBtn}
          onPress={() => this.chatNavigatorHandle('654')}
        >
          <View style={styles.customView}>
            <Text style={styles.customText}>Logged in user 1 and user 2</Text>
          </View>
        </TouchableOpacity> */}

        {/*<Text>Messages List Screen</Text>
        <Button title="Chat" onPress={() => navigation.navigate('Chat')} />*/}
      </View>
    );
  }
}

MessagesListScreen.propTypes = {
  navigation: PropTypes.shape(),
  chats: PropTypes.arrayOf(PropTypes.shape({})),
  loadUserChatsLoading: PropTypes.bool
  
};

const mapStateToProps = (state) => ({
  currentUser: state.auth.user,
  errors: state.errors,
  chats: state.chat.chats,
  getSearchedServicesLoading: state.chat.loadUserChatsLoading
});

export default connect(mapStateToProps)(MessagesListScreen);
