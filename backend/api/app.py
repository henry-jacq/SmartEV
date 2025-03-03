from flask import Flask, request, jsonify
import pandas as pd
import pickle
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS

import joblib

loaded_model = joblib.load("random_forest_model.pkl")  # Ensure it's a trained model


# Dummy dataset to calculate median kwhTotal
hourly_usage = pd.DataFrame({
    'kwhTotal': [10.5, 12.3, 15.2, 11.0, 14.7, 13.5, 12.0]  # Sample values
})

def predict_peak_hours(date_input):
    try:
        # Convert input date (DD-MM) to integers
        day, month = map(int, date_input.split('-'))

        # Generate next day's hour-wise data
        next_day_data = pd.DataFrame({
            'hour': list(range(24)),  # 0 to 23 hours
            'day': [day + 1] * 24,  # Next day's date
            'month': [month] * 24,
            'kwhTotal': [hourly_usage['kwhTotal'].median()] * 24  # Using median value
        })

        # Ensure column order is the same as during training
        next_day_data = next_day_data[['hour', 'day', 'month', 'kwhTotal']]

        # Predict peak hours
        predictions = loaded_model.predict(next_day_data)

        # Convert predictions to list of peak hours
        peak_hours = next_day_data.loc[predictions == 1, 'hour'].tolist()
        
        return peak_hours
    
    except Exception as e:
        return f"Error in prediction: {str(e)}"

@app.route('/peakhours', methods=['POST'])
def predict():
    try:
        data = request.json
        date_input = data.get("date")  # Expecting "DD-MM" format

        if not date_input:
            return jsonify({"error": "Missing date input"}), 400
        
        peak_hours = predict_peak_hours(date_input)
        print(peak_hours)
        return jsonify({"predicted_peak_hours": peak_hours})
    
    except Exception as e:
        return jsonify({"error": str(e)}), 400

if __name__ == '__main__':
    app.run(debug=True, port=5001)
