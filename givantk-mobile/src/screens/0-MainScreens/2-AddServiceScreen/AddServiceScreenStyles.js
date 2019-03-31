import { StyleSheet } from 'react-native';

import { colors } from '../../../assets/styles/base';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
  },
  attachementView: {
    marginTop: 10,
    flexDirection: 'row',
    textAlign: 'left',
    justifyContent:'center'
  },
  label: {
    color: 'gray',
    marginTop:10,
  },
  
  topInputsContainer: { marginTop: 10 },
  text: {
    fontWeight: 'bold',
    fontSize: 15,
    marginLeft: 10,
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
  pickerContainer: {
    backgroundColor: colors.trueWhite,
    borderRadius: 5,
    borderColor: colors.primary,
    borderWidth: 1,
    width: '50%',
    margin: 10,
    height: 30,
    justifyContent: 'center',
    flexDirection: 'column',
  },
  picker: {
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
  error: {
    color: colors.red.lighten(0.3),
    marginTop: -16,
    fontSize: 14,
  },
  warningInput: {
    borderColor: colors.red,
    borderWidth: 2,
  },
  submitButton: {
    width: 100,
    justifyContent: 'center',
    borderRadius: 20,
    backgroundColor: colors.secondary,
    marginTop: 10,
  },
  submitButtonText: {
    color: colors.trueWhite,
    fontWeight: 'bold',
    fontSize: 20,
  },
  uploadButton: {
    justifyContent: 'center',
    alignSelf: 'stretch',
    borderRadius: 20,
    backgroundColor: colors.primaryLight,
    marginBottom: 10,
    marginTop: 10,
  },
  uploadButtonText: {
    color: colors.trueWhite,
    fontSize: 15,
  },

  image: {
    marginLeft:9,
    alignSelf: 'center',
    width: 40,
    height: 40,
  },
});

export default styles;
