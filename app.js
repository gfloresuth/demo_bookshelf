var express = require('express');
app = express();

var knex = require('knex')({
  client: 'mysql',
  connection: {
    host     : '127.0.0.1',
    user     : 'root',
    password : 'usbw',
    database : 'test',
    charset  : 'utf8'
  }
});


var bookshelf = require('bookshelf')(knex);
var customers = require('./libs/customers.js');

customers.init(bookshelf,function(customerModel){
    console.log(customerModel);
});


var PORT = 80;
app.use('/',express.static('public'));


app.listen(PORT,function(){
    console.log('Servidor listo.');
});