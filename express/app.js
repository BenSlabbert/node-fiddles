let express = require( 'express' );
let app = express();
let port = process.env.PORT || 9001;

app.use( '/assets', express.static( __dirname + '/public' ) );

app.get( '/', function ( req, res ) {
    res.send( '<html>' +
        '<head>' +
        '<link href="assets/style.css" type="text/css" rel="stylesheet" />' +
        '</head>' +
        '<body>hello</body>' +
        '</html>' );
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
