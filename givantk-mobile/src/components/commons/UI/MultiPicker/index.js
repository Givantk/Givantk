import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';
import MultiSelect from 'react-native-multiple-select';

import { colors, fontTypes } from '../../../../assets/styles/base';

// Hint: In order to change its alignment, you can just give it: style={{alignSelf: ''}} => flex-start, flex-end, center

class MultiPicker extends React.Component {
  state = {
    choices: [],
  };

  render() {
    const {
      onChange,
      style,
      name,
      error,
      errorText,
      options,
      initiallySelectedItems,
      title,
      submitButtonText,
      searchPlaceholderText,
    } = this.props;

    const { choices } = this.state;
    return (
      <View style={[{ width: '80%', alignSelf: 'center' }, style]}>
        <MultiSelect
          hideTags
          items={options}
          uniqueKey="value"
          displayKey="label"
          onSelectedItemsChange={(selectedItems) => {
            this.setState({ choices: selectedItems });
            onChange(name, selectedItems);
          }}
          selectedItems={
            choices.length === 0 ? initiallySelectedItems : choices
          }
          selectText={title}
          searchInputPlaceholderText={searchPlaceholderText}
          altFontFamily={fontTypes.main}
          tagRemoveIconColor="#CCC"
          tagBorderColor="#CCC"
          tagTextColor="#CCC"
          selectedItemTextColor="#CCC"
          selectedItemIconColor="#CCC"
          itemTextColor="#000"
          submitButtonColor={colors.primaryLight.toString()}
          submitButtonText={submitButtonText}
        />
        {error && errorText && (
          <Text style={{ color: colors.error }}>{errorText}</Text>
        )}
      </View>
    );
  }
}

MultiPicker.defaultProps = {
  onChange: () => null,
  options: [],
  title: 'Select items',
  submitButtonText: 'Save',
  searchPlaceholderText: 'Search...',
};

MultiPicker.propTypes = {
  onChange: PropTypes.func,
  style: PropTypes.shape({}),
  error: PropTypes.bool,
  errorText: PropTypes.string,
  name: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.shape({})),
  initiallySelectedItems: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string,
  submitButtonText: PropTypes.string,
  searchPlaceholderText: PropTypes.string,
};

export default MultiPicker;
