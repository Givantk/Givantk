import { StyleSheet } from 'react-native';

import { colors, bottomTabHeight } from '../../../assets/styles/base';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.trueWhite,
    alignItems: 'center',
    paddingBottom: bottomTabHeight + 20,
  },
});

export default styles;
