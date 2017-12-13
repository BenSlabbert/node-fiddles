let express = require( 'express' );
let app = express();
let port = process.env.PORT || 9001;

app.use( '/assets', express.static( __dirname + '/public' ) );

app.set( 'view engine', 'ejs' );

app.use( '/', function ( req, res, next ) {
    console.log( 'my middleware' );
    next();
} );

app.get( '/', function ( req, res ) {
    res.render( 'index' );
} );

app.get( '/api', function ( req, res ) {
    res.json( {
        msg: 'hello'
    } );
} );

app.get( '/person/:id', function ( req, res ) {
    res.render( 'person', { ID: req.params.id } );
} );

app.listen( port );
