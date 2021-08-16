from flask_app.config.conn import connectToMySQL
from flask_app.models import friend

class User:
    def __init__(self, data):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.name = f"{data['first_name']} {data['last_name']}"
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.friend = None

    @classmethod
    def get_friendships(cls):

        query = "SELECT * FROM users u LEFT JOIN friendships f ON u.id = f.user_id LEFT JOIN users uu ON f.friend_id = uu.id ORDER BY u.id ASC;"
        results = connectToMySQL('friendships_shema').query_db(query)

        users = []

        for data in results:
            if data['user_id'] != None:
                new_user = User(data)
                users.append(new_user)
                new_friend = {
                    'id': data['f.id']
                    ,'friend_id': data['friend_id']
                    ,'first_name': data['uu.first_name']
                    ,'last_name': data['uu.last_name']
                    ,'name': f"{data['uu.first_name']} {data['uu.last_name']}"
                    ,'created_at': data['created_at']
                    ,'updated_at': data['updated_at']
                }
                new_user.friend = friend.Friend(new_friend)
        return users

    @classmethod
    def get_all_users(cls):
        query = "SELECT * FROM users u ORDER BY u.id ASC;"
        results = connectToMySQL('friendships_shema').query_db(query)
        
        userlist = []

        for u in results:
            userlist.append(User(u))

        return userlist

    @classmethod
    def add_user(cls, data):
        query = "INSERT INTO users (first_name, last_name) VALUES (%(first_name)s, %(last_name)s);"
        connectToMySQL('friendships_shema').query_db(query, data)
