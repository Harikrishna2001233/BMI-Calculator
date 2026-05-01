
let textBoxHeightEl = document.getElementById("textbox-height");
let textBoxWeightEl = document.getElementById("textbox-weight");
let genderMale = document.getElementById("gender-male");
let genderFemale = document.getElementById("gender-female");
let resultEl = document.getElementById("result");
let bmiCategoryEl = document.getElementById("bmi-category");

let height;
let weight;
let gender;
let bmiCategory;

function bmiCalculation() {
    
    height = Number(textBoxHeightEl.value)/100;
    weight = Number(textBoxWeightEl.value);

    if(height <= 0 || weight <= 0) {
        resultEl.textContent = `Please enter valid height and weight!`;
        bmiCategoryEl.textContent = "";
        return;
    } else if(isNaN(height) || isNaN(weight)) {
        resultEl.textContent = `Please enter valid height and weight!`;
        bmiCategoryEl.textContent = "";
        return;
    }

    let bmi = weight / (height ** 2);
    bmi = Number(bmi.toFixed(4));
    
if(bmi < 18.5) {
    bmiCategory = `Underweight`;
} else if(bmi >=18.5 && bmi < 25) {
    bmiCategory = `Healthy`;
} else if(bmi >= 25 && bmi < 30) {
    bmiCategory = `Overweight`;
} else {
    bmiCategory = `Obese`;
}

if(genderMale.checked) {
    resultEl.textContent = `Result: Your BMI is: ${bmi}`;
} else if(genderFemale.checked) {
    resultEl.textContent = `Result: Your BMI is: ${bmi}`;
} else {
    resultEl.textContent = `Select a gender!`
    bmiCategoryEl.textContent = "";
    return;
}
    bmiCategoryEl.textContent = `BMI Category: ${bmiCategory}`;

    if(bmiCategory === 'Underweight') {
        bmiCategoryEl.style.color = 'blue';
    } else if(bmiCategory === 'Healthy') {
        bmiCategoryEl.style.color = 'green';
    } else if(bmiCategory === 'Overweight') {
        bmiCategoryEl.style.color = 'orange';
    } else if(bmiCategory === 'Obese') {
        bmiCategoryEl.style.color = 'red';
    }

}




