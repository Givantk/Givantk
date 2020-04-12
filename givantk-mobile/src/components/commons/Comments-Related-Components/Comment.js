import React, { Component } from 'react';

import { View, Text, Image, TouchableOpacity, } from 'react-native';

import PropTypes from 'prop-types';

import commentStyling from './CommentStyling';

import Reply from './Reply';

export default class Comment extends Component {
  state = {
    liked: false,
  };

  componentWillMount = () => {
    const { displayLike } = this.props;
    this.setState({
      liked: displayLike,
    });
  };

  onPressReply = () => {};

  onPressLike = () => {
    this.setState({
      liked: !this.state.liked,
    });
  };

  renderReplies = (replies) => {
    return replies.map((reply, index) => (
      <View key={index}>
        <Reply reply={reply} />
      </View>
    ));
  };

  render() {
    const { commentData,serviceAskerid } = this.props;
    const { content,user, replies,} = commentData;
    const { liked } = this.state;

    return (
      <View>
        <View style={commentStyling.mainWrapper}>
          <Image style={commentStyling.image} source={{ uri:serviceAskerid===user._id?'https://i.imgur.com/2FXmVPb.jpg':user.avatar }} />
          <View style={commentStyling.wrapper}>
            <Text style={commentStyling.commentOwner}>{serviceAskerid===user._id?'Anonymous':user.first_name}</Text>
            <Text style={commentStyling.content}>{content}</Text>
          </View>
        </View>
        <View style={commentStyling.commentFooter}>
          {/* <Text style={commentStyling.footerElement}>{date}</Text>

          {liked ? (
            <TouchableOpacity onPress={this.onPressLike}>
            <View style={{paddingRight:5,paddingLeft:5}}>
              <Text style={commentStyling.footerElementLiked}>Like</Text>
              </View>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={this.onPressLike}>
            <View style={{paddingRight:4,paddingLeft:4}}>
              <Text style={commentStyling.footerElement}>Like</Text>
              </View>
            </TouchableOpacity>
          )}

          <TouchableOpacity onPress={this.onPress}>
            <Text style={commentStyling.footerElement}>Reply</Text>
          </TouchableOpacity> */}
        </View>
        {replies ? this.renderReplies(replies) : null}

     
      </View>
    );
  }
}

Comment.propTypes = {
  commentData: PropTypes.shape({
    date: PropTypes.string,
    liked: PropTypes.bool,
    replies: PropTypes.arrayOf(
      PropTypes.shape({
        ownerName: PropTypes.string,
        ownerAvatar: PropTypes.string,
        content: PropTypes.string.isRequired,
        date: PropTypes.string,
      })
    ),
  }),
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  displayLike: PropTypes.bool,
};
