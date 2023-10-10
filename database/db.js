const mongoose = require('mongoose');

const connectdb=()=>{
  mongoose.connect('mongodb://127.0.0.1:27017/class6')
  .then(function(){ console.log('Connected!')})
  .catch(function(){console.log('failed')});
}
module.exports=connectdb;