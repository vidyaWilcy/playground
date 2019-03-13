var mysql = require('mysql');
var argv=require('yargs').argv;

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "P@ssw0rd",
  database: "mydb"
});

var jsondata={name:argv.name,address:argv.address}
var data=JSON.stringify(jsondata)

//if(argv.command='insert'){
//var sql =("INSERT INTO customer1 (name,address) VALUES('"+argv.name+"','"+argv.address+"')");
//con.query(sql, function (err, result){
//if (err)throw err;
//});

var sql ="UPDATE customer1 SET address='"+argv.address+"' WHERE address='"+argv.address+"'";
con.query(sql, function (err, result) {
  if (err);
});

//function DELETE(name,address)
//}else if(argv.command='DELETE'){
 //var sql="delete from customer1 WHERE address='"+argv.address+"'";
//con.query(sql, function (err, result){
  //if (err)throw err;
  //DELETE(name,address)

  //console.log('data deleted');
  console.log('data updated');
  //console.log('data inserted');
  //console.log(argv.address);
  //console.log(argv.name);



