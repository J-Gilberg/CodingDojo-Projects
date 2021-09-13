const Jokes = require('../models/jokes.model'); //Jokes is our collection name.

module.exports.findAllJokes = (req, res) => {
    Jokes.find()
        .then(allJokes => res.json({ results: allJokes }))
        .catch(err => res.json({ message: 'could not find all jokes', error: err }));
}

module.exports.findJoke = (req, res) => {
    Jokes.findOne({ _id: req.params._id })
        .then(aJoke => res.json({ results: aJoke }))
        .catch(err => res.json({ message: "could not find that one joke", err }));
}

module.exports.randomJoke = (req, res) => {
    Jokes.findOne({ _id: req.params._id })
        .then(aRandomJoke => res.json({ results: aRandomJoke }))
        .catch(err => res.json({ message: "could not find a random joke", err }));
}

module.exports.createJoke = (req, res) => {
    Jokes.create(req.body)
        .then(cJoke => res.json({ results: cJoke }))
        .catch(err => res.json({ message: "could not create the new joke", err }));
}

module.exports.deleteJoke = (req, res) => {
    Jokes.deleteOne({ _id: req.params._id })
        .then(delJoke => res.json({ results: delJoke }))
        .catch(err => res.json({ message: "could not delete the new joke", err }));
}

module.exports.updateJoke = (req, res) => {
    Jokes.findOneAndUpdate({ _id: req.params._id }
        , req.body,
        { new: true, runValidators: true })
        .then(upJoke => res.json({ results: upJoke }))
        .catch(err => res.json({ message: "could not update the new joke", err }));
}

module.exports.addJokeParam = (req, res) => {
    Jokes.updateOne({ _id: req.params._id },req.body,{ new: true, runValidators: true })
        .then(addParam => res.json({ results: addParam }))
        .catch(err => res.json({ message: "could not add param to the new joke", err }));
}
