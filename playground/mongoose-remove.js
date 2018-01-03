const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });
//
// Todo.findOneAndRemove({_id: '5a4ca85950780acfbea7c578'}).then((todo) => {
//   console.log(todo);
// });

Todo.findByIdAndRemove('5a4ca7ec50780acfbea7c536').then((todo) => {
  console.log(todo);
});
