import { StyleSheet } from 'react-native';

import {
  colors,
  fontTypes,
  fontSizes,
  gaps,
} from '../../../../assets/styles/base';

const styles = StyleSheet.create({
  proposalsHeadingContainer: {
    marginHorizontal: 30,
    marginVertical: 10,
  },
  proposalsHeadingText: {
    fontFamily: fontTypes.mainBold,
    fontSize: fontSizes.md,
  },
  proposalsContainer: {
    marginHorizontal: 30,
    marginVertical: 20,
    padding: 5,
    borderWidth: 2,
    borderColor: colors.gray01,
    borderRadius: 10,
  },
  proposalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  helperIdentityContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  proposalUserImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: colors.secondary,
  },
  proposalUserNameContainer: {
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  proposalUserName: {
    color: colors.black,
    fontSize: fontSizes.sm,
    fontWeight: 'bold',
  },
  proposalDate: {
    marginTop: gaps.xsm,
    color: colors.primary,
  },
  proposalTextContainer: {
    marginVertical: 20,
    marginHorizontal: 10,
  },
  proposalText: {
    fontSize: fontSizes.msm,
    fontFamily: fontTypes.main,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  sendMessageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
  sendMessageText: {
    color: colors.primary,
    fontSize: 14,
    fontFamily: fontTypes.mainBold,
  },
  sendMessageIcon: {
    color: colors.primary,
    fontSize: 25,
    marginLeft: 10,
  },
});

export default styles;
