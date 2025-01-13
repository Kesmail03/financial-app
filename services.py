#handles the api logic
import requests
import os

def fetch_financial_data(symbol="AAPL"):
    API_KEY = os.getenv("API_KEY")
    api_url = f"https://financialmodelingprep.com/api/v3/income-statement/AAPL?apikey={API_KEY}"
    response = requests.get(api_url)

    if response.status_code != 200:
        return None, response.status_code
    
    return response.json(), 200

def filter_data_by_date(data, start_year, end_year):
    if start_year and end_year:
        data = [item for item in data if start_year <= int(item["date"][:4]) <= end_year]
    return data

def sort_data(data, sort_key, descending):
    valid_sort_keys = {"date", "revenue", "netIncome", "grossProfit", "operatingIncome"}
    if sort_key in valid_sort_keys:
        data = sorted(data, key=lambda x: x.get(sort_key, 0), reverse=descending)
    return data

