from flask_restplus import Namespace

from backend.utils.commonUtils import CommonUtils

ns = Namespace('user', description='유저 목록')


class UserUtils(CommonUtils):

    @staticmethod
    def get_index(collection, board_type):

        cursor = collection.find({'board_type': board_type}).sort(['index', 1])
        index = 0
        for row in cursor:
            index = row['index'] + 1
            break
        return index

    def insert_user(self, user_data):
        '''
        id, passwd 를 통해 로그인 토큰 발급
        :param user_data:
        :return:
        '''
        collection = self.openMongoDB(collection_name='user')

        found = collection.find_one({'_id':user_data['_id']})
        if found is None:
            collection.insert(user_data)
            return {'res': True}
        return {'res': False}

    def login(self, data):
        '''
        로그인 기능 구현
        :param data:
        :return:
        '''

        collection = self.openMongoDB(collection_name='user')

        cursor = collection.find_one({'_id': data.get('user_id')})

        if cursor is None:
            return {'res':False}

        if (cursor.get('passwd') != data.get('user_passwd')):
            return {'res': False}

        return {'res': True}



    def content_view(self, board_type, index):
        collection = self.openMongoDB('board')
        res = {}
        cursor = collection.find({'board_type': board_type, 'index': index})
        for row in cursor:
            res[row['_id']] = row

        cursor.close()
        return res

    def user_update(self, data):
        '''
        @TODO 인증 추가
        :param data:
        :return:
        '''
        collection = self.openMongoDB('board')
        cursor = collection.find_one({'_id':data['_id']})
        if cursor is None:
            # 글 추가
            data['index'] = self.get_index(collection, data['board_type'])
            data['_id'] = '{}_{}_{}'.format(data['board_type'], data['index'], data['depth'])
            response = collection.insert(data)
        else:
            # 글 수정
            response = collection.update({'_id':data['_id']},data, upsert=True)
        return response

    def delete_user(self, post_id):
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