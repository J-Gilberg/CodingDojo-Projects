from flask import Flask, render_template
app = Flask(__name__)  

@app.route('/<int:x>/<int:y>/<string:color1>/<string:color2>')    
def board(x,y,color1 ,color2):

    # black is 0
    # red is 1
    v = 0
    arr = []
    arrO = []
    for i in range(y):
        for ii in range(x):
                if(i + ii) % 2 == 0:
                    arr.append(0)#f'<div class="boardSqr black"></div>'
                else:
                    arr.append(1)#f'<div class="boardSqr red"></div>'
        arrO.append(arr)
        arr = []
    print(str(arrO))

    return render_template('index.html', x = x, y = y, array = arrO, color1 = color1, color2 = color2) 

if __name__=="__main__":     
    app.run(debug=True)

