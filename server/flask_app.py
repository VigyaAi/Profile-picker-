from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
from resume_sorter import *


app = Flask(__name__)
CORS(app, support_credentials=True)

@app.route('/query')
@cross_origin(supports_credentials=True)
def hello_world():
    #Description will be read by the below command ✅
    description = request.args.get('description')
    sort_res = sort_resume(description)
    print(jsonify(sort_res))

    return jsonify(sort_res)
    



if __name__ == '__main__':
   app.run(port=5000)