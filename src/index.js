import "./styles.css";

var inputX = document.getElementById("varX");
inputX.onchange = validateInput;

var inputY = document.getElementById("varY");
inputY.onchange = validateInput;

var inputZ = document.getElementById("varZ");
inputZ.onchange = validateInput;

// $('.variable').on('change', validateInput);

function validateForm() {
  var inputX = document.getElementById("varX");
  var inputY = document.getElementById("varY");
  var inputZ = document.getElementById("varZ");

  var validInputs = 0;

  if (valueIsValid(inputX.value)) {
    validInputs = validInputs + 1;
  }

  if (valueIsValid(inputY.value)) {
    validInputs = validInputs + 1;
  }

  if (valueIsValid(inputZ.value)) {
    validInputs = validInputs + 1;
  }

  return validInputs === 2;
}

function validateInput(e) {
  var selectedInput = e.target;

  var value = selectedInput.value;

  if (valueIsValid(value)) {
    selectedInput.style.backgroundColor = "green";
  } else {
    selectedInput.style.borderColor = "red";
    selectedInput.style.backgroundColor = "white";
  }

  var btn = document.getElementById("solveButton");
  btn.disabled = !validateForm();
}

function valueIsValid(val) {
  return val !== "" && isNaN(val * 1) === false;
}
