let fs = require( 'fs' );

// returns buffer
let readSync = fs.readFileSync(__dirname + '/greet.txt');
console.log(readSync);

// returns string
readSync = fs.readFileSync(__dirname + '/greet.txt', 'utf8');
console.log(readSync);

// async call to read file with a callback
let greetAsync = fs.readFile( __dirname + '/greet.txt', 'utf8', ( err, data ) => {
    console.log( data );
} );

console.log( 'ola' );
