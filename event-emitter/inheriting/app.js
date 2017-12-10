let EventEmitter = require( 'events' );
const util = require( 'util' );

function Greeter() {
    this.greeting = 'Hello world!';
}

function Custom() {
    this.data = "done";
}

util.inherits( Custom, EventEmitter );
util.inherits( Greeter, EventEmitter );

Custom.prototype.method = function ( data ) {
    console.log( 'hello' );
    this.emit( 'method', data );
};

Greeter.prototype.greet = function ( data ) {
    console.log( this.greeting + ': ' + data );
    this.emit( 'greet', data );
};

let greeter1 = new Greeter();
let cust = new Custom();

cust.on( 'method', function ( data ) {
    console.log( `called method method...${data}` );
} );


cust.method( 'ola' );

greeter1.on( 'greet', function ( data ) {
    console.log( 'A greeting: ' + data );
} );

greeter1.greet( 'Ben' );
