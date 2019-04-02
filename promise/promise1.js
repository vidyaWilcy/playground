var mysql = require('mysql');
var argv = require('yargs').argv;

var con = mysql.createConnection({
    host:"localhost",
    user: "root",
    password: "P@ssw0rd",
    database: "mydb"
});

function insert(name,address){ 
    var sql="insert into customer1 (name,address)VALUES('"+argv.name+"','"+argv.address+"');" 
    con.query(sql,function(err,result){
       if(err) throw err;
       console.log(result);
       });
   }

   function Delete(address){
       var sql="delete from customer1 where address='"+argv.address+"'";
       con.query(sql,function(err,result){
           if(err) throw err;
        console.log(result);
        });
   }

   function update(address,name){
    var sql="update customer1 set address='"+argv.address+"' where name='"+argv.name+"';"
     con.query(sql,function(err,result){
        if(err) throw err;
        console.log(result);
        });
    }  
     
var promise = new Promise(function(resolve,reject){
    con.connect(function(err){
        if(err) throw err;
    resolve('data inserted');
    // resolve('data deleted');
    // resolve('data updated');
        });
});

promise.then(function(result){
  console.log(result);
  
  if(argv.command=='insert'){
     insert(argv.name,argv.address);
    }
        else if(argv.command=='delete'){
         Delete(argv.address);
            }

            else if(argv.command=='update'){
             update(argv.address,argv.name);
                }
            });     
            
            