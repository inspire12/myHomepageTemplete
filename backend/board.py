from flask import request, jsonify
from flask_restplus import Resource, api, Namespace
from flask_restplus._http import HTTPStatus
from pymongo import MongoClient

import utils.boardUtils

from backend.utils.boardUtils import BoardUtils
from backend.utils.commonUtils import CommonUtils

ns = Namespace('board', description='board')


@ns.route('/list')
class ContentList(BoardUtils):
    @ns.doc('')
    @ns.param('board_type','')
    def get(self):
        '''
        해당 게시판의 게시글 목록 표시
        :return:
        '''
        query = self.parse_query(['board_type', 'index'])
        res = self.content_list_view(query['board_type'])

        return res, HTTPStatus.OK, {}


@ns.route('/view')
class ContentView(BoardUtils):
    '''
     게시물 내용 표시
    '''
    @ns.doc('')
    @ns.param('board_type','')
    @ns.param('index','')
    def get(self):
        '''
        게시물 내용 표시
        :return: 해당 보드 타입에 맞는 글 전체 데이터 출력
        '''
        query = self.parse_query(['board_type','index'])
        res = self.content_view(query['board_type'], query['index'])

        return res, HTTPStatus.OK, {}



@ns.route('/form')
class BoardForm(BoardUtils):
    @ns.doc('')
    @ns.response(204, 'Content successfully created')
    def post(self):
        '''
         insert와 update 둘다 이곳에서 처리
        :return:
        '''
        data = None
        if request.method == 'POST':
            data = request.get_json(silent=True, force=True)
        response = self.update_content(data=data)
        return data

    @ns.doc('')
    @ns.param('_id','','팀_인덱스_깊이')
    def delete(self):
        query = self.parse_query(['_id'])
        response = self.delete_content(query['_id'])
        return response