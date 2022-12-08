const mongoose = require('mongoose');

mongoose.Promise = global.Promise; // Added to get around the deprecation warning: "Mongoose: promise (mongoose's default promise library) is deprecated"

// Load the schema
const userSchema = require('./user-schema.js');

module.exports = function(mongoDBConnectionString){

    let user; // defined on connection to the new db instance

    return {
        connect: function(){
            return new Promise(function(resolve,reject){
                let db = mongoose.createConnection(mongoDBConnectionString,{ useNewUrlParser: true, useUnifiedTopology: true });
                
                db.on('error', (err)=>{
                    reject(err);
                });
        
                db.once('open', ()=>{
                    user = db.model("User", userSchema);
                    resolve();
                });
            });
        },

        
        addNewUser: function(data){
            return new Promise((resolve,reject)=>{
                let newuser = new user(data);
                newuser.save((err) => {
                    if(err) {
                        reject(err);
                    } else {
                        resolve(`new user: ${newuser._id} successfully added`);
                    }
                });
            });
        },
        
        getUser: function(Id){
            return new Promise((resolve,reject)=>{
                user.findOne({id: Id}).exec().then(user=>{
                    resolve(user)
                }).catch(err=>{
                    reject(err);
                });
            });
        },

        updateUser: function(data, Id){
            return new Promise((resolve,reject)=>{
                user.updateOne({id: Id}, {
                    $set: data
                }).exec().then(()=>{
                    resolve(`user ${Id} successfully updated`)
                }).catch(err=>{
                    reject(err);
                });
            });
        }
    }
}