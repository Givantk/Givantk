import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';

import { colors } from '../../../assets/styles/base';

const ChatMessage = ({ customMsg, name, children }) => {
  const styles = StyleSheet.create({
    message: {
      color: colors.black,
      fontSize: 16,
    },
    name: {
      color: colors.primary,
      fontSize: 16,
      fontWeight: 'bold',
    },
    container: {
      alignSelf: customMsg.msgDir,
      padding: 10,
      marginTop: 5,
      marginBottom: 5,
      marginLeft: 15,
      marginRight: 15,
      borderWidth: 2,
      borderRadius: 10,
      backgroundColor: customMsg.msgColor,
      borderColor: customMsg.msgColor,
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.message}>{children}</Text>
    </View>
  );
};

ChatMessage.propTypes = {
  customMsg: PropTypes.shape({}),
  name: PropTypes.string,
  children: PropTypes.string,
};

export default ChatMessage;
