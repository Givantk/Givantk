import { StyleSheet } from 'react-native';

import { colors } from '../../../assets/styles/base';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  left: {
    alignSelf: 'flex-start',
    marginLeft: 15,
  },
  tabBarIcon: { fontSize: 40 },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  inputContainer: {
    width: '60%',
    margin: 10,
  },
  categorySelectionInputContainer: {
    width: '50%',
  },
  input: {
    borderColor: colors.primary,
    backgroundColor: colors.trueWhite,
  },
});

export default styles;
