from flask_app import app
from flask import render_template,redirect,request,session,flash
from flask_app.models.book import Book
from flask_app.models.author import Author

# authors routes
@app.route("/authors")
def home():
    authors = Author.get_all()
    return render_template('authors.html', dojos = dojos)

@app.route("/authors")
def home():

    return render_template('authorfavorite.html', dojos = dojos)

# books routes
@app.route("/books")
def home():

    return render_template('books.html', dojos = dojos)

@app.route("/authors")
def home():

    return render_template('bookfavorite.html', dojos = dojos)


# misc redirects
@app.route('/')
def send_home():
    return redirect('/authors')

@app.route('/home')
def send_home():
    return redirect('/authors')