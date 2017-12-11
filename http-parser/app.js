let http = require( 'http' );
let fs = require( 'fs' );

http.createServer( function ( req, res ) {

    res.writeHead( 200, {
        'Content-Type': 'text/html'
    } );

    let html = fs.readFileSync( __dirname + '/index.htm', 'utf8' );
    let message = 'sup!';

    html = html.replace( '{message}', message );

    res.end( html );

} ).listen( 9000, '127.0.0.1' );
