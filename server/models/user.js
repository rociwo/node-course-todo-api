const mongoose = require('mongoose');

var User = mongoose.model('Users', {
  email: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  }
  // ,
  // password: {
  //   type: String,
  //   required: true,
  //   minlength: 1,
  //   trim: true
  // }
});
//
// var newUser = new User({
//   email: 'mail2'
// });
//
// newUser.save().then((user) => {
//   console.log("Saved user",JSON.stringify(user,undefined,2));
// }, (err) => {
//   console.log('Unable to save',err);
// });

module.exports = { User };
