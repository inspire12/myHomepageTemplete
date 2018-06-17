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



def token_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        token = request.args.get('token')

        if not token:
            return jsonify({'message': 'Token is missing!'}), 403
        try:
            data = jwt.decode(token, app.config['SECRET_KEY'])
        except:
            return jsonify({'message': 'Token is invalid'}), 403
        return f(*args, **kwargs)
    return decorated

@app.route('/unprotected')
def unprotected():
    '''
    토큰 필요없이 접근 가능
    '''
    return jsonify({'message': 'Anyone can view this!'})


@app.route('/protected')
@token_required
def protected():
    '''
    토큰 있어야 접근 가능
    :return:
    '''
    return jsonify({'messgae': 'This is only available for people with valid tokens'})


@app.route('/login')
def login():
    '''
    @ access_token 을 활용한 로그인 구현
    @ref https://www.youtube.com/watch?v=J5bIPtEbS0Q
    '''
    auth = request.authorization

    if auth and auth.password == 'password' :
        # jwt token 활용, 토큰 만료시간 30 m
        token = jwt.encode({'user': auth.username, 'exp': datetime.datetime.utcnow() + datetime.timedelta(minutes=30)},app.config['SECRET_KEY'])
        return jsonify({'token': token.decode('UTF-8')})
    return make_response('Could verify!', 401, {'WWW-Authenticate' : 'Basic realm="Login Required'})

CORS(app)
title = 'My Homepage'
api = Api(app=app, version='1.0', title=title, description=title)
api.add_namespace(board, '/board')
api.add_namespace(user, '/user')
api.add_namespace(comments, '/comments')

if __name__ == '__main__':
    app.run(debug=True, port=5001)
