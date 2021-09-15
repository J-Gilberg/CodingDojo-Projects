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
        .then(products => res.json({results: products}))
        .catch(err => res.json({message:'failed to get all the products',err}));
}

module.exports.getOneProduct = (req, res) => {
    Product.findOne({_id: req.params._id})
        .then(product => res.json({results: product}))
        .catch(err => res.json({message:'failed to get the product',err}));
}

module.exports.editProduct = (req, res) => {
    // const { title, price, desc } = req.body;
    Product.updateOne({ _id: req.params._id },req.body)
        .then(product => res.json({results: product}))
        .catch(err => res.json({message:'failed to edit the product',err}));
}

module.exports.deleteProductByID =(req, res) => {
    Product.deleteOne({_id: req.params._id})
    .then(products => res.json(products))
    .catch(err => res.json({message:'failed to delete the product',err}));
}

module.exports.deleteProductByName = (req, res) => {
    Product.deleteMany({title: req.params.title})
        .then(products => res.json({results: products}))
        .catch(err => res.json({message:'failed to delete the products',err}));
}