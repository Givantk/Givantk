import { StyleSheet } from 'react-native';

import { colors, fontTypes } from '../../../assets/styles/base';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
  },
  upperRow: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  upperRowText: {
    color: colors.primary,
    fontSize: 20,
    fontFamily: fontTypes.mainBold,
  },
  upperRowRightIcon: {
    color: colors.primary,
    fontSize: 35,
  },
  imageContainer: {
    alignItems: 'center',
    marginVertical: 10,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 2,
    borderColor: colors.secondary,
    marginRight: 10,
  },
  userName: {
    fontFamily: fontTypes.main,
    fontSize: 18,
    color: colors.black,
    marginTop: 5,
  },
  points: {
    color: colors.primary,
    marginTop: 5,
    fontSize: 12,
  },
});

export default styles;
