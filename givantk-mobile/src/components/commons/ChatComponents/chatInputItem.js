import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableHighlight
} from 'react-native';

const ChatInputItem = (props) => {
  return (
    <View style={styles.inputBar}>
      <TextInput
        style={styles.textBox}
        multiline
        defaultHight={30}
        placeholder='Type a message...'
        autoCorrect={props.autoCorrect}
        value={props.value}
        onChangeText={props.onChangeText}
      />
      <TouchableHighlight style={styles.sendBtn} onPress={props.onPress}>
        <Text style={styles.sendText}>Send</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  inputBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    paddingVertical: 10,
    backgroundColor: '#dadfea'
  },
  textBox: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#41B6B0',
    fontSize: 14,
    paddingHorizontal: 10,
    flex: 1,
    paddingVertical: 10,
    marginLeft: 5,
    backgroundColor: 'white'
  },
  sendBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    marginLeft: 5,
    backgroundColor: '#41B6B0'
  },
  sendText: {
    color: 'white',
    fontSize: 20,
    fontStyle: 'italic'
  }
});

export default ChatInputItem;
