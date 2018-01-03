const mongoose = require('mongoose');

mongoose.promise = global.Promise;
//mongoose.connect('mongodb://localhost:27017/TodoApp');
//mongoose.connect('mongodb://db_username:s8db0Ois3dDD@ds235827.mlab.com:35827/mongodb-node');
mongoose.connect(process.env.MONGODB_URI);


module.exports = { mongoose };
