from flask import Flask, render_template, request, redirect, session
from users import User

app = Flask(__name__)

@app.route("/")
def index():

    return render_template("index.html")

@app.route("/user",methods=['POST'])
def user():
    new_user = {'first_name': request.form['first_name'],'last_name': request.form['last_name'],'email':request.form['email'] }
    User.add_user(new_user)
    return redirect('/allusers')

@app.route('/allusers')
def displayUsers():
    results = User.get_all()
    return render_template("allUsers.html", results = results)
if __name__ == "__main__":
    app.run(debug=True)

