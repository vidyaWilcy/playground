var mysql = require('mysql');
var argv = require('yargs').argv;

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "P@ssw0rd",
  database: "mydb"
});

// var promise = Promise.resolve(123);

// promise.then(function(value){
// console.log(value);
// });

// var promise = new Promise(function(resolve, reject){
//     setTimeout(function(err,result){
//     resolve('hello world');
//     }, 2000);
// });    

// promise.then(function(result){
//     console.log(result);
// });

// var promise = new Promise(function(resolve, reject){
   
// con.connect(function(err,result){
// if (err) throw err;
// resolve('connected');
// console.log(result);
// });
// });

// promise.then(function(result){
// console.log(result);
// });

// var promise = new Promise(function(resolve, reject){
//     con.connect(function(err){
//         if(err) throw err;
//         resolve('data inserted');
//         reject('err');
//         });
//     });

// promise.then(function(result){
//     console.log(result);
// var sql ="INSERT INTO customer1 (name, address) VALUES('"+argv.name+"','"+argv.address+"')";
// con.query(sql,function(err,result){
//     if(err) throw err; 
//     console.log(result);
//     });
// });
    
// var promise = new Promise(function(resolve, reject){
//     con.connect(function(err){
//         if(err) throw err;
//         resolve('data deleted');
//        });    
// });

// promise.then(function(result){
// console.log(result);
// var sql="delete from customer1 WHERE address='"+argv.address+"'";
// con.query(sql,function(err,result){
//     if(err) throw err;
// console.log(result);
// });
// });

var promise = new Promise(function(resolve, reject){
    con.connect(function(err){
    if(err) throw err;
    resolve('updated');
   });
});
   
promise.then(function(result){
console.log(result);
var sql = "UPDATE customer1 SET address ='"+argv.address+"'WHERE name='"+argv.name+"'";
con.query(sql,function(err,result){
    if(err) throw err; 
    console.log(result);
});
});