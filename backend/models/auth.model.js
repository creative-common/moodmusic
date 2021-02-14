/// AuthModel  Class ////
/*****************************************************
 * To update the user auth credentials in the 
 * database for maintaining sessions on the frontend side
 *****************************************************/

const Database = require('../services/database.service')

module.exports = class AuthClass{
    constructor(){
        this.db = new Database()
    }

    createUser(Name, Email, Access_Token, Refresh_Token){
        var query = `INSERT into users (Name, Email, Access_Token, Refresh_Token) VALUES (?, ?, ?, ?)`
        var params = [Name, Email, Access_Token, Refresh_Token]

        return new Promise( (resolve, reject) => {
            this.db.run(query, params).then( (data) => {
                resolve(data);
            },  (err) => {
                reject(err)
            })
        })
    }

    updateTokens(Access_Token, Refresh_Token, Email){
        var query = `UPDATE users SET Access_Token = ?, Refresh_Token = ? WHERE Email = ?`
        var params = [Access_Token, Refresh_Token, Email]
         return new Promise( (resolve, reject) => {
             this.db.run(query, params).then( (data) => {
                 resolve(data)
             },  (err) => {
                 reject(err)
             })
         })
    }

    getUserById(User_Id){
        var query = `SELECT * from users WHERE User_Id = ?`
        params = [User_Id]
        return new Promise( (resolve, reject) => {
            this.db.run(query, params).then( (data) => {
                resolve(data)
            },  (err) => {
                reject(err)
            })
        })
    }


}