import { KeyboardAvoidingView, ScrollView } from 'react-native'
import PropTypes from 'prop-types'
import React from 'react'
import { colors } from '../../../../assets/styles/base'

const AvoidKeyboard = props => {
  const { children, bottomPadding, bigHeight, persistTaps } = props
  return (
    <KeyboardAvoidingView
      behavior='padding'
      keyboardVerticalOffset={bottomPadding}
      style={{ flex: 1, backgroundColor: colors.white }}>
      {persistTaps ? (
        <ScrollView
          keyboardShouldPersistTaps='always'
          style={bigHeight && { height: '100%' }}
          contentContainerStyle={bigHeight && { height: '100%' }}
          showsVerticalScrollIndicator={false}>
          {children}
        </ScrollView>
      ) : (
        <ScrollView
          style={bigHeight && { height: '100%' }}
          contentContainerStyle={bigHeight && { height: '100%' }}
          showsVerticalScrollIndicator={false}>
          {children}
        </ScrollView>
      )}
    </KeyboardAvoidingView>
  )
}

AvoidKeyboard.defaultProps = {
  bottomPadding: 100,
  bigHeight: false,
}

AvoidKeyboard.propTypes = {
  children: PropTypes.node.isRequired,
  bottomPadding: PropTypes.number,
  bigHeight: PropTypes.bool,
  persistTaps: PropTypes.bool,
}

export default AvoidKeyboard
