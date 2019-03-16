import { StyleSheet } from 'react-native';

import { colors, dimensions, fontTypes } from '../../../../assets/styles/base';

const styles = StyleSheet.create({
  serviceCard: {
    borderWidth: 3,
    borderRadius: 10,
    alignSelf: 'center',
    borderColor: colors.primary,
    width: dimensions.fullWidth * 0.88,
    minHeight: 220,
    maxHeight: 250,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: colors.tertiary,
    paddingVertical: 10,
    marginVertical: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
  },
  userImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: colors.secondary,
  },
  headerRight: {
    flexDirection: 'column',
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  userName: {
    color: colors.black,
  },
  serviceTitle: {
    color: colors.primary,
  },
  content: {
    backgroundColor: colors.white,
    minHeight: '30%',
    padding: 5,
    width: '98%',
    alignSelf: 'center',
    alignItems: 'center',
  },
  descriptionText: {
    color: colors.black,
    padding: 10,
    fontFamily: fontTypes.main,
  },
  footer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cost: { color: colors.primary },
  footerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  favoriteIcon: {
    fontSize: 35,
    color: colors.primary,
  },
  points: {
    marginLeft: 10,
    color: colors.primary,
  },
});

export default styles;
