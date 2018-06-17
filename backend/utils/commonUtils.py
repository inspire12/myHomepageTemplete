from flask_restplus import Resource, reqparse
from pymongo import MongoClient


class CommonUtils(Resource):

    def openMongoDB(self, collection_name):
        '''

        :return:
        '''
        db_name = 'homepage'
        client = MongoClient('localhost', 27017)
        db = client['homepage']
        collection = db[collection_name]
        return collection

    def parse_query(self, param_list):
        '''
                파라미터를 받아서 디비에서 데이터 가져온다.
               '''
        parser = reqparse.RequestParser()
        for param in param_list:
            parser.add_argument(param)
        return parser.parse_args()


