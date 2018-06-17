from backend.utils.commonUtils import CommonUtils


class CommentsUtils(CommonUtils):

    '''
    해당 게시글에 달린 모든 댓글
    '''
    def commentsView(self):
        connect, collection = self.openMongoDB()
        cursor = collection['comments'].find()
        for row in cursor:
            print(row)

        cursor.close()

