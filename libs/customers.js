exports.init=function(bookshelf,cb){
    bookshelf.knex.schema.hasTable('customers').then(function(exists){
        if (!exists){
            bookshelf.knex.schema.createTable('customers', function (customer) {
                customer.string('name');
                console.log('Table created');
            }).then(function () {
                var Customer = bookshelf.Model.extend({
                    tableName: 'customers'
                });
                Customer.forge({name: 'Reid Ransom'}).save().then(function() {
                    console.log('Data saved');
                });
                cb(Customer);
            })


        }else{
            console.log('Table exists');
            var Customer = bookshelf.Model.extend({
                    tableName: 'customers'
            });
            cb(Customer);
        }

    });


}
