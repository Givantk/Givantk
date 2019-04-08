import React, { Component } from 'react';
import { View, Text, Image, TouchableHighlight } from 'react-native';
import commentStyling from './CommentStyling';
import PropTypes from 'prop-types';

export default class Reply extends Component {
  render() {
    const { reply } = this.props;
    return (
      <View>
        <View style={commentStyling.mainWrapper}>
          <Image
            style={commentStyling.replyImage}
            source={{ uri: reply.ownerAvatar }}
          />
          <View style={commentStyling.wrapper}>
            <Text style={commentStyling.commentOwner}>{reply.ownerName}</Text>
            <Text style={commentStyling.content}>{reply.content}</Text>
          </View>
        </View>
        <View style={commentStyling.replyFooter}>
          <Text style={commentStyling.footerElement}>{reply.date}</Text>

          <TouchableHighlight onPress={this.onPress}>
            <Text style={commentStyling.footerElement}>Like</Text>
          </TouchableHighlight>

          <TouchableHighlight onPress={this.onPress}>
            <Text style={commentStyling.footerElement}>Reply</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

Reply.propTypes = {
  reply: PropTypes.shape({
    ownerName: PropTypes.string.isRequired,
    ownerAvatar: PropTypes.string,
    content: PropTypes.string.isRequired,
    date: PropTypes.string,
    liked: PropTypes.bool,
  }),
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
};
