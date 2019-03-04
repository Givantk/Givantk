import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from 'react-native';

const ChatInputText = (props) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-end',
      marginBottom: 0
    },
    textInput: {
      position: 'absolute',
      bottom: 0,
      width: '100%',
      height: 50,
      borderTopWidth: 2,
      paddingLeft: 20,
      paddingRight: 20,
      backgroundColor: '#dfe6e9',
      borderColor: '#0984e3',
      fontSize: 16
    }
  });

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder='Type a message...'
        autoCorrect={props.autoCorrect}
        value={props.value}
        onSubmitEditing={props.onSubmitEditing}
        onChangeText={props.onChangeText}
      />
    </View>
  );
};

export default ChatInputText;
