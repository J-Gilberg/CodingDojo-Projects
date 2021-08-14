from flask import Flask, render_template, request, redirect, session

app = Flask(__name__)  
app.secret_key = 'lol secret key'

@app.route('/')         
def index():
    if 'message' not in session:
        session['comment'] = ''
    if 'name' not in session:
        session['name'] = ''
    if 'name' not in session:
        session['location'] = ''
    if 'submit' not in session:
        session['lang'] = ''
    return render_template("index.html")

@app.route('/input', methods=['POST'])
def input():
    session['comment'] = request.form['comment']
    session['name'] = request.form['name']
    if request.form['name'] == '':
        return redirect('/')
    session['location'] = request.form['location']
    session['lang'] = request.form['lang']
    return redirect('/output')


@app.route('/output')
def output():
    return render_template('output.html')

if __name__=="__main__":   
    app.run(debug=True)    
