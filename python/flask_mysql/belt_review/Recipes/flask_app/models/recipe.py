from flask_app.config.conn import connectToMySQL
from flask_app.models import login_reg
from datetime import date, datetime, timedelta, time
from flask import flash

class Recipe:
    def __init__(self, data):
        self.id = data['id']
        self.name = data['name']
        self.description = data['descript']
        self.instructions = data['instructions']
        self.date = data['date']
        self.under_thirty = data['under_thirty']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.user_id = data['user_id']
        self.user = None

    
    db = 'recipes_schema'

    @staticmethod
    def recipe_validator(data):
        is_valid = True
            # validate all table information
            # if date is blank it will come back empty
            # datetime work out more on it
            # date comes back as year-month-day
            # get a timedelta of some sort of days + NOW() then check if the date given is greater than or less than that
        if len(data['date']) != 10:
            flash('please provide a valid date')
            is_valid = False
        if len(data['name']) == 0:
            flash('please provide a name')
            is_valid = False
        if len(data['name']) > 255:
            flash('please provide a name less than or equal to 255 characters')
            is_valid = False
        if len(data['descript']) == 0:
            flash('please provide a description')
            is_valid = False
        if len(data['descript']) > 500:
            flash('please provide a description less than or equal to 500 characters')
            is_valid = False
        if len(data['instructions']) == 0:
            flash('please provide instructions')
            is_valid = False
        if len(data['instructions']) > 500:
            flash('please provide instructions less than or equal to 500 characters')
            is_valid = False
        if len(data['under_thirty']) != 1:
            flash('invalid input for under 30 minutes, must select Yes or No')
            is_valid = False
        return is_valid
    # connectToMySQL(cls.db).query_db(query, data)
    @classmethod
    def get_all_recipes(cls):
        query = 'SELECT * FROM recipes r LEFT JOIN users u ON r.user_id = u.id;'
        results = connectToMySQL(cls.db).query_db(query)

        recipes = []

        for recipe in results:
            new_recipe = Recipe(recipe)
            recipes.append(new_recipe)

            new_user = {
                'id': recipe['u.id']
                ,'first_name': recipe['first_name']
                ,'last_name': recipe['last_name']
                ,'email': recipe['email']
                ,'password': None
                ,'created_at': recipe['created_at']
                ,'updated_at': recipe['updated_at']
            }
            new_recipe.user = login_reg.User(new_user)
        return recipes

    @classmethod
    def add_recipe(cls,data):
        query = 'INSERT INTO recipes (name, descript, instructions, under_thirty, date, user_id) VALUES(%(name)s,%(descript)s,%(instructions)s,%(under_thirty)s,%(date)s,%(user_id)s);'
        connectToMySQL(cls.db).query_db(query,data)

    @classmethod
    def delete_recipe(cls,data):
        query = 'DELETE FROM recipes WHERE id = %(id)s;'
        connectToMySQL(cls.db).query_db(query,data)

    @classmethod
    def edit_recipe(cls, data):
        query = 'UPDATE recipes SET name = %(name)s, descript = %(descript)s, instructions = %(instructions)s, under_thirty = %(under_thirty)s, date = %(date)s WHERE id = %(id)s;'
        connectToMySQL(cls.db).query_db(query,data)

    @classmethod
    def get_user(cls,data):
        query = 'SELECT * FROM users u WHERE id = %(id)s;'
        result = connectToMySQL(cls.db).query_db(query,data)
        new_user = {
            'id': result[0]['id']
            ,'first_name': result[0]['first_name']
            ,'last_name': result[0]['last_name']
            ,'email': result[0]['email']
            ,'password': None
            ,'created_at': result[0]['created_at']
            ,'updated_at': result[0]['updated_at'] 
        }
        return login_reg.User(new_user)