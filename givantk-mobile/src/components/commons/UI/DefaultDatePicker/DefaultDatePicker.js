import { DatePicker } from 'native-base';
import { View, Text } from 'react-native';
import React from 'react';

import { colors } from '../../../../assets/styles/base';

const DefaultDatePicker = (props) => (
  <View style={props.style}>
    <Text
      style={{ color: props.labelColor || colors.white.fade(0.5).toString() }}
    >
      {props.label}
    </Text>
    <DatePicker
      defaultDate={new Date(2018, 4, 4)}
      minimumDate={new Date(1920, 1, 1)}
      maximumDate={new Date(2010, 12, 31)}
      locale="en"
      timeZoneOffsetInMinutes={undefined}
      modalTransparent
      animationType="fade"
      androidMode="default"
      placeHolderText={props.placeholder || 'Select Date'}
      textStyle={{ color: colors.secondary.toString() }}
      placeHolderTextStyle={{
        color: props.placeholderColor || colors.secondary.toString(),
      }}
      onDateChange={props.onDateChange}
    />
  </View>
);

// expected props:
// label (string)
// labelColor (color)
// onDateChange (function)
// placeholder (string)
// placeholderColor (color)

export default DefaultDatePicker;
