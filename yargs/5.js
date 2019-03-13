var argv=require('yargs').argv;
var fs=require("fs");

var id=argv.ticketid;
var name=argv.ticketname;
var num=argv.ticketnum;

fs.writeFile("5.txt",id,(err)=>{});
fs.appendFile("5.txt",name,(err)=>{});
fs.appendFile("5.txt",num,(err)=>{});