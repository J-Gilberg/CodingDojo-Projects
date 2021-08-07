from flask import Flask, render_template, request, redirect, session # added request

app = Flask(__name__)
# our index route will handle rendering our form

arr = []
            
@app.route('/users', methods=['POST'])
def create_user():
    print("Got Post Info")
    print(request.form)
    arr = request.form
    print(arr)
    # Never render a template on a POST request.
    # Instead we will redirect to our index route.
    return redirect('/')

@app.route('/')
def index():

    if 'counter1' not in session:
        session['counter1'] = 0
    if 'counter1' not in session:
        session['counter1'] = 0    

    return render_template("index.html") #this renders the page.


@app.route('/increment/<int:num>') #can use the url to grab the info in a button. define href:
def counter(num):

    if num < 1 or num > 2:
        return redirect('/')

    session[f'counter{num}'] += 1
    return redirect('/')

@app.route('/reset')
def reset():
    session.clear()
    redirect




if __name__ == "__main__":
    app.run(debug=True)

