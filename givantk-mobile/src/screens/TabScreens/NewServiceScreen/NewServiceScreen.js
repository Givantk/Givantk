import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default class NewServiceScreen extends React.Component {



  render() {
    return (
      <View style={styles.container}>
        <Text>New services screen</Text>
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
