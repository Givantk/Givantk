import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ChatMessage = (props) => {
  const styles = StyleSheet.create({
    message: {
      padding: 10,
      marginTop: 5 ,
      marginBottom: 5 ,
      marginLeft: 15,
      marginRight: 15,
      borderWidth: 2,
      borderRadius: 10,
      backgroundColor: '#273c75',
      borderColor: '#0097e6',
      color: '#f5f6fa',
      fontSize: 16,
      fontWeight: 'bold'
    },
    name: {
      marginLeft: 5,  
      color: '#353b48',
      fontStyle: 'italic',
      fontSize: 18
    }
  });

  return (
    <View>
      <Text style={styles.name}>
        {props.name}
      </Text>
      <Text style={styles.message}>
        {props.children}
      </Text>
    </View>
  );
};

export default ChatMessage;
