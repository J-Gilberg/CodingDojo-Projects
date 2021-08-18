from flask_app.config.conn import connectToMySQL
from flask_app.models import login_reg
from datetime import datetime, timedelta
from flask import flash

class Message:
    def __init__(self, data):
        self.id = data['id']
        self.message_text = data['message_text']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.user_id = data['user_id']
        self.sender_id = data['sender_id']
        self.deleted = data['deleted']
        self.time_sent = data['time_sent']
        self.user = None
    
    def calc_time_sent(created_at):
        delta = datetime.now() - created_at
        print('timedelta')
        print(delta.seconds//3600)
        if delta.days//365 > 1:
            return f'{delta.days//365} Year(s)'
        if delta.days//30 > 1:
            return f'{delta.days//30} Month(s)'
        if delta.days > 1:
            return f'{delta.days} Day(s)'
        if int(delta.seconds//3600) > 1:
            return f'{delta.seconds//3600} Hour(s)'

        if delta.seconds//60 > 1:
            return f'{delta.seconds//60} Minute(s)'

        if delta.seconds > 1:
            return f'{delta.seconds} Second(s)'

    @classmethod
    def add_message(cls, data):
        query = 'INSERT INTO messages (message_text, user_id, sender_id) VALUES (%(message_text)s, %(user_id)s, %(sender_id)s)'
        connectToMySQL("private_wall_schema").query_db(query, data)

    @classmethod
    def get_all_messages(cls):
        query = 'SELECT * FROM users u LEFT JOIN messages m ON u.id = m.user_id LEFT JOIN users uu ON m.sender_id = uu.id ORDER BY u.id ASC, u.first_name ASC'
        results = connectToMySQL("private_wall_schema").query_db(query)
        users = []
        for data in results:
            if len(users) == 0:
                new_user = login_reg.User(data)
                users.append(new_user)
            elif users[-1].id != data['id']:
                new_user = login_reg.User(data)
                users.append(new_user)
            if data['user_id'] != None:
                new_sender = {
                    'id': data['uu.id']
                    ,'first_name': data['uu.first_name']
                    ,'last_name': data['uu.last_name']
                    ,'email': data['uu.email']
                    ,'password': None
                }

                delta = datetime.now() - data['m.created_at']
                if delta.days//365 > 1:
                    time_sent = f'{delta.days//365} Year(s)'
                elif delta.days//30 > 1:
                    time_sent = f'{delta.days//30} Month(s)'
                elif delta.days > 1:
                    time_sent = f'{delta.days} Day(s)'
                elif int(delta.seconds//3600) > 1:
                    time_sent = f'{delta.seconds//3600} Hour(s)'
                elif delta.seconds//60 > 1:
                    time_sent = f'{delta.seconds//60} Minute(s)'
                elif delta.seconds > 1:
                    time_sent = f'{delta.seconds} Second(s)'

                new_message = {
                    'id': data['m.id']
                    ,'message_text': data['message_text']
                    ,'created_at': data['m.created_at']
                    ,'updated_at': data['m.updated_at']
                    ,'user_id': data['user_id']
                    ,'sender_id': data['sender_id']
                    ,'deleted': data['deleted']
                    ,'time_sent': time_sent
                }
                m = Message(new_message)
                m.user = login_reg.User(new_sender)
                new_user.messages.append(m)
        return users

    @classmethod
    def delete_message(cls, data):
        query = 'UPDATE messages SET deleted ="Y" WHERE id = %(id)s'
        connectToMySQL("private_wall_schema").query_db(query, data)