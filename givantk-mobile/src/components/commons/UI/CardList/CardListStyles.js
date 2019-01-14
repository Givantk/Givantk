import { StyleSheet } from 'react-native';

import { colors, fontTypes } from '../../../../assets/styles/base';

const styles = StyleSheet.create({
  cardList: { width: '100%' },
  cardListItem: { flexDirection: 'row', justifyContent: 'space-between' },
  cardListItemLeft: { flexDirection: 'row', alignItems: 'center' },
  cardListItemIcon: { color: colors.primary, marginRight: 10 },
  cardListItemText: {
    color: colors.primary.darken(0.3),
    fontFamily: fontTypes.main,
  },
  arrowIcon: {
    color: colors.gray04,
  },
});

export default styles;
