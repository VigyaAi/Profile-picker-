from flask import Flask, request
from resume_sorter import *


app = Flask(__name__)

@app.route('/query')
def hello_world():
    #Description will be read by the below command ✅
    description = request.args.get('description')
    return sort_resume(description)

if __name__ == '__main__':
   app.run()