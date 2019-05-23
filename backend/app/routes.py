import os

from flask import render_template, flash, redirect, url_for, request, jsonify, send_from_directory
from flask_login import login_user, logout_user, current_user, login_required
from werkzeug.urls import url_parse
from flask_cors import CORS, cross_origin

from app import app, db
from app.models import User
from app.forms import LoginForm, RegistrationForm


@app.route('/policies', methods=['GET'], defaults={'path': ''})
@app.route('/<path:path>')
@cross_origin(supports_credentials=True)
def policies(path):
    return render_template("index.html")

@app.route('/blog', methods=['GET'], defaults={'path': ''})
@app.route('/<path:path>')
@cross_origin(supports_credentials=True)
def blog(path):
    return render_template("index.html")

@app.route('/contact', methods=['GET'], defaults={'path': ''})
@app.route('/<path:path>')
@cross_origin(supports_credentials=True)
def contact(path):
    return render_template("index.html")

@app.route('/', methods=['GET', 'POST'], defaults={'path': ''})
@app.route('/<path:path>')
@cross_origin(supports_credentials=True)
@login_required
def index(path):
    logout_user()
    return render_template("index.html")

@app.route('/login', methods=['GET', 'POST'],defaults={'path': ''})
@app.route('/<path:path>')
@cross_origin(supports_credentials=True)
def login(path):

    email = request.args['email']
    password = request.args['password']
    user = User.query.filter_by(email=email).first()

    if user and user.check_password(password):
        login_user(user)
        u = {
            'next': '/migrations',
            'email': user.email,
            'logged_in': 'true',
        }
        return jsonify(u)
    else:
        return jsonify("Email or password is incorrect or account does not exist.")

@app.route('/check_login', methods=['GET', 'POST'], defaults={'path': ''})
@app.route('/<path:path>')
@cross_origin(supports_credentials=True)
def check_login(path):
    if current_user.is_authenticated:
        return jsonify('authenticated')
    else:
        return jsonify({"error": "Invalid email or password."}), 400


@app.route('/register', methods=['GET', 'POST'], defaults={'path': ''})
@app.route('/<path:path>')
@cross_origin(supports_credentials=True)
def register(path):
    email = request.args['email']
    password1 = request.args['password1']
    password2 = request.args['password2']

    if ('@' not in email) or ('.' not in email):
        return jsonify('Please enter a valid email address.')

    if password1 != password2:
        return jsonify('Passwords must be identical.')

    user = User.query.filter_by(email=email).first()
    if not user:
        new_user = User(username=request.args['email'])
        new_user.email = request.args['email']
        new_user.set_password(password1)
        db.session.add(new_user)
        db.session.commit()
        user = User.query.filter_by(email=email).first()
        u = {
            'next': '/migrations',
            'email': user.email,
            'logged_in': 'true',
        }
        return jsonify(u)
    elif user:
        return jsonify('Please log in.')
    else:
        return jsonify('Could not create this user. Please contact an administrator.')

@app.route('/logout', defaults={'path': ''})
@app.route('/<path:path>')
@cross_origin(supports_credentials=True)
def logout(path):
    logout_user()
    return render_template("index.html")

@app.route('/migrations/<int:id>', methods=['GET', 'POST'], defaults={'path': ''})
@app.route('/<path:path>')
@cross_origin(supports_credentials=True)
@login_required
def migrations(path):
    if current_user.is_authenticated:
        study_id = request.args['study_id']
        user_id = request.args['user_id']

        m = Migration.query.filter_by(study_id=study_id)
        if not m:
            return jsonify('new migration!')
            new_m = Migration(study_id=study_id)
            m.user_id = request.args['user_id']
            db.session.add(m)
            db.session.commit()
            return render_template("index.html")
        else:
            return jsonify('you\'ve already got this migration')
    return redirect(url_for('index')) #render_template("index.html")
