

from flask_restplus import Resource, api, Namespace
from flask_restplus._http import HTTPStatus
from pymongo import MongoClient

from utils.commonUtils import CommonUtils

ns = Namespace('comments', description='댓글')

@ns.route('/list')
class CommentsList(CommonUtils):
    def get(self):

        return {'msg':'ok'}


@ns.route('/view')
class CommentsView(CommonUtils):
    def get(self):
        return {'msg': 'ok'}

    def post(self):
        return {'msg': 'ok'}

    def delete(self):
        return {'msg': 'ok'}


@ns.route('/form')
class BoardForm(Resource):
    def get(self):
        return {'msg': 'ok'}

    def post(self):
        return {'msg': 'ok'}

    def delete(self):
        return {'msg': 'ok'}