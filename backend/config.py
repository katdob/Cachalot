import os
basedir = os.path.abspath(os.path.dirname(__file__))

class Config(object):
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'heres-a-secret'
    SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL') or \
        'sqlite:///' + os.path.join(basedir, 'app.db')
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    CORS_HEADERS = 'Content-Type'
    DEBUG = False
    TESTING = False
    CSRF_ENABLED = True
    LOG_TO_STOUT = os.environ.get('LOG_TO_STOUT')
    ADMINS = ['katdobbins@gmail.com']
    LANGUAGES = ['en']
    EXPLAIN_TEMPLATE_LOADING = True
