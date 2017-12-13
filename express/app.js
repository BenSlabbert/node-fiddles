let express = require( 'express' );
let app = express();
let port = process.env.PORT || 9001;

app.get( '/', function ( req, res ) {
    res.send( 'hello' );
} );

app.get( '/api', function ( req, res ) {
    res.json( {
        msg: 'hello'
    } );
} );

app.get( '/person/:id', function ( req, res ) {
    res.send( 'person: ' + req.params.id );
} );

app.listen( port );