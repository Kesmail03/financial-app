#This is the configuration file that loads the api key
from dotenv import load_dotenv
import os

load_dotenv()
class Config:
    API_KEY = os.getenv("API_KEY")
    