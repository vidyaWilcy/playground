var mysql = require('mysql');
var argv = require('yargs').argv;

//var jsondata={name:argv.name,address:argv.address}
//var data=JSON.stringify(jsondata)

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "P@ssw0rd",
    database: "mydb"
    });

con.connect(function(err){
  if(err) throw err;
  console.log('connected');
});

if(argv.command='delete'){

Delete(argv.address);
} 

function Delete(address){
//var sql ="INSERT INTO customer1 (name, address) VALUES('"+name+"','"+address+"')";
//var sql ="UPDATE customer1 SET address ='"+address+"'WHERE name='"+name+"'";
var sql ="delete from customer1 WHERE address='"+address+"'";
con.query(sql,function(err,result){
if(err) throw err;
console.log("deleted");
});
}