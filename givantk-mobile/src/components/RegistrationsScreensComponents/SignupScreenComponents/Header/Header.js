import { Text, View } from 'react-native';
import React from 'react';

import styles from './HeaderStyles';

const Header = () => (
    <View style={styles.headerContainer}>
      <Text style={styles.header}>GIVANTK</Text>
      <Text style={styles.subHeader}>Give and take</Text>
    </View>
  );

export default Header;
