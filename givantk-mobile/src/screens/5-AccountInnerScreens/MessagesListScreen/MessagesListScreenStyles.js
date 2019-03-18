import { StyleSheet } from 'react-native';

import { colors } from '../../../assets/styles/base';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    backgroundColor: 'gray',
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    padding: 10,
  },
  customBtn: {
    marginTop: 5,
  },
  customText: {
    color: '#f5f6fa',
    fontSize: 18,
    fontWeight: 'bold'
  },
  customView: {
    backgroundColor: '#74b9ff',
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 10,
    paddingRight: 10,
    borderWidth: 2,
    borderColor: '#008388'
  } 
});

export default styles;
