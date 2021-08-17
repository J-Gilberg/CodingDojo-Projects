from flask_app.config.conn import connectToMySQL
from flask_app.models import login_reg
from datetime import date, datetime, timedelta, time
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
        self.time_sent = None
        self.user = None
    
    # def calc_time_sent(created_at):
    #     now = datetime.now()
    #     f = '%Y-%m-%d %H:%M:%S.%f'
    #     delta = datetime.strptime(str(now),f) - datetime.strptime(str(created_at),f)
    #     delta = delta.timetruple()
    #     for d in range(len(delta)):
    #         if delta[d] > 0:
    #             if d == 0:
    #                 return f'{delta[d]} Year(s)'
    #             if d == 1:
    #                 return f'{delta[d]} Month(s)'
    #             if d == 2:
    #                 return f'{delta[d]} Day(s)'
    #             if d == 3:
    #                 return f'{delta[d]} Hour(s)'
    #             if d == 4:
    #                 return f'{delta[d]} Minute(s)'
    #             if d == 5:
    #                 return f'{delta[d]} Second(s)'
    #             if d == 6:
    #                 return f'{delta[d]} Microsecond(s)'

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

                new_message = {
                    'id': data['m.id']
                    ,'message_text': data['message_text']
                    ,'created_at': data['m.created_at']
                    ,'updated_at': data['m.updated_at']
                    ,'user_id': data['user_id']
                    ,'sender_id': data['sender_id']
                    ,'deleted': data['deleted']
                    ,'time_sent': None #Message.calc_time_sent(data['m.created_at'])
                }
                m = Message(new_message)
                m.user = login_reg.User(new_sender)
                new_user.messages.append(m)
        return users

    @classmethod
    def delete_message(cls, data):
        query = 'UPDATE messages SET deleted ="Y" WHERE id = %(id)s'
        connectToMySQL("private_wall_schema").query_db(query, data)