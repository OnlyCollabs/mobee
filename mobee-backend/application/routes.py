from application import app, db
from flask import request, Response
from flask_cors import cross_origin
from bson.objectid import ObjectId
import json

#########################################################################
@app.route("/movies", methods=["POST"])
@cross_origin()
def add_movie():
    try:
        if request.method == "POST":
            movie_name = request.form["movie_name"]
            emoji_array = request.form["emoji_array"]
            movie = {"movie_name":movie_name, "emoji_array":emoji_array}
            dbResponse = db.movies.insert_one(movie)
            print(dbResponse.inserted_id)
            return Response(
                response = json.dumps({
                    "message":"success", 
                    "id":f"{dbResponse.inserted_id}"
                }),
                status = 200,
                mimetype = "application/json"
            )
    except Exception as ex:
        print(ex)
##########################################################################
@app.route("/movies", methods=["GET"])
@cross_origin()
def get_movies():
    try:
        if request.method == "GET":
            data = list(db.movies.find())
            for movie in data:
                movie["_id"] = str(movie["_id"])
            print(data)
            return Response(
                response = json.dumps(data),
                status=500,
                mimetype="application/json"
            )
            
    except Exception as ex:
        print(ex)
        return Response(
            response = json.dumps({
                "message":"Can't read movies" 
            }),
            status = 500,
            mimetype = "application/json"
        )
##########################################################################