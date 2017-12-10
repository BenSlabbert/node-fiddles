let fs = require( 'fs' );

let readable = fs.createReadStream( __dirname + '/data.txt', {
    encoding: 'utf8',
    highWaterMark: 16 * 1024
} );

let writeable = fs.createWriteStream( __dirname + '/copy.txt' );

readable.on( 'data', function ( chunk ) {
    console.log( chunk );
    writeable.write( chunk );
} );
