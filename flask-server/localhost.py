from flask import Flask, jsonify
from flask_cors import CORS

app  = Flask(__name__)
CORS(app)
@app.route("/members", methods = ['GET'])
def members():
    data = "Hello World"
    print(data)
    return jsonify({'data': data})

if __name__ == "__main__":
    app.run(debug = True)