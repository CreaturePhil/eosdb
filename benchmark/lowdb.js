var lowdb = require('lowdb');
var fs = require('fs');

suite('lowdb inserts', function() {
  var db;
  var counter = 0;

  before(function() {
    db = lowdb('db.json');  
  });

  bench('basic inserts', function() {
    counter++;
    db('str').push(''+counter);
    db('num').push(''+counter);
  });

  after(function() {
    fs.unlinkSync('db.json'); 
  });

});
