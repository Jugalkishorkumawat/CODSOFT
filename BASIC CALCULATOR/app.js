let displayValue = '0';
let operator = '';
let firstOperand = null;

function updateDisplay() {
    document.getElementById('display').textContent = displayValue;
}

function clearDisplay() {
    displayValue = '0';
    operator = '';
    firstOperand = null;
    updateDisplay();
}

function appendToDisplay(value) {
    if (displayValue === '0' || displayValue === 'Error') {
        displayValue = value;
    } else {
        displayValue += value;
    }
    updateDisplay();
}

function operate(nextOperator) {
    if (operator !== '') {
        calculate();
    }
    operator = nextOperator;
    firstOperand = parseFloat(displayValue);
    displayValue = '0';
}

function calculate() {
    const secondOperand = parseFloat(displayValue);
    if (operator === '+') {
        displayValue = (firstOperand + secondOperand).toString();
    } else if (operator === '-') {
        displayValue = (firstOperand - secondOperand).toString();
    } else if (operator === '*') {
        displayValue = (firstOperand * secondOperand).toString();
    } else if (operator === '/') {
        if (secondOperand !== 0) {
            displayValue = (firstOperand / secondOperand).toString();
        } else {
            displayValue = 'Error';
        }
    }
    operator = '';
    firstOperand = null;
    updateDisplay();
}

// Initial display update
updateDisplay();
