from flask_app.config.conn import connectToMySQL
from flask_app.models import ninja
class Dojo:
    def __init__( self , data ):
        print(data)
        self.id = data['id']
        self.name = data['name']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.ninjas = []

    @classmethod
    def get_all(cls):
        query = "SELECT * FROM dojo LEFT JOIN ninja ON dojo.id = ninja.dojo_id ORDER BY dojo.id ASC;"
        results = connectToMySQL('dojosandninjas').query_db(query)
        dojos = []

        for data in results:
            if len(dojos) == 0:
                new_dojo = Dojo(data)
                dojos.append(new_dojo)
            elif data['id'] != dojos[-1].id:
                    new_dojo = Dojo(data)
                    dojos.append(new_dojo)
            if data['ninja.id'] != None:
                new_ninja = {
                    'id': data['ninja.id']
                    ,'first_name': data['first_name']
                    ,'last_name': data['last_name']
                    ,'age': data['age']
                    ,'dojo_id': data['id']
                    ,'created_at': data['created_at']
                    ,'updated_at': data['updated_at'] 
                    }
                new_dojo.ninjas.append(ninja.Ninja(new_ninja))
        return dojos

    @classmethod
    def add_dojo(cls, data):
        query = "INSERT INTO dojo (name) VALUES(%(name)s)"
        connectToMySQL('dojosandninjas').query_db(query,data)