from flask import Flask, request, jsonify
from flask_cors import CORS
import re

app = Flask(__name__)
CORS(app)

@app.route("/")
def home():
    return jsonify({"message": "SnapStudy AI Backend is running!"})

@app.route("/summarize", methods=["POST"])
def summarize():
    data = request.get_json()
    text = data.get("text", "").strip()

    if not text:
        return jsonify({"error": "Please enter study material"}), 400

    sentences = re.split(r'(?<=[.!?])\s+', text)
    summary = " ".join(sentences[:3])

    return jsonify({"summary": summary})

if __name__ == "__main__":
    app.run(debug=True)
