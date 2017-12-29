// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB Server');

  // db.collection('Todos').insertOne({
  //   text: 'Somehing',
  //   complete: false
  // }, (err, result) => {
  //   if (err) {
  //     return  console.log('Unable to insert todo', err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // Insert new doc into Users (name, age, location)
  //
  // db.collection('Users').insertOne({
  //   name: 'Rocio',
  //   age: 36,
  //   location: 'Valencia'
  // }, (err, result) => {
  //   if (err) {
  //     return  console.log('Unable to insert user', err);
  //   }
  //
  //   //console.log(JSON.stringify(result.ops, undefined, 2));
  //   console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
  // });
  //
  db.close();
});
