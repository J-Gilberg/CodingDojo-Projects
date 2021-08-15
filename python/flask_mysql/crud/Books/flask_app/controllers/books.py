from flask_app import app
from flask import render_template,redirect,request,session,flash
from flask_app.models.book import Book
from flask_app.models.author import Author

# authors routes
@app.route("/authors")
def home():
    authors = Author.get_all()
    return render_template('authors.html')

@app.route("/authors/<int:author_id>")
def home(author_id):
    

    return render_template('authorfavorite.html')

# books routes
@app.route("/books")
def home():

    return render_template('books.html')

@app.route("/authors")
def home():

    return render_template('bookfavorite.html')

# misc redirects
@app.route('/')
def send_home():
    return redirect('/authors')

@app.route('/home')
def send_home():
    return redirect('/authors')