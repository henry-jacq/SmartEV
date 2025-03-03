from flask import Flask, request, jsonify
import pandas as pd
import joblib
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS

# Load Pre-trained Model
model = joblib.load("xgboost_peak_model.pkl")  # Ensure correct format

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json  # Expecting JSON input
    try:
        # Extract input features
        hour = int(data.get("hour"))
        day = int(data.get("day"))
        month = int(data.get("month"))
        kwhTotal = float(data.get("kwhTotal"))  # Ensure it's a float

        # Create DataFrame for prediction
        input_data = pd.DataFrame([[hour, day, month, kwhTotal]], 
                                  columns=['hour', 'day', 'month', 'kwhTotal'])

        # Make prediction
        prediction = model.predict(input_data)[0]  # Get first prediction

        return jsonify({"prediction": int(prediction)})  # Convert to int for JSON response
    except Exception as e:
        return jsonify({"error": str(e)}), 400

if __name__ == '__main__':
    app.run(debug=True, port=5001)
