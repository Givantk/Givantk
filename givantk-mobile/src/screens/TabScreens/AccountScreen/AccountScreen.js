import React from 'react';
import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native';



export default class AccountScreen extends React.Component {


  render() {
    return (

      <View style={styles.container}>
      <TouchableOpacity onPress={()=>this.props.navigation.navigate('Profile')} >

        <Text>Click to go to profile page</Text>

      </TouchableOpacity>
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
