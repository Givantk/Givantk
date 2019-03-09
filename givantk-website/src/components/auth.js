import { bake_cookie, read_cookie, delete_cookie } from 'sfcookies';
import axios from 'axios';

class auth {
  // login turns the user to be authenticated by setting cookie into true
  //(here we should connect to the back end ) , then a callback function will be called
  //after that

  login = (cb, email, password) => {
    let errorToBeSent = null;
    axios
      .post('http://localhost:5000/api/admin/login', {
        email,
        password,
      })
      .then(function(response) {
        const { token, success } = response.data;
        if (!success)
          cb('Something wrong happened while signing in,please try again');
        else {
          bake_cookie('token', token);
          bake_cookie('LoggedIn', true);
        }
      })
      .catch(function(error) {
        const { incorrectinfo } = error.response.data;
        if (incorrectinfo) {
          errorToBeSent = incorrectinfo;
        }
        cb(errorToBeSent);
      });
  };

  //logout turns isAuthenticated into false again then a callback function will be called after tgat

  logOut = (cb) => {
    delete_cookie('LoggedIn');
    delete_cookie('token');
    cb();
  };

  //A function that returns the value of isAuthenticated

  isAuthenticated = () => {
    return read_cookie('LoggedIn');
  };


  getToken=()=>{
    return read_cookie('token');
  }
}
export default new auth();
