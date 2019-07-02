import { StyleSheet } from 'react-native';
import { colors } from '../../../assets/styles/base';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 20,
    height: '100%',
  },
  header: {
    fontSize: 25,
    textAlign: 'center',
  },
  personIcon: {
    fontSize: 200,
    textAlign: 'center',
  },
  multiPicker: {
    width: '100%',
    marginBottom: 10,
  },
  saveButtonContainer: {
    alignItems: 'center',
  },
  saveButton: {
    textAlign: 'center',
  },
});

export default styles;
