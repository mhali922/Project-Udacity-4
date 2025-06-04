from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)

CORS(
    app,
    origins=[
        "http://aa3452b66f0bb4a5b9a809d9b95a0448-930219611.us-east-1.elb.amazonaws.com"
    ]
)


@app.route('/movies')
def get_movies():
    return jsonify([
        {"id": 1, "title": "Inception", "year": 2010},
        {"id": 2, "title": "The Matrix", "year": 1999},
        {"id": 3, "title": "Interstellar", "year": 2014},
        {"id": 4, "title": "Talaash", "year": 2012}
    ])


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3001)
