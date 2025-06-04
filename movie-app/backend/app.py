from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)

CORS(
    app,
    resources={r"/*": {"origins": [
        (
            "http://a975675bb791e46ff87eb6489434000a-421142746."
            "us-east-1.elb.amazonaws.com"
        )
    ]}},
    supports_credentials=True,
    allow_headers="*",
    methods=["GET", "POST", "OPTIONS"]
)


@app.route('/movies', methods=['GET'])
def get_movies():
    return jsonify([
        {"id": 1, "title": "Inception", "year": 2010},
        {"id": 2, "title": "The Matrix", "year": 1999},
        {"id": 3, "title": "Interstellar", "year": 2014},
        {"id": 4, "title": "Talaash", "year": 2019}
    ])


@app.route('/movies', methods=['OPTIONS'])
def movies_options():
    return '', 204


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3001)
