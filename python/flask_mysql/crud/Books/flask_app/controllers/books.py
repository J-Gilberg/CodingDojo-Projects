from flask_app import app
from flask import render_template, redirect, request, session, flash
from flask_app.models.book import Book
from flask_app.models.author import Author

# authors routes


@app.route("/authors")
def authors():
    authors = Author.get_all_authors()
    return render_template('authors.html', authors=authors)


@app.route('/addauthor', methods=['POST'])
def add_author():
    Author.add_author(request.form)
    return redirect('/authors')


@app.route("/authors/<int:author_id>")
def get_author_fav(author_id):
    session['active_author_id'] = author_id
    authors = Author.get_all_authors()
    for a in authors:
        if a.id == author_id:
            author = a
    books = Book.get_all_books()
    booklist = []
    for b in books:
        auth_found = False
        for bb in b.authors:
            if bb.id == author_id:
                auth_found = True
        if auth_found == False and len(booklist) == 0:
            booklist.append(b)
        if auth_found == False and booklist[-1].id != b.id:
            booklist.append(b)
    return render_template('authorfavorite.html', author=author, booklist=booklist)

@app.route('/addauthorfavorite', methods=['POST'])
def add_author_favorite():
    author_fav ={
        'book_id': int(request.form['book'])
        ,'author_id': int(session['active_author_id'])
    }
    Book.add_favorite(author_fav)
    # rut = f"/authors/{session['active_author_id']}"
    return redirect(f"/authors/{session['active_author_id']}")

# books routes
@app.route("/books")
def books():
    books = Book.get_all_books()
    return render_template('books.html', books=books)


@app.route('/addbook', methods=['POST'])
def add_book():
    Book.add_book(request.form)
    return redirect('/books')


@app.route("/books/<int:book_id>")
def get_books_fav(book_id):
    session['active_book_id'] = book_id
    books = Book.get_all_books()
    for b in books:
        if b.id == book_id:
            book = b
    authors = Author.get_all_authors()
    authorlist = []
    for a in authors:
        book_found = False
        for aa in a.books:
            if aa.id == book_id:
                book_found = True
            if book_found == False and len(authorlist) == 0:
                authorlist.append(a)
            if book_found == False and authorlist[-1].id != a.id:
                authorlist.append(a)

    return render_template('bookfavorite.html', book = book, authorlist = authorlist)

@app.route('/addbookfavorite' , methods=['POST'])
def add_book_favorite():
    book_fav = {
        'book_id': int(session['active_book_id'])
        ,'author_id': int(request.form['author'])
    }
    Book.add_favorite(book_fav)
    return redirect(f"/books/'{session['active_book_id']}")

# misc redirects
@app.route('/')
def send_home():
    return redirect('/authors')
