const { Author } = require('../models/authors.model');

module.exports.newAuthor = (req, res) => {
    Author.create( req.body, { runValidators: true })
        .then(Author => res.json(Author))
        .catch(err => res.json({ message: 'failed to create as new Author', err }));
}

module.exports.getAllAuthors = (req, res) => {
    Author.find({})
        .then(Authors => res.json({ results: Authors }))
        .catch(err => res.json({ message: 'failed to get all the Authors', err }));
}

module.exports.getOneAuthor = (req, res) => {
    Author.findOne({ _id: req.params._id })
        .then(Author => res.json(Author))
        .catch(err => res.json({ message: 'failed to get the Author', err }));
}

module.exports.editAuthor = (req, res) => {
    // const { title, price, desc } = req.body;
    Author.updateOne({ _id: req.params._id }, req.body, { runValidators: true })
        .then(Author => res.json({ results: Author }))
        .catch(err => res.json({ message: 'failed to edit the Author', err }));
}

module.exports.deleteAuthorByID = (req, res) => {
    Author.deleteOne({ _id: req.params._id })
        .then(Authors => res.json(Authors))
        .catch(err => res.json({ message: 'failed to delete the Author', err }));
}

module.exports.deleteAuthorByName = (req, res) => {
    Author.deleteMany({ title: req.params.title })
        .then(Authors => res.json({ results: Authors }))
        .catch(err => res.json({ message: 'failed to delete the Authors', err }));
}