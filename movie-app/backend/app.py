from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/movies')
def get_movies():
    return jsonify([
        {"id": 1, "title": "Inception"},
        {"id": 2, "title": "The Matrix"},
        {"id": 3, "title": "Interstellar"},
        {"id": 4, "title": "Talaash"}
    ])

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3001)
