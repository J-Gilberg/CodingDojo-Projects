from flask_app import app
from flask import render_template,redirect,request,session,flash
from flask_app.controllers import loginRegs
from flask_bcrypt import Bcrypt        
bcrypt = Bcrypt(app) 


@app.route('/login')
def login():
    return render_template('login.html')

@app.route('/')
def redirect_login():
    return redirect('login')

@app.route('/register/user', methods=['POST'])
def register():
    pw_hash = bcrypt.generate_password_hash(request.form['password'])
    print(pw_hash)
    data = {
        "username": request.form['username'],
        "password" : pw_hash
    }
    user_id = loginRegs.Registration.create_registration(data)
    session['user_id'] = user_id
    return redirect("/dashboard")