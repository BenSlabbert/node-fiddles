let buffer = new Buffer( 'hello', 'utf8' );

console.log( buffer );
console.log( buffer.toString() );
console.log( buffer.toJSON() );

buffer.write( 'wo' );

console.log( buffer );
console.log( buffer.toString() );

buffer = new ArrayBuffer( 8 );

let view = new Int32Array( buffer );
console.log( view );
view[ 0 ] = 12;
view[ 1 ] = 45;
console.log( view );
