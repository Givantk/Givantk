import { StyleSheet } from 'react-native';

import { colors, fontSizes, gaps } from '../../../assets/styles/base';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'stretch',
  },
  noMessagesText: {
    fontWeight: 'bold',
    marginTop: gaps.xl,
    fontSize: fontSizes.lg,
    color: colors.primaryLight,
  },
  customBtn: {
    marginTop: 5,
  },
  customText: {
    color: colors.white,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign:'center'    
  },
  customView: {
    backgroundColor: colors.disclaimer,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 10,
    paddingRight: 10,
    borderWidth: 2,
    borderColor: colors.primary,
  },
});

export default styles;
