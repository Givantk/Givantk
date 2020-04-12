import axios from 'axios';
const ActivitiesActions = {
  deleteActivity: (obj) => {
    axios
      .post('http://localhost:3001/deleteActivity', {
        activity_id: obj.activity_id,
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  approveActivity: (obj) => {
    axios
      .post('http://localhost:3001/approveActivity', {
        activity_id: obj.activity_id,
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  messageReplies: (value, obj) => {
    axios
      .post('http://localhost:3001/messageReplies/', {
        MessageId: obj.id,
        replyBody: value,
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  },
};

export default ActivitiesActions;
