'use strict';

let EventEmitter = require( 'events' );
const util = require( 'util' );
let Greeter = require( './greeter' );

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
