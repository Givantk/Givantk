import { StyleSheet } from 'react-native';

import {
  colors,
  dimensions,
  fontTypes,
  fontSizes,
} from '../../../assets/styles/base';

const styles = StyleSheet.create({
  wrapper: {
    borderWidth: 3,
    borderRadius: 10,
    alignSelf: 'center',
    borderColor: colors.primary,
    width: dimensions.fullWidth * 0.95,
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
    width: 50,
    height: 50,
    borderRadius: 25,
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
    fontSize: fontSizes.md,
  },
  serviceTitle: {
    color: colors.primary,
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: fontSizes.md,
    marginBottom: 20,
  },
  addProposalButton: {
    width: '40%',
    alignSelf: 'center',
  },
  content: {
    backgroundColor: colors.white,
    width: '98%',
    alignSelf: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  descriptionText: {
    color: colors.black,
    padding: 10,
    fontFamily: fontTypes.main,
  },
  disclaimer: {
    textAlign: 'center',
    fontFamily: fontTypes.main,
    color: colors.disclaimer,
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  cost: { color: colors.primary },
  footerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  favoriteIcon: {
    fontSize: 30,
    color: colors.primary,
  },
  noProposalsDisclaimer: {
    alignSelf: 'center',
    fontFamily: fontTypes.main,
    fontSize: 13,
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
