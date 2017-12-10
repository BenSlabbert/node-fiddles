'use strict';

class Person {
    constructor( firstname, lastname ) {
        this.firstname = firstname;
        this.lastname = lastname;
    }

    greet() {
        console.log( `hello ${this.firstname} ${this.lastname}` );
    }
}

let john = new Person( 'john', 'doe' );
john.greet.call( {
    firstname: 'ola',
    lastname: 'last'
} );
