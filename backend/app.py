from flask import Flask, jsonify, request, make_response
from flask_cors import CORS
from flask_restplus import Api, Resource
# api 연결
from backend.comments import ns as comments
from backend.board import ns as board
from backend.auth import ns as user

from functools import wraps
import jwt, datetime

app = Flask(__name__)

app.config['SECRET_KEY'] = 'thisisthesecretkey'


CORS(app)
title = 'My Homepage'
api = Api(app=app, version='1.0', title=title, description=title)
api.add_namespace(board, '/v1.0/board')
api.add_namespace(user, '/v1.0/user')
api.add_namespace(comments, '/v1.0/comments')
if __name__ == '__main__':
    app.run(debug=True, port=5001)
