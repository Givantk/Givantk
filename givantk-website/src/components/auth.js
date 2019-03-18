import { bake_cookie, read_cookie, delete_cookie } from 'sfcookies';
import axios from 'axios';
import {serverUrl} from '../Assets/Constants';

class auth {
  // login turns the user to be authenticated by setting cookie into true
  //(here we should connect to the back end ) , then a callback function will be called
  //after that

  login = (cb, email, password) => {
    let errorToBeSent = null;
    axios
      .post(`${serverUrl}/api/admin/login`, {
        email,
        password,
      })
      .then(function(response) {
        const { token, success } = response.data;
        if (!success)
          cb('Something wrong happened while signing in,please try again');
        else {
          axios.defaults.headers.common.Authorization = token;
          bake_cookie('token', token);
          bake_cookie('LoggedIn', true);
          cb();
        }
      })
      .catch(function(error) {
        if (error.response) {
          const { incorrectinfo } = error.response.data;
          if (incorrectinfo) {
            errorToBeSent = incorrectinfo;
          }
        } else {
          errorToBeSent = "Sorry, Couldn't Connect to the server";
        }
        cb(errorToBeSent);
      });
  };

  //logout turns isAuthenticated into false again then a callback function will be called after tgat

  logOut = (cb) => {
    delete axios.defaults.headers.common.Authorization;
    delete_cookie('LoggedIn');
    delete_cookie('token');
    cb();
  };

  //A function that returns the value of isAuthenticated

  isAuthenticated = () => {
    return read_cookie('LoggedIn');
  };

  getToken = () => {
    const token = read_cookie('token');
    return token;
  };

  getTokenHeader = () => {
    const token = this.getToken();
    return { headers: { Authorization: token }, crossdomain: true };
  };
}
export default new auth();
