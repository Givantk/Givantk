import { KeyboardAvoidingView, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';

const AvoidKeyboard = (props) => {
  const { children, bottomPadding, backgroundColor } = props;
  return (
    <KeyboardAvoidingView
      behavior="padding"
      keyboardVerticalOffset={bottomPadding}
      style={backgroundColor ? { backgroundColor } : {}}
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
  backgroundColor: PropTypes.string,
};

export default AvoidKeyboard;
