import { StyleSheet } from 'react-native';

import { colors, fontTypes } from '../../../assets/styles/base';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    paddingTop: 10,
  },
  sendMessageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  sendMessageText: {
    color: colors.primary,
    fontSize: 20,
    fontFamily: fontTypes.mainBold,
  },
  sendMessageIcon: {
    color: colors.primary,
    fontSize: 35,
    marginLeft: 10,
  },
  imageContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 120,
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
  userDescriptionContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 25,
    marginBottom: 25,
  },
  userDescription: {
    fontFamily: fontTypes.main,
    fontSize: 14,
    color: colors.black,
    textAlign: 'left',
  },
});

export default styles;
