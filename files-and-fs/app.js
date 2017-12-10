let fs = require('fs');

let greet  = fs.readFileSync(__dirname + '/greet.txt', 'utf8');
console.log(greet);