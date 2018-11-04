import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default class NotificationScreen extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>Notifications screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
