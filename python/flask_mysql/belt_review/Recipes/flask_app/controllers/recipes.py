from flask_app import app
from flask_app.models import login_reg, recipe
from flask import render_template, redirect, request, session, flash


@app.route('/dashboard')
def dashboard():
    if not 'user_id' in session:
        flash('Please log in to view this page')
        return redirect('/')
    
    user = recipe.Recipe.get_user({'id': session['user_id']})
    recipes = recipe.Recipe.get_all_recipes()

    return render_template('dashboard.html', recipes = recipes, user= user)


# view
@app.route('/recipes/<int:recipe_id>')
def view_recipe(recipe_id):
    if not 'user_id' in session:
        flash('Please log in to view this page')
        return redirect('/')
    user = recipe.Recipe.get_user({'id': session['user_id']})
    recipes = recipe.Recipe.get_all_recipes()
    for r in recipes:
        if r.id == recipe_id:
            single_recipe = r
    return render_template("view_recipe.html", recipe = single_recipe, user = user)


# create
@app.route('/recipes/new')
def new_recipe():
    if not 'user_id' in session:
        flash('Please log in to view this page')
        return redirect('/')
    return render_template('new_recipe.html')


@app.route('/addrecipe', methods=['POST'])
def add_recipe():
    if not 'user_id' in session:
        flash('Please log in to view this page')
        return redirect('/')
    if not recipe.Recipe.recipe_validator(request.form):
        redirect('/addrecipe')
    recipe.Recipe.add_recipe(request.form)
    return redirect('/dashboard')


# delete
@app.route('/deleterecipe/<int:recipe_id>')
def delete_recipe(recipe_id):
    if not 'user_id' in session:
        flash('Please log in to view this page')
        return redirect('/')
    recipes = recipe.Recipe.get_all_recipes()
    for r in recipes:
        if r.id == recipe_id:
            single_recipe = r
    if single_recipe.user_id != session['user_id']:
        flash('Please log in to view this page')
        return redirect('/')
    recipe.Recipe.delete_recipe({'id': recipe_id})
    return redirect('/dashboard')


# edit
@app.route('/recipes/edit/<int:recipe_id>')
def edit_recipe(recipe_id):
    if not 'user_id' in session:
        flash('Please log in to view this page')
        return redirect('/')
    recipes = recipe.Recipe.get_all_recipes()
    for r in recipes:
        if r.id == recipe_id:
            single_recipe = r
    if single_recipe.user_id != session['user_id']:
        flash('Please log in to view this page')
        return redirect('/')
    return render_template('edit_recipe.html', recipe = single_recipe)


@app.route('/editrecipe/<int:recipe_id>', methods=['POST'])
def update_recipe(recipe_id):
    if not 'user_id' in session:
        flash('Please log in to view this page')
        return redirect('/')
    if not recipe.Recipe.recipe_validator(request.form):
        redirect(f'/recipes/edit/{recipe_id}')
    recipe.Recipe.edit_recipe(request.form)
    return redirect('/dashboard')
