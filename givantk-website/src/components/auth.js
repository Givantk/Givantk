import { bake_cookie,read_cookie,delete_cookie} from 'sfcookies'
class auth {
  
    // login turns the user to be authenticated by setting cookie into true
    //(here we should connect to the back end ) , then a callback function will be called 
    //after that

    login = (cb,email,password) => {
        bake_cookie("LoggedIn",true)
        console.log(email)
        console.log(password)
        cb()
    }

    //logout turns isAuthenticated into false again then a callback function will be called after tgat

    logOut = (cb) => {
        delete_cookie("LoggedIn")
        cb()
    }

    //A function that returns the value of isAuthenticated

    isAuthenticated = () => {

        return read_cookie("LoggedIn");
    }
}
export default new auth();