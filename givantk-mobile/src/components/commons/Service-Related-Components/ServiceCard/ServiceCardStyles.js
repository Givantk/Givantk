import { StyleSheet } from 'react-native';
import { colors, dimensions, fontTypes } from '../../../../assets/styles/base';

const styles = StyleSheet.create({
  serviceCard: {
    borderWidth: 3,
    borderRadius: 10,
    borderColor: colors.primary,
    width: dimensions.fullWidth * 0.88,
    height: 220,
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
    borderRadius: 40,
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
    height: '40%',
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
  shareIcon: {
    fontSize: 40,
    color: colors.primary,
  },
  favoriteIcon: {
    fontSize: 30,
    color: colors.primary,
  },
});

export default styles;