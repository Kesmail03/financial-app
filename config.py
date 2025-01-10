import os

class Config:
    API_KEY = os.getenv("API_KEY", "your-api-key")
    DEBUG = True