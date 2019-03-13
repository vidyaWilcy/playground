var argv=require('yargs').argv;
var mysql=require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "P@ssw0rd",
    database: "mydb"
    });

    if(argv.command='insert'){

      insert(argv.name,argv.address);
      } 
      
      function insert(name,address){
      var sql ="INSERT INTO customer1 (name, address) VALUES('"+argv.name+"','"+argv.address+"')";
      //var sql ="UPDATE customer1 SET address ='"+address+"'WHERE name='"+name+"'";
      //var sql ="delete from customer1 WHERE address='"+argv.address+"'";
      con.query(sql,function(err,result){
      if(err) throw err;
      console.log("data inserted");
      });
      }

// function string(param,callback){
//     console.log(param+"in callback")
//     return callback;
//   }
//    function sentence(param){
//    console.log(param+"in sequence")

//    return param;
//   }
//   string('the book',sentence)
//   console.log(sentence('the book'));