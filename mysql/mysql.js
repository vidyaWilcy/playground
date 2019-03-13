var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "P@ssw0rd",
});

con.connect(function(err){
  if (err); 
  console.log("Connected");
});