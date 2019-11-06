const mongoose = require('mongoose');
const user1Schema = new mongoose.Schema({
    
//variaveis do scheema
fullname8: String,
uid: {
    type: String
},
login8: String,
uid:{
    type: String
},
                                
email8: String,
uid: {
        type: String,
        lowercase: true                              
},
                                       
address8: {
cep: { type: Number
       
     },
street: String, 
},
password: String
                               
                                                                             
       
                                    
}, { timestamps: true, static: false });
const User1Schema = mongoose.model('User1', user1Schema);
//funções do scheema
class User1{
    
     /**
   * Create a new User
   * @param {Object} transport - User Document Data
   * @returns {string} - New User Id
   */
  static create(user) {
    return new Promise((resolve, reject) => {
      User1Schema.create(user).then((result) => {
        resolve(result._id);
      }).catch((err) => {
        reject(err);
      });
    });
  }
}


module.exports = User1;
