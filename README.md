
# **Smart Grid Stability and Charging Stations Demand Prediction System**

## **Overview**

This project consists of two main modules aimed at optimizing electric vehicle (EV) charging stations' power management:

1.  **Smart Grid Stability**: Predicts whether a charging station will remain stable when multiple vehicles are using fast charging, and redirects vehicles to other stations if instability is predicted.
2.  **Identification of Peak Hours**: Predicts upcoming peak hours to help power providers prepare for high demand and ensure sufficient power supply.

## **Modules**

### **1. Smart Grid Stability**

#### **Objective**

Predict the stability of charging stations under high load conditions, especially when multiple EVs are charging simultaneously. If instability is predicted, incoming EVs are redirected to the next available station.

#### **How it Works**

-   Trained a **Random Forest Classifier** with input features such as charging power, power demand, and power loss.
-   The model predicts whether the station is stable or unstable based on these features.
-   If instability is detected, incoming EVs are redirected to other stations.

### **2. Identification of Peak Hours**

#### **Objective**

Predict the upcoming peak hours to help power providers prepare in advance and ensure sufficient power supply during high demand periods.

#### **How it Works**

-   Trained an **XGBoost model** using features like date, month, hour, and total kWh consumed at each hour.
-   Users can input a date to predict the peak hours for the following day.
-   Helps power providers plan their supply to meet demand during predicted peak hours.

## **Features**

-   **Smart Grid Stability**:
    -   Predicts whether a charging station is stable or unstable.
    -   Redirection of EVs to other stations in case of instability.
-   **Peak Hour Identification**:
    -   Predicts peak hours based on historical data.
    -   Helps power providers plan for peak demand and avoid supply shortages.

## **Tech Stack**

-   **Programming Language**: Python
-   **Libraries**:
    -   Scikit-learn (for Random Forest)
    -   XGBoost
    -   Pandas (for data processing)
    -   Numpy
    -   Matplotlib/Seaborn (for visualization)
-   **Tools**:
    -   Jupyter Notebooks (for experimentation)

## **Installation**

### **Clone the repository**

```bash
git clone https://github.com/henry-jacq/SmartEV.git
cd SmartEV
```

### **Install the Dependencies**

```bash
pip install -r requirements.txt

```

## **Usage**

### **Smart Grid Stability**

1.  Input the charging power, power demand, and power loss data for a station.
2.  The model predicts whether the station will remain stable or if redirection is required.
3.  If the station is unstable, the system provides alternative stations for redirection.


### **Peak Hour Identification**

1.  Input the desired date to predict the peak hours for the next day.
2.  The model predicts the times of day when the power demand will be highest.


## **Data**

The models are trained using historical data from charging stations and power consumption logs. The dataset includes:

-   Charging power
-   Power demand
-   Power loss
-   Voltage levels
-   Total kWh consumption grouped by date, month, and hour

## **Model Training**

### **Smart Grid Stability Model**

-   **Model**: Random Forest Classifier
-   **Features**: Charging power, power demand, power loss, voltage levels
-   **Output**: Station stability (Stable/Unstable)

### **Peak Hour Identification Model**

-   **Model**: XGBoost
-   **Features**: Date, month, hour, total kWh consumed
-   **Output**: Predicted peak hours for the next day
