const AuthorController = require('../controllers/authors.controller');
module.exports = function(app){

    app.get('/api/authors/all', AuthorController.getAllAuthors);
    app.get('/api/authors/:_id', AuthorController.getOneAuthor);

    app.post('/api/authors/new', AuthorController.newAuthor);
    app.patch('/api/authors/:_id/edit', AuthorController.editAuthor);
    app.delete('/api/authors/:_id/delete', AuthorController.deleteAuthorByID);



}