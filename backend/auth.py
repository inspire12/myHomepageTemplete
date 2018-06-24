from flask import jsonify, request
from flask_restplus import Resource, api, Namespace
from flask_restplus._http import HTTPStatus

ns = Namespace('user', description='user')

@ns.route('/signup')
class SignUp(Resource):
    """

    """
    @ns.param('user_id', '', '')
    def get(self):
        collection = db.user
        print(collection.find())
        return collection.find(), HTTPStatus.OK

    @ns.param('body', '', 'body')
    def post(self):
        data = request.get_json(silent=True, force=True)
        collection.insert(data)
        return data

    @ns.param('user_id','','')
    def delete(self):
        '''
        탈퇴 기능 구현
        :return:
        '''
        return {'msg': 'ok'}

    @ns.param('body', '', 'body')
    def put(self):
        '''

        :return:
        '''
        data = request.get_json(silent=True, force=True)
        return {'msg': 'ok'}


