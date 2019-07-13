import axios from 'axios';
import { serverUrl } from '../Assets/Constants';
import auth from '../components/auth';
const tableActions = {
  ActivitiesAskedFor: [],

  banUser: (obj) => {
    console.log(obj);

    axios
      .post('http://localhost:3001/banUser', {
        user_id: obj.id,
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  },

  unbanUser: (id) => {
    axios
      .post('http://localhost:3001/unbanUser', {
        user_id: id,
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  },

  deleteService: (obj) => {
    console.log(obj);
    axios
      .post(
        `${serverUrl}/api/admin/delete-service`,
        {
          service_id: obj.service_id,
        },
        auth.getTokenHeader()
      )
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  setActivitiesAskedfor: (arr) => {
    tableActions.ActivitiesAskedFor = arr;
  },
  getActivitiesAskedFor: () => {
    return tableActions.ActivitiesAskedFor;
  },
};

export default tableActions;
