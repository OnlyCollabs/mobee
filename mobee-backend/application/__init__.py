from flask import Flask
from flask_pymongo import PyMongo
from dotenv import load_dotenv
import os

load_dotenv()

CLUSTER_ID = os.getenv("CLUSTER_ID")
CLUSTER_KEY = os.getenv("CLUSTER_KEY")

app = Flask(__name__)
app.config["SECRET_KEY"] = 'fc6078a80b0d61fd14a076cf2e77153c7fd909b1'
app.config["MONGO_URI"] = f"mongodb+srv://{CLUSTER_ID}:{CLUSTER_KEY}@cluster0.sb9cu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

mongodb_client = PyMongo(app)
db = mongodb_client.db

from application import routes