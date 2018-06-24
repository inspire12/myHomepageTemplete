from flask import jsonify, request
from flask_restplus import Resource, api, Namespace
from utils.userUtils import UserUtils

ns = Namespace('user', description='user')

@ns.route('/signup')
class SignUp(UserUtils):
    """

    """
    @ns.param('body', '', 'body')
    def post(self):
        """
        회원 수정, 비밀번호 수정도
        :return:
        """
        user_data = request.get_json(silent=True, force=True)
        print(user_data)
        res = self.user_insert(user_data)
        return res

    @ns.param('user_id','','')
    def delete(self):
        """
        탈퇴 기능 구현
        :return:
        """

        return {'msg': 'ok'}

    @ns.param('body', '', 'body')
    def put(self):
        """

        :return:
        """
        data = request.get_json(silent=True, force=True)
        return {'msg': 'ok'}


