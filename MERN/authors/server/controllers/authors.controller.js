const { Author } = require('../models/authors.model');

module.exports.newAuthor = (req, res) => {
    console.log(req.body);
    Author.create(req.body)
        .then(a => res.json({ results: a }))
        .catch(err => res.json({ message: 'failed', err }));
}

module.exports.getAllAuthors = (req, res) => {
    Author.find({})
        .then(Authors => res.json({ results: Authors }))
        .catch(err => res.json({ message: 'failed', err }));
}

module.exports.getOneAuthor = (req, res) => {
    Author.findOne({ _id: req.params._id })
        .then(Author => res.json({ results: Author }))
        .catch(err => res.json({ message: 'failed', err }));
}

module.exports.editAuthor = (req, res) => {
    Author.updateOne({ _id: req.params._id }, req.body, { runValidators: true })
        .then(Author => res.json({ results: Author }))
        .catch(err => res.json({ message: 'failed', err }));
}

module.exports.deleteAuthorByID = (req, res) => {
    Author.deleteOne({ _id: req.params._id })
        .then(Authors => res.json({ results: Authors }))
        .catch(err => res.json({ message: 'failed', err }));
}