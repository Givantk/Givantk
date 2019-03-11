import { connect } from 'react-redux';
import { View, ScrollView, KeyboardAvoidingView } from 'react-native';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import io from 'socket.io-client';

import { colors } from '../../../assets/styles/base';
import { serverPath } from '../../../assets/utils/httpService';
import * as ProfileActions from '../../../store/actions/profileActions';
import ChatInputText from '../../../components/commons/ChatComponents/chatInputText';
import ChatMessage from '../../../components/commons/ChatComponents/chatMessage';

import styles from './ChatScreenStyles';

class ChatScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Chat Screen',
    headerStyle: {
      backgroundColor: colors.primary,
    },
    headerTitleStyle: {
      color: colors.white,
    },
  });

  constructor(props) {
    super(props);
    this.state = {
      user1: {
        id: this.props.currentUser._id,
        name: this.props.currentUser.first_name,
      },
      user2: {
        id: this.props.profile.user._id || this.props.profile.user,
        name: this.props.profile.first_name,
      },
      chatMessage: '',
      chatMessages: [],
      chatHistory: [],
    };
  }

  componentDidMount() {
    const users_data = {
      id1: this.state.user1.id,
      name1: this.state.user1.name,
      id2: this.state.user2.id,
      name2: this.state.user2.name,
    };
    // local server is replace with serverPath from heroku
    this.socket = io(serverPath, { query: users_data });

    this.socket.on('history', (docs) => {
      this.setState({ chatHistory: docs });
    });

    this.socket.on('chat message', (msg) => {
      this.setState({ chatMessages: [...this.state.chatMessages, msg] });
    });
  }

  submitChatMessage() {
    this.socket.emit(
      'chat message',
      this.state.chatMessage,
      this.state.user1.id,
      this.state.user1.name,
    );
    this.setState({ chatMessage: '' });
  }

  render() {
    const chatHistory = this.state.chatHistory.map((msg, i) => (
      <ChatMessage key={i} name={msg.username}>
        {msg.content}
      </ChatMessage>
    ));
    const chatMessages = this.state.chatMessages.map((msg, i) => (
      <ChatMessage key={i} name={this.state.user1.name}>
        {msg}
      </ChatMessage>
    ));
    return (
      <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={85}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ height: '100%' }}
          contentContainerStyle={{ height: '100%' }}
        >
          <View style={styles.wrapper}>
            <ScrollView style={styles.scrollView}>
              <View>{chatHistory}</View>
              <View>{chatMessages}</View>
            </ScrollView>
            <ChatInputText
              autoCorrect={false}
              value={this.state.chatMessage}
              onSubmitEditing={() => this.submitChatMessage()}
              onChangeText={(chatMessage) => {
                this.setState({ chatMessage });
              }}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

ChatScreen.propTypes = {
  getProfileByUserId: PropTypes.func,
};

const mapStateToProps = (state) => ({
  profile: state.profile.selectedProfile,
  currentUser: state.auth.user,
  currentUserProfile: state.profile.currentUserProfile,
  errors: state.errors,
});

const mapDispatchToProps = {
  getProfileByUserId: ProfileActions.getProfileByUserId,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ChatScreen);
