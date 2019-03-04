import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styles from './AnnouncementScreenStyles';



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
      <View style={styles.wrapper}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.content}>{content}</Text>
        <Text style={styles.signature}>Givantk Team</Text>
      </View>
    );
  }
}

AnnouncementScreen.propTypes = {
  navigation: PropTypes.shape({}),
};
