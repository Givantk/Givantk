import { KeyboardAvoidingView, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';

const AvoidKeyboard = (props) => {
  const { children, bottomPadding } = props;
  return (
    <KeyboardAvoidingView
      behavior="padding"
      keyboardVerticalOffset={bottomPadding}
    >
      <ScrollView showsVerticalScrollIndicator={false}>{children}</ScrollView>
    </KeyboardAvoidingView>
  );
};

AvoidKeyboard.defaultProps = {
  bottomPadding: 100,
};

AvoidKeyboard.propTypes = {
  children: PropTypes.node.isRequired,
  bottomPadding: PropTypes.number,
};

export default AvoidKeyboard;
