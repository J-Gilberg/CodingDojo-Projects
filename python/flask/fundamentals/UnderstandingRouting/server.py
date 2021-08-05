from flask import Flask
from flask.helpers import make_response  # Import Flask to allow us to create our app

app = Flask(__name__)    # Create a new instance of the Flask class called "app"

@app.route('/')    # The "@" decorator associates this route with the function immediately following
def hello_world():
    return 'Hello World!'  # Return the string 'Hello World!' as a response

@app.route('/dojo')
def dojo():
    return 'Dojo'

@app.route('/say/<name>')
def printName(name):
    return f'Hi {str(name.title())}'

@app.route('/repeat/<int:x>/<word>')
def repeat(x,word):
    output = ''
    for i in x:
        output += f"<p>{word}</p>"
    return output
    # return (str(word)+' ') * int(x)
# @app.errorhandler(HTTPException)
# def err():
#     return "Sorry! No response. Try again.", 404

# @app.route('/errMessage')
# def message():
#     return "Sorry! No response. Try again."
if __name__=="__main__":   # Ensure this file is being run directly and not from a different module    
    app.run(debug=True)    # Run the app in debug mode.