import { Alert } from 'react-native';

const quickModal = (text, onConfirm, onCancel = () => null) =>
  Alert.alert(
    'هل أنت متأكد؟',
    text,
    [{ text: 'لا', onPress: onCancel }, { text: 'نعم', onPress: onConfirm }],
    { cancelable: false },
  );

export default quickModal;
