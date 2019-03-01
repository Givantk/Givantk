import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import React, { Component } from 'react';


export default class AnnouncementScreen extends Component {
  static navigationOptions = () => ({
    headerTitle: 'Announcement',
  });

  state = {
    title: '',
    content: '',
  }

  componentDidMount() {
    const { navigation } = this.props;
    if (navigation.state.params) {
      const { title, content } = navigation.state.params;

      this.setState(() => ({
        title, content,
      }));
    }
  }

  render() {

    const { title, content } = this.state;

    return (
      <View>
        <Text>{title}</Text>
        <Text>{content}</Text>
      </View>
    );
  }
}

AnnouncementScreen.propTypes = {
  navigation: PropTypes.shape({}),
};
