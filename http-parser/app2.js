let http = require( 'http' );
let fs = require( 'fs' );

http.createServer( function ( req, res ) {

    console.log( req.url );

    if ( req.url === '/' ) {
        fs.createReadStream( __dirname + '/index.htm' ).pipe( res );
    } else if ( req.url === '/api' ) {
        res.writeHead( 200, { 'Content-Type': 'application/json' } );

        let obj = {
            firstname: 'ben',
            lastname: 'slab'
        };

        res.end( JSON.stringify( obj ) );
    } else {
        res.writeHead( 404 );
        res.end();
    }


} ).listen( 9999, '127.0.0.1' );
