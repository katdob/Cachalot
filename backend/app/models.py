from app import db
from werkzeug.security import generate_password_hash, check_password_hash
from datetime import datetime
from flask_login import UserMixin
from app import db, login

class User(UserMixin, db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(64), index=True, unique=True)
    email = db.Column(db.String(120), index=True, unique=True)
    password_hash = db.Column(db.String(128))
    timestamp = db.Column(db.DateTime, index=True, default=datetime.utcnow)
    migrations = db.relationship('Migration', backref='user', lazy='dynamic')

    def __repr__(self):
        return '<User {}, ({})>'.format(self.email, self.id)

    def set_password(self, password):
        self.password_hash = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password_hash, password)

@login.user_loader
def load_user(id):
    return User.query.get(int(id))


class Migration(db.Model):
    """
    A migration that is tied to user.
    """
    id = db.Column(db.Integer, primary_key=True)
    study_id = db.Column(db.Integer, index=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    timestamp = db.Column(db.DateTime, index=True, default=datetime.utcnow)

    def __repr__(self):
        return '<Migration {} , {} created at {}>'.format(self.study_id, self.user_id, self.timestamp)


class MovebankStudy(db.Model):
    """
    An internal resource, intended to allow a user to user to find a
    Movebank study without needing to find the identification of an
    individual within that study.
    """
    study_id = db.Column(db.Integer, primary_key=True)
    species_common_name = db.Column(db.String(120), index=True)
    species_scientific_name = db.Column(db.String(120), index=True)

    def __repr__(self):
        return '<Study {}, {} ({})>'.format(self.study_id,
            self.species_scientific_name, self.species_common_name)
