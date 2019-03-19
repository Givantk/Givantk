import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ChatMessage = (props) => {
  const styles = StyleSheet.create({
    message: {
      color: '#242824',
      fontSize: 16,
    },
    name: {
      color: '#242824',
      fontSize: 16,
      fontWeight: 'bold',
    },
    container: {
      alignSelf: 'flex-start',
      padding: 10,
      marginTop: 5,
      marginBottom: 5,
      marginLeft: 15,
      marginRight: 15,
      borderWidth: 2,
      borderRadius: 10,
      backgroundColor: '#7BE16B',
      borderColor: '#7BE16B',
      
    }
  });

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{props.name}</Text>
      <Text style={styles.message}>{props.children}</Text>
    </View>
  );
};

export default ChatMessage;
