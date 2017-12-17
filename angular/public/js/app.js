angular.module( 'TestApp', [] );

angular.module( 'TestApp' )
    .controller( 'MainController', ctrlFunc );

function ctrlFunc() {

    this.people = clientPeople;
    this.people.push( { name: 'ben' } );
}
