var {mangoose} = require('./db/mongoose');
var {Todo} = require('./models/todos');
var {User} = require('./models/user');

var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.listen('3000', ()=>{
  console.log('Started on port 3000')
});
app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var todo = new Todo({
      text: req.body.text
    });

    todo.save().then((doc) => {
      res.send(doc);
    }, (err) => {
      res.status(400).send(err);
    });
});

// newTodo.save().then((doc)=>{
//   console.log(`added document ${doc}`);
// }, (err) => {
//   console.log('error');
// });
//
// var otherTodo = new Todo({
//   text : 'second todo',
//   completed : true,
//   completedAt : 1234
// });

 //otherTodo.save().then((doc) => {
//   console.log(`added doc ${doc}`)
// })
