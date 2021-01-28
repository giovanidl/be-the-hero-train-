const BodyParser = require( 'body-parser' );
const Express = require( 'express' );
const App = Express();

// Parse request of content-type - application/x-www-form-urlencoded
App.use( BodyParser.urlencoded( { extended: false } ) );

// Parse request of content-type - application/json
App.use( BodyParser.json() );

App.listen( 3333, () => {
    console.log( "Server Run:" + 3000 );
} );

App.get( '/', function( req, res ) {
    res.json( {
        status: "OK"
    } );
} );

App.get( '/test', function( req, res ) {
    res.json( {
        status: "Hehehe Test"
    } );
} );