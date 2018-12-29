import { View, Text, TouchableWithoutFeedback } from 'react-native';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { colors } from '../../../../assets/styles/base';
import styles from './SnakeNavigatorStyles';

export default class SnakeNavigator extends Component {
  state = {
    selectedItem: null,
  };

  componentDidMount() {
    const { content, initialRoute } = this.props;

    this.setState(() => ({
      selectedItem: initialRoute ? initialRoute.name : content[0].name,
    }));
  }

  onSlicePressed = (name) => {
    this.setState(() => ({
      selectedItem: name,
    }));
  };

  render() {
    const { content } = this.props;
    const { selectedItem } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.snake}>
          {content.map((item, i) => (
            <TouchableWithoutFeedback
              key={item.name}
              onPress={() => this.onSlicePressed(item.name)}
            >
              <View
                style={[
                  styles.slice,
                  {
                    backgroundColor:
                      selectedItem === item.name
                        ? colors.primary
                        : colors.white,
                    borderTopLeftRadius: i === 0 ? 20 : 0,
                    borderBottomLeftRadius: i === 0 ? 20 : 0,
                    borderTopRightRadius: i === content.length - 1 ? 20 : 0,
                    borderBottomRightRadius: i === content.length - 1 ? 20 : 0,
                  },
                ]}
              >
                <Text
                  style={[
                    styles.sliceText,
                    {
                      color:
                        selectedItem === item.name
                          ? colors.white
                          : colors.black,
                    },
                  ]}
                >
                  {item.name}
                </Text>
              </View>
            </TouchableWithoutFeedback>
          ))}
        </View>
        {content.map((item) => {
          if (selectedItem === item.name) {
            return (
              <View key={item.name}>
                <item.component />
              </View>
            );
          }
          return null;
        })}
      </View>
    );
  }
}

SnakeNavigator.propTypes = {
  content: PropTypes.instanceOf(Array).isRequired,
  initialRoute: PropTypes.shape({}),
};
