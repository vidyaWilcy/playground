var mysql = require('mysql');
var http = require('http');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "P@ssw0rd",
    database: "mydb"
});

con.connect(function (err) {
    if (err) throw err;
    console.log('connected');
});

var server = http.createServer(function (req, res) {
    if (req.url == '/') {
        console.log('/save');
    }

    else if (req.url == '/insert') {
        req.on("data", function (data) {
            data = JSON.parse(data);
            console.log(data);

            var sql = "insert into customer1 (name,address) VALUES('" + data.name + "','" + data.address + "')";
            con.query(sql, function (err) {
                if (err) throw err;
                return data.name, data.address;
            });
        });
    }

    else if (req.url == '/delete') {
        req.on("data", function (data) {
            data = JSON.parse(data);
            console.log(data);

            var sql = "delete from customer1 where address='" + data.address + "'";
            con.query(sql, function (err) {
                if (err) throw err;
                return data.address;
            });
        });
    }

    else if (req.url == '/update') {
        req.on("data", function (data) {
            data = JSON.parse(data);
            console.log(data);

            var sql = "update customer1 set address='" + data.address + "'where name='" + data.name + "'";
            con.query(sql, function (err) {
                if (err) throw err;
                return data.address, data.name;
            });
        });
    }
});

server.listen(8080);
console.log('listening');