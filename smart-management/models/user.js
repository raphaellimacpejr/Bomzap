const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
   
//variaveis do scheema
fullname: String,


Email:String,
   
   
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
const UserModel = mongoose.model('User', userSchema);
//funções do scheema
class User{
   
     /**
   * Create a new User
   * @param {Object} transport - User Document Data
   * @returns {string} - New User Id
   */
  static create(user) {
    return new Promise((resolve, reject) => {
      UserModel.create(user).then((result) => {
        resolve(result._id);
      }).catch((err) => {
        reject(err);
      });
    });
  }
}


module.exports = User;