import { Text } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';

import styles from './AnnouncementStyle';

const Announcement = ({ text, style }) => (
  <Text style={[styles.root, style]}>
    {text} {'🎈'}
  </Text>
);

Announcement.propTypes = {
  text: PropTypes.string,
  style: PropTypes.shape({}),
};

export default Announcement;
