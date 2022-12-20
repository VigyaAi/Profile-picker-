from flask import Flask, request
from resume_sorter import *


app = Flask(__name__)

@app.route('/query-ex')
def hello_world():
    discription = request.args.get('discription')
    return sort_resume(discription)

if __name__ == '__main__':
   app.run()