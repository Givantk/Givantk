import { KeyboardAvoidingView, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';

const AvoidKeyboard = (props) => {
  const {
    children,
    bottomPadding,
    backgroundColor,
    bigHeight,
    persistTaps,
    flex,
  } = props;
  return (
    <KeyboardAvoidingView
      behavior="padding"
      keyboardVerticalOffset={bottomPadding}
      style={flex? backgroundColor ? { backgroundColor,flex:1 } : {flex:1}: backgroundColor ? { backgroundColor} : {}}
    >
      {persistTaps ? (
        <ScrollView
          keyboardShouldPersistTaps='always'
          style={bigHeight && { height: '100%' }}
          contentContainerStyle={bigHeight && { height: '100%' }}
          showsVerticalScrollIndicator={false}
        >
          {children}
        </ScrollView>
      ) : (
          <ScrollView
            style={bigHeight && { height: '100%' }}
            contentContainerStyle={bigHeight && { height: '100%' }}
            showsVerticalScrollIndicator={false}
          >
            {children}
          </ScrollView>
        )}
    </KeyboardAvoidingView>
  );
};

AvoidKeyboard.defaultProps = {
  bottomPadding: 100,
  bigHeight: false,
};

AvoidKeyboard.propTypes = {
  children: PropTypes.node.isRequired,
  bottomPadding: PropTypes.number,
  backgroundColor: PropTypes.string,
  bigHeight: PropTypes.bool,
  persistTaps: PropTypes.bool,
};

export default AvoidKeyboard;
