import { StyleSheet } from 'react-native';

import { colors, fontTypes, fontSizes } from '../../../../assets/styles/base';

const styles = StyleSheet.create({
  headerRight: {
    flexDirection: 'column',
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
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
    justifyContent: 'flex-start',
  },
  proposalUserImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: colors.secondary,
  },
  proposalUserName: {
    color: colors.black,
    fontSize: fontSizes.msm,
  },
  proposalTextContainer: {
    marginVertical: 20,
    marginHorizontal: 10,
  },
  proposalText: {
    fontSize: fontSizes.msm,
    fontFamily: fontTypes.main,
  },
});

export default styles;
