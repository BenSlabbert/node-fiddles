let QRCode = require( 'qrcode' );
let JsBarcode = require('jsbarcode');
let Canvas = require("canvas");

let canvas = new Canvas();
JsBarcode(canvas, "1289561");
console.log(canvas.toDataURL("image/png"));

QRCode.toFile( __dirname + 'out.png', '1001502\n1001502\n1001502\n1001502\n1001502', {
    color: {
        dark: '#000',  // Blue dots
        light: '#0000' // Transparent background
    }
}, function ( err ) {
    if ( err ) throw err;
    console.log( 'done' )
} );

QRCode.toDataURL( 'I am a pony!', function ( err, url ) {
    console.log( url )
} );
