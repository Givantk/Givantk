import { Icon, Card, CardItem } from 'native-base';
import {
  Text,
  View,
  TouchableWithoutFeedback,
  TouchableNativeFeedback,
  Platform,
} from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';

import styles from './CardListStyles';

const CardList = (props) => {
  const { items } = props;
  const TouchableContainer =
    Platform.OS === 'android'
      ? TouchableNativeFeedback
      : TouchableWithoutFeedback;
  return (
    <Card style={styles.cardList}>
      {items.map((item) => (
        <TouchableContainer onPress={item.onPress} key={item.title}>
          <CardItem style={styles.cardListItem}>
            <View style={styles.cardListItemLeft}>
              <Icon
                name={item.iconName}
                type={item.iconType}
                style={styles.cardListItemIcon}
              />
              <Text style={styles.cardListItemText}>{item.title}</Text>
            </View>
            <Icon name="arrow-forward" style={styles.arrowIcon} />
          </CardItem>
        </TouchableContainer>
      ))}
    </Card>
  );
};

CardList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      iconName: PropTypes.string,
      iconType: PropTypes.string,
      onPress: PropTypes.func,
    }),
  ),
};

export default CardList;
