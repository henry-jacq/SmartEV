from flask import Flask, request, jsonify
import pandas as pd
import pickle
from flask_cors import CORS
import joblib

app = Flask(__name__)
CORS(app)  # Enable CORS

# Load models
loaded_model = joblib.load("random_forest_model.pkl")  
with open('grid_model.pkl', 'rb') as file:
    grid_model = pickle.load(file)

# Dummy dataset to calculate median kwhTotal
hourly_usage = pd.DataFrame({
    'kwhTotal': [10.5, 12.3, 15.2, 11.0, 14.7, 13.5, 12.0]  # Sample values
})

# Load encoder and scaler (Ensure these files exist)
encoder = joblib.load("encoder.pkl")
scaler = joblib.load("scaler.pkl")

def check_redirection(station_data):
    try:
        # Convert dictionary to DataFrame
        input_data = pd.DataFrame([station_data])

        # Apply label encoding
        input_data['charging_type'] = encoder.transform(input_data['charging_type'])

        # Scale the input
        input_scaled = scaler.transform(input_data)

        # Make prediction
        prediction = grid_model.predict(input_scaled)[0]

        # Decision logic
        if prediction == "Poor":
            return {"message": "Redirect EV to the next station!"}
        else:
            return {"message": "Charging is stable."}
    except Exception as e:
        return {"error": str(e)}

@app.route('/grid', methods=['POST'])
def grid():
    try:
        data = request.json
        result = check_redirection(data)
        return jsonify(result)
    except Exception as e:
        return jsonify({"error": str(e)}), 400

def predict_peak_hours(date_input):
    try:
        day, month = map(int, date_input.split('-'))
        next_day_data = pd.DataFrame({
            'hour': list(range(24)),
            'day': [day + 1] * 24,
            'month': [month] * 24,
            'kwhTotal': [hourly_usage['kwhTotal'].median()] * 24
        })

        predictions = loaded_model.predict(next_day_data)
        peak_hours = next_day_data.loc[predictions == 1, 'hour'].tolist()
        return peak_hours
    except Exception as e:
        return f"Error in prediction: {str(e)}"

@app.route('/peakhours', methods=['POST'])
def predict():
    try:
        data = request.json
        date_input = data.get("date")

        if not date_input:
            return jsonify({"error": "Missing date input"}), 400
        
        peak_hours = predict_peak_hours(date_input)
        return jsonify({"predicted_peak_hours": peak_hours})
    
    except Exception as e:
        return jsonify({"error": str(e)}), 400

if __name__ == '__main__':
    app.run(debug=True, port=5001)
