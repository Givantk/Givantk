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
    marginLeft: '2%',
  },
  tabBarIcon: { fontSize: 35 },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  inputContainer: {
    width: '60%',
    margin: 10,
    height: 50,
    justifyContent: 'center',
  },
  input: {
    borderColor: colors.primary,
    backgroundColor: colors.trueWhite,
  },
  categorySelectionInputContainer: {
    backgroundColor: colors.trueWhite,
    borderRadius: 5,
    borderColor: colors.primary,
    borderWidth: 1,
    width: '50%',
    margin: 10,
    height: 30,
    justifyContent: 'center',
  },
  categoryInput: {
    color: colors.gray01,
  },
  textarea: {
    backgroundColor: colors.trueWhite,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.primary,
    height: 170,
    marginTop: 10,
    marginBottom: 20,
    padding: 10,
  },
  budgetInputContainer: {
    width: '20%',
  },
  addButton: {
    width: 100,
    justifyContent: 'center',
    borderRadius: 20,
    backgroundColor: colors.secondary,
  },
  addButtonText: {
    color: colors.trueWhite,
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default styles;
