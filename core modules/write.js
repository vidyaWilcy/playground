const fs=require("fs");

fs.writeFile("write.txt", "HELLOOOOOOOOoooo", function (err) {
  if (err) throw err;
console.log("successfully written to file");
})