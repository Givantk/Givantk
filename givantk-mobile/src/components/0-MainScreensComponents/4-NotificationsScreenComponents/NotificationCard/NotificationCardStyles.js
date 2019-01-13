import { StyleSheet } from 'react-native';
import { colors, dimensions, fontTypes } from '../../../../assets/styles/base';

const styles = StyleSheet.create({
  container: {
    minHeight: 80,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: colors.gray04,
    borderBottomWidth: 0,
    shadowColor: colors.black,
    shadowOffset: { width: 10, height: 20 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 3,
    marginHorizontal: 5,
    marginTop: 10,
    padding: 8,
    width: dimensions.fullWidth - 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: colors.secondary,
    marginRight: 10,
  },
  text: {
    fontFamily: fontTypes.mainBold,
  },
  textContainer: { width: '80%' },
});

export default styles;
