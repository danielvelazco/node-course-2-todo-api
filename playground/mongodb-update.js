//const MongoClient = require('mongodb').MongoClient; -> es lo mismo que la linea de abajo
const {MongoClient, ObjectId} = require('mongodb'); //-> ES6

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

//findOneAndUpdate

// db.collection('Todos').findOneAndUpdate({
//   _id: new ObjectId('5a89b2fc3de1340f4fa16d86')
// },{
//   $set: {
//     completed: true
//   }
// }, {
//   returnOriginal: false
// }).then((result) => {
//   console.log(result);
// });

db.collection('Users').findOneAndUpdate({
  _id: new ObjectId('5a898d63a883251ee4f5f0ef')
},{
  $set: {
    name: 'Daniel Velazco'
  },
  $inc: {
    age: 1
  }
}, {
  returnOriginal: false
}).then((result) => {
  console.log(result);
});


//db.close();
});
