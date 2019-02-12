import { StyleSheet } from 'react-native';

import { colors, fontTypes } from '../../../assets/styles/base';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    paddingTop: 10,
  },
  upperRow: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
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
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: colors.secondary,
    marginRight: 10,
  },
  userName: {
    fontFamily: fontTypes.main,
    fontSize: 16,
    color: colors.black,
    marginTop: 5,
  },
});

export default styles;
