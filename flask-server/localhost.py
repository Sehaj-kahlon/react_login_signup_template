from flask import Flask, jsonify, request
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
@app.route("/postCall", methods = ['POST'])
def SUM():
    
    try:
        data = request.get_json()
        numberA = data.get('numberA')
        numberB = data.get('numberB')
        result  =numberA + numberB
        return jsonify({'result': result}), 200
    except Exception as e:  
        return jsonify({'error': str(e)}), 400
    

if __name__ == "__main__":
    app.run(debug = True)