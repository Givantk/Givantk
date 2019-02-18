import { Text } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';

import styles from './AnnouncementStyle';

const Announcement = ({ text }) => (
  <Text style={styles.root}>
    {text} {'🎈'}
  </Text>
);

Announcement.propTypes = {
  text: PropTypes.string,
};

export default Announcement;
