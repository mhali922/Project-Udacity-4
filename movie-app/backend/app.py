from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)

# Configure CORS to accept requests from the frontend NLB
CORS(
    app,
    resources={r"/*": {"origins": [
        "http://aa3452b66f0bb4a5b9b95a0448-930219611.us-east-1.elb.amazonaws.com"
    ]}},
    supports_credentials=True,  # Only if you're using cookies or auth headers
    allow_headers="*",
    methods=["GET", "POST", "OPTIONS"]
)

@app.route('/movies', methods=['GET'])
def get_movies():
    return jsonify([
        {"id": 1, "title": "Inception", "year": 2010},
        {"id": 2, "title": "The Matrix", "year": 1999},
        {"id": 3, "title": "Interstellar", "year": 2014},
        {"id": 4, "title": "Talaash", "year": 2020}
    ])

# Optional OPTIONS handler if frontend complains
@app.route('/movies', methods=['OPTIONS'])
def movies_options():
    return '', 204

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3001)
