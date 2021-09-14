const { Product } = require('../models/product.model');


module.exports.newProduct = (req, res) => {
    const { title, price, desc } = req.body;
    Product.create({
        title
        , price
        , desc
    })
        .then(product => res.json(product))
        .catch(err => res.json({message:'failed to create as new product',err}));
}


module.exports.getAllProducts = (req, res) => {
    Product.find({})
        .then(product => res.json(product))
        .catch(err => res.json({message:'failed to get all the products',err}));
}