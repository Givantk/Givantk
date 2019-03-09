import { StyleSheet } from 'react-native';

import { colors } from '../../../assets/styles/base';

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  text: {
    marginTop:60,  
    fontSize: 30,
    marginBottom: 10,
    color: colors.gray03,
    alignSelf:'center'
  },
  image: {
    width: 300,
    height: 300,
    marginTop: 15,
    marginBottom: 20,
  },
  warning: {
    fontSize: 15,
    color: colors.red,
    marginTop: 5,
    alignSelf:'center'
  },
  button:{
    alignSelf:'center'
  }
});

export default styles;
