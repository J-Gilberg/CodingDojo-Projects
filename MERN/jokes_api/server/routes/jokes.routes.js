const JokesController = require('../controllers/jokes.controller');

module.exports = app => {
    app.get('/api/jokes', JokesController.findAllJokes);
    app.get('/api/jokes/:_id', JokesController.findJoke);
    app.get('/api/jokes/random', JokesController.randomJoke);
    app.post('/api/jokes/new', JokesController.createJoke);
    app.delete('/api/jokes/:_id/delete' ,JokesController.deleteJoke);
    app.patch('/api/jokes/:_id/update' ,JokesController.updateJoke);
    app.put('/api/jokes/:_id/add' ,JokesController.addJokeParam)
    // app.get('/api/users/:id', UserController.findOneSingleUser);
    // app.put('/api/users/:id', UserController.updateExistingUser);
    // app.post('/api/users', UserController.createNewUser);
    // app.delete('/api/users/:id', UserController.deleteAnExistingUser);
}