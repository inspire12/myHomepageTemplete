from flask_restplus import Namespace
from pymongo import MongoClient

from backend.utils.commonUtils import CommonUtils

ns = Namespace('board', description='게시글 목록')


class BoardUtils(CommonUtils):

    def content_list_view(self, board_type):
        '''
        board에서 게시글 목록을 보여줌
        :return:
        '''
        collection = self.openMongoDB('board')
        res = {}
        cursor = collection.find({'board_type':board_type})
        for row in cursor:
            res[row['_id']] = row

        cursor.close()
        return res

    def content_view(self, board_type, index):
        collection = self.openMongoDB('board')
        res = {}
        cursor = collection.find({'board_type': board_type, 'index': index})
        for row in cursor:
            res[row['_id']] = row

        cursor.close()
        return res

    def update_content(self, data):
        '''
        @TODO 인증 추가
        :param data:
        :return:
        '''
        collection = self.openMongoDB('board')
        cursor = collection.find_one({'_id':data['_id']})
        if cursor is None:
            response = collection.insert(data)
        else:
            response = collection.update({'_id':data['_id']},data, upsert=True)
        return response

    def delete_content(self, post_id):
        '''
        글삭제 기능, 글 id 만 있으면 되게 하자
        @TODO 인증 추가
        :param data:
        :return:
        '''
        connect, collection = self.openMongoDB()

        cursor = collection['board'].find()
        response = collection.remove({"_id": post_id})

        return response