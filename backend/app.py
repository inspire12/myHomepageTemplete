from flask import Flask
from flask_cors import CORS
from flask_restplus import Api, Resource
from backend.board import ns as board

app = Flask(__name__)
CORS(app)
title = 'My Homepage'
api = Api(app=app, version='1.0', title=title, description=title)
api.add_namespace(board, '/board')


if __name__ == '__main__':
    app.run(debug=True)
