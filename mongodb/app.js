let express = require( 'express' );
let app = express();
let mongoose = require( 'mongoose' );

mongoose.connect( 'mongodb://localhost:27017/addressbook' );

let Schema = mongoose.Schema;

let personSchema = new Schema( {
    firstname: String,
    lastname: String,
    address: String
} );

let Person = mongoose.model( 'Person', personSchema );

let john = Person( {
    firstname: "John",
    lastname: 'Doe',
    address: ' 1st Street'
} );

john.save( function ( err ) {
    if ( err ) {
        console.log( err );
    } else {
        console.log( 'it worked!' );
    }
} );

Person.find( {}, function ( err, users ) {
    if ( err ) {
        console.log( err );
    } else {
        console.log( users );
    }
} );
