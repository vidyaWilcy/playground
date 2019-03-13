var fs = require('fs');

fs.appendFile('append.txt', 'email id-vidyawilcy20@gmail.com', function (err) {
  if (err) throw err;
  console.log('succesfully updated with the text');
});