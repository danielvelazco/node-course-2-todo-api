//const MongoClient = require('mongodb').MongoClient; -> es lo mismo que la linea de abajo
const {MongoClient, ObjectId} = require('mongodb'); //-> ES6

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert a todo', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  db.collection('Users').insertOne({
    name: 'Daniel Velazco',
    age: 36,
    location: 'Maracaibo'
  }, (err, result) => {
    if (err) {
      return console.log('Unable to insert a user', err);
    }
    console.log(JSON.stringify(result.ops, undefined, 2));
  });

  db.close();
});
