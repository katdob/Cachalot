from flask import Flask
from config import Config
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_login import LoginManager
from flask_cors import CORS, cross_origin


app = Flask(__name__, template_folder = 'templates/')
#app = Flask(__name__)
app.config.from_object(Config)
CORS(app, support_credentials=True)

db = SQLAlchemy(app)
migrate = Migrate(app, db)

login = LoginManager(app)
login.login_view = 'login'

from app import routes, models

if __name__ == "__main__":
  app.run(debug=True)

# ENV VAR
# export FLASK_APP=cachalot.py
# example migration
# flask db migrate -m "add a table"
# then
# flask db upgrade
