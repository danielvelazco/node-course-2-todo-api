const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

let db = {
  localhost: 'mongodb://localhost:27017/TodosApp',
  mlab: 'mongodb://ds149268.mlab.com:49268/todosapp'
};
mongoose.connect( db.localhost || db.mlab);

//mongoose.connect('mongodb://localhost:27017/TodosApp');

module.exports = {mongoose};
