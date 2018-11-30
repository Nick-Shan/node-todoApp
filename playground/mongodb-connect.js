const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, db) => {
  if (err){
    return console.log('Unable to connect');
  }
  console.log('connected');


  db.collection('ToDoApp').insertOne({
    name : 'manick',
    age  : '21'
  }, (err, result) => {
    if(err) {
      console.log('Unable to insert', err);
    }
    console.log(JSON.stringify(result.ops, undefined, 2));
  });
    db.close();

});
