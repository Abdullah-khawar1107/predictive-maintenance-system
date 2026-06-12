async function predictFailure(){

    let fields = [
        "Type",
        "AirTemperature",
        "ProcessTemperature",
        "RotationalSpeed",
        "Torque",
        "ToolWear"
    ];


    let data = {};


    for(let field of fields){

        let element = document.getElementById(field);

        let value = element.value.trim();


        if(value === ""){

            document.getElementById("result").innerHTML = `
            <div class="failure">
                ⚠ Please fill all fields before prediction.
            </div>
            `;

            return;
        }


        data[field] = value;

    }



    try{


        let response = await fetch("/predict",{

            method:"POST",

            headers:{
                "Content-Type":"application/json"
            },

            body:JSON.stringify(data)

        });



        let result = await response.json();



        if(result.error){

            document.getElementById("result").innerHTML=`

            <div class="failure">
                Error: ${result.error}
            </div>

            `;

            return;
        }



        updateGauge(result.probability);



        if(result.prediction === 1){


            document.getElementById("result").innerHTML=`

            <div class="failure">

            <h2>⚠ Machine Failure Predicted</h2>

            <p>
            Failure Probability:
            ${result.probability}%
            </p>

            </div>

            `;


        }

        else{


            document.getElementById("result").innerHTML=`

            <div class="success">

            <h2>✅ Machine Healthy</h2>

            <p>
            Failure Probability:
            ${result.probability}%
            </p>

            </div>

            `;


        }



    }

    catch(error){


        document.getElementById("result").innerHTML=`

        <div class="failure">
        Server Error: ${error}
        </div>

        `;


    }


}





// =================================
// INPUT EFFECTS + ENTER NAVIGATION
// =================================


const fieldsOrder = [

    "Type",
    "AirTemperature",
    "ProcessTemperature",
    "RotationalSpeed",
    "Torque",
    "ToolWear"

];




fieldsOrder.forEach((id,index)=>{


    let input=document.getElementById(id);



    // Focus animation

    input.addEventListener("focus",()=>{

        input.classList.add("input-active");

    });




    // Remove focus animation + validation

    input.addEventListener("blur",()=>{

        input.classList.remove("input-active");



        if(input.value===""){

            input.classList.add("input-invalid");
            input.classList.remove("input-valid");

        }

        else{

            input.classList.remove("input-invalid");
            input.classList.add("input-valid");

        }


    });





    // ENTER KEY MOVE TO NEXT INPUT

    input.addEventListener("keydown",(event)=>{


        if(event.key==="Enter"){


            event.preventDefault();



            let nextField = fieldsOrder[index+1];



            if(nextField){


                document.getElementById(nextField).focus();


            }

            else{


                document.querySelector("button").focus();


            }


        }


    });



});







function updateGauge(percent){


    let circle=document.querySelector(".gauge-fill");

    let text=document.getElementById("riskPercent");



    let radius=50;

    let circumference=2*Math.PI*radius;



    let offset =
    circumference-(percent/100)*circumference;



    circle.style.strokeDasharray=circumference;

    circle.style.strokeDashoffset=offset;



    text.innerText =
    percent+"%";


}