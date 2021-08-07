from flask import Flask, render_template, request, redirect, session

app = Flask(__name__)  
app.secret_key = 'lol secret key'

@app.route('/')         
def index():
    if 'num' not in session:
        session['num'] = 1
    
    if 'visits' not in session:
        session['visits'] = 0

    if 'count' not in session:
        session['count'] = 0
    session['visits'] += 1
    return render_template("index.html")

@app.route('/add')         
def add(): 
    session['count'] += session['num']
    return redirect('/')

@app.route('/add2')         
def add_two(): 
    session['count'] += 2
    return redirect('/')

@app.route('/num', methods=['POST'])
def add_by():
    session['num'] = int(request.form['i'])
    return redirect('/')

@app.route('/reset')         
def reset():
    if 'count' not in session:
        session['count'] = 0

    session['count'] = 0   

    return redirect('/')

@app.route('/visits')
def visits():
    return render_template('visits.html')

@app.route('/destory_session')
def destroy():
    session.clear()
    return redirect('/')



if __name__=="__main__":   
    app.run(debug=True)    

