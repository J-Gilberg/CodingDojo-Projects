from flask import Flask, render_template, request, redirect, session
import random

app = Flask(__name__)  
app.secret_key = 'lol secret key'

@app.route('/')         
def index():
    if 'message' not in session:
        session['message'] = ''
    if 'answer' not in session:
        session['answer'] = random.randint(1,100)
    if 'submit' not in session:
        session['submit'] = 'flex'
    return render_template("index.html")

@app.route('/message', methods=['POST'])
def message():
    if session['answer'] == int(request.form['num']):
        session['message'] = (f'<div class="messageAnswer"><p> {session["answer"]} was the number!</p><form action="/reset" method="POST"><input type="submit" value="Play Again"></form></div>')
        session['submit'] = 'none'
    if session['answer'] < int(request.form['num']):
        session['message'] = '<div class="message"><p>Too high!</p></div>'
    if session['answer'] > int(request.form['num']):
        session['message'] = '<div class="message"><p>Too low!</p></div>'

        # {session['answer']}
    return redirect('/')

@app.route('/reset',methods=['POST'])
def reset():
    session.clear()
    return redirect('/')

if __name__=="__main__":   
    app.run(debug=True)    
