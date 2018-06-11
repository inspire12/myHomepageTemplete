

from flask_restplus import Resource, api, Namespace
from flask_restplus._http import HTTPStatus

ns = Namespace('board', description='board')

@ns.route('/board')
class Board(Resource):
    def get(self):
        return {'msg':'ok'}

    def post(self):
        return {'msg': 'ok'}
