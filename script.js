function calculateBMI() {
    var weight = document.getElementById('weight').value;
    var height = document.getElementById('height').value;
    
    if (weight > 0 && height > 0) {
        let heightInMeters = height / 100; // convert cm to meters
        let bmi = weight / (heightInMeters * heightInMeters);
        displayResult(bmi);
    } else {
        document.getElementById('result').innerHTML = "Please enter valid values for weight and height.";
    }
}

function displayResult(bmi) {
    var resultText = "";
    if (bmi < 18.5) {
        resultText = "Underweight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        resultText = "Normal weight";
    } else if (bmi >= 25 && bmi <= 29.9) {
        resultText = "Overweight";
    } else {
        resultText = "Obesity";
    }
    document.getElementById('result').innerHTML = `Your BMI is ${bmi.toFixed(2)} (${resultText}).`;
}
