let express = require( 'express' );
let app = express();
let mysql = require( 'mysql' );

let apiController = require( './controllers/apiController' );
let htmlController = require( './controllers/htmlController' );

let port = process.env.PORT || 9001;

app.use( '/assets', express.static( __dirname + '/public' ) );

app.set( 'view engine', 'ejs' );

app.use( '/', function ( req, res, next ) {
    console.log( 'Request Url:' + req.url );

    let con = mysql.createConnection( {
        host: "localhost",
        port: 6033,
        user: "root",
        password: "password",
        database: "addressbook"
    } );

    con.query( 'SELECT People.ID, Firstname, Lastname, Address FROM People ' +
        'INNER JOIN PersonAddress ON People.ID = PersonAddress.PersonID ' +
        'INNER JOIN Addresses ON PersonAddress.AddressID = Addresses.ID',
        function ( err, rows ) {
            if ( err ) throw err;
            console.log( rows );
        }
    );

    next();
} );

htmlController( app );
apiController( app );

app.listen( port );
