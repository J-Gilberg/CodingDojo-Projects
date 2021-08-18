from flask_app import app
from flask_app.controllers import login_regs, recipes

if __name__ == "__main__":
    app.run(debug=True)
