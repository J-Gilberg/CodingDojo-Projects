from flask import Flask, render_template, request, redirect, session
import os
app = Flask(__name__)  
app.secret_key = 'lol secret key'
@app.route('/')         
def index():
    return render_template("index.html")

@app.route('/checkout', methods=['POST'])         
def checkout():
    session['stra'] = request.form['strawberry']
    session['rasp'] = request.form['raspberry']
    session['appl'] = request.form['apple']
    session['fname'] = request.form["first_name"]
    session['lname'] = request.form["last_name"]
    session['id'] = request.form["student_id"]

    count = int(request.form['strawberry']) + int(request.form['raspberry']) + int(request.form['apple'])
    cust_name = f'{request.form["first_name"]} {request.form["last_name"]}'

    session['count'] = count

    print(f'Charging {cust_name} for {count} fruits')
    return render_template("checkout.html")

@app.route('/fruits')         
def fruits():
    images = []
    for filename in os.listdir('static/img'):
        images.append('static/img/'+ filename)
    return render_template("fruits.html", images = images)

if __name__=="__main__":   
    app.run(debug=True)    


# handler receives data and then passes to the "results" page 
# no need to pass the data back into a page, session has the data available. 
# python will fail when we want to pull a variable out of session
# jinja will show null/none