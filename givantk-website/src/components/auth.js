class auth {
    //isAuthenticated is false by default

    constructor() {
        this.isAuthenticated = false

    }

    // login turns the user to be authenticated (here we should connect to the back
    // end ) , then a callback function will be called after that

    login = (cb,email,password) => {
        this.isAuthenticated = true
        console.log(email)
        console.log(password)
        cb()
    }

    //logout turns isAuthenticated into false again then a callback function will be called after tgat

    logOut = (cb) => {
        this.isAuthenticated = false
        cb()
    }

    //A function that returns the value of isAuthenticated

    isAuthenticated = () => {

        return this.isAuthenticated;
    }
}
export default new auth();