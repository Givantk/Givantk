import { Toast } from 'native-base';
import { colors } from '../../../../assets/styles/base';

const quickNotification = (notification) =>
  Toast.show({
    text: notification,
    textStyle: {
      color: colors.secondary,
      fontWeight: 'bold',
      textAlign: 'center',
    },
  });

export default quickNotification;
