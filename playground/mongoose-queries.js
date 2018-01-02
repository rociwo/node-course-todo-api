const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5a4b700b1b7da9211061a5a811';
//
// if (!ObjectID.isValid(id)) {
//   console.log('Id not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos: ',todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   if (!todo) {
//     return console.log('Todo not found');
//   }
//   console.log('Todo: ',todo);
// });
//
// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo by id:', todo);
// }).catch((er) => console.log(er));

User.findById('5a4643e553abac15c48ce582').then((user) => {
  if (!user) {
    return console.log('user Id not found');
  }
  console.log('User by id:', JSON.stringify(user,undefined,2));
}).catch((er) => console.log(er));
