from flask_app import app
from flask import render_template,redirect,request,session,flash
from flask_app.models.ninja import Ninja
from flask_app.models.dojo import Dojo

# Dojos route
@app.route("/dojos")
def home():
    dojos = Dojo.get_all()
    return render_template('dojos.html', dojos = dojos)

@app.route("/dojos/<int:num>")
def view_ninjas(num):
    print(num)
    dojos = Dojo.get_all()
    for dojo in dojos:
        if dojo.id == num:
            ninjas = dojo.ninjas
            print(ninjas)
    return render_template('ninjas.html', ninjas = ninjas)

@app.route("/createdojo", methods=['POST'])
def create_dojo():
    Dojo.add_dojo({'name': request.form['name']})
    return redirect('/dojos')

# ninja creation
@app.route("/ninjas")
def add_ninja():
    dojos = Dojo.get_all()
    return render_template('addninja.html', dojos = dojos)

@app.route('/createninja', methods=['POST'])
def create_ninja():
    new_ninja = {
        'first_name': request.form['first_name']
        ,'last_name': request.form['last_name']
        ,'age': request.form['age']
        ,'dojo_id': request.form['dojo']
    }
    Ninja.add_ninja(new_ninja)
    return redirect('/dojos')

# misc routes
@app.route("/home")
def go_home():
    return redirect('/dojos')

@app.route("/")
def indexRedirect():
    return redirect('/dojos')