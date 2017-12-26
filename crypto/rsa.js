// from: https://stackoverflow.com/questions/8750780/encrypting-data-with-public-key-in-node-js
// answer from: Jacob McKay

let crypto = require( 'crypto' );
let path = require( 'path' );
let fs = require( 'fs' );

let encryptStringWithRsaPublicKey = function ( toEncrypt, relativeOrAbsolutePathToPublicKey ) {
    let absolutePath = path.resolve( relativeOrAbsolutePathToPublicKey );
    let publicKey = fs.readFileSync( absolutePath, 'utf8' );
    let buffer = new Buffer( toEncrypt );
    return crypto.publicEncrypt( publicKey, buffer );
};

let decryptStringWithRsaPrivateKey = function ( toDecrypt, relativeOrAbsolutePathtoPrivateKey ) {
    let absolutePath = path.resolve( relativeOrAbsolutePathtoPrivateKey );
    let privateKey = fs.readFileSync( absolutePath, 'utf8' );
    let buffer = new Buffer( toDecrypt, 'base64' );
    let decrypted = crypto.privateDecrypt( privateKey, buffer );
    return decrypted.toString( 'utf8' );
};

module.exports = {
    encryptStringWithRsaPublicKey,
    decryptStringWithRsaPrivateKey
};
