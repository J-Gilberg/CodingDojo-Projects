from flask_app import app
from flask_app.models import login_reg, message
from flask import render_template, redirect, request, session, flash

@app.route('/dashboard')
def dashboard():
    if not 'user_id' in session:
        return redirect('/')
    users = []
    user_messages = message.Message.get_all_messages()
    print(user_messages[0].messages[0].message_text)
    for m in user_messages:
        if m.id ==session['user_id']:
            user = m
            messages = m.messages
        else:
            users.append(m)
    if len(user_messages) == 0:
        messages = None
        users = None
        user = session['user_id']

    return render_template('dashboard.html', messages = messages, users = users, user = user)

@app.route('/sendmessage', methods=['POST'])
def add_message():
    msg_data = {
        'user_id':  int(request.form['user_id'])
        ,'message_text': request.form['message_text']
        ,'sender_id': session['user_id']
    }
    message.Message.add_message(msg_data)
    return redirect('/dashboard')

@app.route('/deletemessage', methods=['POST'])
def delete_message():
    msg_data = {
        'id': request.form['id']
    }
    message.Message.delete_message(msg_data)
    return redirect('/dashboard')