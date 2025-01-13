#entry point of the program
from app import create_app
import os
from dotenv import load_dotenv

load_dotenv()

app = create_app()
if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000, debug=True)