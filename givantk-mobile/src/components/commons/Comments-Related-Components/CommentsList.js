import React, { Component } from 'react';

import {
  FlatList,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
  Text,
} from 'react-native';
import propTypes from 'prop-types';
import { Icon } from 'native-base';
import Comment from './Comment';
import commentListStyling from './commentListStyling';

export default class CommentsList extends Component {
  state = { text: '' };

  addComment = () => {
    const { data, onAddComment, currentUser } = this.props;
    const { text } = this.state;
    const newComment = {
      user: currentUser._id,
      content: text,
    };
    const randomNumber = `${Math.floor(Math.random() * 1000) +
      Math.floor(Math.random() * 1000) +
      10}`;

    data.unshift({
      _id: randomNumber,
      content: newComment.content,
      user: currentUser,
    });
    Keyboard.dismiss();
    this.setState({
      data,
    });

    this.refs.TextInput.clear();

    onAddComment(newComment);
  };

  displayLikeCondition = (commentId) => {
    // const { data, currentUser } = this.props;
    // let comment = data.filter((comment) => comment.id === commentId);
    // //check if liker id equals to current user id
    // let founded = [];
    // if (comment[0]||comment[0].likersIds)
    //   founded = comment[0].likersIds.filter(
    //     (likerId) => likerId === currentUser.id
    //   );
    // if (founded.length) return true;
    // else return false;
  };

  render() {
    const { data, topMargin, serviceAskerid, disableInput } = this.props;

    return (
      <View style={commentListStyling.mainContainer}>
        {
          !disableInput ? <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }} enabled>
            <Text style={{ marginLeft: 8, fontSize: 18, marginBottom: 10 }}>
              Add Comment:
          </Text>

            <View style={commentListStyling.textInputContainer}>
              <TextInput
                ref="TextInput"
                onChangeText={(text) => {
                  this.setState({ text });
                }}
                placeholderTextColor="#C3C5C8"
                style={commentListStyling.textInput}
                multiline
                placeholder="Write a comment.."
              />

              <TouchableOpacity onPress={this.addComment}>
                <Icon
                  type="MaterialIcons"
                  style={commentListStyling.icon}
                  name="send"
                  size={30}
                />
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView> : null}

        {data.length > 0 && <Text style={{ marginLeft: 8, fontSize: 18 }}>Comments:</Text>}

        <FlatList
          keyboardShouldPersistTaps="always"
          style={{ marginTop: topMargin }}
          extraData={this.props}
          data={data}
          keyExtractor={(item) => item._id}
          renderItem={(info) => (
            <Comment
              commentData={info.item}
              displayLike={this.displayLikeCondition(info.item._id)}
              serviceAskerid={serviceAskerid}
            />
          )}
        />
      </View>
    );
  }
}

CommentsList.propTypes = {
  commentData: propTypes.shape({
    date: propTypes.string,
    liked: propTypes.bool,
    replies: propTypes.arrayOf(
      propTypes.shape({
        ownerName: propTypes.string,
        ownerAvatar: propTypes.string,
        content: propTypes.string.isRequired,
        date: propTypes.string,
      }),
    ),
  }),
  onAddComment: propTypes.func,
  currentUser: propTypes.object.isRequired,
};
