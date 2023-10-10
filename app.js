const express = require('express')//package define
const conectdb=require('./database/db');

const router=require('./router/user_route');
//database connection
conectdb();
const app = express()//features use

//json format store
app.use(express.json());

//express feature use
app.use(router);
//router
app.get('/', function (req, res) {
  res.send('Hello World')
})


app.get('/header', function (req, res) {
    res.send('Hello header')
  })


  //hosting
app.listen(4000,function(){
    console.log("app is running at 4000port");
})