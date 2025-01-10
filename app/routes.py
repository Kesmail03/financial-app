#defines the routes
from flask import Flask, jsonify, request
from .services import fetch_data

app = Flask(__name__)

@app.route('/data', methods=['GET'])
def get_data():
    data = fetch_data()
    return jsonify(data)