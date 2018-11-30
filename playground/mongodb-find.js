const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, db) => {
  if (err){
    return console.log('Unable to connect');
  }
  console.log('connected');

  db.collection('ToDoApp').find({text:'mala'}).toArray().then((docs) => {
    console.log('Todos');
    console.log(JSON.stringify(docs, undefined, 2));
  });


  db.collection('ToDoApp').find({text:'mala'}).count().then((count) => {
    console.log(count);
  });
    //db.close();

});
