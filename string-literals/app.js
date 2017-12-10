let obj = {
    name: 'john doe',
    greet: function () {
        console.log( `hello: ${this.name}` )
    }
};

obj.greet();

// changes where 'this' points to
obj.greet.call( { name: 'test1' } );
obj.greet.apply( { name: 'test2' } );
