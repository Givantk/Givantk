import { StyleSheet } from 'react-native';

import { colors } from '../../../assets/styles/base';

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    marginTop: 60,
    fontSize: 30,
    marginBottom: 10,
    color: colors.gray03,
    alignSelf: 'center',
  },
  image: {
    width: 300,
    height: 300,
    marginTop: 15,
    marginBottom: 20,
  },
  text: {
    fontSize: 20,
    color: colors.primary,
    margin: 5,
    textAlign: 'center',
  },
  button: {
    alignSelf: 'center',
  },
});

export default styles;
