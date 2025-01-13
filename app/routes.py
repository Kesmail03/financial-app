#defines the routes
from flask import Flask, jsonify, render_template, request
from services import fetch_financial_data, filter_data_by_date, sort_data
from dotenv import load_dotenv
import os

load_dotenv()

app = Flask(__name__)

API_KEY = os.getenv("API_KEY")

@app.route('/api/data', methods=['GET'])
def get_data():
    data, status_code = fetch_financial_data()
    if not data:
        return jsonify({"error:" "Failed to fetch data"}), status_code


    #extracting the data
    start_year = request.args.get("start_year", type=int)
    end_year = request.args.get("end_year", type=int)
    sort_key = request.args.get("sort_key", "date")
    descending = request.args.get("descending", "true").lower() == "true"

    data = filter_data_by_date(data,start_year,end_year)
    data = sort_data(data, sort_key, descending)

    return jsonify(data)

if __name__ == "__main__":
    app.run(debug=True, port=5000)
