from flask import Flask, render_template, request, redirect, session

app = Flask(__name__)  
app.secret_key = 'lol secret key'
@app.route('/')         
def index():
    if 'visits' not in session:
        session['visits'] = 0

    if 'count' not in session:
        session['count'] = 0
    session['visits'] += 1
    return render_template("index.html")

@app.route('/add')         
def add(): 

    session['count'] += 1
    return redirect('/')

@app.route('/reset')         
def reset():
    if 'count' not in session:
        session['count'] = 0

    session['count'] = 0   

    return redirect('/')

@app.route('/visits', methods=['POST'])
def visits():
    return render_template('/visits')

if __name__=="__main__":   
    app.run(debug=True)    

