import { View, Text, Button } from 'react-native';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { colors } from '../../../assets/styles/base';
import styles from './SearchResultsScreenStyles';

export default class SearchResultsScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Search Results Screen',
    headerStyle: {
      backgroundColor: colors.primary,
    },
    headerTitleStyle: {
      color: colors.white,
    },
  });

  render() {
    return (
      <View style={styles.wrapper}>
        <Text>Search Results Screen</Text>
        <Button
          title="Service"
          onPress={() => this.props.navigation.navigate('Service')}
        />

        <Button
          title="Person"
          onPress={() => this.props.navigation.navigate('Profile')}
        />
      </View>
    );
  }
}

SearchResultsScreen.propTypes = {};
