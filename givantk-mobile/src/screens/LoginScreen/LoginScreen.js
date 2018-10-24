import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';


export default class LoginScreen extends React.Component {

    render() {
    return (
      <View style={styles.container}>
        <Text style={{marginBottom:6}}>Hi welcome our dear user</Text>
        <Button title="log in" onPress={()=>this.props.navigation.navigate('TabNavigator')}/>
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
