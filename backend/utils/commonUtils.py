from flask_restplus import Resource, reqparse
from pymongo import MongoClient


class CommonUtils(Resource):

    url = 'localhost'
    db_name = 'homepage'

    def openMongoDB(self, collection_name):
        """

        :param collection_name:
        :return:
        """
        client = MongoClient(self.url, 27017)
        db = client[self.db_name]
        collection = db[collection_name]
        return collection

    def parse_query(self, param_list):
        """
            파라미터를 받아서 디비에서 데이터 가져온다.
        """
        parser = reqparse.RequestParser()
        for param in param_list:
            parser.add_argument(param)
        return parser.parse_args()


