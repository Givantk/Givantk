import { connect } from 'react-redux';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { colors } from '../../../assets/styles/base';
import * as ChatActions from '../../../store/actions/chatActions';
import Loading from '../../../components/commons/UI/Loading/Loading';
import styles from './MessagesListScreenStyles';

class MessagesListScreen extends Component {
  static navigationOptions = () => ({
    headerTitle: 'My Messages ✉️',
    headerStyle: {
      backgroundColor: colors.primary,
    },
    headerTitleStyle: {
      color: colors.white,
    },
  });

  componentDidMount() {
    const { currentUser, loadUserChats } = this.props;
    loadUserChats(currentUser._id);
  }

  chatNavigatorHandle = (chatID, chatTitle, serviceId) => {
    const { navigation, currentUser } = this.props;

    // we are going to pass the second user to the chat screen
    /* we don't need to pass the first user (logged in user) because we get him from 
    currentUser.first_name and currentUser._id */

    const users = chatTitle.split(' & '); // spliting user1 and user2 names
    const IDs = chatID.split('+'); // splitiing user1 and user2 IDs

    const user2 = {
      id: '',
      name: '',
    };

    if (users[0] != `${currentUser.first_name} ${currentUser.last_name}`) {
      user2.name = users[0];
    } else {
      user2.name = users[1];
    }

    if (IDs[0] != currentUser._id) {
      user2.id = IDs[0];
    } else {
      user2.id = IDs[1];
    }

    navigation.navigate('MessagesChat', { user2, serviceId }); // send user2 to MessagesChatScreen
  };

  render() {
    const { chats, loadUserChatsLoading } = this.props;

    chats.sort((chat1, chat2) => {
      
      if(chat1.message.length!==0&&chat2.message.length!==0){
      const lastDateInChat1 = chat1.message[chat1.message.length - 1].date;
      const lastDateInChat2 = chat2.message[chat2.message.length - 1].date;
      const jsDate1 = new Date(lastDateInChat1);
      const jsDate2 = new Date(lastDateInChat2);

      return jsDate2 - jsDate1;}
    });

    const chatsLists = loadUserChatsLoading ? (
      <Loading />
    ) : chats.length === 0 ? (
      <Text style={styles.noMessagesText}>No Messages Yet</Text>
    ) : (
      chats.map((chat, i) => (
        <TouchableOpacity
          key={i}
          style={styles.customBtn}
          onPress={() =>
            this.chatNavigatorHandle(chat.socketID, chat.title, chat.serviceID)
          }
        >
          <View style={styles.customView}>
            <Text style={styles.customText}>{chat.title}</Text>
          </View>
        </TouchableOpacity>
      ))
    );

    return <View style={styles.wrapper}>{chatsLists}</View>;
  }
}

MessagesListScreen.propTypes = {
  navigation: PropTypes.shape(),
  chats: PropTypes.arrayOf(PropTypes.shape({})),
  loadUserChatsLoading: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  currentUser: state.auth.user,
  errors: state.errors,
  chats: state.chat.chats,
  loadUserChatsLoading: state.chat.loadUserChatsLoading,
});

const mapDispatchToProps = {
  loadUserChats: ChatActions.loadUserChats,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MessagesListScreen);
