from flask_app.config.conn import connectToMySQL
from flask_app.models import user

class Friend:
    def __init__(self, data):
        self.id = data['id']
        self.friend_id = data['friend_id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.name = data['name']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    @classmethod
    def add_friend(cls, data):
        query = "INSERT INTO friendships (user_id, friend_id) VALUES (%(user_id)s, %(friend_id)s);"
        connectToMySQL('friendships_shema').query_db(query, data)

    @classmethod
    def find_friend(cls, data):
        query = "SELECT * FROM friendships WHERE user_id = %(user_id)s AND friend_id = %(friend_id)s;"
        results = connectToMySQL('friendships_shema').query_db(query, data)
        print('find_firends results:')
        print(results)
        already_friends = True
        if len(results) == 0:
            already_friends = False
        return already_friends