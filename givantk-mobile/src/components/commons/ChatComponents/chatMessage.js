import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';

import { colors, fontSizes, gaps } from '../../../assets/styles/base';

const ChatMessage = ({ customMsg, name, date, children }) => {
  const styles = StyleSheet.create({
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
    name: {
      color: colors.primary,
      fontSize: fontSizes.msm,
      fontWeight: 'bold',
    },
    message: {
      color: colors.black,
      fontSize: 16,
      marginTop: gaps.sm,
      marginBottom: gaps.sm,
    },
    date: {
      fontSize: fontSizes.sm,
      color: colors.gray03,
      textAlign: 'right',
    },
  });

  const jsDate = new Date(date);
  const readableDate = `${jsDate.getDate()}-${jsDate.getMonth() +
    1}-${jsDate.getFullYear()} ${jsDate.getHours()}:${jsDate.getMinutes()}`;

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.message}>{children}</Text>
      <Text style={styles.date}>{readableDate}</Text>
    </View>
  );
};

ChatMessage.propTypes = {
  customMsg: PropTypes.shape({}),
  name: PropTypes.string,
  children: PropTypes.string,
  date: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
};

export default ChatMessage;
