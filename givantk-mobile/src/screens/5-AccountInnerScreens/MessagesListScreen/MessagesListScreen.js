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

  
  chatNavigatorHandle = (chatID, chatTitle) => {
    const { navigation, currentUser } = this.props;

    // we are going to pass the second user to the chat screen
    /* we don't need to pass the first user (logged in user) because we get him from 
    currentUser.first_name and currentUser._id */

    const users = chatTitle.split(' & '); // spliting user1 and user2 names
    const IDs = chatID.split('+'); // splitiing user1 and user2 IDs
    
    let user2 = {
      id: '',
      name: ''
    }


    if(users[0] != currentUser.first_name+' '+currentUser.last_name){
      user2.name = users[0];
    } else {
      user2.name = users[1];
    }
    
    if(IDs[0] != currentUser._id) {
      user2.id = IDs[0];
    } else {
      user2.id = IDs[1];
    }
  
    navigation.navigate('MessagesChat', { user2: user2 }); // send user2 to MessagesChatScreen
    //console.log(user2);
  };

  render() {
    const chats = this.props.chats.map((chat, i) => (
      <TouchableOpacity
          key={i}
          style={styles.customBtn}
          onPress={() => this.chatNavigatorHandle(chat.socketID, chat.title)}
        >
          <View style={styles.customView}>
            <Text style={styles.customText}>{chat.title}</Text>
          </View>
        </TouchableOpacity>
    ));

    return (
      <View style={styles.wrapper}>
        <Text style={styles.header}>{this.props.currentUser.first_name}'s Messages</Text>
        {chats}
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
  loadUserChatsLoading: state.chat.loadUserChatsLoading
});

export default connect(mapStateToProps)(MessagesListScreen);
