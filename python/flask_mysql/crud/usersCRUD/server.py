from flask import Flask, render_template, request, redirect, session
from users import User

app = Flask(__name__)

@app.route("/")
def index():
    return redirect('/users')

@app.route('/adduser')
def add_user():
    return render_template("index.html")

@app.route("/register",methods=['POST'])
def register():
    new_user = {'first_name': request.form['first_name'],'last_name': request.form['last_name'],'email':request.form['email'] }
    User.add_user(new_user)
    return redirect('/users')

@app.route('/users')
def displayUsers():
    results = User.get_all()
    return render_template("allUsers.html", results = results)

@app.route('/user/<int:num>')
def user(num):
    data = {'id': num}
    result = User.get_user(data)
    return render_template("user.html", result = result)

@app.route('/user/<int:num1>/delete')
def delete(num1):
    data = {'id': num1}
    User.delete_user(data)
    return redirect('/')

@app.route('/user/<int:num2>/edit')
def edit(num2):
    data = {'id': num2}
    result = User.get_user(data)
    return render_template('edit.html', result = result)

@app.route('/user/<int:num3>/edit/editsubmit',methods=['POST'])
def edit_submit(num3):
    data = {'id': num3, 'first_name': request.form['first_name'], 'last_name': request.form['last_name'], 'email': request.form['email']}
    User.edit_user(data)
    return redirect('/')

if __name__ == "__main__":
    app.run(debug=True)
