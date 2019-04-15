import { connect } from 'react-redux';
import { View, ScrollView, KeyboardAvoidingView } from 'react-native';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import io from 'socket.io-client';

import { colors } from '../../../assets/styles/base';
import { serverPath } from '../../../assets/utils/httpService';
import * as ProfileActions from '../../../store/actions/profileActions';
import ChatMessage from '../../../components/commons/ChatComponents/chatMessage';
import ChatInputItem from '../../../components/commons/ChatComponents/chatInputItem';

import styles from './ChatScreenStyles';

class ChatScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Chat Messages',
    headerStyle: {
      backgroundColor: colors.primary,
    },
    headerTitleStyle: {
      color: colors.white,
    },
  });

  constructor(props) {
    super(props);

    const {serviceId, user:proposalMaker}=props.navigation.state.params;

    this.state = {
      user1: {
        id: this.props.currentUser._id,
        name: this.props.currentUser.first_name+' '+this.props.currentUser.last_name,
      },
      user2: {
        id: proposalMaker._id,
        name: proposalMaker.first_name+' '+proposalMaker.last_name,
      },
      serviceId,
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
      service:this.state.serviceId
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
    const chatHistory = this.state.chatHistory.map((msg, i) => {
      let customMsg = {
        msgDir: '',
        msgColor: ''
      };
      if(msg.username == this.state.user1.name) {
        customMsg.msgDir = 'flex-end';
        customMsg.msgColor = '#7BE16B'
      }
      else {
        customMsg.msgDir = 'flex-start';
        customMsg.msgColor = '#BBC5BB'
      }

      return (
        <ChatMessage key={i} name={msg.username} customMsg={customMsg}>
          {msg.content}
        </ChatMessage>
      );
    });
    const chatMessages = this.state.chatMessages.map((msg, i) => {
      let customMsg = {
        msgDir: 'flex-end',
        msgColor: '#7BE16B'
      }; 
      return (
        <ChatMessage key={i} name={this.state.user1.name} customMsg={customMsg}>
          {msg}
        </ChatMessage>
      );
    });
    console.log(this.state.chatMessages);
    return (

      <View style={styles.wrapper}>
        
        <ScrollView ref={ref => this.scrollView = ref}
          onContentSizeChange={(contentWidth, contentHeight)=>{        
              this.scrollView.scrollToEnd({animated: true});
          }}
        >
          <View>{chatHistory}</View>
          <View>{chatMessages}</View>
        </ScrollView>

        <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={85}>
          <ChatInputItem
            autoCorrect={false}
            value={this.state.chatMessage}
            onPress={() => this.submitChatMessage()}
            onChangeText={(chatMessage) => {
              this.setState({ chatMessage });
            }}
          />
        </KeyboardAvoidingView>

      </View>
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
