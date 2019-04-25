import React from 'react';

import { View, StyleSheet, TextInput, TouchableHighlight } from 'react-native';
import { Icon } from 'native-base';
import { colors } from '../../../assets/styles/base';

const ChatInputItem = (props) => (
  <View style={styles.inputBar}>
    <TextInput
      style={styles.textBox}
      multiline
      defaultHight={30}
      placeholder="Type a message..."
      autoCorrect={props.autoCorrect}
      value={props.value}
      onChangeText={props.onChangeText}
    />
    <TouchableHighlight onPress={props.onPress}>
      <Icon
        type="MaterialIcons"
        style={styles.sendIcon}
        name="send"
        size={30}
      />
    </TouchableHighlight>
  </View>
);

const styles = StyleSheet.create({
  inputBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    paddingVertical: 10,
    backgroundColor: colors.white,
  },
  textBox: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.primaryLight,
    fontSize: 14,
    paddingHorizontal: 10,
    flex: 1,
    paddingVertical: 10,
    marginLeft: 5,
    backgroundColor: colors.white,
  },
  sendIcon: {
    marginTop: 14,
    marginLeft: 7,
    marginRight: 7,
    color: colors.primaryLight,
  },
});

export default ChatInputItem;
