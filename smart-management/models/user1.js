const mongoose = require('mongoose');
const user1Schema = new mongoose.Schema({
    
//variaveis do scheema
fullname: String,
uid: {
    type: String,
    unique: true,
},
username:String,
   
    
password: String,


cellphone: String,


cpf: String,


rg: String,

    
card_number: String,

    
card_name: String,

    
security_code: String,

    
expiration: String,

    
card: String,


plano: String,

                                      
},
    
// Capacitação

                                                                   
 { timestamps: true, static: false });
const User1Model = mongoose.model('User1', user1Schema);
//funções do scheema
class User1{
    
     /**
   * Create a new User
   * @param {Object} transport - User Document Data
   * @returns {string} - New User Id
   */
  static create(user) {
    return new Promise((resolve, reject) => {
      User1Model.create(user).then((result) => {
        resolve(result._id);
      }).catch((err) => {
        reject(err);
      });
    });
  }
}


module.exports = User1;
