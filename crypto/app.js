// string.toString( 'base64' );

let crypto = require( 'crypto' );

let rsa = require( './rsa' );
let aes = require( './aes' );

let encrypted = rsa.encryptStringWithRsaPublicKey( 'hello', './certs/public.pem' );
let decrypted = rsa.decryptStringWithRsaPrivateKey( encrypted, './certs/private.pem' );

const cipher = crypto.createCipher( 'aes-256-cbc', 'a password' );

// 16 bytes
let buf = Buffer.alloc( 16 );
let iv = crypto.randomFillSync( buf );
buf = Buffer.alloc( 32 );
let password = crypto.randomFillSync( buf );

let encrypt = aes.encrypt( 'hello', password, iv );
let decrypt = aes.decrypt( encrypt, password, iv );
