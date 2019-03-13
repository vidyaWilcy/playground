var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "P@ssw0rd",
  database: "mydb"
});

console.log('result');
con.connect(function(err){
if (err);
});
console.log("connected");
var sql = "INSERT INTO customers1 (name, address) VALUES ('def', 'Highway9')";
con.query(sql, function(err, result){
  if(err);
});

con.query("SELECT * FROM customers1", function (err, result, fields) {
  if (err);
con.query(sql,function(err){
  if(err);
  console.log(result);
});

var sql = "UPDATE customers1 SET address= 'apple 1' WHERE address ='Ocean blvd 2'";
con.query(sql, function (err, result) {
  if (err);
});

con.query("SELECT * FROM customers1 WHERE address = 'Park Lane 38'", function (err, result) {
  if (err);
  console.log(result);
});

  var sql = "DELETE FROM customers1 WHERE address = 'Highway9'";
  con.query(sql, function (err, result){
  if (err);
  
    console.log("1 row deleted");
    console.log('record(s) updated');
    console.log('1 record inserted');
});
});