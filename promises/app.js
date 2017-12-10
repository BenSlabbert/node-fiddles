let promises = [];

promises.push( new Promise( ( resolve, reject ) => {
    resolve( 'hi1' );
} ) );

promises.push( new Promise( ( resolve, reject ) => {
    resolve( 'hi2' );
} ) );

promises.push( new Promise( ( resolve, reject ) => {
    reject( 'hi3' );
} ) );

promises.push( new Promise( ( resolve, reject ) => {
    reject( 'hi4' );
} ) );

Promise.all( promises ).catch( ( error ) => {
    console.log( error )
} ).then( ( result ) => console.log( result ) );
