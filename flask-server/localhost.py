from flask import Flask, jsonify
from flask_cors import CORS

app  = Flask(__name__)
CORS(app)
@app.route("/useEffectCall", methods = ['GET'])
def function():
    data = "Hello World"
    print(data)
    return jsonify({'data': data})
@app.route("/buttonCall", methods = ['GET'])
def members():
    data = "1000"
    print(data)
    return jsonify({'data': data})

if __name__ == "__main__":
    app.run(debug = True)