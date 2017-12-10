'use strict';

let EventEmitter = require( 'events' );

module.exports = class Greeter extends EventEmitter {
    constructor() {
        super();
        this.greeting = 'Hello world!';
    }

    greet( data ) {
        console.log( `${this.greeting}: ${data}` )
    }
};