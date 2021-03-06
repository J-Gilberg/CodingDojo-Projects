from conn import connectToMySQL
# model the class after the friend table from our database
class User:
    def __init__( self , data ):
        print(data)
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.email = data['email']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
    # Now we use class methods to query our database
    @classmethod
    def get_all(cls):
        query = "SELECT * FROM users;"
        # make sure to call the connectToMySQL function with the schema you are targeting.
        results = connectToMySQL('user_schema').query_db(query)
        # Create an empty list to append our instances of friends
        users = []
        # Iterate over the db results and create instances of friends with cls.
        for user in results:
            users.append( cls(user) )
        return users

    @classmethod
    def add_user(cls,data):
        query = "INSERT INTO users (first_name, last_name, email) VALUES(%(first_name)s,%(last_name)s,%(email)s);"
        results = connectToMySQL('user_schema').query_db(query, data)
        return results

        # regex pattern
