from flask import Flask, render_template, request, jsonify
import joblib
import numpy as np
import os


app = Flask(__name__)


model_path = os.path.join(
    "model",
    "predictive_maintenance_model.pkl"
)


model = joblib.load(model_path)
print("Model expects features:")
print(model.n_features_in_)



@app.route("/")
def home():

    return render_template("index.html")




@app.route("/predict", methods=["POST"])
def predict():

    try:

        data = request.get_json()

        print("Received Data:")
        print(data)



        required = [
            "Type",
            "AirTemperature",
            "ProcessTemperature",
            "RotationalSpeed",
            "Torque",
            "ToolWear"
        ]


        for item in required:

            if item not in data:

                return jsonify({

                    "error":
                    f"Missing field: {item}"

                })



        features = np.array([[

            float(data["Type"]),

            float(data["AirTemperature"]),

            float(data["ProcessTemperature"]),

            float(data["RotationalSpeed"]),

            float(data["Torque"]),

            float(data["ToolWear"])

        ]])


        print("Features sent to model:")
        print(features)



        prediction = model.predict(features)[0]


        probability = model.predict_proba(features)[0][1]



        return jsonify({

            "prediction": int(prediction),

            "probability":
            round(float(probability*100),2)

        })



    except Exception as e:


        print("ERROR:")
        print(e)


        return jsonify({

            "error":str(e)

        }),500





if __name__=="__main__":

    app.run(debug=True)