from flask import Flask, render_template
app = Flask(__name__)  

@app.route('/play')    
def play1():
    return render_template('index.html', element_color = 'blue', times=3) 

@app.route('/play/<int:x>')    
def play2(x):
    return render_template('index.html', element_color = 'blue', times=x) 

@app.route('/play/<int:x>/<color>')    
def play3(color,x):
    return render_template('index.html', element_color = color, times=x) 

if __name__=="__main__":     
    app.run(debug=True)

