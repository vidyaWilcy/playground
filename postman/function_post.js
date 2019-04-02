var http = require('http');
var mysql = require('mysql');

var con = mysql.createConnection({
    localhost: "host",
    user: "root",
    password: "P@ssw0rd",
    database: "mydb"
});

con.connect(function (err) {
    if (err) throw err;
    console.log('connected');

});

function insert(name, address) {
    var sql = "insert into customer1 (name,address) Values('" + name + "','" + address + "')";
    con.query(sql, function (err) {
        if (err) throw err;
        return name,address;
    });
}

function Delete(address) {
    var sql = "delete from customer1 where address='" + address + "'";
    con.query(sql, function (err) {
        if (err) throw err;
        return address;
    });
}

function update(address, name) {
    var sql = "update customer1 set address='" + address + "' where name='" + name + "'";
    con.query(sql, function (err) {
        if (err) throw err;
        return address,name;
    });
}

var server = http.createServer(function (req, res) {

    if (req.url == '/insert') {
        req.on("data", function (data) {
            data = JSON.parse(data);
            console.log(data);
            insert(data.name, data.address);
            
        });
    }
    else if (req.url == '/delete') {
        req.on("data", function (data) {
            data = JSON.parse(data);
            console.log(data);
            Delete(data.address)

            
        });
    }

    else if (req.url == '/update') {
        req.on("data", function (data) {
            data = JSON.parse(data);
            console.log(data);
            update(data.address, data.name);
           
        });
    }
});

server.listen(8080);
console.log('listening');