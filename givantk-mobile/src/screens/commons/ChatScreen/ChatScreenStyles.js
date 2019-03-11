import { StyleSheet } from 'react-native';

import { colors } from '../../../assets/styles/base';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.white,
    marginTop: 24,
    justifyContent: 'space-between',
    height: '100%',
  },
  scrollView: {
    marginBottom: 50,
  },
});

export default styles;
