'use strict';

let EventEmitter = require( 'events' );
const util = require( 'util' );


class Greeter extends EventEmitter {
    constructor() {
        super();
        this.greeting = 'Hello world!';
    }

    greet( data ) {
        console.log( `${this.greeting}: ${data}` )
    }
}

function Custom() {
    this.data = "done";
}

util.inherits( Custom, EventEmitter );

Custom.prototype.method = function ( data ) {
    console.log( 'hello' );
    this.emit( 'method', data );
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
