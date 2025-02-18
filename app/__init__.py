#initialize the flask app
from flask import Flask

def create_app():
    app = Flask(__name__)
    from .routes import routes
    app.register_blueprint(routes)
   
    return app

app = create_app()