# Predictive Maintenance System Using Machine Learning

## Project Overview

The Predictive Maintenance System is a machine learning-based web application that predicts whether an industrial machine is likely to fail based on its operating conditions.

The system analyzes machine sensor data such as temperature, rotational speed, torque, and tool wear to identify possible equipment failures before they occur.

The goal of this project is to help industries reduce unexpected machine breakdowns, improve maintenance scheduling, and increase equipment reliability.

---

# Features

* Machine failure prediction using Machine Learning
* Interactive web dashboard
* Real-time prediction through Flask API
* Failure probability percentage
* Risk visualization gauge
* Input validation
* Responsive user interface

---

# Machine Learning Model

The project uses an XGBoost classification model trained on industrial predictive maintenance data.

## Input Features

The model uses the following machine parameters:

| Feature             | Description                           |
| ------------------- | ------------------------------------- |
| Type                | Machine quality/type category         |
| Air Temperature     | Environmental temperature in Kelvin   |
| Process Temperature | Machine process temperature in Kelvin |
| Rotational Speed    | Machine speed in RPM                  |
| Torque              | Rotational force in Nm                |
| Tool Wear           | Tool usage time in minutes            |

---

## Prediction Output

The model provides two possible results:

```
0 → Machine Healthy

1 → Machine Failure Predicted
```

The system also calculates the probability of failure.

---

# Project Architecture

```
User
 |
 |
Web Interface (HTML/CSS)
 |
 |
JavaScript
 |
 |
Flask Backend API
 |
 |
Machine Learning Model
 |
 |
Prediction Result
```

---

# Project Folder Structure

```
Predictive-Maintenance-System/

│
├── model/
│   └── predictive_maintenance_model.pkl
│
├── static/
│   ├── style.css
│   └── script.js
│
├── templates/
│   └── index.html
│
├── app.py
│
├── requirements.txt
│
├── README.md
│
└── .gitignore
```

---

# File Description

## app.py

The main Flask backend application.

Responsibilities:

* Loads the trained machine learning model
* Receives user input
* Sends data to the ML model
* Returns prediction results

---

## model/

Contains the trained machine learning model.

```
predictive_maintenance_model.pkl
```

This file contains the saved XGBoost model used for predictions.

---

## templates/

Contains frontend HTML files.

### index.html

The main dashboard page where users enter machine parameters and receive predictions.

---

## static/

Contains frontend resources.

### style.css

Controls:

* Dashboard design
* Layout
* Animations
* Colors
* Responsive design

### script.js

Handles:

* User input collection
* Input validation
* Communication with Flask API
* Displaying prediction results
* Updating risk gauge

---

# Installation

Clone the repository:

```
git clone YOUR_GITHUB_REPOSITORY_LINK
```

Go into the project folder:

```
cd Predictive-Maintenance-System
```

Install required libraries:

```
pip install -r requirements.txt
```

---

# Running the Application

Start Flask server:

```
python app.py
```

Open your browser:

```
http://127.0.0.1:5000/
```

---

# How It Works

1. User enters machine operating values.
2. JavaScript validates the input.
3. Data is sent to Flask backend.
4. Flask sends the data to the trained ML model.
5. The model predicts machine condition.
6. The result and failure probability are displayed.

---

# Technologies Used

## Machine Learning

* Python
* XGBoost
* Scikit-learn
* Pandas
* NumPy

## Backend

* Flask

## Frontend

* HTML
* CSS
* JavaScript

## Deployment

* GitHub
* Cloud deployment platforms

---

# Future Improvements

Possible future upgrades:

* Connect with real IoT machine sensors
* Store prediction history in a database
* Add user authentication
* Add maintenance recommendation system
* Deploy as a cloud-based industrial monitoring platform

---

# Author

Machine Learning Predictive Maintenance Project
