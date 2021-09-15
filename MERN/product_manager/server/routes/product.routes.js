const ProductController = require('../controllers/product.controller');
module.exports = function(app){

    app.get('/api/products/all', ProductController.getAllProducts);
    app.get('/api/products/:_id', ProductController.getOneProduct);

    app.post('/api/products/new', ProductController.newProduct);
    app.patch('/api/products/:_id/edit', ProductController.editProduct);
    app.delete('/api/products/:_id/delete', ProductController.deleteProductByID);



    // app.delete('/api/products/:title/delete', ProductController.deleteProductByName);
}