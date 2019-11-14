
const products = require('./../controllers/products');

module.exports = function(app){
    app.get('/api/products',products.getAll);
    app.get('/api/products/:id',products.getOne);
    app.post('/api/products',products.create);
    app.put('/api/products/:id',products.update);
    app.delete('/api/products/:id',products.delete);
}