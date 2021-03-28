var jwt = require('jsonwebtoken');

export function Auth(token){
    const privateKey = 'secretkey';
    try {
        var decoded = jwt.verify(token, privateKey);
        //store the info inside the browser
        localStorage.setItem("auth", JSON.stringify(decoded.data))
        return {
            "isAuthenticated": true,
            "data": decoded.data
        }
      } catch(err) {
            if(err){
               console.log("error")
                return {
                    "isAuthenticated":false,
                    "data": {}
                }
            }
      }
}


//This is just for demonstration not a good approach to check the auth state of the user
//As anyone can add the localStorage variable named as auth to fool this method out.
export function isAuthenticated(){
    if(localStorage.getItem('auth')){
        return true
    }
    return false
}

export function getAuthToken(){
    if(localStorage.getItem('auth')){
        //Parse the string to JSON and return the result
        return JSON.parse(localStorage.getItem('auth'))
    }
    return {}
}