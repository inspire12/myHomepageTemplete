from flask import jsonify
from flask_restplus import Resource, api, Namespace
from flask_restplus._http import HTTPStatus
from pymongo import MongoClient

ns = Namespace('user', description='user')

def open_mongodb(self, collection_name='board'):
    client = MongoClient('localhost',27017)
    connect = client.get_database()
    collection = connect.collection_names('user')
    return connect, collection


@ns.route('/signup')
class SignUp(Resource):
    def get(self):
        client = MongoClient('localhost', 27017)
        db = client.user
        collection = db.user
        print(collection.find())
        return collection.find(), HTTPStatus.OK

    def post(self, data):
        data = {'id': 'inspire123', 'passwd': 'psd'}
        client = MongoClient('localhost', 27017)
        db = client.user
        collection = db.user
        print(data)
        collection.insert(data)
        return data

    def delete(self):
        return {'msg': 'ok'}

    def put(self):
        return {'msg': 'ok'}

@ns.route('/login')
class Login(Resource):
    def get(self):
        client = MongoClient('localhost', 27017)
        db = client.user
        collection = db.user
        print(collection.find())
        return collection.find(), HTTPStatus.OK

    def post(self):
        client = MongoClient('localhost', 27017)
        db = client.user
        collection = db.user

    def delete(self):
        client = MongoClient('localhost', 27017)
        db = client.user
        collection = db.user

    def put(self):
        client = MongoClient('localhost', 27017)
        db = client.user
        collection = db.user