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
    marginVertical: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: colors.secondary,
    marginRight: 10,
  },
  userName: {
    fontFamily: fontTypes.main,
    fontSize: 20,
    color: colors.black,
    marginTop: 5,
  },
});

export default styles;
