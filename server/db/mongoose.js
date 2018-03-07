const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// let db = {
//   localhost: 'mongodb://localhost:27017/TodosApp',
//   mlab: 'mongodb://dvelazco:dv030406@ds259768.mlab.com:59768/todosapp'
// };
mongoose.connect( process.env.MONGODB_URI || 'mongodb://localhost:27017/TodosApp');

//mongoose.connect('mongodb://localhost:27017/TodosApp');

module.exports = {mongoose};
