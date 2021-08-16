from flask_app.config.conn import connectToMySQL
from flask_app.models import book

class Author:

    def __init__(self, data):
        self.id = data['id']
        self.name = data['name']
        self.created_at = data['created_at']
        self.created_at = data['updated_at']
        self.books = []

    @classmethod
    def get_all_authors(cls):
        query = 'SELECT * FROM authors a LEFT JOIN favorites f ON a.id = f.author_id LEFT JOIN books b ON f.book_id = b.id ORDER BY a.id ASC;'
        results = connectToMySQL('books_schema').query_db(query)
        authors = []
        for author in results:
            if len(authors) == 0:
                new_author = Author(author)
                authors.append(new_author)
            elif author['id'] != authors[-1].id:
                new_author = Author(author)
                authors.append(new_author)
            if author['book_id'] != None:
                new_book = {
                    'id': author['b.id']
                    ,'title': author['title']
                    ,'num_of_pages': author['num_of_pages']
                    ,'created_at': author['b.created_at']
                    ,'updated_at': author['b.updated_at']
                }
                new_author.books.append(book.Book(new_book))
        return authors


    @classmethod
    def add_author(cls, data):
        query = 'INSERT INTO authors (name) VALUES (%(name)s)'
        connectToMySQL('books_schema').query_db(query, data)