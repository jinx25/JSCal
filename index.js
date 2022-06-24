function add(num1, num2) {
    return num1 + num2;
}
function subtract(num1, num2) {
    return num1 - num2;
}
function multiply(num1, num2) {
    return num1 * num2;
}
function divide(num1, num2) {
    return num1 / num2;
}
function mod(num1, num2) {
    return num1 % num2;
}

function calculator() {
    var num1 = parseInt(prompt("Enter first number: "));
    var num2 = parseInt(prompt("Enter second number: "));
    var operator = prompt("Enter operator from the list below: +, -, *, /, %");
    var result;
    switch(operator) {
        case "+":
            result = add(num1, num2);
            break;
        case "-":
            result = subtract(num1, num2);
            break;
        case "*":
            result = multiply(num1, num2);
            break;
        case "/":
            result = divide(num1, num2);
            break;
        case "%":
            result = mod(num1, num2);
            break;
        default:
            alert("Invalid operator");
            break;
    }

    alert(result);

    
}
calculator()
