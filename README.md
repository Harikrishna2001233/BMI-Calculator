BMI Calculator Web App

A responsive web application that calculates Body Mass Index (BMI) based on user input (height and weight). The app categorizes BMI results and displays them with color-coded feedback for better user understanding.

---

Features

* Input height (cm) and weight (kg)
* Calculates BMI instantly
* Displays BMI category:

  * Underweight
  * Healthy
  * Overweight
  * Obese
* Color-coded category output
* Input validation for incorrect values
* Simple and clean user interface

---

Technologies Used

* HTML5
* CSS3
* JavaScript (DOM Manipulation)

---

Live Demo

https://bmi-calculator-harikrishna.netlify.app/

---

Project Structure

```id="a9d2ks"
project-folder/
│── index.html
│── style.css
│── index.js
```

---

How It Works

* User enters height (in cm) and weight (in kg)
* Height is converted into meters
* BMI is calculated using formula:

```id="p0s9dl"
BMI = weight / (height × height)
```

* Result is rounded to 4 decimal places

* Based on BMI value, category is determined:

  * < 18.5 → Underweight
  * 18.5 – 24.9 → Healthy
  * 25 – 29.9 → Overweight
  * ≥ 30 → Obese

* Result and category are displayed dynamically using JavaScript

---

Future Improvements

* Add unit conversion (feet/inches & pounds)
* Improve accessibility (labels, ARIA support)
* Add better error messages
* Enhance UI/UX with animations

---



Author

**Harikrishna**



⭐ If you like this project, feel free to star the repository!
