from flask_app.config.conn import connectToMySQL

class Registration:

    @classmethod
    def create_registration():
        query = ""
        results = connectToMySQL('dojosandninjas').query_db(query)
    
    @staticmethod
    def validate_login():
        pass