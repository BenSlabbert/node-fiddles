let fs = require( 'fs' );
let zlib = require('zlib');

let readable = fs.createReadStream( __dirname + '/data.txt' );

let compressed = fs.createWriteStream(__dirname + '/compressed.txt.gz');

let gzip = zlib.createGzip();

let writable = fs.createWriteStream( __dirname + '/copy.txt' );

readable.pipe(writable);

readable.pipe(gzip).pipe(compressed);
