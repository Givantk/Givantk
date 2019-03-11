import { Alert } from 'react-native';

const quickModal = (text, onConfirm, onCancel = () => null) =>
  Alert.alert(
    'Are you sure?',
    text,
    [{ text: 'No', onPress: onCancel }, { text: 'Yes', onPress: onConfirm }],
    { cancelable: false },
  );

export default quickModal;
