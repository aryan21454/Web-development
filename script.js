let expression = '';

function appendDigit(digit) {
    expression += digit;
    updateDisplay();
}

function appendOperator(operator) {
    if (expression.length > 0 && !isOperator(expression[expression.length - 1])) {
        expression += operator;
        updateDisplay();
    }
}

function clearDisplay() {
    expression = '';
    updateDisplay();
}

function calculate() {
    if (expression.length > 0 && !isOperator(expression[expression.length - 1])) {
        const result = eval(expression);
        expression = String(result);
        updateDisplay();
    }
}

function updateDisplay() {
    const display = document.getElementById('display');
    display.value = expression;
}

function isOperator(char) {
    return ['+', '-', '*', '/'].includes(char);
}
