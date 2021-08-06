from flask import Flask, render_template
app = Flask(__name__)  
users = [
{'first_name' : 'Michael', 'last_name' : 'Choi'},
{'first_name' : 'John', 'last_name' : 'Supsupin'},
{'first_name' : 'Mark', 'last_name' : 'Guillen'},
{'first_name' : 'KB', 'last_name' : 'Tonel'}
]

@app.route('/')    
def board():
    header = []
    for j in users[0]:
        header.append(j.title())
    header.append('Full_Name')
    row = []
    rows = []
    for i in users:
        for j in i:
            row.append(i[j])
        row.append(row[0]+' '+row[1])
        rows.append(row)
        row = []

    return render_template('index.html', header = header, rows = rows) #, users = users

if __name__=="__main__":     
    app.run(debug=True)

