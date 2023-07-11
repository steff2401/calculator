
function addition(num1, num2) {
    return num1+num2;
}

function subtraction(num1, num2) {
    return num1-num2;
}

function multiplication(num1, num2) {
    return num1*num2;
}

function division(num1, num2) {
    return num1/num2;
}

let num1;
let operator;
let num2;

function operate(num1, operator, num2) {

    switch (operator) {
        
        case "+":
            return addition(num1, num2);
            break;

        case "-":
            return subtraction(num1, num2);
            break;

        case "x":
            return multiplication(num1, num2);
            break;

        case "/":
            return division(num1, num2);
            break;
    }
}

