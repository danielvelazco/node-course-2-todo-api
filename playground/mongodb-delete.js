//const MongoClient = require('mongodb').MongoClient; -> es lo mismo que la linea de abajo
const {MongoClient, ObjectId} = require('mongodb'); //-> ES6

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

// // deleteMany
// db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
//   console.log(result);
// });

// // deleteOne
// db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
//   console.log(result);
// });

// //findOneAndDelete
// db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
//   console.log(result);
// });

// db.collection('Users').deleteMany({name: 'Andrew'}).then((result) => {
//   console.log(result);
// });

db.collection('Users').findOneAndDelete({_id: ObjectId('5a8990c2f72d2020d3896733')}).then((result) => {
  console.log(result);
});


//db.close();
});
