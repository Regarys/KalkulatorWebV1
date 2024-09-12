//tampilan doang
var calculatorButtons = document.querySelectorAll(
  ".item:not(#clear):not(#backspace):not(#result)"
);
var backspaceButton = document.getElementById("backspace");
var clearButton = document.getElementById("clear");

handleButtonClick = function () {
  var buttonText = this.textContent;
  var result = document.querySelector(".showresult");
  result.innerHTML += buttonText;
};

backspaceButtonClick = function () {
  var result = document.querySelector(".showresult");
  result.innerHTML = result.innerHTML.slice(0, -1);
};

clearButtonClick = function () {
  var result = document.querySelector(".showresult");
  result.innerHTML = "";
};

calculatorButtons.forEach(function (button) {
  button.addEventListener("click", handleButtonClick);
});
backspaceButton.addEventListener("click", backspaceButtonClick);
clearButton.addEventListener("click", clearButtonClick);

//belakang proses math
var minButton = document.getElementById("minus");
var addButton = document.getElementById("plus");
var multyButton = document.getElementById("multiply");
var divideButton = document.getElementById("divide");
var persentageButton = document.getElementById("persentage");
var resultButton = document.getElementById("result");
var calculatorValues = [];

addingButtonClick = function () {
  var result = document.querySelector(".showresult");
  var resultText = result.textContent.trim();

  var resultNumber = parseInt(resultText);

  console.log(resultNumber);
  if (calculatorValues.length < 2) {
    calculatorValues.push(resultNumber);
  }
  resultNumber = 0;
  result.innerHTML = "";
  console.log(calculatorValues);

  resultButtonCase = "AddOperan";
};

minusButtonClick = function () {
  var result = document.querySelector(".showresult");
  var resultText = result.textContent.trim();

  var resultNumber = parseInt(resultText);

  console.log(resultNumber);
  if (calculatorValues.length < 2) {
    calculatorValues.push(resultNumber);
  }
  resultNumber = 0;
  result.innerHTML = "";
  console.log(calculatorValues);

  resultButtonCase = "minOperan";
};

multyButtonClick = function () {
  var result = document.querySelector(".showresult");
  var resultText = result.textContent.trim();

  var resultNumber = parseInt(resultText);

  console.log(resultNumber);
  if (calculatorValues.length < 2) {
    calculatorValues.push(resultNumber);
  }
  resultNumber = 0;
  result.innerHTML = "";
  console.log(calculatorValues);

  resultButtonCase = "multyOperan";
};

divideButtonClick = function () {
  var result = document.querySelector(".showresult");
  var resultText = result.textContent.trim();

  var resultNumber = parseInt(resultText);

  console.log(resultNumber);
  if (calculatorValues.length < 2) {
    calculatorValues.push(resultNumber);
  }
  resultNumber = 0;
  result.innerHTML = "";
  console.log(calculatorValues);

  resultButtonCase = "divideOperan";
};

persentageButtonClick = function () {
  var result = document.querySelector(".showresult");
  var resultText = result.textContent.trim();

  var resultNumber = parseInt(resultText);

  console.log(resultNumber);
  if (calculatorValues.length < 2) {
    calculatorValues.push(resultNumber);
  }
  
  resultNumberPersentage = resultNumber*resultNumber/100;
  calculatorValues.push(resultNumberPersentage)
};

resultButtonClick = function () {
  switch (resultButtonCase) {
    case "AddOperan":
      var result = document.querySelector(".showresult");
      addButton.click();
      var resultNumber = calculatorValues[0] + calculatorValues[1];
      var resultText = resultNumber;
      result.innerHTML += resultText;
      calculatorValues.push(resultNumber);
      calculatorValues.length = [];
      calculatorValues.push(resultNumber);
      console.log(calculatorValues);
      break;
    case "minOperan":
      var result = document.querySelector(".showresult");
      minButton.click();
      var resultNumber = calculatorValues[0] - calculatorValues[1];
      var resultText = resultNumber;
      result.innerHTML += resultText;
      calculatorValues.push(resultNumber);
      calculatorValues.length = [];
      calculatorValues.push(resultNumber);
      console.log(calculatorValues);
      break;
    case "multyOperan":
      var result = document.querySelector(".showresult");
      multyButton.click();
      var resultNumber = calculatorValues[0] * calculatorValues[1];
      var resultText = resultNumber;
      result.innerHTML += resultText;
      calculatorValues.push(resultNumber);
      calculatorValues.length = [];
      calculatorValues.push(resultNumber);
      console.log(calculatorValues);
      break;
    case "divideOperan":
      var result = document.querySelector(".showresult");
      divideButton.click();
      var resultNumber = calculatorValues[0] / calculatorValues[1];
      var resultText = resultNumber;
      result.innerHTML += resultText;
      calculatorValues.push(resultNumber);
      calculatorValues.length = [];
      calculatorValues.push(resultNumber);
      console.log(calculatorValues);
      break;
  }
};

divideButton.addEventListener("click", divideButtonClick);
multyButton.addEventListener("click", multyButtonClick);
minButton.addEventListener("click", minusButtonClick);
addButton.addEventListener("click", addingButtonClick);
resultButton.addEventListener("click", resultButtonClick);
persentageButton.addEventListener("click", persentageButtonClick);
