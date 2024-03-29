import { StyleSheet } from 'react-native';
import { colors, dimensions, fontTypes } from '../../../../assets/styles/base';

const styles = StyleSheet.create({
  container: {
    minHeight: 80,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: colors.gray04,
    elevation: 2,
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
    marginRight: 20,
  },
  text: {
    fontFamily: fontTypes.mainBold,
  },
  textContainer: { flex: 1 },
});

export default styles;
