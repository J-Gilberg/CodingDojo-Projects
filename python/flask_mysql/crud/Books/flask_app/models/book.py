from flask_app.config.conn import connectToMySQL
from flask_app.models import author

class Book:
    def __init__(self, data):
        self.id = data['id']
        self.title = data['title']
        self.num_of_pages = data['num_of_pages']
        self.created_at = data['created_at']
        self.created_at = data['updated_at']
        self.authors = []

    @classmethod
    def get_all_books(cls):
        query = 'SELECT * FROM books b LEFT JOIN favorites f ON b.id = f.book_id LEFT JOIN authors a ON f.author_id = a.id ORDER BY b.id ASC;'
        results = connectToMySQL('books_schema').query_db(query)

        books = []

        for book in results:
            if len(books) == 0:
                new_book = Book(book)
                books.append(new_book)
            elif book['id'] != books[-1].id:
                new_book = Book(book)
                books.append(new_book)
            if book['author_id'] != None:
                new_author = {
                    'id': book['a.id']
                    ,'name': book['name']
                    ,'created_at': book['a.created_at']
                    ,'updated_at': book['a.updated_at']
                }
                new_book.authors.append(author.Author(new_author))
        return books

    @classmethod
    def add_book(cls, data):
        query = 'INSERT INTO books (title, num_of_pages) VALUES (%(title)s, %(num_of_pages)s)'
        connectToMySQL('books_schema').query_db(query, data)

    @classmethod
    def add_favorite(cls, data):
        query = 'INSERT INTO favorites (book_id, author_id) VALUES (%(book_id)s, %(author_id)s)'
        connectToMySQL('books_schema').query_db(query, data)


    
