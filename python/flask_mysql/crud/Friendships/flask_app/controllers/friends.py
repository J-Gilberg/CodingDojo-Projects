from flask_app import app
from flask import render_template, redirect, request, session, flash
from flask_app.models.friend import Friend
from flask_app.models.user import User


@app.route('/friendships')
def homepage():
    users = User.get_friendships()
    friends = User.get_all_users()

    return render_template('dashboard.html', users = users, friends = friends)


@app.route('/adduser', methods=['POST'])
def add_user():
    User.add_user(request.form)
    return redirect('/friendships')


@app.route('/addfriend', methods=['POST'])
def add_friend():
    if not Friend.find_friend(request.form):
        Friend.add_friend(request.form)
    else:
        flash('These two are already friends')
    return redirect('/friendships')


@app.route('/')
def send_home():
    return redirect('/friendships')
