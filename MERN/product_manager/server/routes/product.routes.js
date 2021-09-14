const ProductController = require('../controllers/product.controller');
module.exports = function(app){
    app.get('/api/products/all', ProductController.getAllProducts);
    app.post('/api/product/new', ProductController.newProduct);
}