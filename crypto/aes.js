// from: http://lollyrock.com/articles/nodejs-encryption/

let crypto = require( 'crypto' ),
    algorithm = 'aes-256-cbc';

function encrypt( text, password, iv ) {
    let cipher = crypto.createCipheriv( algorithm, password, iv );
    let encrypted = cipher.update( text, 'utf8', 'hex' );
    encrypted += cipher.final( 'hex' );
    return encrypted;
}

function decrypt( encrypted, password, iv ) {
    let decipher = crypto.createDecipheriv( algorithm, password, iv );
    let dec = decipher.update( encrypted, 'hex', 'utf8' );
    dec += decipher.final( 'utf8' );
    return dec;
}

module.exports = {
    encrypt,
    decrypt
};
